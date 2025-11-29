import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ScaleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/legal`;

export const metadata: Metadata = {
  title: 'Legal & Policies - How to Invest in NIFTY 50',
  description: 'Central hub for our terms, privacy policy, disclaimer, accessibility statement, and other legal information related to our Nifty 50 investment platform.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Legal & Policies - How to Invest in NIFTY 50',
    description: 'Central hub for our terms, privacy policy, disclaimer, accessibility statement, and other legal information related to our Nifty 50 investment platform.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Legal & Policies - How to Invest in NIFTY 50',
    description: 'Central hub for our terms, privacy policy, disclaimer, accessibility statement, and other legal information related to our Nifty 50 investment platform.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

export default function LegalHubPage() {
  const sections = [
    {
      title: 'Core legal documents',
      icon: ScaleIcon,
      description:
        'Key documents that govern how you can use this website, how we handle your data, and how we limit our liability.',
      links: [
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Financial Disclaimer', href: '/about/disclaimer' },
        { label: 'Advertiser Disclosure', href: '/advertiser-disclosure' },
      ],
    },
    {
      title: 'Accessibility & user rights',
      icon: Cog6ToothIcon,
      description:
        'Information about how we make this website accessible and how you can exercise your rights over your data.',
      links: [
        { label: 'Accessibility Statement', href: '/accessibility' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'How we work',
      icon: DocumentTextIcon,
      description:
        'Transparency resources that explain how we operate, how we review brokers, and how we make money.',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Review Methodology', href: '/about/review-methodology' },
        { label: 'How We Make Money', href: '/about/how-we-make-money' },
        { label: 'Editorial Guidelines', href: '/about/editorial-guidelines' },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <ShieldCheckIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Legal & Policies
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            One place for our key legal documents, disclosures, and policies, so you can quickly
            find the information you need.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <InformationCircleIcon className="h-8 w-8 text-brand-saffron" />
                How this page is organized
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                To keep our footer clean and make important information easier to find, we&apos;ve
                grouped all legal, policy, and transparency resources in one hub. Use the sections
                below to quickly jump to the document you&apos;re looking for.
              </p>
            </section>

            <div className="grid gap-8 md:grid-cols-2">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <section.icon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-6 text-gray-600 dark:text-brand-silver mb-4">
                    {section.description}
                  </p>
                  <ul className="space-y-2 text-base">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-brand-saffron hover:text-brand-saffron-hover hover:underline"
                        >
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                Need something else?
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                If you can&apos;t find what you&apos;re looking for or have questions about any of
                our policies, please{' '}
                <Link
                  href="/contact"
                  className="text-brand-saffron hover:text-brand-saffron-hover hover:underline"
                >
                  reach out to us via the contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}


