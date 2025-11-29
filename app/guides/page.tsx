import { getAllGuides } from '@/lib/guides';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd, { 
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
  generateItemListSchema,
} from '@/app/components/common/JsonLd';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const guidesPageUrl = `${baseUrl}/guides`;

export const metadata: Metadata = {
  title: 'Investment Guides - Learn How to Invest in Nifty 50',
  description: 'Step-by-step guides and tutorials for investing in Nifty 50. Learn how to open a Demat account, compare ETFs, and start your investment journey.',
  alternates: {
    canonical: guidesPageUrl,
    languages: {
      'en-IN': guidesPageUrl,
      'x-default': guidesPageUrl,
    },
  },
  openGraph: {
    title: 'Investment Guides - Learn How to Invest in Nifty 50',
    description: 'Step-by-step guides and tutorials for investing in Nifty 50. Learn how to open a Demat account, compare ETFs, and start your investment journey.',
    url: guidesPageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Guides - Learn How to Invest in Nifty 50',
    description: 'Step-by-step guides and tutorials for investing in Nifty 50. Learn how to open a Demat account, compare ETFs, and start your investment journey.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

const categoryColors: { [key: string]: string } = {
  'Investing': 'bg-blue-100 text-blue-800',
  'Trading': 'bg-purple-100 text-purple-800',
  'Analysis': 'bg-indigo-100 text-indigo-800',
  'Basics': 'bg-green-100 text-green-800',
};

export default function GuidesPage() {
  const allGuides = getAllGuides();
  const pageUrl = guidesPageUrl;

  // Generate schemas
  const schemas = [];

  // Breadcrumb schema
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Guides', url: pageUrl },
  ];
  schemas.push(generateBreadcrumbSchema(breadcrumbItems));

  // ItemList schema - List of guides
  schemas.push(generateItemListSchema({
    name: 'Investment Guides',
    description: 'Step-by-step guides and tutorials for Nifty 50 investing',
    items: allGuides.map(guide => ({
      name: guide.title || guide.slug,
      url: `${baseUrl}/guides/${guide.slug}`,
      description: guide.excerpt,
      itemType: 'Article',
    })),
  }));

  // CollectionPage schema
  schemas.push(generateCollectionPageSchema({
    name: 'Investment Guides',
    description: 'Comprehensive guides for investing in Nifty 50 and Indian stock market',
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: allGuides.length,
      itemListElement: allGuides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: guide.title || guide.slug,
          url: `${baseUrl}/guides/${guide.slug}`,
        },
      })),
    },
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <div className="relative isolate bg-gradient-to-b from-emerald-600 to-emerald-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Nifty 50 Investment Guides</h1>
            <p className="mt-6 text-lg leading-8 text-emerald-100">
              Master the market with our expert tutorials, strategies, and deep dives into Nifty 50 investing.
            </p>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {allGuides.map((guide) => {
              const colorClasses = categoryColors[guide.category] || 'bg-gray-100 text-gray-800';
              return (
                <article key={guide.slug} className="flex flex-col items-start self-start">
                  <div className="relative w-full">
                    <Link href={`/guides/${guide.slug}`}>
                      <img
                        src={`/api/og/guide/${guide.slug}`}
                        alt={guide.title}
                        className="aspect-[4/3] w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-sm">
                      <div className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${colorClasses}`}>
                        {guide.category}
                      </div>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={`/guides/${guide.slug}`}>
                          <span className="absolute inset-0" />
                          {guide.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{guide.excerpt}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


