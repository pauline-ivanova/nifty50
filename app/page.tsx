import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/app/components/blocks/Hero';
import TopicCardGrid from '@/app/components/blocks/TopicCardGrid';
import BrokerCarousel from '@/app/components/blocks/BrokerCarousel';
import FeatureList from '@/app/components/blocks/FeatureList';
import StatsGrid from '@/app/components/blocks/StatsGrid';
import InvestmentSteps from '@/app/components/blocks/InvestmentSteps';
import dynamic from 'next/dynamic';
import OfficialResources from '@/app/components/blocks/OfficialResources';
const GuidePreview = dynamic(() => import('@/app/components/blocks/GuidePreview'), { ssr: false });
const AuroraSingle = dynamic(() => import('@/app/components/blocks/AuroraSingle'), { ssr: false });
import { getAllGuides } from '@/lib/guides';
import {
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  AcademicCapIcon,
  ScaleIcon,
  BookOpenIcon,
  IdentificationIcon,
  Squares2X2Icon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  InformationCircleIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'


import { generateStandardMetadata } from '@/lib/metadata-utils';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';

const standardMetadata = generateStandardMetadata({
  title: 'Invest in Nifty 50: Complete Guide to India\'s Index',
  description: 'Learn how to invest in Nifty 50 index funds, ETFs, and stocks. Compare top brokers, read guides, and start your journey.',
  url: baseUrl,
  pagePath: '/',
});

export const metadata: Metadata = {
  title: 'Invest in Nifty 50: Complete Guide to India\'s Index',
  description: 'Learn how to invest in Nifty 50 index funds, ETFs, and stocks. Compare top brokers, read guides, and start your journey.',
  ...standardMetadata,
  openGraph: {
    title: 'Invest in Nifty 50: Complete Guide to India\'s Index',
    description: 'Learn how to invest in Nifty 50 index funds, ETFs, and stocks. Compare top brokers, read guides, and start your journey.',
    url: baseUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invest in Nifty 50: Complete Guide to India\'s Index',
    description: 'Learn how to invest in Nifty 50 index funds, ETFs, and stocks. Compare top brokers, read guides, and start your journey.',
  },
};

export default async function Home() {

  const allGuides = getAllGuides();

  const services = [
    {
      name: "Indices",
      description: "Deep dive into Nifty 50, Bank Nifty, and Sensex analytics and historical performance.",
      href: `/indices`,
      icon: ChartBarIcon,
      buttonText: "Analyze Indices"
    },
    {
      name: "Brokers",
      description: "Unbiased reviews of India's top trading platforms like Zerodha, Groww, and Upstox.",
      href: `/brokers`,
      icon: BanknotesIcon,
      buttonText: "Find a Broker"
    },
    {
      name: "Guides",
      description: "Step-by-step tutorials for beginners. Learn how to open a Demat account and start trading.",
      href: `/guides`,
      icon: AcademicCapIcon,
      buttonText: "Start Learning"
    },
    {
      name: "Comparisons",
      description: "Head-to-head comparisons of ETFs, Index Funds, and brokerage charges.",
      href: `/comparisons`,
      icon: ScaleIcon,
      buttonText: "Compare Now"
    },
  ];

  const trustServices = [
    {
      name: "About Us",
      description: "Learn why we built this resource, what we focus on and how we aim to simplify market concepts for beginners.",
      href: `/about`,
      icon: InformationCircleIcon,
      buttonText: "Read more →"
    },
    {
      name: "How We Make Money",
      description: "Understand how our website earns revenue and why it does not influence the objectivity of our educational content.",
      href: `/about/how-we-make-money`,
      icon: CurrencyDollarIcon,
      buttonText: "Learn more →"
    },
    {
      name: "Review Methodology",
      description: "See how we evaluate trading apps and brokers using publicly available data, platform analysis and transparent comparison criteria.",
      href: `/about/review-methodology`,
      icon: ClipboardDocumentCheckIcon,
      buttonText: "View methodology →"
    },
    {
      name: "Financial Disclaimer",
      description: "Read our full disclaimer outlining the educational purpose of our content and our commitment to accuracy.",
      href: `/about/disclaimer`,
      icon: DocumentTextIcon,
      buttonText: "Open disclaimer →"
    },
  ];

  const whyIndiansInvestFeatures = [
    { name: 'Broad Market Exposure', description: "Gain diversified exposure to India's top 50 companies across major sectors through a single, well-established index.", icon: Squares2X2Icon },
    { name: 'Simple & Easy to Understand', description: 'The index offers a clear, rules-based snapshot of market performance, making it straightforward for beginners to follow.', icon: BookOpenIcon },
    { name: 'Low-Cost Access through ETFs', description: 'Most Nifty 50 ETFs have low expense ratios, providing an efficient and cost-effective way to build long-term exposure.', icon: BanknotesIcon },
    { name: 'Transparent & Rules-Driven', description: 'The index is maintained by NSE using publicly available selection criteria and scheduled rebalancing, ensuring clear and predictable methodology.', icon: ShieldCheckIcon },
    { name: 'Flexible for SIP or Lump-Sum Investing', description: 'Allows investors to build exposure gradually through SIPs or invest in one go, based on individual financial preferences.', icon: ArrowTrendingUpIcon },
    { name: 'Strong Historical Track Record', description: 'The Nifty 50 has a long performance history, enabling data-driven analysis of trends, volatility and long-term market behaviour.', icon: ChartBarIcon },
  ]

  const ourImpactStats = [
    { name: 'Companies in Index', value: '50' },
    { name: 'Sectors Represented', value: '13' },
    { name: '10-Year Average Return', value: '~12%' },
    { name: 'Total Market Capitalisation', value: '$1.4T+' },
    { name: 'Index Launch Year', value: '1996' },
    { name: 'Rebalancing Schedule', value: 'Semi-Annual' },
  ]

  return (
    <>
      <section id="hero">
        <Hero 
          title="How to Invest in NIFTY 50"
          subtitle="A clear, beginner-friendly guide to India's most important stock index. Learn how Nifty 50 works, explore ETFs and index funds, and compare SEBI-regulated brokers."
          buttonText="Start Nifty 50 Guide"
          buttonLink={`/guides`}
          secondaryButtonText="Compare Brokers"
          secondaryButtonLink={`/brokers`}
        />
      </section>
      <section id="how-to-invest" style={{ contentVisibility: 'auto' }}>
        <InvestmentSteps 
          title="How to Invest in the Nifty 50"
          description="Follow this clear, India-focused roadmap to understand the Nifty 50, choose the right investment product, and start investing with confidence."
          steps={[
            {
              name: 'Understand the Nifty 50 Index',
              description: 'Learn what the Nifty 50 represents, how the index is constructed, and why it\'s widely used as India\'s primary benchmark for tracking the stock market\'s overall performance.',
              icon: BookOpenIcon,
              href: '/indices/nifty-50-guide',
              linkText: 'Learn more'
            },
            {
              name: 'Open Your Demat & Trading Account',
              description: 'Set up your Demat and trading account with a SEBI-regulated broker. Complete your KYC, link your bank account, and activate essential trading features to begin investing with confidence.',
              icon: IdentificationIcon,
              href: '/guides/how-to-open-demat-account',
              linkText: 'Open account guide'
            },
            {
              name: 'Choose Your Investment Method',
              description: 'Decide whether to invest through Nifty 50 ETFs or index mutual funds. Compare their fees, flexibility and investing styles to determine which approach aligns best with your financial goals.',
              icon: Squares2X2Icon,
              href: '/comparisons',
              linkText: 'Explore options'
            },
            {
              name: 'Compare SEBI-Regulated Brokers',
              description: 'Review India\'s major brokers by fees, reliability, platform tools and customer support. This helps you identify the service that best fits your preferred way of managing your Nifty 50 investments.',
              icon: BuildingLibraryIcon,
              href: '/brokers/best-trading-apps-india',
              linkText: 'Compare brokers'
            }
          ]}
          padding="top-compact"
        />
      </section>
      <section id="top-guides">
        <TopicCardGrid 
          title="Top Guides for Investors in India"
          description="Explore our most popular, beginner-friendly guides created for Indian market participants. Compare brokers, platforms and investment products with clear, unbiased explanations."
          background="orange-very-light"
          cardStyle="saffron"
          services={[
            {
              name: "Best Trading Apps in India",
              description: "Compare India's leading trading apps by fees, reliability and platform features to choose the one that suits your investing style.",
              href: "/brokers/best-trading-apps-india",
              icon: DevicePhoneMobileIcon,
              buttonText: "Read guide"
            },
            {
              name: "Best Forex Brokers in India",
              description: "See how India-friendly forex brokers differ in safety, account types and available platforms, based on publicly available information.",
              href: "/brokers/best-forex-brokers-india",
              icon: CurrencyDollarIcon,
              buttonText: "Read guide"
            },
            {
              name: "Best Copy Trading Platforms",
              description: "Understand how copy trading works and compare platforms that offer reliable tools, transparent profiles and low starting requirements.",
              href: "/guides/best-copy-trading-platforms",
              icon: UserGroupIcon,
              buttonText: "Explore platforms"
            },
            {
              name: "Nifty 50 ETFs & Index Funds",
              description: "Review India's most popular Nifty 50 ETFs and index mutual funds to see how they differ in costs, liquidity and investing approach.",
              href: "/comparisons/nifty-50-etfs-index-funds",
              icon: ChartBarIcon,
              buttonText: "Compare products"
            }
          ]}
        />
      </section>
      <section id="official-resources">
        <OfficialResources
          title="Official Market Resources"
          description="We rely on publicly available data from India's primary exchanges, regulators and financial institutions to ensure that our research remains accurate, transparent and grounded in verified information. Every guide we publish is supported by official index methodology documents, regulatory circulars, corporate filings and market updates released directly by these authorities."
          closingText="By consistently referencing trusted sources — rather than opinions or speculation — we aim to give readers a clear, dependable understanding of how the Indian market operates and how the Nifty 50 is maintained, reviewed and updated over time. This foundation of reliable data allows you to explore investment concepts with confidence, knowing that the information you're reading is based on facts, not assumptions."
          background="white"
          resources={[
            {
              icon: ChartBarIcon,
              title: "National Stock Exchange of India (NSE)",
              description: "The official source for Nifty 50 index methodology, rebalancing updates, constituent lists and historical performance. NSE maintains and publishes all index data.",
              url: "https://www.nseindia.com/",
              abbreviation: "NSE"
            },
            {
              icon: BuildingOffice2Icon,
              title: "Bombay Stock Exchange (BSE)",
              description: "India's oldest stock exchange, providing official information on Sensex, sector indices, corporate filings and market announcements.",
              url: "https://www.bseindia.com/",
              abbreviation: "BSE"
            },
            {
              icon: ShieldCheckIcon,
              title: "Securities and Exchange Board of India (SEBI)",
              description: "India's financial regulator offering circulars, guidelines, compliance frameworks and investor-protection documentation for transparent market practices.",
              url: "https://www.sebi.gov.in/",
              abbreviation: "SEBI"
            },
            {
              icon: BanknotesIcon,
              title: "Reserve Bank of India (RBI)",
              description: "The country's central bank publishing monetary policy updates, interest rate decisions, liquidity data and macroeconomic indicators.",
              url: "https://www.rbi.org.in/",
              abbreviation: "RBI"
            }
          ]}
        />
      </section>
      <section id="why-indians-invest">
        <div className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0">
              <AuroraSingle />
            </div>
          </div>
          <FeatureList 
            title="Why Investors Choose the Nifty 50"
            description="Explore the key characteristics that make the Nifty 50 one of India's most widely followed market indicators."
            features={whyIndiansInvestFeatures}
            background="transparent"
          />
        </div>
      </section>
      <section id="market-overview">
        <StatsGrid 
          title="Market Overview"
          description="A data-driven snapshot of the Nifty 50, covering its composition, sector balance, historical performance and overall market scale. These core metrics help illustrate how India's benchmark index is structured and how it has evolved over time."
          stats={ourImpactStats}
        />
      </section>
      <section id="popular-broker-comparisons">
        <BrokerCarousel 
          title="Popular Broker Comparisons"
          description="Compare India's major SEBI-regulated brokers by fees, platforms, reliability and essential features. These guides are created for beginners who want a clear, fact-based overview."
          background="orange-very-light"
          cardStyle="saffron"
          padding="top-compact"
          brokers={[
            {
              name: "Zerodha",
              description: "India's largest discount broker known for its transparent fees and the widely used Kite trading platform.",
              href: "/brokers/zerodha-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "Upstox",
              description: "A SEBI-regulated broker offering fast onboarding, competitive pricing and a strong mobile trading experience.",
              href: "/brokers/upstox-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "Groww",
              description: "A beginner-friendly investment app providing ETFs, mutual funds and equities through a clean, intuitive interface.",
              href: "/brokers/groww-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "5Paisa",
              description: "A low-cost broker focused on affordability, simple pricing and easy access to equity, ETF and mutual fund investing.",
              href: "/brokers/5paisa-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "Dhan",
              description: "A new-generation trading platform designed for speed, smart tools and a smooth mobile investing experience.",
              href: "/brokers/dhan-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "Angel One",
              description: "A popular hybrid broker combining low-cost pricing with research tools, portfolio insights and beginner-friendly features.",
              href: "/brokers/angel-one-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "ICICI Direct",
              description: "A full-service broker offering research-backed tools, integrated banking features and a wide range of investment products.",
              href: "/brokers/icici-direct-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "HDFC Securities",
              description: "A trusted bank-backed brokerage known for reliability, detailed research and seamless integration with HDFC Bank accounts.",
              href: "/brokers/hdfc-securities-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "Kotak Securities",
              description: "A long-established broker providing research support, investment tools and strong connectivity with Kotak banking services.",
              href: "/brokers/kotak-securities-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            },
            {
              name: "SBI Securities",
              description: "A government-backed brokerage offering steady reliability, investor protection and access to a broad list of market products.",
              href: "/brokers/sbi-securities-review",
              iconName: "BuildingOffice2Icon",
              buttonText: "Read review"
            }
          ]}
        />
        <div className="bg-orange-50/30 dark:bg-brand-secondary pb-20 sm:pb-32 pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-center">
              <Link 
                href="/brokers" 
                className="rounded-md bg-brand-saffron px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-saffron-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-saffron"
              >
                Compare all brokers
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="learning-hub" style={{ contentVisibility: 'auto' }}>
        <GuidePreview initialPosts={allGuides} />
      </section>
      <section id="trust-transparency">
        <TopicCardGrid 
          title="Trust & Transparency"
          description="We provide clear information about how this website operates, how our reviews are created and how we maintain transparency with our readers."
          services={trustServices}
          background="white"
        />
      </section>
    </>
  );
}

