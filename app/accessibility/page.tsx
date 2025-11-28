import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Cog6ToothIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Our Commitment to Accessibility',
  description: 'Learn about our commitment to making our website accessible to all users, including those with disabilities.',
};

export default function AccessibilityPage() {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Cog6ToothIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Accessibility Statement</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            We are committed to making our website accessible to all users, including those with disabilities.
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
            
            {/* Our Commitment */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Our Commitment</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Nifty 50 Investing is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve these goals.
              </p>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards, which explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
              </p>
            </section>

            {/* Accessibility Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircleIcon className="h-8 w-8 text-brand-saffron" />
                Accessibility Features
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We have implemented the following accessibility features on our website:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Keyboard Navigation</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our website can be navigated using only a keyboard. All interactive elements are accessible via keyboard shortcuts, and we maintain logical tab order throughout the site.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Screen Reader Compatibility</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We use semantic HTML and ARIA labels where appropriate to ensure that screen readers can properly interpret and navigate our content. Images include descriptive alt text.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Color Contrast</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We maintain sufficient color contrast ratios between text and background colors to ensure readability for users with visual impairments. We do not rely solely on color to convey information.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Text Alternatives</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    All images, charts, and other non-text content include appropriate text alternatives. Decorative images are marked appropriately so screen readers can skip them.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Responsive Design</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    Our website is designed to be responsive and accessible across different devices and screen sizes, including mobile phones, tablets, and desktop computers.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Clear Structure</h3>
                  <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    We use clear headings, lists, and structure to organize content logically. This helps users navigate and understand the content more easily.
                  </p>
                </div>
              </div>
            </section>

            {/* Known Limitations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <ExclamationTriangleIcon className="h-8 w-8 text-brand-saffron" />
                Known Limitations
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Despite our best efforts to ensure accessibility, there may be some limitations. We are aware of the following areas and are working to improve them:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Some third-party content or embedded elements may not be fully accessible</li>
                <li>Older content may not meet current accessibility standards (we are working to update it)</li>
                <li>Some interactive features may require JavaScript, which could affect users with certain assistive technologies</li>
                <li>PDF documents (if any) may not be fully accessible to screen readers</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                We are committed to addressing these limitations and improving accessibility across our website. If you encounter any accessibility barriers, please contact us so we can address them.
              </p>
            </section>

            {/* Ongoing Improvements */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Ongoing Improvements</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We are continuously working to improve the accessibility of our website. Our ongoing efforts include:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                <li>Regular accessibility audits and testing</li>
                <li>Training our team on accessibility best practices</li>
                <li>Implementing accessibility improvements in new content and features</li>
                <li>Updating older content to meet current accessibility standards</li>
                <li>Staying informed about accessibility guidelines and best practices</li>
                <li>Testing with assistive technologies and getting feedback from users</li>
              </ul>
            </section>

            {/* Feedback and Contact */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <EnvelopeIcon className="h-8 w-8 text-brand-saffron" />
                Feedback and Contact
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We welcome feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email:</p>
                <p className="text-lg text-gray-600 dark:text-brand-silver mb-4">
                  <a href="mailto:accessibility@nifty50investing.com" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                    accessibility@nifty50investing.com
                  </a>
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Page:</p>
                <p className="text-lg text-gray-600 dark:text-brand-silver">
                  <Link href="/contact" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                    Visit our Contact Page →
                  </Link>
                </p>
              </div>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                When contacting us about accessibility issues, please include:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                <li>The URL of the page where you encountered the issue</li>
                <li>A description of the accessibility barrier</li>
                <li>Information about your assistive technology (if applicable)</li>
                <li>Any suggestions for improvement</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mt-4">
                We will respond to your feedback within 1-2 business days and work to address accessibility issues promptly.
              </p>
            </section>

            {/* Standards and Guidelines */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <InformationCircleIcon className="h-8 w-8 text-brand-saffron" />
                Standards and Guidelines
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                Our accessibility efforts are guided by:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6">
                <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines published by the World Wide Web Consortium (W3C)</li>
                <li><strong>Section 508:</strong> Standards for federal websites (as applicable)</li>
                <li><strong>Best practices:</strong> Industry best practices for web accessibility</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mt-4">
                We aim to meet or exceed these standards in our website design and content creation.
              </p>
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
                    <Link href="/terms" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      Terms & Conditions →
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

