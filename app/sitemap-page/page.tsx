import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllGuides } from '@/lib/guides';
import { getSortedBrokersData } from '@/lib/brokers';
import {
  HomeIcon,
  ChartBarIcon,
  BookOpenIcon,
  BanknotesIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/sitemap-page`;

export const metadata: Metadata = {
  title: 'Sitemap - How to Invest in NIFTY 50',
  description: 'Complete site structure and navigation guide for How to Invest in NIFTY 50. Find all guides, broker reviews, and resources.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Sitemap - How to Invest in NIFTY 50',
    description: 'Complete site structure and navigation guide for How to Invest in NIFTY 50. Find all guides, broker reviews, and resources.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sitemap - How to Invest in NIFTY 50',
    description: 'Complete site structure and navigation guide for How to Invest in NIFTY 50. Find all guides, broker reviews, and resources.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

interface SitemapSection {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: Array<{
    title: string;
    url: string;
    description?: string;
  }>;
}

export default function SitemapPage() {
  const guides = getAllGuides();
  const brokers = getSortedBrokersData();

  const sections: SitemapSection[] = [
    {
      title: 'Homepage',
      icon: HomeIcon,
      items: [
        {
          title: 'Home',
          url: '/',
          description: 'Main landing page',
        },
      ],
    },
    {
      title: 'Main Sections',
      icon: ChartBarIcon,
      items: [
        {
          title: 'Brokers',
          url: '/brokers',
          description: 'Browse all broker reviews and comparisons',
        },
        {
          title: 'Guides',
          url: '/guides',
          description: 'Educational guides and tutorials',
        },
      ],
    },
    {
      title: 'Broker Reviews',
      icon: BanknotesIcon,
      items: brokers.map((broker) => ({
        title: broker.title || broker.slug,
        url: `/brokers/${broker.slug}`,
      })),
    },
    {
      title: 'Investment Guides',
      icon: BookOpenIcon,
      items: guides.map((guide) => ({
        title: guide.title || guide.slug,
        url: `/guides/${guide.slug}`,
      })),
    },
    {
      title: 'About & Information',
      icon: InformationCircleIcon,
      items: [
        {
          title: 'About Us',
          url: '/about',
        },
        {
          title: 'Review Methodology',
          url: '/about/review-methodology',
        },
        {
          title: 'How We Make Money',
          url: '/about/how-we-make-money',
        },
        {
          title: 'Editorial Guidelines',
          url: '/about/editorial-guidelines',
        },
        {
          title: 'Contact',
          url: '/contact',
        },
        {
          title: 'FAQ',
          url: '/faq',
        },
        {
          title: 'Glossary',
          url: '/glossary',
        },
      ],
    },
    {
      title: 'Legal & Policies',
      icon: ShieldCheckIcon,
      items: [
        {
          title: 'Privacy Policy',
          url: '/privacy',
        },
        {
          title: 'Terms & Conditions',
          url: '/terms',
        },
        {
          title: 'Financial Disclaimer',
          url: '/about/disclaimer',
        },
        {
          title: 'Advertiser Disclosure',
          url: '/advertiser-disclosure',
        },
        {
          title: 'Accessibility Statement',
          url: '/accessibility',
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.400),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Site Map
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Explore all pages and sections of our website. Find guides, broker reviews, and resources to help you invest in Nifty 50.
            </p>
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {sections.map((section, sectionIdx) => (
              <div
                key={section.title}
                className="group relative rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200 transition-all hover:ring-blue-500 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white group-hover:bg-blue-700 transition-colors">
                    <section.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.url}>
                      <Link
                        href={item.url}
                        className="flex items-start gap-3 rounded-lg p-3 text-gray-700 hover:bg-white hover:text-blue-600 transition-colors group/item"
                      >
                        <ArrowRightIcon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 group-hover/item:text-blue-600">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* XML Sitemap Link */}
        <div className="mt-12 rounded-lg bg-blue-50 p-6 text-center">
          <p className="text-sm text-gray-600">
            Looking for the XML sitemap for search engines?{' '}
            <Link
              href="/sitemap.xml"
              className="font-medium text-blue-600 hover:text-blue-700 underline"
            >
              View XML Sitemap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

