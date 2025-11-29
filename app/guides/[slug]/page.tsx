import { getAllGuides, getGuideData } from '@/lib/guides';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import JsonLd, { 
  generateArticleSchema, 
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateFAQSchema,
} from '@/app/components/common/JsonLd';
import { createMdxComponents } from '@/app/components/mdx/CustomComponents';
import FAQ from '@/app/components/blocks/FAQ';
import { generateGuideDescription, generateStandardMetadata } from '@/lib/metadata-utils';
import { getAuthorBySlug, getRelevantAuthorSpecialization, getReviewerExpertise } from '@/lib/authors';
import Link from 'next/link';
import { ClockIcon } from '@heroicons/react/24/outline';
import GlossaryCTA from '@/app/components/blocks/GlossaryCTA';
import { isInGlossarySection, hasGlossaryCTABeenInserted } from '@/app/components/mdx/glossaryState';
import { parseTableOfContents } from '@/lib/toc-parser';
import { setTocItems, setCategory, resetTocState } from '@/app/components/mdx/tocState';

export default function GuidePage({ params: { slug } }: { params: { slug: string } }) {
  const guide = getGuideData(slug);

  if (!guide) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
  const pageUrl = `${baseUrl}/guides/${slug}`;
  const ogImageUrl = `${baseUrl}/api/og/guide/${slug}`;

  // Get author and reviewer from frontmatter
  const authorSlug = guide.frontmatter.author;
  const reviewerSlug = guide.frontmatter.reviewer;
  const author = authorSlug ? getAuthorBySlug(authorSlug) : null;
  const reviewer = reviewerSlug ? getAuthorBySlug(reviewerSlug) : null;
  
  // Get relevant specializations for EEAT
  const authorExpertise = author 
    ? getRelevantAuthorSpecialization(
        author,
        guide.frontmatter.category,
        guide.frontmatter.title,
        guide.frontmatter.authorExpertise // Optional custom expertise from frontmatter
      )
    : null;
  const reviewerExpertise = reviewer ? getReviewerExpertise(reviewer) : null;

  // Generate schemas
  const schemas = [];

  // Breadcrumb schema
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Guides', url: `${baseUrl}/guides` },
    { name: guide.frontmatter.title, url: pageUrl },
  ];
  schemas.push(generateBreadcrumbSchema(breadcrumbItems));

  // Generate SEO-optimized description for schema
  const seoDescription = generateGuideDescription(
    guide.frontmatter.title,
    guide.frontmatter.excerpt,
    120,
    155
  );

  // Article schema with Person author for EEAT
  const articleSchema = generateArticleSchema({
    title: guide.frontmatter.title,
    description: seoDescription,
    url: pageUrl,
    datePublished: guide.frontmatter.datePublished,
    dateModified: guide.frontmatter.dateModified,
    author: author
      ? {
          name: author.name,
          url: `${baseUrl}/authors/${author.slug}`,
          type: 'Person' as const,
        }
      : undefined,
    reviewer: reviewer
      ? {
          name: reviewer.name,
          url: `${baseUrl}/authors/${reviewer.slug}`,
          type: 'Person' as const,
        }
      : undefined,
    image: ogImageUrl,
  });
  schemas.push(articleSchema);

  // HowTo schema - for step-by-step guides
  // Check if guide is a "How to" guide or has steps defined
  const isHowToGuide = guide.frontmatter.title?.toLowerCase().startsWith('how to') || 
                       guide.frontmatter.type === 'howto' ||
                       guide.frontmatter.steps;

  if (isHowToGuide && guide.frontmatter.steps && Array.isArray(guide.frontmatter.steps)) {
    schemas.push(generateHowToSchema({
      name: guide.frontmatter.title,
      description: seoDescription,
      steps: guide.frontmatter.steps.map((step: any, index: number) => ({
        name: step.name || step.title || `Step ${index + 1}`,
        text: step.text || step.description || step.content || '',
        image: step.image,
        url: step.url,
      })),
      totalTime: guide.frontmatter.totalTime,
      estimatedCost: guide.frontmatter.estimatedCost,
    }));
  }

  // FAQ schema - if FAQs are provided in frontmatter
  if (guide.frontmatter.faqs && Array.isArray(guide.frontmatter.faqs) && guide.frontmatter.faqs.length > 0) {
    schemas.push(generateFAQSchema(guide.frontmatter.faqs));
  }

  // Parse table of contents from content
  resetTocState(); // Reset state before parsing
  const tocItems = parseTableOfContents(guide.content);
  setTocItems(tocItems);
  setCategory(guide.frontmatter.category);

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <div className="relative isolate bg-gradient-to-b from-emerald-600 to-emerald-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold leading-7 text-emerald-300">{guide.frontmatter.category}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">{guide.frontmatter.title}</h1>
            <p className="mt-6 text-lg leading-8 text-emerald-100">{guide.frontmatter.excerpt}</p>
          </div>
          
          {/* Compact Author Info in Hero */}
          {(author || reviewer || guide.frontmatter.datePublished) && (
            <div className="mt-8 pt-8 border-t border-emerald-400/20">
              <div className="flex flex-col items-center gap-3 text-sm text-emerald-100">
                {author && (
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-200">By</span>
                    <Link
                      href={`/authors/${author.slug}`}
                      className="font-semibold text-white hover:text-emerald-200 underline transition-colors"
                    >
                      {author.name}
                    </Link>
                    {authorExpertise && (
                      <>
                        <span className="text-emerald-300/60">•</span>
                        <span className="text-emerald-200/90 italic text-xs">
                          Specializes in {authorExpertise.replace(/^["']|["']$/g, '')}
                        </span>
                      </>
                    )}
                  </div>
                )}
                {reviewer && (
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-200">Reviewed by</span>
                    <Link
                      href={`/authors/${reviewer.slug}`}
                      className="font-semibold text-white hover:text-emerald-200 underline transition-colors"
                    >
                      {reviewer.name}
                    </Link>
                    {reviewerExpertise && (
                      <>
                        <span className="text-emerald-300/60">•</span>
                        <span className="text-emerald-200/90 italic text-xs">
                          Specializes in {reviewerExpertise.replace(/^["']|["']$/g, '')}
                        </span>
                      </>
                    )}
                  </div>
                )}
                {guide.frontmatter.datePublished && (
                  <div className="flex items-center gap-1.5">
                    <ClockIcon className="h-4 w-4 text-emerald-200/80" />
                    <span className="text-emerald-200/80">
                      {new Date(guide.frontmatter.datePublished).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    {guide.frontmatter.dateModified && guide.frontmatter.dateModified !== guide.frontmatter.datePublished && (
                      <>
                        <span className="text-emerald-200/60">•</span>
                        <span className="text-emerald-200/60">
                          Updated {new Date(guide.frontmatter.dateModified).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white">
        <div className="prose prose-lg max-w-4xl mx-auto py-16 px-6 lg:px-8 prose-table:my-0 prose-table:w-full">
          <MDXRemote 
            source={guide.content} 
            components={createMdxComponents(guide.frontmatter.category, author, reviewer)}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [],
              },
            }}
          />
          {/* Show CTA if glossary section exists and is at the end of content */}
          {(() => {
            // Check if content has glossary section
            const glossaryMatch = guide.content.match(/##\s+.*[Gg]lossary[^\n]*|##\s+.*[Tt]erms\s+and\s+[Aa]bbreviations[^\n]*/);
            if (glossaryMatch) {
              const glossaryIndex = glossaryMatch.index || 0;
              const contentAfterGlossary = guide.content.substring(glossaryIndex + glossaryMatch[0].length);
              // Check if there's another h2 after glossary (if not, glossary is at the end)
              const hasNextSection = /^##\s+[^#]/.test(contentAfterGlossary.trim());
              // Also check if we're still in glossary state (meaning CTA wasn't inserted yet)
              if (!hasNextSection && isInGlossarySection() && !hasGlossaryCTABeenInserted()) {
                return <GlossaryCTA />;
              }
            }
            return null;
          })()}
        </div>
      </div>

      {/* FAQ Section */}
      {guide.frontmatter.faqs && Array.isArray(guide.frontmatter.faqs) && guide.frontmatter.faqs.length > 0 && (
        <FAQ
          title="Frequently Asked Questions"
          description="Common questions about the Nifty 50 index and investing"
          faqs={guide.frontmatter.faqs.map((faq: any) => ({
            question: faq.question || faq.name,
            answer: faq.answer || faq.text,
            category: faq.category || 'General',
          }))}
          background="gray"
          articleCategory={guide.frontmatter.category}
        />
      )}
    </>
  );
}

export async function generateStaticParams() {
  try {
    const guides = getAllGuides();
    return guides.map(guide => ({
      slug: guide.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for guides:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = getGuideData(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
  const pageUrl = `${baseUrl}/guides/${params.slug}`;
  const ogImageUrl = `${baseUrl}/api/og/guide/${params.slug}`;
  
  if (!guide) {
    const standardMetadata = generateStandardMetadata({
      title: 'Guide Not Found - How to Invest in NIFTY 50',
      description: 'The requested guide could not be found. Explore our comprehensive guides on Nifty 50 investing, broker selection, and portfolio management.',
      url: pageUrl,
      pagePath: `/guides/${params.slug}`,
    });
    
    return {
      title: 'Guide Not Found - How to Invest in NIFTY 50',
      description: 'The requested guide could not be found. Explore our comprehensive guides on Nifty 50 investing, broker selection, and portfolio management.',
      ...standardMetadata,
    };
  }

  // Generate SEO-optimized description
  const description = generateGuideDescription(
    guide.frontmatter.title,
    guide.frontmatter.excerpt,
    120,
    155
  );

  const standardMetadata = generateStandardMetadata({
    title: guide.frontmatter.title,
    description,
    url: pageUrl,
    pagePath: `/guides/${params.slug}`,
  });

  return {
    title: guide.frontmatter.title,
    description,
    ...standardMetadata,
    openGraph: {
      title: guide.frontmatter.title,
      description,
      url: pageUrl,
      siteName: 'How to Invest in NIFTY 50',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: guide.frontmatter.title,
        },
      ],
      locale: 'en_IN',
      type: 'article',
      publishedTime: guide.frontmatter.datePublished,
      modifiedTime: guide.frontmatter.dateModified,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.frontmatter.title,
      description,
      images: [ogImageUrl],
    },
  };
}

