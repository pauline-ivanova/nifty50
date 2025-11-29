import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  DocumentTextIcon,
  ExclamationTriangleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/terms`;

export const metadata: Metadata = {
  title: 'Terms & Conditions - Website Usage Terms',
  description: 'Read our terms and conditions governing your use of our website, content, and services. Understand your rights and responsibilities for Nifty 50 resources.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Terms & Conditions - Website Usage Terms',
    description: 'Read our terms and conditions governing your use of our website, content, and services. Understand your rights and responsibilities for Nifty 50 resources.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions - Website Usage Terms',
    description: 'Read our terms and conditions governing your use of our website, content, and services. Understand your rights and responsibilities for Nifty 50 resources.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Terms & Conditions</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            Please read these terms carefully before using our website. By using our site, you agree to these terms.
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
            
            {/* Acceptance of Terms */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ScaleIcon className="h-8 w-8 text-brand-saffron" />
                Acceptance of Terms
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                These Terms & Conditions ("Terms") govern your access to and use of the How to Invest in NIFTY 50 website, including all content, features, and services provided on or through the website.
              </p>
            </section>

            {/* Use License */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <InformationCircleIcon className="h-8 w-8 text-brand-saffron" />
                Use License
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Permission is granted to temporarily access and use the materials on How to Invest in NIFTY 50's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            {/* Educational Content Disclaimer */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ExclamationTriangleIcon className="h-8 w-8 text-brand-saffron" />
                Educational Content Disclaimer
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                The content on this website is provided for educational and informational purposes only. It is not intended as financial, investment, or trading advice. We are not a SEBI-registered investment advisor, financial consultant, or trading advisor.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                The information provided on this website should not be construed as:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Investment recommendations or advice</li>
                <li>Trading signals or buy/sell recommendations</li>
                <li>Personalized financial planning or portfolio management advice</li>
                <li>Guarantees of investment returns or performance</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                For detailed information about the limitations of our content, please read our <Link href="/about/disclaimer" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">Financial Disclaimer</Link>.
              </p>
            </section>

            {/* Accuracy of Information */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Accuracy of Information</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Financial markets, regulations, broker policies, and platform features change frequently. Information may become outdated without immediate notice. We recommend verifying all critical information directly with brokers, exchanges, or regulatory bodies before making any decisions.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ShieldCheckIcon className="h-8 w-8 text-brand-saffron" />
                Limitation of Liability
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                In no event shall How to Invest in NIFTY 50, its owners, operators, authors, contributors, or affiliates be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This includes, but is not limited to:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Financial losses resulting from investment or trading decisions</li>
                <li>Losses arising from reliance on information provided on this website</li>
                <li>Losses resulting from errors, omissions, or inaccuracies in content</li>
                <li>Losses arising from technical issues, website downtime, or service interruptions</li>
                <li>Losses resulting from use of third-party websites or services linked from our website</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            {/* Third-Party Links and Services */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Third-Party Links and Services</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Our website contains links to third-party websites, including broker platforms, trading apps, exchanges, and other external resources. These links are provided for your convenience and informational purposes only.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We do not control, endorse, or assume responsibility for:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>The content, accuracy, or availability of third-party websites</li>
                <li>The privacy practices or policies of third-party websites</li>
                <li>The terms of service or user agreements of third-party platforms</li>
                <li>The fees, services, or features offered by third-party brokers or platforms</li>
                <li>Any losses or damages resulting from your use of third-party websites or services</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                When you click on affiliate links to broker platforms, you will be subject to those platforms' terms and conditions, privacy policies, and fee structures. We are not responsible for any transactions, agreements, or relationships you enter into with third parties.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Intellectual Property</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of How to Invest in NIFTY 50 or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                You may not:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Reproduce, distribute, or transmit any content without our prior written permission</li>
                <li>Use our trademarks, logos, or brand names without authorization</li>
                <li>Create derivative works based on our content</li>
                <li>Use our content for commercial purposes without a license</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                You may share links to our articles and quote brief excerpts for non-commercial, educational purposes, provided you attribute the content to How to Invest in NIFTY 50 and include a link to the original source.
              </p>
            </section>

            {/* User Conduct */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">User Conduct</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others, including intellectual property rights</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the website's operation or security</li>
                <li>Use automated systems (bots, scrapers) to access the website without permission</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Collect or store personal information about other users</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We reserve the right to terminate or restrict your access to the website if you violate these terms or engage in any prohibited conduct.
              </p>
            </section>

            {/* Affiliate Relationships */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Affiliate Relationships</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                This website may contain affiliate links to broker platforms and trading apps. When you click on these links and subsequently open an account or make transactions, we may receive a commission from those brokers.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Important points about our affiliate relationships:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Our affiliate relationships do not influence our editorial content, reviews, or rankings</li>
                <li>Using our affiliate links does not increase the cost of broker services for you</li>
                <li>We only partner with SEBI-regulated brokers that meet our standards</li>
                <li>We maintain strict separation between editorial and commercial teams</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                For more information, please read our <Link href="/about/how-we-make-money" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">How We Make Money</Link> page.
              </p>
            </section>

            {/* Modifications to Terms */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Modifications to Terms</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We reserve the right to revise these Terms & Conditions at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We will notify you of any material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the website after such changes constitutes your acceptance of the revised Terms.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Termination</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We reserve the right to terminate or suspend your access to the website, with or without cause or notice, for any reason, including breach of these Terms.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Upon termination, your right to use the website will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Governing Law</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Any disputes arising out of or relating to these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts located in India.
              </p>
            </section>

            {/* Severability */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Severability</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
              </p>
            </section>

            {/* Entire Agreement */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Entire Agreement</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                These Terms & Conditions, together with our Privacy Policy and Financial Disclaimer, constitute the entire agreement between you and How to Invest in NIFTY 50 regarding your use of the website and supersede all prior agreements and understandings.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <EnvelopeIcon className="h-8 w-8 text-brand-saffron" />
                Contact Information
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                If you have questions about these Terms & Conditions, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email:</p>
                <p className="text-lg text-gray-600 dark:text-brand-silver mb-4">
                  <a href="mailto:info@howtoinvestinnifty50.com" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                    info@howtoinvestinnifty50.com
                  </a>
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Page:</p>
                <p className="text-lg text-gray-600 dark:text-brand-silver">
                  <Link href="/contact" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                    Visit our Contact Page →
                  </Link>
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
                    <Link href="/privacy" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Privacy Policy →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/disclaimer" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Financial Disclaimer →
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/how-we-make-money" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      How We Make Money →
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

