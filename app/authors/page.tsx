import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllAuthors } from '@/lib/authors';
import { generateCollectionPageSchema, generateBreadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/app/components/common/JsonLd';
import { UserIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/authors`;

export const metadata: Metadata = {
  title: 'Our Authors - Expert Financial Analysts & Researchers',
  description: 'Meet our team of experienced financial analysts and researchers specializing in Indian stock markets, Nifty 50, and investment education.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Our Authors - Expert Financial Analysts & Researchers',
    description: 'Meet our team of experienced financial analysts and researchers specializing in Indian stock markets, Nifty 50, and investment education.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Our Authors - Expert Financial Analysts & Researchers',
    description: 'Meet our team of experienced financial analysts and researchers specializing in Indian stock markets, Nifty 50, and investment education.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

export default function AuthorsPage() {
  const authors = getAllAuthors();

  // Generate schemas
  const schemas = [];

  // Breadcrumb schema
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Authors', url: pageUrl },
  ];
  schemas.push(generateBreadcrumbSchema(breadcrumbItems));

  // CollectionPage schema
  schemas.push(generateCollectionPageSchema({
    name: 'Our Authors',
    description: 'Expert financial analysts and researchers specializing in Indian stock markets',
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: authors.length,
      itemListElement: authors.map((author, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Person',
          name: author.name,
          url: `${baseUrl}/authors/${author.slug}`,
        },
      })),
    },
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <UserIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Authors - Nifty 50 Investment Experts
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            Meet our team of experienced financial analysts, researchers, and content strategists
            specializing in Indian stock markets, Nifty 50, and investment education.
          </p>
        </div>
      </div>

      {/* Authors Grid */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          {authors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">No authors available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/authors/${author.slug}`}
                className="group rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {author.image ? (
                    <img
                      src={author.image}
                      alt={author.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-semibold text-white">
                        {author.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-brand-saffron dark:group-hover:text-brand-saffron">
                      {author.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {author.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 line-clamp-3">
                  {author.shortBio}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {author.specializations.slice(0, 2).map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center rounded-md bg-brand-saffron/10 dark:bg-brand-saffron/20 px-2 py-1 text-xs font-medium text-brand-saffron dark:text-brand-saffron"
                    >
                      {spec}
                    </span>
                  ))}
                  {author.specializations.length > 2 && (
                    <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                      +{author.specializations.length - 2} more
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <BriefcaseIcon className="h-4 w-4" />
                    <span>{author.experience.length} roles</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AcademicCapIcon className="h-4 w-4" />
                    <span>{author.education.length} degrees</span>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

