import { getSortedBrokersData } from "@/lib/brokers";
import Link from "next/link";
import type { Metadata } from 'next';
import JsonLd, { 
  generateItemListSchema, 
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
} from '@/app/components/common/JsonLd';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const brokersPageUrl = `${baseUrl}/brokers`;

export const metadata: Metadata = {
  title: 'Best Stock Brokers in India 2024 - Reviews & Comparisons',
  description: 'Compare India\'s top SEBI-regulated stock brokers. Read unbiased reviews of Zerodha, Groww, Upstox, and more. Find the best broker for Nifty 50 investing.',
  alternates: {
    canonical: brokersPageUrl,
    languages: {
      'en-IN': brokersPageUrl,
      'x-default': brokersPageUrl,
    },
  },
  openGraph: {
    title: 'Best Stock Brokers in India 2024 - Reviews & Comparisons',
    description: 'Compare India\'s top SEBI-regulated stock brokers. Read unbiased reviews of Zerodha, Groww, Upstox, and more. Find the best broker for Nifty 50 investing.',
    url: brokersPageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Stock Brokers in India 2024 - Reviews & Comparisons',
    description: 'Compare India\'s top SEBI-regulated stock brokers. Read unbiased reviews of Zerodha, Groww, Upstox, and more. Find the best broker for Nifty 50 investing.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

export default function BrokersPage() {
  const brokers = getSortedBrokersData();
  const pageUrl = brokersPageUrl;

  // Generate schemas
  const schemas = [];

  // Breadcrumb schema
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Brokers', url: pageUrl },
  ];
  schemas.push(generateBreadcrumbSchema(breadcrumbItems));

  // ItemList schema - List of brokers
  schemas.push(generateItemListSchema({
    name: 'Best Stock Brokers in India 2024',
    description: 'Top SEBI-regulated brokers for Nifty 50 investing',
    items: brokers.map(broker => ({
      name: broker.title || broker.slug,
      url: `${baseUrl}/brokers/${broker.slug}`,
      description: broker.description,
      itemType: 'FinancialService',
    })),
  }));

  // CollectionPage schema
  schemas.push(generateCollectionPageSchema({
    name: 'Broker Reviews & Comparisons',
    description: 'Comprehensive reviews and comparisons of India\'s top stock brokers',
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: brokers.length,
      itemListElement: brokers.map((broker, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'FinancialService',
          name: broker.title || broker.slug,
          url: `${baseUrl}/brokers/${broker.slug}`,
        },
      })),
    },
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Best Stock Brokers for Nifty 50 Investing</h1>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brokers.map((broker) => (
            <li key={broker.slug} className="rounded-2xl bg-gray-50 p-8 hover:bg-gray-100 transition-colors">
              <Link href={`/brokers/${broker.slug}`}>
                <h2 className="text-xl font-semibold text-gray-900">{broker.title}</h2>
                <p className="mt-2 text-gray-600 line-clamp-3">{broker.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-saffron">Read Review &rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

