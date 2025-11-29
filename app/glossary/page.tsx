import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  BookOpenIcon
} from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/glossary`;

export const metadata: Metadata = {
  title: 'Glossary - Financial Terms Explained',
  description: 'A comprehensive glossary of financial and investment terms related to the Indian stock market, Nifty 50, and investing. Learn key concepts for portfolios.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Glossary - Financial Terms Explained',
    description: 'A comprehensive glossary of financial and investment terms related to the Indian stock market, Nifty 50, and investing. Learn key concepts for portfolios.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Glossary - Financial Terms Explained',
    description: 'A comprehensive glossary of financial and investment terms related to the Indian stock market, Nifty 50, and investing. Learn key concepts for portfolios.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

const glossaryTerms = [
  {
    term: 'AMC (Account Maintenance Charges)',
    definition: 'Fees charged by brokers for maintaining your Demat and trading accounts. These are typically charged annually or quarterly.',
    category: 'Fees & Charges'
  },
  {
    term: 'BSE (Bombay Stock Exchange)',
    definition: 'One of India\'s two major stock exchanges, located in Mumbai. It is the oldest stock exchange in Asia.',
    category: 'Exchanges & Markets'
  },
  {
    term: 'Broker',
    definition: 'A licensed intermediary who executes buy and sell orders on behalf of investors. Brokers must be registered with SEBI.',
    category: 'Trading & Investing'
  },
  {
    term: 'Brokerage',
    definition: 'The commission or fee charged by a broker for executing trades. Can be a flat fee, percentage of trade value, or zero brokerage.',
    category: 'Fees & Charges'
  },
  {
    term: 'Demat Account',
    definition: 'Short for "dematerialized account," this is an account that holds your securities (stocks, bonds, ETFs) in electronic form instead of physical certificates.',
    category: 'Accounts'
  },
  {
    term: 'DP Charges',
    definition: 'Depository Participant charges - fees charged for holding securities in your Demat account. Usually charged per transaction or annually.',
    category: 'Fees & Charges'
  },
  {
    term: 'ETF (Exchange Traded Fund)',
    definition: 'A type of investment fund that trades on stock exchanges like a stock. ETFs typically track an index (like Nifty 50) and offer diversification.',
    category: 'Investment Products'
  },
  {
    term: 'Index',
    definition: 'A statistical measure of the performance of a group of stocks representing a particular market or sector. Examples include Nifty 50 and Sensex.',
    category: 'Exchanges & Markets'
  },
  {
    term: 'Index Fund',
    definition: 'A mutual fund that aims to replicate the performance of a specific index by holding the same stocks in the same proportions.',
    category: 'Investment Products'
  },
  {
    term: 'IPO (Initial Public Offering)',
    definition: 'The first time a company offers its shares to the public. Companies use IPOs to raise capital from investors.',
    category: 'Trading & Investing'
  },
  {
    term: 'KYC (Know Your Customer)',
    definition: 'A mandatory process to verify your identity and address when opening a Demat or trading account. Required by SEBI regulations.',
    category: 'Accounts'
  },
  {
    term: 'Nifty 50',
    definition: 'India\'s benchmark stock market index, representing the 50 largest and most liquid stocks listed on the National Stock Exchange.',
    category: 'Exchanges & Markets'
  },
  {
    term: 'NSE (National Stock Exchange)',
    definition: 'One of India\'s two major stock exchanges, located in Mumbai. It is the largest stock exchange in India by trading volume.',
    category: 'Exchanges & Markets'
  },
  {
    term: 'SEBI (Securities and Exchange Board of India)',
    definition: 'The regulatory body that oversees India\'s securities markets. SEBI regulates brokers, stock exchanges, and protects investor interests.',
    category: 'Regulation'
  },
  {
    term: 'SIP (Systematic Investment Plan)',
    definition: 'A method of investing in mutual funds where you invest a fixed amount regularly (monthly, quarterly) instead of a lump sum.',
    category: 'Investment Products'
  },
  {
    term: 'Sensex',
    definition: 'The benchmark index of the Bombay Stock Exchange, representing 30 large, well-established companies across various sectors.',
    category: 'Exchanges & Markets'
  },
  {
    term: 'Trading Account',
    definition: 'An account that allows you to buy and sell securities on stock exchanges. It is linked to your Demat account and bank account.',
    category: 'Accounts'
  },
  {
    term: 'UPI (Unified Payments Interface)',
    definition: 'A real-time payment system in India that allows instant money transfers between bank accounts using mobile apps.',
    category: 'Payments'
  }
];

const categories = Array.from(new Set(glossaryTerms.map(term => term.category)));

export default function GlossaryPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <BookOpenIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Nifty 50 Financial Terms Glossary</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            A comprehensive guide to financial and investment terms related to the Indian stock market.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Understanding financial terminology is essential for making informed investment decisions. This glossary explains key terms you'll encounter when learning about India's stock market, investing in the Nifty 50, and choosing brokers.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Terms are organized by category to help you find what you're looking for. If you don't find a term here, feel free to <Link href="/contact" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">contact us</Link> and we'll consider adding it.
              </p>
            </section>

            {/* Glossary Terms by Category */}
            {categories.map(category => {
              const termsInCategory = glossaryTerms.filter(term => term.category === category);
              return (
                <section key={category} className="mb-16">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">{category}</h2>
                  <div className="space-y-6">
                    {termsInCategory.map((item, index) => (
                      <div key={index} className="border-l-4 border-brand-saffron pl-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.term}</h3>
                        <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Additional Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Additional Resources</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Want to learn more? Check out these resources:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <ul className="space-y-2 text-lg text-gray-600 dark:text-brand-silver">
                  <li>
                    <Link href="/guides" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Investment Guides →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      About Us →
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Frequently Asked Questions →
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

