import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  DocumentTextIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  ScaleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/about/editorial-guidelines`;

export const metadata: Metadata = {
  title: 'Editorial Guidelines - Our Content Standards',
  description: 'Learn about our editorial standards, content creation process, and commitment to accuracy. Discover how we ensure quality in Nifty 50 guides and reviews.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Editorial Guidelines - Our Content Standards',
    description: 'Learn about our editorial standards, content creation process, and commitment to accuracy. Discover how we ensure quality in Nifty 50 guides and reviews.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Editorial Guidelines - Our Content Standards',
    description: 'Learn about our editorial standards, content creation process, and commitment to accuracy. Discover how we ensure quality in Nifty 50 guides and reviews.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

export default function EditorialGuidelinesPage() {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <DocumentTextIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Editorial Guidelines</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            Our commitment to creating accurate, transparent, and helpful content about India's stock market.
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Editorial Mission</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                At How to Invest in NIFTY 50, we are committed to providing clear, accurate, and unbiased educational content about India's stock market. Our editorial guidelines ensure that every piece of content we publish meets our high standards for accuracy, transparency, and educational value.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                These guidelines govern how we research, write, edit, and publish content. They reflect our commitment to editorial independence, factual accuracy, and serving our readers' best interests.
              </p>
            </section>

            {/* Core Principles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Core Editorial Principles</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-brand-saffron" />
                    Accuracy First
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We prioritize accuracy above all else. Every fact, statistic, and claim must be verified using reliable sources before publication. We use:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Official sources (SEBI, NSE, BSE, RBI)</li>
                    <li>Primary documents (regulatory filings, official announcements)</li>
                    <li>Verified data from reputable financial institutions</li>
                    <li>Multiple sources to cross-reference information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-brand-saffron" />
                    Editorial Independence
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    Our editorial team operates independently from our commercial partnerships. Content decisions are based on:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Reader needs and educational value</li>
                    <li>Market relevance and timeliness</li>
                    <li>Gaps in available information</li>
                    <li>Objective evaluation criteria</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mt-4">
                    Commercial considerations, affiliate relationships, or potential revenue do not influence what we write about or how we evaluate brokers and platforms.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <AcademicCapIcon className="h-6 w-6 text-brand-saffron" />
                    Educational Focus
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    All content is designed to educate and inform, not to provide investment advice or recommendations. We explain concepts clearly, use beginner-friendly language, and help readers understand how to make their own informed decisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ScaleIcon className="h-6 w-6 text-brand-saffron" />
                    Transparency
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We are transparent about our methodology, sources, and any potential conflicts of interest. Readers can understand how we conduct reviews, where we get our information, and how we make money.
                  </p>
                </div>
              </div>
            </section>

            {/* Research Standards */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <MagnifyingGlassIcon className="h-8 w-8 text-brand-saffron" />
                Research Standards
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Source Requirements</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We prioritize information from official and authoritative sources:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li><strong>Regulatory bodies:</strong> SEBI circulars, announcements, and databases</li>
                    <li><strong>Stock exchanges:</strong> NSE and BSE official data, methodology documents, and announcements</li>
                    <li><strong>Central bank:</strong> RBI monetary policy statements and economic data</li>
                    <li><strong>Broker documentation:</strong> Official terms of service, fee schedules, and regulatory filings</li>
                    <li><strong>Public records:</strong> Company filings, financial disclosures, and regulatory actions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Verification Process</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    Before publishing any information, we:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Verify facts using multiple independent sources when possible</li>
                    <li>Check the date and currency of information</li>
                    <li>Cross-reference data from different sources</li>
                    <li>Test platform features ourselves when possible</li>
                    <li>Document our sources for fact-checking</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Hands-On Testing</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    When reviewing brokers and platforms, we conduct hands-on testing whenever possible. This includes testing mobile apps, web platforms, account opening processes, and key features. We document our testing process and note any limitations or constraints.
                  </p>
                </div>
              </div>
            </section>

            {/* Writing Standards */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Writing Standards</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Clarity and Accessibility</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We write for a diverse audience, including beginners who are new to investing. Our writing standards include:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Using clear, simple language and avoiding unnecessary jargon</li>
                    <li>Defining technical terms when first introduced</li>
                    <li>Breaking down complex concepts into digestible sections</li>
                    <li>Using examples and analogies to illustrate points</li>
                    <li>Organizing content with clear headings and structure</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Neutral Tone</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We maintain a neutral, informative tone. We present facts and analysis without hype, exaggeration, or emotional language. We avoid making unsupported claims or using marketing language that could mislead readers.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Balanced Perspective</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    When comparing brokers or evaluating options, we present both strengths and limitations. We don't hide negative information or only highlight positive aspects. Our goal is to help readers make informed decisions based on complete information.
                  </p>
                </div>
              </div>
            </section>

            {/* Review Process */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircleIcon className="h-8 w-8 text-brand-saffron" />
                Content Review Process
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Editorial Review</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    All content goes through editorial review before publication. This includes:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Fact-checking and source verification</li>
                    <li>Review for accuracy and completeness</li>
                    <li>Clarity and readability assessment</li>
                    <li>Compliance with editorial guidelines</li>
                    <li>Grammar and style editing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Regular Updates</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We regularly review and update our content to ensure it remains accurate and current. This includes checking for changes in fees, regulations, platform features, and market conditions. Content is typically reviewed every 3-6 months, or sooner if significant changes occur.
                  </p>
                </div>
              </div>
            </section>

            {/* What We Don't Do */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">What We Don't Do</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                To maintain editorial integrity, we have strict policies against:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                <li>Accepting payment to write positive reviews or improve rankings</li>
                <li>Allowing partners to edit or approve our content</li>
                <li>Hiding negative information about partners</li>
                <li>Writing paid or sponsored content without clear disclosure</li>
                <li>Providing investment advice or recommendations</li>
                <li>Making guarantees about investment returns or performance</li>
                <li>Using misleading headlines or clickbait</li>
                <li>Copying content from other sources without attribution</li>
              </ul>
            </section>

            {/* Corrections Policy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Corrections Policy</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We are committed to correcting errors promptly and transparently. If we discover an error or receive a valid correction request, we will:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Verify the error and determine the appropriate correction</li>
                <li>Update the content as quickly as possible</li>
                <li>Note the correction and date of update when significant</li>
                <li>Thank readers who bring errors to our attention</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                If you notice an error in our content, please contact us at <a href="mailto:info@howtoinvestinnifty50.com" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">info@howtoinvestinnifty50.com</a>.
              </p>
            </section>

            {/* Related Pages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Related Pages</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Learn more about our standards:</p>
                <ul className="space-y-2 text-lg text-gray-600 dark:text-brand-silver">
                  <li>
                    <Link href="/about/review-methodology" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Our Review Methodology →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/how-we-make-money" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      How We Make Money →
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

