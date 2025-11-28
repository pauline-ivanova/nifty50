import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ClipboardDocumentCheckIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  BanknotesIcon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
  CreditCardIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ScaleIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Our Review Methodology - How We Evaluate Brokers',
  description: 'Learn how we evaluate trading apps and brokers using publicly available data, platform analysis and transparent comparison criteria.',
};

export default function ReviewMethodologyPage() {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <ClipboardDocumentCheckIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Review Methodology</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            We evaluate trading apps and brokers using publicly available data, platform analysis and transparent comparison criteria. Here's how we ensure our reviews are accurate, objective, and helpful.
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
            
            {/* Why You Can Trust Our Reviews */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Why You Can Trust Our Reviews</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Our mission is to provide clear, accurate, and unbiased information about SEBI-regulated brokers and trading platforms in India. We understand that choosing the right broker is a critical decision for your investment journey, and we take our responsibility to provide trustworthy reviews seriously.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Every review we publish is based on independent research, hands-on platform testing, and analysis of publicly available information. We maintain strict editorial independence from our commercial partnerships, ensuring that our reviews reflect genuine assessments rather than marketing considerations.
              </p>
            </section>

            {/* How We Evaluate Brokers and Platforms */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">How We Evaluate Brokers and Platforms</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                We assess each broker and trading platform across multiple categories to provide a comprehensive evaluation. Here's what we examine in detail:
              </p>
              
              <div className="space-y-8">
                {/* Regulation & Safety */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-brand-saffron" />
                    Regulation & Safety
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We verify that each broker is properly licensed and regulated by SEBI (Securities and Exchange Board of India). This includes checking:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>SEBI registration status and license validity</li>
                    <li>Compliance with SEBI oversight requirements</li>
                    <li>Investor protection mechanisms, including investor protection fund coverage</li>
                    <li>Membership in stock exchanges (NSE, BSE)</li>
                    <li>Any regulatory actions or warnings issued against the broker</li>
                  </ul>
                </div>

                {/* Account Opening & Onboarding */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-brand-saffron" />
                    Account Opening & Onboarding
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We evaluate the account opening process from a user's perspective, considering:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>KYC (Know Your Customer) process requirements and ease of completion</li>
                    <li>User interface and overall ease of use during onboarding</li>
                    <li>Documentation requirements and clarity of instructions</li>
                    <li>Account approval time and communication during the process</li>
                    <li>Availability of online vs. offline account opening options</li>
                  </ul>
                </div>

                {/* Fees & Commissions */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <BanknotesIcon className="h-6 w-6 text-brand-saffron" />
                    Fees & Commissions
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We analyze the complete fee structure to help you understand the true cost of trading, including:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Trading fees (brokerage charges for equity, derivatives, commodities)</li>
                    <li>Non-trading fees (account maintenance charges, AMC, DP charges)</li>
                    <li>Spreads for currency and commodity trading</li>
                    <li>Hidden costs and charges that may not be immediately apparent</li>
                    <li>Fee structures for different account types and trading volumes</li>
                  </ul>
                </div>

                {/* Platforms & Tools */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-brand-saffron" />
                    Platforms & Tools
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We test and evaluate the trading platforms and tools available to users:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Mobile apps (iOS and Android) - functionality, stability, and user experience</li>
                    <li>Web platform features and interface design</li>
                    <li>Charting tools and technical analysis capabilities</li>
                    <li>Research tools, market analysis, and educational resources</li>
                    <li>Order types available (market, limit, stop-loss, bracket orders, etc.)</li>
                    <li>Platform reliability and uptime</li>
                  </ul>
                </div>

                {/* Product Availability */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <Squares2X2Icon className="h-6 w-6 text-brand-saffron" />
                    Product Availability
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We assess what investment and trading products are available through each broker:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>ETFs (Exchange Traded Funds) and index funds</li>
                    <li>Equity trading (stocks, IPOs)</li>
                    <li>Derivatives (futures and options)</li>
                    <li>Commodities and currency trading</li>
                    <li>Mutual funds and SIP options</li>
                    <li>Fractional investing capabilities</li>
                    <li>Bonds and fixed income products</li>
                  </ul>
                </div>

                {/* Payments & Funding Options */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <CreditCardIcon className="h-6 w-6 text-brand-saffron" />
                    Payments & Funding Options
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We evaluate the ease and convenience of funding your account and withdrawing money:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>UPI integration and ease of use</li>
                    <li>Bank transfer options (NEFT, RTGS, IMPS)</li>
                    <li>Withdrawal process and processing times</li>
                    <li>Minimum deposit and withdrawal amounts</li>
                    <li>Transaction fees for deposits and withdrawals</li>
                    <li>Availability of instant transfer options</li>
                  </ul>
                </div>

                {/* Customer Support */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-brand-saffron" />
                    Customer Support
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We assess the quality and availability of customer support services:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Response time for queries and support requests</li>
                    <li>Available support channels (phone, email, chat, in-app support)</li>
                    <li>Support hours and availability</li>
                    <li>Helpfulness and knowledge of support staff</li>
                    <li>Self-service resources (FAQs, knowledge base, tutorials)</li>
                  </ul>
                </div>

                {/* Transparency & Disclosures */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <DocumentTextIcon className="h-6 w-6 text-brand-saffron" />
                    Transparency & Disclosures
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We evaluate how clearly brokers present important information to their clients:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>How clearly brokers present risks associated with trading and investing</li>
                    <li>Fee disclosure clarity and completeness</li>
                    <li>Terms and conditions accessibility and readability</li>
                    <li>Policy transparency (margin policies, settlement policies, etc.)</li>
                    <li>Regular communication about account status and market updates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Score Each Category */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">How We Score Each Category</h2>
              
              <div className="space-y-8">
                {/* Weighting System */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ScaleIcon className="h-6 w-6 text-brand-saffron" />
                    Weighting System
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    Not all categories carry equal weight in our final assessment. We assign weights based on what matters most to investors and traders:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li><strong>Regulation & Safety</strong> - Highest weight (essential for all users)</li>
                    <li><strong>Fees & Commissions</strong> - High weight (directly impacts returns)</li>
                    <li><strong>Platforms & Tools</strong> - High weight (affects trading experience)</li>
                    <li><strong>Account Opening & Onboarding</strong> - Medium weight (one-time but important)</li>
                    <li><strong>Product Availability</strong> - Medium weight (depends on user needs)</li>
                    <li><strong>Payments & Funding Options</strong> - Medium weight (affects convenience)</li>
                    <li><strong>Customer Support</strong> - Medium weight (important when issues arise)</li>
                    <li><strong>Transparency & Disclosures</strong> - Medium weight (builds trust)</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mt-4">
                    The exact weighting may vary slightly based on the type of broker or platform being reviewed, but we always prioritize safety and regulatory compliance above all else.
                  </p>
                </div>

                {/* Data Sources Used */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <MagnifyingGlassIcon className="h-6 w-6 text-brand-saffron" />
                    Data Sources Used
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We gather information from multiple reliable sources to ensure accuracy:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li><strong>Official documentation</strong> - Broker websites, terms of service, fee schedules, and regulatory filings</li>
                    <li><strong>Platform testing</strong> - Hands-on testing of mobile apps, web platforms, and trading tools</li>
                    <li><strong>User feedback</strong> - Analysis of reviews from verified users, app store ratings, and community discussions</li>
                    <li><strong>Regulatory data</strong> - SEBI databases, exchange member lists, and regulatory announcements</li>
                    <li><strong>Public records</strong> - Company filings, financial disclosures, and news reports</li>
                  </ul>
                </div>

                {/* Testing Process */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ChartBarIcon className="h-6 w-6 text-brand-saffron" />
                    Testing Process
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    Our evaluation process involves multiple stages of testing and verification:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li><strong>Hands-on testing</strong> - We create demo accounts and test accounts to evaluate platform functionality, user interface, and features</li>
                    <li><strong>Demo accounts</strong> - Where available, we use demo or paper trading accounts to test trading tools and order execution</li>
                    <li><strong>Real trading environment</strong> - For comprehensive reviews, we may test actual account opening and trading processes (with minimal amounts)</li>
                    <li><strong>Cross-platform testing</strong> - We test mobile apps on both iOS and Android, and evaluate web platforms across different browsers</li>
                    <li><strong>Feature verification</strong> - We verify that advertised features actually work as described</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Ensure Objectivity */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">How We Ensure Objectivity</h2>
              
              <div className="space-y-8">
                {/* Separation of Editorial and Commercial Teams */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Separation of Editorial and Commercial Teams</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our editorial team operates independently from our business development and affiliate partnership teams. Content writers and reviewers do not know which brokers are affiliate partners when conducting research and writing reviews. This separation ensures that our assessments are based solely on objective criteria, not commercial considerations.
                  </p>
                </div>

                {/* No Partner Influence */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Partner Influence</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We do not allow affiliate partners or any external parties to influence our reviews, rankings, or content. Specifically:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Partners cannot request changes to reviews or ratings</li>
                    <li>We do not accept payment to improve a broker's ranking or score</li>
                    <li>Negative findings are included in reviews regardless of partnership status</li>
                    <li>We review and feature brokers with whom we do not have affiliate partnerships</li>
                  </ul>
                </div>

                {/* Consistent Evaluation Criteria */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Consistent Evaluation Criteria</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Every broker and platform is evaluated using the same set of criteria and scoring methodology. We apply these standards consistently across all reviews, ensuring that comparisons are fair and meaningful. Our evaluation framework is documented and followed for every review, preventing subjective bias from influencing our assessments.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Update Process */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Update Process</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                The financial services industry is constantly evolving, and we're committed to keeping our reviews current and accurate. Here's how we maintain the quality of our content:
              </p>
              
              <div className="space-y-8">
                {/* Regular Data Reviews */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ClockIcon className="h-6 w-6 text-brand-saffron" />
                    Regular Data Reviews
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We conduct regular reviews of all broker information, typically every 3-6 months. During these reviews, we verify fee structures, check for regulatory changes, update platform features, and refresh our assessments based on the latest available information.
                  </p>
                </div>

                {/* Monitoring Regulatory Changes */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <ShieldCheckIcon className="h-6 w-6 text-brand-saffron" />
                    Monitoring Regulatory Changes
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We actively monitor SEBI announcements, circulars, and regulatory changes that may affect brokers or trading platforms. When significant regulatory changes occur, we update relevant reviews promptly to reflect new requirements, restrictions, or opportunities.
                  </p>
                </div>

                {/* Platform Re-Testing */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-brand-saffron" />
                    Platform Re-Testing
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    When brokers release significant platform updates, new features, or major changes to their services, we re-test the platforms to ensure our reviews accurately reflect the current user experience. This includes testing new mobile app versions, web platform updates, and feature additions.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitations of Our Methodology */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Limitations of Our Methodology</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                While we strive to provide comprehensive and accurate reviews, it's important to understand the limitations of our methodology:
              </p>
              <ul className="list-disc list-outside space-y-4 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                <li>
                  <strong>Information accuracy</strong> - We rely on publicly available information and broker disclosures. While we verify information from multiple sources, brokers may change fees, features, or policies without immediate public disclosure. We recommend verifying current information directly with brokers before making decisions.
                </li>
                <li>
                  <strong>User experience variation</strong> - Individual experiences with brokers can vary based on account type, trading volume, location, and other factors. Our reviews reflect general assessments but may not capture every individual's specific experience.
                </li>
                <li>
                  <strong>Platform updates</strong> - Trading platforms are frequently updated. While we re-test platforms regularly, there may be a lag between major updates and our review updates.
                </li>
                <li>
                  <strong>Market conditions</strong> - Our reviews focus on broker features and services rather than market performance or investment returns. We do not provide investment advice or guarantee returns.
                </li>
                <li>
                  <strong>Personal preferences</strong> - The "best" broker depends on individual needs, trading style, and preferences. Our reviews provide information to help you make informed decisions, but what works best for one investor may not be ideal for another.
                </li>
                <li>
                  <strong>Not financial advice</strong> - Our reviews are educational and informational. They do not constitute financial advice, investment recommendations, or endorsements. Always consult with qualified financial advisors before making investment decisions.
                </li>
              </ul>
              <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6">
                <p className="text-lg font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  Important Disclaimer
                </p>
                <p className="text-lg leading-8 text-amber-800 dark:text-amber-300">
                  Trading and investing involve risk of loss. Past performance does not guarantee future results. Always read broker terms and conditions, understand fees and charges, and ensure you're comfortable with the risks before opening an account or making trades.
                </p>
              </div>
            </section>

            {/* Have Questions About Our Process? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Have Questions About Our Process?</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-6">
                We're committed to transparency about how we conduct our reviews. If you have questions about our methodology, evaluation criteria, or how we ensure objectivity, we're happy to provide more information.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">You can also read more about:</p>
                <ul className="space-y-2 text-lg text-gray-600 dark:text-brand-silver">
                  <li>
                    <Link href="/about/how-we-make-money" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      How We Make Money →
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

