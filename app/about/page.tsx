import type { Metadata } from 'next';
import Link from 'next/link';
import ContactUs from '@/app/components/blocks/ContactUs';
import { 
  InformationCircleIcon,
  AcademicCapIcon,
  ScaleIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  HeartIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us - Nifty 50 Investing Guide',
  description: 'Learn why we built this resource, what we focus on and how we aim to simplify market concepts for beginners.',
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <InformationCircleIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            We're here to help you understand India's stock market and make informed investment decisions with confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            
            {/* Our Mission */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We exist to demystify India's stock market for new investors. Our goal is to provide clear, accurate, and accessible information about the Nifty 50 index, SEBI-regulated brokers, and investment products. We believe that everyone deserves access to reliable financial education, regardless of their experience level.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mt-4">
                By breaking down complex concepts into simple explanations and providing transparent comparisons, we help you navigate your investment journey with confidence. Whether you're opening your first Demat account or exploring index funds, we're here to support your learning every step of the way.
              </p>
            </section>

            {/* What We Do */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">What We Do</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                Our website serves as a comprehensive resource for anyone interested in investing in India's stock market. Here's what we focus on:
              </p>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <DocumentTextIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>We explain</strong> complex financial concepts in beginner-friendly language, making market terminology and investment strategies accessible to everyone.</span>
                </p>

                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <ScaleIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>We compare</strong> brokers, platforms, ETFs, and investment products side-by-side, highlighting fees, features, and differences to help you make informed choices.</span>
                </p>

                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <ChartBarIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>We structure</strong> information clearly, organizing guides, reviews, and comparisons in a logical way that makes it easy to find what you need.</span>
                </p>

                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <MagnifyingGlassIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>We publish data</strong> from official sources like NSE, BSE, SEBI, and RBI, ensuring that our content is grounded in verified, reliable information.</span>
                </p>

                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <AcademicCapIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>We create educational content</strong> that covers everything from basic concepts to advanced strategies, helping you build your knowledge progressively.</span>
                </p>
              </div>

              <div className="space-y-8 mt-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <AcademicCapIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Educational Content
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our guides cover essential topics like how to open a Demat account, understanding the Nifty 50 index, comparing ETFs and index funds, and navigating the Indian stock market. Each guide is written with beginners in mind, using clear language and practical examples.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <ScaleIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Platform Reviews & Comparisons
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We provide detailed reviews of SEBI-regulated brokers and trading platforms, evaluating them based on fees, platform features, customer support, and reliability. Our comparison tables help you quickly identify which broker best fits your needs and trading style.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <ChartBarIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Independent Market Insights
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We analyze market data, index performance, and investment trends to provide insights that help you understand how the Indian stock market works. Our analysis is based on publicly available information from official sources, not speculation or opinions.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Editorial Approach */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Editorial Approach</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                We create content without recommendations, focusing on facts and official sources. Our approach is straightforward: we present information clearly and let you make your own informed decisions based on your individual needs and circumstances.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <ShieldCheckIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Data From Official Sources
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We rely on publicly available data from India's primary financial institutions and regulators:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li><strong>NSE (National Stock Exchange)</strong> - Official index methodology, constituent lists, and historical performance data</li>
                    <li><strong>BSE (Bombay Stock Exchange)</strong> - Market data, corporate filings, and exchange announcements</li>
                    <li><strong>SEBI (Securities and Exchange Board of India)</strong> - Regulatory circulars, broker registrations, and compliance frameworks</li>
                    <li><strong>RBI (Reserve Bank of India)</strong> - Monetary policy updates, interest rate decisions, and macroeconomic indicators</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mt-4">
                    By using official sources, we ensure that our content is accurate, verifiable, and based on facts rather than opinions or marketing materials.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <AcademicCapIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Clear, Beginner-Friendly Explanations
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We believe that financial education should be accessible to everyone. That's why we avoid jargon, explain technical terms when we use them, and break down complex concepts into digestible pieces. Our content is designed for people who are new to investing, but we also provide depth for those who want to learn more.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <ScaleIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Neutral and Transparent Analysis
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We present information neutrally, highlighting both strengths and limitations of brokers, platforms, and investment products. We don't tell you what to choose—instead, we provide the information you need to make your own decision. When we compare options, we use consistent criteria and clearly explain our evaluation methods.
                  </p>
                </div>
              </div>
            </section>

            {/* Why You Can Trust Us */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Why You Can Trust Us</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                Trust is fundamental to what we do. We've built our reputation on accuracy, transparency, and independence. Here's how we maintain the highest standards:
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <ShieldCheckIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    No Sponsored Rankings
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We do not accept payment to place brokers higher in our rankings or comparison tables. Every review and comparison is based on objective evaluation of publicly available information, including SEBI registration, fee structures, platform features, and customer support quality.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <CheckCircleIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Strict Review Criteria
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We evaluate every broker and platform using the same comprehensive set of criteria, including regulation and safety, fees and commissions, platform features, account opening process, product availability, payment options, and customer support. This consistent approach ensures fair and meaningful comparisons.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <MagnifyingGlassIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Independent Research Process
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our editorial team conducts independent research using official sources, platform testing, and analysis of publicly available information. We verify all claims, check regulatory status, and test platform features ourselves. Our research process is documented and transparent, as outlined in our <Link href="/about/review-methodology" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">Review Methodology</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Stay Objective */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">How We Stay Objective</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                Maintaining objectivity is crucial to our mission. We've implemented processes and policies that ensure our content remains independent and unbiased. Learn more about our approach in our <Link href="/about/review-methodology" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">Review Methodology</Link>.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <CheckCircleIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Consistent Evaluation Framework
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Every broker and platform is evaluated using the same documented criteria and scoring methodology. We apply these standards consistently across all reviews, ensuring that comparisons are fair and meaningful. This prevents subjective bias from influencing our assessments.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <ShieldCheckIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Separation of Editorial and Commercial Workflows
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our editorial team operates independently from our business development and affiliate partnership teams. Content writers and reviewers do not know which brokers are affiliate partners when conducting research and writing reviews. This separation ensures that our assessments are based solely on objective criteria, not commercial considerations.
                  </p>
                </div>
              </div>
            </section>

            {/* Who We Create Content For */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Who We Create Content For</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                Our content is designed for a diverse audience of people interested in India's stock market:
              </p>
              
              <div className="space-y-6">
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <UserGroupIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>New investors</strong> who are just starting their investment journey and need clear, step-by-step guidance on opening accounts, understanding the market, and making their first investments.</span>
                </p>

                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <ChartBarIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>People learning about Nifty 50</strong> who want to understand how the index works, how it's constructed, and how to invest in it through ETFs or index funds.</span>
                </p>

                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <ScaleIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>Users comparing Indian brokers</strong> who need detailed information about fees, platform features, and services to choose the broker that best fits their needs.</span>
                </p>

                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0 mt-0.5">
                    <AcademicCapIcon className="h-5 w-5 text-brand-saffron" />
                  </span>
                  <span><strong>Readers looking for clear explanations</strong> who want to understand financial concepts, market terminology, and investment strategies without jargon or unnecessary complexity.</span>
                </p>
              </div>
            </section>

            {/* Our Values */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Values</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                These core values guide everything we do:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <ShieldCheckIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Transparency
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We're open about how we operate, how we make money, and how we conduct our reviews. We believe transparency builds trust and helps you make informed decisions about the information you're reading.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <CheckCircleIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Accuracy
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We verify all information using official sources and regularly update our content to reflect changes in fees, regulations, and platform features. Accuracy is non-negotiable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <AcademicCapIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Simplicity
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We believe that financial education should be accessible. We break down complex concepts into simple explanations, avoid unnecessary jargon, and present information in a clear, organized way.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <ScaleIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Independence
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our editorial team operates independently from commercial partnerships. Content decisions are based on reader needs and educational value, not potential revenue impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10">
                      <HeartIcon className="h-5 w-5 text-brand-saffron" />
                    </div>
                    Educational Value
                  </h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Every piece of content we create is designed to help you learn and make better investment decisions. We focus on providing value through education, not through sales pitches or recommendations.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Contact Us</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-8">
                We're here to help. Whether you have questions about our content, notice an error that needs correction, or want to share feedback, we'd love to hear from you.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10">
                        <EnvelopeIcon className="h-5 w-5 text-brand-saffron" />
                      </div>
                      Email
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-brand-silver ml-9">
                      Send us an email at <a href="mailto:contact@nifty50investing.com" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">contact@nifty50investing.com</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10">
                        <DocumentTextIcon className="h-5 w-5 text-brand-saffron" />
                      </div>
                      Contact Form
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-brand-silver ml-9">
                      Use the form below to send us a message directly from this page.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-saffron/10">
                        <UserGroupIcon className="h-5 w-5 text-brand-saffron" />
                      </div>
                      Social Media
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-brand-silver ml-9">
                      Follow us on social media for updates, market insights, and educational content. (Links to be added)
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We typically respond to inquiries within 1-2 business days. For urgent matters or corrections, please mark your message accordingly and we'll prioritize it.
              </p>
            </section>

            {/* Related Pages */}
            <section className="mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learn more about how we operate:</p>
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
                    <Link href="/about/disclaimer" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Financial Disclaimer →
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactUs />
    </>
  );
}

