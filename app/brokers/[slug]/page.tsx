import { getBrokerData, getAllBrokerSlugs } from '@/lib/brokers';
import ServicePageLayout from '@/app/components/layout/ServicePageLayout';
import FAQ from '@/app/components/blocks/FAQ';
import RelatedPosts from '@/app/components/blocks/RelatedPosts';
import FeatureList from '@/app/components/blocks/FeatureList';
import StatsGrid from '@/app/components/blocks/StatsGrid';
import TopicCardGrid from '@/app/components/blocks/TopicCardGrid';
import InvestmentSteps from '@/app/components/blocks/InvestmentSteps';

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
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function BrokerPage({ params }: Props) {
  const {
    frontmatter,
    contentBlocks,
    faqData
  } = await getBrokerData(params.slug);

  return (
    <>
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

