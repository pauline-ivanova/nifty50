import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  LinkIcon,
  ChartBarIcon,
  BanknotesIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Financial Disclaimer - Important Legal Information',
  description: 'Read our financial disclaimer outlining the educational purpose of our content, investment risks, and our commitment to accuracy and transparency.',
};

export default function FinancialDisclaimerPage() {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <ExclamationTriangleIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Financial Disclaimer</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            Important legal information about the educational nature of our content, investment risks, and our commitment to transparency and accuracy.
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
            
            {/* Educational Purpose Only */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <InformationCircleIcon className="h-8 w-8 text-brand-saffron" />
                Educational Purpose Only
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                The content provided on this website is intended solely for educational and informational purposes. Our articles, guides, comparisons, broker reviews, and market analysis are designed to help you understand the Indian stock market, investment products, trading platforms, and related financial concepts.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This website is not a SEBI-registered investment advisor, financial consultant, or trading advisor. We do not provide personalized investment advice, portfolio management services, or recommendations tailored to your specific financial situation, risk tolerance, or investment objectives.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                The information we provide is general in nature and should not be construed as investment recommendations, trading signals, or advice to buy, sell, or hold any specific securities, ETFs, index funds, or other financial instruments. Our content is meant to enhance your understanding of financial markets and investment options, but it does not replace professional financial advice.
              </p>
            </section>

            {/* No Investment or Trading Advice */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ShieldCheckIcon className="h-8 w-8 text-brand-saffron" />
                No Investment or Trading Advice
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This website does not provide investment advice, trading recommendations, or financial planning services. We do not:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Recommend specific stocks, ETFs, index funds, or other securities for purchase or sale</li>
                <li>Provide buy, sell, or hold recommendations for any financial instruments</li>
                <li>Offer personalized investment strategies or portfolio allocation advice</li>
                <li>Suggest specific entry or exit points for trades or investments</li>
                <li>Provide trading signals or market timing advice</li>
                <li>Act as a financial advisor or investment consultant</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Any information, analysis, or opinions expressed on this website are general observations and should not be interpreted as personalized investment advice. Investment decisions should be made based on your own research, risk assessment, and consultation with qualified financial professionals who understand your individual circumstances.
              </p>
            </section>

            {/* No Liability for Decisions Made */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ExclamationTriangleIcon className="h-8 w-8 text-brand-saffron" />
                No Liability for Decisions Made
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                You acknowledge and agree that all investment and trading decisions you make are your sole responsibility. This website, its owners, operators, authors, contributors, and affiliates (collectively, "we" or "us") shall not be liable for any losses, damages, or negative consequences arising from:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Investment decisions made based on information or content from this website</li>
                <li>Trading actions taken after reading our articles, guides, or reviews</li>
                <li>Financial losses resulting from following any information, analysis, or opinions presented on this website</li>
                <li>Decisions to open accounts with brokers or trading platforms featured or reviewed on this website</li>
                <li>Any errors, omissions, or inaccuracies in the information provided on this website</li>
                <li>Market volatility, economic conditions, or other factors affecting investment performance</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                By using this website, you agree that we are not responsible for any financial losses, opportunity costs, or other damages that may result from your use of the information provided. You assume full responsibility for your investment decisions and acknowledge that investing and trading involve substantial risk of loss.
              </p>
            </section>

            {/* Accuracy and Completeness of Information */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <DocumentTextIcon className="h-8 w-8 text-brand-saffron" />
                Accuracy and Completeness of Information
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                While we strive to provide accurate, up-to-date, and comprehensive information, we cannot guarantee the accuracy, completeness, or timeliness of all content on this website. Financial markets, regulations, broker policies, fee structures, and platform features change frequently, and information may become outdated without immediate notice.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Risks associated with information accuracy include:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li><strong>Outdated data:</strong> Fee structures, broker policies, platform features, and regulatory requirements may change after we publish our content. We update our content regularly, but there may be delays between changes and our updates.</li>
                <li><strong>Incomplete information:</strong> We rely on publicly available information from brokers, exchanges, and regulatory bodies. Some information may not be publicly disclosed or may be subject to interpretation.</li>
                <li><strong>Data sources:</strong> We gather information from multiple sources, including broker websites, SEBI filings, exchange data, and public records. While we verify information from multiple sources when possible, discrepancies may exist.</li>
                <li><strong>Third-party information:</strong> Some information may come from third-party sources, and we cannot guarantee its accuracy or completeness.</li>
                <li><strong>Market data:</strong> Historical performance data, index values, and market statistics are provided for informational purposes and may contain errors or reflect different calculation methodologies.</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We recommend that you verify all critical information directly with brokers, exchanges, regulatory bodies, or other official sources before making investment decisions. Always check the most current fee schedules, terms and conditions, and regulatory status directly with the relevant parties.
              </p>
            </section>

            {/* External Links and Third-Party Platforms */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <LinkIcon className="h-8 w-8 text-brand-saffron" />
                External Links and Third-Party Platforms
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This website contains links to external websites, including broker platforms, trading apps, exchanges, regulatory bodies, and other third-party resources. These links are provided for your convenience and informational purposes only.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Responsibility for Third-Party Content</h3>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                  We do not control, endorse, or assume responsibility for the content, accuracy, privacy policies, terms of service, or practices of any third-party websites or platforms linked from this website. When you click on external links, you leave our website and are subject to the terms and conditions and privacy policies of those third-party sites.
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                  We are not responsible for any losses, damages, or negative experiences resulting from your use of third-party websites, platforms, or services. This includes, but is not limited to, issues with broker platforms, trading apps, payment processors, or any other external services linked from our website.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Control Over Partner Offers</h3>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                  This website may contain affiliate links to broker platforms and trading apps. While we may receive compensation when you use these links, we do not control the terms, conditions, fees, features, or promotional offers provided by these brokers or platforms.
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                  Broker promotions, fee structures, account opening requirements, and platform features are subject to change at any time without notice. We cannot guarantee that promotional offers, reduced fees, or special terms mentioned on our website will be available when you visit the broker's website or open an account. Always verify current terms, fees, and offers directly with the broker before making any decisions.
                </p>
              </div>
            </section>

            {/* Market Risks and Volatility */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ChartBarIcon className="h-8 w-8 text-brand-saffron" />
                Market Risks and Volatility
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Investing in stocks, ETFs, index funds, and other securities involves substantial risk of loss. The value of investments can fluctuate significantly due to market conditions, economic factors, geopolitical events, regulatory changes, and other unpredictable circumstances. You may lose some or all of your invested capital.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Key risks associated with investing in Indian stock markets include:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li><strong>Market volatility:</strong> Stock prices can experience significant short-term and long-term fluctuations. Market volatility can result in substantial losses, especially during periods of economic uncertainty or market downturns.</li>
                <li><strong>Economic factors:</strong> Changes in interest rates, inflation, GDP growth, currency exchange rates, and other macroeconomic factors can significantly impact stock prices and investment returns.</li>
                <li><strong>Company-specific risks:</strong> Individual companies may face operational challenges, management issues, competitive pressures, regulatory actions, or other factors that can negatively impact their stock prices.</li>
                <li><strong>Regulatory changes:</strong> Changes in SEBI regulations, tax policies, or other government regulations can affect market conditions and investment returns.</li>
                <li><strong>Liquidity risks:</strong> Some securities may have limited trading volume, making it difficult to buy or sell at desired prices.</li>
                <li><strong>Currency risks:</strong> For international investments or foreign investors, currency exchange rate fluctuations can affect returns.</li>
                <li><strong>Systemic risks:</strong> Broader market crashes, financial crises, or systemic failures can impact all investments regardless of individual company performance.</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Past market performance does not guarantee future results. Even well-established indices like the Nifty 50 can experience significant declines. You should only invest money that you can afford to lose and should be prepared for the possibility of losing your entire investment.
              </p>
            </section>

            {/* Past Performance Is Not Indicative of Future Results */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ChartBarIcon className="h-8 w-8 text-brand-saffron" />
                Past Performance Is Not Indicative of Future Results
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Any historical performance data, returns, or statistics presented on this website are provided for informational and educational purposes only. Past performance does not guarantee, predict, or indicate future results or investment returns.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This principle applies to:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li><strong>Index performance:</strong> Historical returns of indices like the Nifty 50, Bank Nifty, or Sensex do not guarantee future performance. Indices can experience periods of significant growth and decline.</li>
                <li><strong>ETF and index fund returns:</strong> Past returns of ETFs and index funds tracking Indian indices do not guarantee future returns. These funds are subject to market risks and may not replicate historical performance.</li>
                <li><strong>Individual stock performance:</strong> Historical stock prices and returns do not predict future performance. Stocks that have performed well in the past may decline in the future, and vice versa.</li>
                <li><strong>Market trends:</strong> Historical market trends, patterns, or cycles do not guarantee that similar trends will continue in the future.</li>
                <li><strong>Broker performance:</strong> Historical data about broker platforms, features, or user experiences does not guarantee future performance or service quality.</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Investment decisions should be based on your own research, risk assessment, and financial goals, not solely on historical performance data. Always consider current market conditions, economic factors, and your individual circumstances when making investment decisions.
              </p>
            </section>

            {/* ETF, Index Funds and Broker Information */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <BanknotesIcon className="h-8 w-8 text-brand-saffron" />
                ETF, Index Funds and Broker Information
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Information about ETFs, index funds, brokers, and trading platforms provided on this website is based on publicly available data and our independent research. However, there are important limitations and risks to consider:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li><strong>Product information:</strong> Details about ETF expense ratios, tracking errors, fund sizes, and index fund features are based on publicly available information and may change. Always verify current information directly with fund houses or asset management companies before investing.</li>
                <li><strong>Broker information:</strong> Information about broker fees, platform features, account opening processes, and service quality is based on our research and publicly available data. Actual experiences may vary, and broker policies can change without notice.</li>
                <li><strong>Platform reliability:</strong> We cannot guarantee the reliability, uptime, or performance of broker platforms or trading apps. Technical issues, system outages, or platform changes can affect your trading experience.</li>
                <li><strong>Regulatory status:</strong> While we verify SEBI registration and regulatory compliance, regulatory status can change. Always verify current regulatory status directly with SEBI or the broker before opening an account.</li>
                <li><strong>Fee structures:</strong> Broker fees, charges, and commission structures are subject to change. Always verify current fee schedules directly with brokers before making trading decisions.</li>
                <li><strong>Product availability:</strong> The availability of specific ETFs, index funds, or other investment products may vary by broker and can change over time.</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We recommend conducting your own due diligence, reading prospectuses and offer documents, reviewing broker terms and conditions, and consulting with qualified financial advisors before making investment decisions or opening accounts with brokers.
              </p>
            </section>

            {/* Affiliate and Referral Disclosures */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <UserGroupIcon className="h-8 w-8 text-brand-saffron" />
                Affiliate and Referral Disclosures
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This website may receive compensation through affiliate partnerships with brokers and trading platforms. When you click on broker links on our website and subsequently open an account or make transactions, we may receive a commission from those brokers.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                These affiliate relationships allow us to provide free educational content to our readers. However, our affiliate partnerships do not influence our editorial content, broker reviews, rankings, or recommendations. We maintain strict editorial independence and evaluate brokers based on objective criteria regardless of affiliate relationships.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                For detailed information about how we make money and how affiliate relationships work, please read our <Link href="/about/how-we-make-money" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">How We Make Money</Link> page. This disclosure does not affect the fees, terms, or services you receive from brokers—you pay the same rates whether you use our affiliate links or visit brokers directly.
              </p>
            </section>

            {/* Not a Substitute for Professional Advice */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ShieldCheckIcon className="h-8 w-8 text-brand-saffron" />
                Not a Substitute for Professional Advice
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                The content on this website is not a substitute for professional financial advice, investment consultation, or personalized financial planning. We are not SEBI-registered investment advisors, financial consultants, or certified financial planners.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Before making any investment decisions, you should:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Consult with qualified financial advisors who understand your individual financial situation, risk tolerance, investment goals, and time horizon</li>
                <li>Conduct your own thorough research and due diligence</li>
                <li>Read prospectuses, offer documents, and terms and conditions for any investment products or broker services you consider</li>
                <li>Understand the risks associated with your investment choices</li>
                <li>Consider your financial capacity to bear potential losses</li>
                <li>Verify all information directly with brokers, fund houses, or regulatory bodies</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                This website provides general educational information and should be used as one of many resources in your investment research process, not as the sole basis for investment decisions. Professional financial advisors can provide personalized advice tailored to your specific circumstances, which this website cannot and does not provide.
              </p>
            </section>

            {/* Regulatory Context */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <BuildingOffice2Icon className="h-8 w-8 text-brand-saffron" />
                Regulatory Context
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This website references regulatory bodies and exchanges including SEBI (Securities and Exchange Board of India), NSE (National Stock Exchange), and BSE (Bombay Stock Exchange) as independent sources of information and regulation. These references are made for informational and educational purposes only.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Affiliation With Regulators</h3>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                  This website is not affiliated with, endorsed by, or sponsored by SEBI, NSE, BSE, or any other regulatory body or exchange. We are an independent educational resource and have no official relationship with these organizations.
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                  References to regulatory bodies and exchanges are made to provide context and direct readers to official sources of information. We do not speak on behalf of these organizations, and our content does not represent official positions, policies, or guidance from SEBI, NSE, BSE, or any other regulatory authority.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Official Sources May Change Without Notice</h3>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                  Regulatory requirements, exchange rules, and official policies can change at any time without notice. While we strive to keep our content current, we cannot guarantee that all regulatory information referenced on this website reflects the most recent changes or updates.
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                  For the most current and accurate regulatory information, always refer directly to official sources such as SEBI's official website (sebi.gov.in), NSE's official website (nseindia.com), and BSE's official website (bseindia.com). These official sources should be your primary reference for regulatory requirements, compliance information, and official announcements.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <EnvelopeIcon className="h-8 w-8 text-brand-saffron" />
                Contact Information
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                If you have questions about this disclaimer, concerns about the accuracy of information on this website, or need clarification about our content, please contact us. We are committed to transparency and accuracy, and we welcome feedback that helps us improve our content.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mt-6">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">You can reach us through:</p>
                <ul className="space-y-2 text-lg text-gray-600 dark:text-brand-silver">
                  <li>
                    <Link href="/contact" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Contact Page →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      About Us →
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mt-6">
                Please note that we cannot provide personalized investment advice, answer questions about specific investment decisions, or provide recommendations about individual securities or brokers. For investment advice, please consult with qualified financial professionals.
              </p>
            </section>

            {/* Final Acknowledgment */}
            <section className="mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-brand-saffron p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-6 w-6 text-brand-saffron flex-shrink-0" />
                  Important Acknowledgment
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                  By using this website, you acknowledge that you have read, understood, and agree to this Financial Disclaimer. You understand that investing and trading involve substantial risk of loss, and you assume full responsibility for your investment decisions.
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                  If you do not agree with any part of this disclaimer, please do not use this website or rely on its content for investment decisions.
                </p>
              </div>
            </section>

            {/* Related Pages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Related Pages</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">You may also want to read:</p>
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

