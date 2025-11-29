import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  MegaphoneIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/advertiser-disclosure`;

export const metadata: Metadata = {
  title: 'Advertiser Disclosure - Transparency About Our Partnerships',
  description: 'Learn about our advertising relationships, affiliate partnerships, and how they may affect content. Our commitment to transparency in Nifty 50 reviews.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Advertiser Disclosure - Transparency About Our Partnerships',
    description: 'Learn about our advertising relationships, affiliate partnerships, and how they may affect content. Our commitment to transparency in Nifty 50 reviews.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Advertiser Disclosure - Transparency About Our Partnerships',
    description: 'Learn about our advertising relationships, affiliate partnerships, and how they may affect content. Our commitment to transparency in Nifty 50 reviews.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

export default function AdvertiserDisclosurePage() {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <MegaphoneIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Advertiser Disclosure</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            Transparency about our advertising relationships and how they may affect the content you see.
          </p>
          <p className="mt-4 text-sm text-brand-silver/80">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Commitment to Transparency</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                At How to Invest in NIFTY 50, we believe in transparency about our business relationships. This page explains our advertising and affiliate partnerships, how they work, and how they may affect the content you see on our website.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Our primary goal is to provide helpful, accurate, and unbiased educational content. We maintain strict separation between our editorial content and our commercial partnerships to ensure that our reviews and recommendations remain objective and independent.
              </p>
            </section>

            {/* Affiliate Partnerships */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <InformationCircleIcon className="h-8 w-8 text-brand-saffron" />
                Affiliate Partnerships
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Our primary source of revenue comes from affiliate partnerships with SEBI-regulated brokers and trading platforms. Here's how these partnerships work:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How Affiliate Links Work</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    When you click on a broker link on our website, a tracking code is added to the URL. If you subsequently open an account or make a transaction within a certain time period (typically 30-90 days), the broker pays us a commission.
                  </p>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    This tracking does not affect your experience on the broker's website, and it does not change the fees, terms, or services offered by the broker. You receive exactly the same pricing and features as if you had visited the broker directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Additional Cost to You</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Using our affiliate links does not increase the cost of opening an account, trading, or investing through any broker. The commission we receive comes from the broker's marketing budget, not from your fees or charges.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Partner Selection</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We only partner with SEBI-regulated brokers that meet our standards for safety, reliability, and transparency. However, our affiliate relationships do not guarantee that a broker will be featured in our reviews or ranked highly in our comparisons.
                  </p>
                </div>
              </div>
            </section>

            {/* Editorial Independence */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ShieldCheckIcon className="h-8 w-8 text-brand-saffron" />
                Editorial Independence
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We maintain strict separation between our editorial content and our commercial partnerships. Our editorial independence is protected by:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li><strong>Separate teams:</strong> Our editorial team operates independently from our business development and affiliate partnership teams</li>
                <li><strong>Blind reviews:</strong> Content writers and reviewers do not know which brokers are affiliate partners when conducting research and writing reviews</li>
                <li><strong>Objective criteria:</strong> All reviews are based on consistent, objective evaluation criteria regardless of partnership status</li>
                <li><strong>No partner influence:</strong> Partners cannot request changes to reviews, rankings, or ratings</li>
                <li><strong>Transparent methodology:</strong> Our review methodology is publicly documented and consistently applied</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                For more information about how we ensure objectivity, please read our <Link href="/about/review-methodology" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">Review Methodology</Link> page.
              </p>
            </section>

            {/* What We Don't Do */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ExclamationTriangleIcon className="h-8 w-8 text-brand-saffron" />
                What We Don't Do
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                To maintain editorial integrity, we have strict policies against:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                <li>Accepting payment to place brokers higher in rankings or comparison tables</li>
                <li>Writing paid or sponsored reviews</li>
                <li>Hiding negative information about partners</li>
                <li>Allowing partners to edit or approve our content</li>
                <li>Promoting brokers that are not SEBI-regulated</li>
                <li>Making guarantees about broker services or investment returns</li>
                <li>Sharing reader data with brokers or third parties</li>
              </ul>
            </section>

            {/* Disclosure Requirements */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Disclosure Requirements</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We disclose our affiliate relationships in the following ways:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>This Advertiser Disclosure page, accessible from our footer</li>
                <li>Our "How We Make Money" page, which explains our revenue model in detail</li>
                <li>Clear disclosure on pages that contain affiliate links</li>
                <li>Transparency about our review methodology and evaluation criteria</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We believe that transparency builds trust and helps readers make informed decisions about the information they're reading.
              </p>
            </section>

            {/* Third-Party Advertising */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Third-Party Advertising</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Our website may display third-party advertisements from advertising networks or brokers. These advertisements are clearly marked and separate from our editorial content.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Important points about third-party advertising:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                <li>We do not control the content of third-party advertisements</li>
                <li>Display of an advertisement does not constitute an endorsement or recommendation</li>
                <li>Advertisements are clearly distinguished from our editorial content</li>
                <li>We may receive compensation for displaying advertisements</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Your Rights</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                <li>Understand how we make money and what relationships we have with brokers</li>
                <li>Know when content contains affiliate links</li>
                <li>Make informed decisions about whether to use our affiliate links</li>
                <li>Visit broker websites directly without using our affiliate links</li>
                <li>Receive the same pricing and services regardless of how you reach a broker</li>
              </ul>
            </section>

            {/* Questions */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <EnvelopeIcon className="h-8 w-8 text-brand-saffron" />
                Questions About Our Disclosures?
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                If you have questions about our advertising relationships, affiliate partnerships, or disclosure practices, we're happy to provide more information.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact us:</p>
                <p className="text-lg text-gray-600 dark:text-brand-silver mb-4">
                  <a href="mailto:info@howtoinvestinnifty50.com" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                    info@howtoinvestinnifty50.com
                  </a>
                </p>
                <p className="text-lg text-gray-600 dark:text-brand-silver">
                  Or visit our <Link href="/contact" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">Contact Page</Link>
                </p>
              </div>
            </section>

            {/* Related Pages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Related Pages</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Learn more about our practices:</p>
                <ul className="space-y-2 text-lg text-gray-600 dark:text-brand-silver">
                  <li>
                    <Link href="/about/how-we-make-money" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      How We Make Money →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/review-methodology" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Our Review Methodology →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/editorial-guidelines" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Editorial Guidelines →
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Privacy Policy →
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

