import { getBrokerData, getAllBrokerSlugs } from '@/lib/brokers';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import ServicePageLayout from '@/app/components/layout/ServicePageLayout';
import FAQ from '@/app/components/blocks/FAQ';
import RelatedPosts from '@/app/components/blocks/RelatedPosts';
import FeatureList from '@/app/components/blocks/FeatureList';
import StatsGrid from '@/app/components/blocks/StatsGrid';
import TopicCardGrid from '@/app/components/blocks/TopicCardGrid';
import InvestmentSteps from '@/app/components/blocks/InvestmentSteps';
import JsonLd, { 
  generateFAQSchema, 
  generateBreadcrumbSchema,
  generateReviewSchema,
  generateRatingSchema,
} from '@/app/components/common/JsonLd';

const componentsMap: { [key: string]: React.ComponentType<any> } = {
  FeatureList,
  StatsGrid,
  ServiceCardGrid: TopicCardGrid,
  ProcessSteps: InvestmentSteps,
};

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const paths = getAllBrokerSlugs();
  return paths;
}

export async function generateMetadata({ params }: Props) {
  const { frontmatter } = await getBrokerData(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
  const pageUrl = `${baseUrl}/brokers/${params.slug}`;
  
  const standardMetadata = generateStandardMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    url: pageUrl,
    pagePath: `/brokers/${params.slug}`,
  });
  
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    ...standardMetadata,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: pageUrl,
      siteName: 'How to Invest in NIFTY 50',
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

export default async function BrokerPage({ params }: Props) {
  const {
    frontmatter,
    contentBlocks,
    faqData
  } = await getBrokerData(params.slug);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
  const pageUrl = `${baseUrl}/brokers/${params.slug}`;

  // Generate schemas
  const schemas = [];

  // Breadcrumb schema
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Brokers', url: `${baseUrl}/brokers` },
    { name: frontmatter.title, url: pageUrl },
  ];
  schemas.push(generateBreadcrumbSchema(breadcrumbItems));

  // Review schema - Critical for broker pages
  // Extract rating from frontmatter or use default
  const rating = frontmatter.rating || frontmatter.ratingValue || 4.0;
  const reviewBody = frontmatter.description || 
    `${frontmatter.title} review: ${frontmatter.description || 'Comprehensive review of this broker for Nifty 50 investing.'}`;

  schemas.push(generateReviewSchema({
    itemName: frontmatter.title,
    itemType: 'FinancialService',
    itemDescription: frontmatter.description,
    ratingValue: typeof rating === 'number' ? rating : parseFloat(rating) || 4.0,
    reviewBody: reviewBody,
    datePublished: frontmatter.datePublished,
    dateModified: frontmatter.dateModified,
  }));

  // Rating schema - Aggregate rating
  if (rating) {
    schemas.push(generateRatingSchema({
      itemName: frontmatter.title,
      itemType: 'FinancialService',
      ratingValue: typeof rating === 'number' ? rating : parseFloat(rating) || 4.0,
      reviewCount: frontmatter.reviewCount || 1,
    }));
  }

  // FAQ schema
  if (faqData && faqData.faqs && faqData.faqs.length > 0) {
    schemas.push(generateFAQSchema(faqData.faqs));
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <ServicePageLayout title={frontmatter.title} description={frontmatter.description} category={frontmatter.category}>
        {contentBlocks.map((block: any, index: number) => {
          const Component = componentsMap[block.type];
          if (Component) {
            const componentProps: { [key: string]: any } = {
              ...block.data,
              padding: index === 0 ? 'top-compact' : 'default',
            };

            return <Component key={index} {...componentProps} />;
          }
          return null;
        })}
      </ServicePageLayout>
      {faqData && <FAQ {...faqData} ctaText={frontmatter.faqCtaText} ctaButtonText={frontmatter.faqCtaButtonText} />}
      <RelatedPosts category={frontmatter.category} />
    </>
  );
}

