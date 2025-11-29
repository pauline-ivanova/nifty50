import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/app/components/blocks/FAQ';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/faq`;

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - FAQ',
  description: 'Find answers to common questions about our website, content, reviews, and services. Learn about Nifty 50 investing, broker selection, and our process.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Frequently Asked Questions - FAQ',
    description: 'Find answers to common questions about our website, content, reviews, and services. Learn about Nifty 50 investing, broker selection, and our process.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Frequently Asked Questions - FAQ',
    description: 'Find answers to common questions about our website, content, reviews, and services. Learn about Nifty 50 investing, broker selection, and our process.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

const faqs = [
  {
    question: 'What is How to Invest in NIFTY 50?',
    answer: 'How to Invest in NIFTY 50 is an educational resource dedicated to helping people understand India\'s stock market, particularly the Nifty 50 index. We provide guides, broker reviews, comparisons, and educational content to help beginners and experienced investors make informed decisions.',
    category: 'About Us'
  },
  {
    question: 'Is your content free?',
    answer: 'Yes, all our content, guides, comparisons, and reviews are completely free to access. We do not charge readers for reading our articles or using our comparison tools. Our revenue comes from affiliate partnerships with brokers, which allows us to keep our content free.',
    category: 'About Us'
  },
  {
    question: 'Do you provide investment advice?',
    answer: 'No, we do not provide investment advice, trading recommendations, or personalized financial planning. Our content is educational and informational only. We explain concepts, compare options, and provide information to help you make your own informed decisions. For investment advice, please consult with qualified financial professionals.',
    category: 'Content & Services'
  },
  {
    question: 'How do you make money?',
    answer: 'We earn revenue through affiliate partnerships with SEBI-regulated brokers. When you click on a broker link and subsequently open an account or make a transaction, we may receive a commission. This does not affect the fees or services you receive from brokers. For detailed information, please read our "How We Make Money" page.',
    category: 'About Us'
  },
  {
    question: 'Do affiliate partnerships influence your reviews?',
    answer: 'No, our affiliate partnerships do not influence our editorial content, reviews, or rankings. We maintain strict separation between our editorial and commercial teams. Content writers do not know which brokers are partners when writing reviews. All reviews are based on objective criteria regardless of partnership status.',
    category: 'Content & Services'
  },
  {
    question: 'How do you evaluate brokers?',
    answer: 'We evaluate brokers using consistent, objective criteria including regulation and safety, fees and commissions, platform features, account opening process, product availability, payment options, and customer support. Our evaluation methodology is publicly documented and consistently applied. For details, please read our "Review Methodology" page.',
    category: 'Content & Services'
  },
  {
    question: 'How often do you update your content?',
    answer: 'We regularly review and update our content, typically every 3-6 months. We also update content promptly when significant changes occur, such as regulatory changes, fee updates, or major platform changes. If you notice outdated information, please contact us.',
    category: 'Content & Services'
  },
  {
    question: 'Can I trust your broker reviews?',
    answer: 'Yes, our reviews are based on independent research, hands-on platform testing, and analysis of publicly available information. We verify all information using official sources, test platforms ourselves when possible, and maintain editorial independence from commercial partnerships. We present both strengths and limitations of each broker.',
    category: 'Content & Services'
  },
  {
    question: 'What sources do you use for information?',
    answer: 'We prioritize information from official and authoritative sources including SEBI (Securities and Exchange Board of India), NSE (National Stock Exchange), BSE (Bombay Stock Exchange), RBI (Reserve Bank of India), broker websites, regulatory filings, and public records. We verify information from multiple sources when possible.',
    category: 'Content & Services'
  },
  {
    question: 'Do you charge fees for using affiliate links?',
    answer: 'No, using our affiliate links does not increase the cost of broker services for you. The commission we receive comes from the broker\'s marketing budget, not from your fees or charges. You receive exactly the same pricing and features whether you use our links or visit brokers directly.',
    category: 'Affiliate Links'
  },
  {
    question: 'Can I visit broker websites directly without using your links?',
    answer: 'Yes, absolutely. You can visit broker websites directly without using our affiliate links. You will receive the same pricing, features, and services. Using our links simply helps support our free educational content, but it\'s entirely your choice.',
    category: 'Affiliate Links'
  },
  {
    question: 'How can I report an error or outdated information?',
    answer: 'If you notice an error or outdated information, please contact us through our Contact page or email us at info@howtoinvestinnifty50.com. We appreciate feedback and will correct errors promptly. Please include the URL of the page and details about the issue.',
    category: 'General'
  },
  {
    question: 'Can I use your content on my website?',
      answer: 'Our content is protected by copyright. You may not reproduce, distribute, or transmit our content without our prior written permission. However, you may share links to our articles and quote brief excerpts for non-commercial, educational purposes, provided you attribute the content to How to Invest in NIFTY 50 and include a link to the original source.',
    category: 'General'
  },
  {
    question: 'Do you have a newsletter or email updates?',
    answer: 'We are currently working on implementing email updates and newsletters. If you would like to be notified when this feature becomes available, please contact us or check back on our website.',
    category: 'General'
  },
  {
    question: 'How can I contact you?',
    answer: 'You can contact us through our Contact page, email us at info@howtoinvestinnifty50.com, or use the contact form on our website. We typically respond to inquiries within 1-2 business days.',
    category: 'General'
  },
  {
    question: 'Are you affiliated with SEBI, NSE, or BSE?',
    answer: 'No, we are not affiliated with, endorsed by, or sponsored by SEBI, NSE, BSE, or any other regulatory body or exchange. We are an independent educational resource. We reference these organizations as sources of official information, but we have no official relationship with them.',
    category: 'About Us'
  },
  {
    question: 'Do you review all brokers?',
    answer: 'We focus on reviewing SEBI-regulated brokers that are relevant to our readers\' needs. We prioritize brokers that offer services related to Nifty 50 investing, index funds, ETFs, and general stock market trading. We may not review every broker, but we aim to cover the most relevant options for our audience.',
    category: 'Content & Services'
  },
  {
    question: 'Can brokers pay to be featured or ranked higher?',
    answer: 'No, we do not accept payment to place brokers higher in rankings or comparison tables. We do not write paid reviews or accept compensation to create positive content. Every review is based on objective evaluation criteria, regardless of partnership status.',
    category: 'Content & Services'
  }
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <QuestionMarkCircleIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            Find answers to common questions about our website, content, reviews, and services.
          </p>
        </div>
      </div>

      {/* FAQ Component */}
      <FAQ
        title=""
        description=""
        faqs={faqs}
        ctaText="Still have questions? We're here to help."
        ctaButtonText="Contact Us"
        background="white"
        categoriesLabel="Categories"
      />

      {/* Additional Information Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Related Pages</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Learn more:</p>
                <ul className="space-y-2 text-lg text-gray-600 dark:text-brand-silver">
                  <li>
                    <Link href="/about" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      About Us →
                    </Link>
                  </li>
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
                    <Link href="/contact" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Contact Us →
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

