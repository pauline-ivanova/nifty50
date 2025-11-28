import type { Metadata } from 'next';
import Link from 'next/link';
import { CurrencyDollarIcon, ShieldCheckIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'How We Make Money - Transparency & Disclosure',
  description: 'Understand how our website earns revenue and why it does not influence the objectivity of our educational content.',
};

export default function HowWeMakeMoneyPage() {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <CurrencyDollarIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">How We Make Money</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            We believe transparency builds trust. This page explains how our website earns revenue and why it does not influence the objectivity of our educational content.
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
            
            {/* Why This Disclosure Matters */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Why This Disclosure Matters</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                When you're researching investment options, broker reviews, or financial guides, you deserve to know whether the information you're reading is influenced by commercial relationships. We're committed to maintaining editorial independence, and this transparency is fundamental to building trust with our readers.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Our mission is to provide clear, accurate, and unbiased educational content about India's stock market, particularly focusing on the Nifty 50 index, SEBI-regulated brokers, and investment products. We believe that honest disclosure about our revenue model strengthens rather than weakens our credibility.
              </p>
            </section>

            {/* How Our Website Earns Money */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">How Our Website Earns Money</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-brand-saffron" />
                    Broker & Platform Partnerships
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    Our primary source of revenue comes from affiliate partnerships with SEBI-regulated brokers and trading platforms. When you click on a broker link on our website and subsequently open an account or make a transaction, we may receive a commission from that broker.
                  </p>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    These partnerships allow us to keep our content free and accessible to all readers. However, it's important to understand that these relationships do not determine which brokers we review, how we rank them, or what we write about their services.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-brand-saffron" />
                    No Sponsored Rankings
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We do not accept payment to place brokers higher in our rankings or comparison tables. Our reviews and comparisons are based on publicly available information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver ml-4">
                    <li>SEBI registration and regulatory compliance</li>
                    <li>Published fee structures and charges</li>
                    <li>Platform features and user experience</li>
                    <li>Customer support quality</li>
                    <li>Market reputation and reliability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-brand-saffron" />
                    No Paid Reviews
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We do not write paid reviews or accept compensation to create positive content about specific brokers or platforms. Every review we publish is based on our independent research and analysis of publicly available information. If a broker has limitations or drawbacks, we include them in our assessment.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-brand-saffron" />
                    No Fees for Readers
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    All our content, guides, comparisons, and reviews are completely free to access. We do not charge readers for reading our articles, downloading our guides, or using our comparison tools. Our revenue model is designed to support free access to educational content.
                  </p>
                </div>
              </div>
            </section>

            {/* What We Never Do */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">What We Never Do</h2>
              <ul className="space-y-4 text-lg leading-8 text-gray-600 dark:text-brand-silver">
                <li className="flex items-start gap-3">
                  <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <span>Accept payment to change rankings or ratings</span>
                </li>
                <li className="flex items-start gap-3">
                  <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <span>Write paid or sponsored reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <span>Hide negative information about partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <span>Promote brokers that are not SEBI-regulated</span>
                </li>
                <li className="flex items-start gap-3">
                  <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <span>Charge readers for accessing our content</span>
                </li>
                <li className="flex items-start gap-3">
                  <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <span>Share reader data with brokers or third parties</span>
                </li>
              </ul>
            </section>

            {/* Our Editorial Standards */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Editorial Standards</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Accuracy</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We verify all information using publicly available sources, including SEBI circulars, broker websites, exchange data, and regulatory filings. We regularly update our content to reflect changes in fees, regulations, and platform features. If you notice an error, please contact us and we'll correct it promptly.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Neutrality</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our reviews and comparisons present both strengths and limitations of each broker or platform. We don't favor partners over non-partners in our assessments. Our goal is to help readers make informed decisions based on their individual needs and preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Independence</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our editorial team operates independently from our business development and affiliate partnership teams. Content decisions are made based on reader needs, market relevance, and educational value—not on potential revenue impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Transparency</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We clearly disclose our revenue model (as you're reading now), explain our review methodology, and maintain this "How We Make Money" page that's easily accessible from our homepage and footer. We believe transparency is essential for building trust.
                  </p>
                </div>
              </div>
            </section>

            {/* How Affiliate Links Work */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">How Affiliate Links Work</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                When you click on a broker link on our website, a small tracking code is added to the URL. This code tells the broker that you came from our site. If you open an account or make a transaction within a certain time period (typically 30-90 days), the broker pays us a commission.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This tracking does not affect your experience on the broker's website, and it does not change the fees, terms, or services offered by the broker. You receive exactly the same pricing and features as if you had visited the broker directly.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We only partner with SEBI-regulated brokers that meet our standards for safety, reliability, and transparency. However, our affiliate relationships do not guarantee that a broker will be featured in our reviews or ranked highly in our comparisons.
              </p>
            </section>

            {/* No Additional Cost to You */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">No Additional Cost to You</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Using our affiliate links does not increase the cost of opening an account, trading, or investing through any broker. The commission we receive comes from the broker's marketing budget, not from your fees or charges.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                In fact, many brokers offer the same promotional benefits (such as reduced account opening fees or free AMC periods) whether you sign up through our links or directly. We always recommend comparing broker fees and features yourself before making a decision.
              </p>
            </section>

            {/* Conflict-of-Interest Policy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Conflict-of-Interest Policy</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We maintain strict separation between our editorial content and our affiliate partnerships. Here's how we manage potential conflicts of interest:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver ml-4 mb-4">
                <li>Our content team does not know which brokers are affiliate partners when writing reviews</li>
                <li>We review brokers based on objective criteria, regardless of partnership status</li>
                <li>If we have a significant commercial relationship with a broker, we disclose it in relevant articles</li>
                <li>We regularly audit our content to ensure affiliate relationships don't influence our recommendations</li>
                <li>We may review and feature brokers with whom we do not have affiliate partnerships</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Our commitment is to provide honest, useful information that helps readers make better investment decisions. If we ever feel that a conflict of interest could compromise our editorial integrity, we will either decline the partnership or clearly disclose the relationship.
              </p>
            </section>

            {/* Have Questions? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Have Questions?</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-6">
                If you have questions about how we make money, our editorial process, or our affiliate relationships, we're happy to provide more information. Transparency is important to us, and we want you to feel confident in the information you're reading.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">You can also read more about:</p>
                <ul className="space-y-2 text-lg text-gray-600 dark:text-brand-silver">
                  <li>
                    <Link href="/about/review-methodology" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Our Review Methodology →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/disclaimer" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Financial Disclaimer →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      About Us →
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

