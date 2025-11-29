import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAuthorBySlug, getAllAuthorSlugs } from '@/lib/authors';
import { generatePersonSchema, generateBreadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/app/components/common/JsonLd';
import { generateAuthorTitle, generateAuthorDescription, generateStandardMetadata } from '@/lib/metadata-utils';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  BookOpenIcon,
  LanguageIcon,
} from '@heroicons/react/24/outline';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  try {
    return getAllAuthorSlugs();
  } catch (error) {
    console.error('Error generating static params for authors:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = getAuthorBySlug(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';

  if (!author) {
    return {
      title: 'Author Not Found - How to Invest in NIFTY 50',
      description: 'The requested author page could not be found. Browse our team of expert financial analysts and researchers specializing in Nifty 50 investing.',
    };
  }

  const pageUrl = `${baseUrl}/authors/${author.slug}`;

  // Generate SEO-optimized, meaningful title and description
  const title = generateAuthorTitle(author.name, author.role, 60);
  const description = generateAuthorDescription(author, 120, 155);
  
  // Generate OG image URL (if author has image, use it; otherwise use default)
  const ogImageUrl = author.image 
    ? author.image.startsWith('http') 
      ? author.image 
      : `${baseUrl}${author.image}`
    : `${baseUrl}/images/authors/${author.slug}.jpg`;

  // OG title should be shorter and more focused
  const ogTitle = `${author.name} - ${author.role}`;

  const standardMetadata = generateStandardMetadata({
    title,
    description,
    url: pageUrl,
    pagePath: `/authors/${author.slug}`,
  });

  return {
    title,
    description,
    ...standardMetadata,
    openGraph: {
      title: ogTitle.length <= 60 ? ogTitle : generateAuthorTitle(author.name, author.role, 60),
      description,
      url: pageUrl,
      siteName: 'How to Invest in NIFTY 50',
      images: author.image ? [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${author.name} - ${author.role}`,
        },
      ] : undefined,
      locale: 'en_IN',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle.length <= 60 ? ogTitle : generateAuthorTitle(author.name, author.role, 60),
      description,
      images: author.image ? [ogImageUrl] : undefined,
    },
  };
}

export default function AuthorPage({ params }: Props) {
  const author = getAuthorBySlug(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
  const pageUrl = `${baseUrl}/authors/${params.slug}`;

  if (!author) {
    notFound();
  }

  // Generate schemas
  const schemas = [];

  // Breadcrumb schema
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Authors', url: `${baseUrl}/authors` },
    { name: author.name, url: pageUrl },
  ];
  schemas.push(generateBreadcrumbSchema(breadcrumbItems));

  // Person schema for EEAT
  const sameAs: string[] = [];
  if (author.linkedin) sameAs.push(author.linkedin);
  if (author.twitter) sameAs.push(author.twitter);

  schemas.push(
    generatePersonSchema({
      name: author.name,
      url: pageUrl,
      jobTitle: author.role,
      description: author.bio,
      image: author.image,
      sameAs,
      worksFor: {
        '@type': 'Organization',
        name: 'How to Invest in NIFTY 50',
      },
      alumniOf: author.education.map((edu) => ({
        '@type': 'EducationalOrganization',
        name: edu.institution,
      })),
      knowsAbout: author.specializations,
    })
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {author.image ? (
              <img
                src={author.image}
                alt={author.name}
                className="h-32 w-32 rounded-full object-cover border-4 border-white/20"
              />
            ) : (
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center border-4 border-white/20 flex-shrink-0">
                <span className="text-3xl font-semibold text-white">
                  {author.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()}
                </span>
              </div>
            )}
            <div className="flex-1 w-full">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {author.name}
              </h1>
              <p className="mt-2 text-xl text-brand-silver">{author.role}</p>
              <p className="mt-4 text-lg leading-8 text-brand-silver/90">
                {author.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="h-6 w-6 text-brand-saffron dark:text-brand-saffron" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
              </div>
              <div className="space-y-4">
                {author.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-brand-saffron pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            {author.certifications.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <CheckBadgeIcon className="h-6 w-6 text-brand-saffron dark:text-brand-saffron" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Certifications
                  </h2>
                </div>
                <div className="space-y-3">
                  {author.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckBadgeIcon className="h-5 w-5 text-brand-saffron dark:text-brand-saffron flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {cert.name}
                        </p>
                        {cert.issuer && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {cert.issuer}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Experience */}
            <section className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <BriefcaseIcon className="h-6 w-6 text-brand-saffron dark:text-brand-saffron" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Professional Experience
                </h2>
              </div>
              <div className="space-y-6">
                {author.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-brand-saffron pl-6 pb-6 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {exp.company}
                        </p>
                        {exp.description && (
                          <p className="text-gray-600 dark:text-gray-400 mt-2">
                            {exp.description}
                          </p>
                        )}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Specializations */}
            <section className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <BookOpenIcon className="h-6 w-6 text-brand-saffron dark:text-brand-saffron" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Specializations
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {author.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-lg bg-brand-saffron/10 dark:bg-brand-saffron/20 px-4 py-2 text-sm font-medium text-brand-saffron dark:text-brand-saffron"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </section>

            {/* Additional Info */}
            <section className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Articles Published
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {author.articlesCount}+
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Years of Experience
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {Math.max(
                      ...author.experience.map((exp) => {
                        const years = exp.period.split('-').map((y) => parseInt(y));
                        return years[1] ? years[1] - years[0] : new Date().getFullYear() - years[0];
                      })
                    )}+
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <LanguageIcon className="h-5 w-5 text-gray-400" />
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Languages
                    </p>
                  </div>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {author.languages.join(', ')}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Social Links */}
          {(author.linkedin || author.twitter) && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-saffron dark:text-brand-saffron hover:text-brand-saffron-hover dark:hover:text-brand-saffron-hover"
                  >
                    LinkedIn
                  </a>
                )}
                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-saffron dark:text-brand-saffron hover:text-brand-saffron-hover dark:hover:text-brand-saffron-hover"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Back to Authors */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/authors"
              className="text-brand-saffron dark:text-brand-saffron hover:text-brand-saffron-hover dark:hover:text-brand-saffron-hover font-medium"
            >
              ← Back to All Authors
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

