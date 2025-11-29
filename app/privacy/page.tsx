import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheckIcon,
  InformationCircleIcon,
  UserGroupIcon,
  LockClosedIcon,
  DocumentTextIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://howtoinvestinnifty50.com';
const pageUrl = `${baseUrl}/privacy`;

export const metadata: Metadata = {
  title: 'Privacy Policy - Your Data Protection Rights',
  description: 'Learn how we collect, use, and protect your personal information. Our commitment to your privacy and data security when using our Nifty 50 resources.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-IN': pageUrl,
      'x-default': pageUrl,
    },
  },
  openGraph: {
    title: 'Privacy Policy - Your Data Protection Rights',
    description: 'Learn how we collect, use, and protect your personal information. Our commitment to your privacy and data security when using our Nifty 50 resources.',
    url: pageUrl,
    siteName: 'How to Invest in NIFTY 50',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - Your Data Protection Rights',
    description: 'Learn how we collect, use, and protect your personal information. Our commitment to your privacy and data security when using our Nifty 50 resources.',
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <ShieldCheckIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Privacy Policy</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Introduction</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                At How to Invest in NIFTY 50, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                By using our website, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our website.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <InformationCircleIcon className="h-8 w-8 text-brand-saffron" />
                Information We Collect
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information You Provide</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We may collect information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>Contact us through our contact form or email</li>
                    <li>Subscribe to our newsletter or updates (if applicable)</li>
                    <li>Participate in surveys or feedback forms</li>
                    <li>Comment on articles or interact with our content</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mt-4">
                    This information may include your name, email address, phone number, company name, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Automatically Collected Information</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information (type, operating system)</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Clickstream data and navigation patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cookies and Tracking Technologies</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. For detailed information about our use of cookies, please see the <Link href="#cookies" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">Cookies section</Link> below.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <UserGroupIcon className="h-8 w-8 text-brand-saffron" />
                How We Use Your Information
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li><strong>To provide and improve our services:</strong> We use your information to deliver content, respond to inquiries, and enhance your experience on our website.</li>
                <li><strong>To communicate with you:</strong> We may use your contact information to respond to your questions, provide customer support, and send you updates about our content (if you have subscribed).</li>
                <li><strong>To analyze website usage:</strong> We analyze how visitors use our website to improve our content, user experience, and website functionality.</li>
                <li><strong>To ensure security:</strong> We use information to detect and prevent fraud, abuse, and other security threats.</li>
                <li><strong>To comply with legal obligations:</strong> We may use your information to comply with applicable laws, regulations, and legal processes.</li>
                <li><strong>For affiliate tracking:</strong> When you click on affiliate links to broker platforms, we may track these clicks to manage our affiliate relationships (this does not personally identify you).</li>
              </ul>
            </section>

            {/* Information Sharing and Disclosure */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <LockClosedIcon className="h-8 w-8 text-brand-saffron" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Service Providers</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We may share information with third-party service providers who perform services on our behalf, such as website hosting, analytics, email delivery, and customer support. These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Legal Requirements</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Business Transfers</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">With Your Consent</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We may share your information with your explicit consent or at your direction.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ShieldCheckIcon className="h-8 w-8 text-brand-saffron" />
                Data Security
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Cookies Section */}
            <section id="cookies" className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <InformationCircleIcon className="h-8 w-8 text-brand-saffron" />
                Cookies and Tracking Technologies
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What Are Cookies?</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Cookies</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                    <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</li>
                    <li><strong>Analytics cookies:</strong> We use analytics cookies to understand how visitors interact with our website, which helps us improve our content and user experience.</li>
                    <li><strong>Functional cookies:</strong> These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced features.</li>
                    <li><strong>Marketing cookies:</strong> These cookies may be used to track your browsing activity across different websites to provide you with relevant advertisements (we do not currently use these extensively).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Managing Cookies</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, if you disable cookies, some features of our website may not function properly.
                  </p>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    You can also opt out of certain third-party cookies by visiting the Network Advertising Initiative's opt-out page or the Digital Advertising Alliance's opt-out page.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Links */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Third-Party Links</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Our website contains links to third-party websites, including broker platforms, trading apps, and other external resources. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                When you click on affiliate links to broker platforms, you will be redirected to those platforms' websites, which have their own privacy policies. We do not control how these third parties collect or use your information.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Your Rights</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li><strong>Right to access:</strong> You can request a copy of the personal information we hold about you.</li>
                <li><strong>Right to rectification:</strong> You can request that we correct inaccurate or incomplete information.</li>
                <li><strong>Right to erasure:</strong> You can request that we delete your personal information in certain circumstances.</li>
                <li><strong>Right to restrict processing:</strong> You can request that we limit how we use your information.</li>
                <li><strong>Right to data portability:</strong> You can request a copy of your information in a structured, machine-readable format.</li>
                <li><strong>Right to object:</strong> You can object to certain types of processing of your information.</li>
                <li><strong>Right to withdraw consent:</strong> If we process your information based on consent, you can withdraw that consent at any time.</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                To exercise any of these rights, please contact us using the contact information provided at the end of this policy.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Children's Privacy</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will delete such information from our records.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Changes to This Privacy Policy</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <EnvelopeIcon className="h-8 w-8 text-brand-saffron" />
                Contact Information
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
                    <Link href="/terms" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Terms & Conditions →
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

