import type { Metadata } from 'next';
import Link from 'next/link';
import ContactUs from '@/app/components/blocks/ContactUs';
import { 
  EnvelopeIcon,
  InformationCircleIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Have questions or feedback? Contact us and we\'ll get back to you as soon as possible.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <EnvelopeIcon className="h-12 w-12 text-brand-silver" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            We're here to help. Whether you have questions about our content, notice an error, or want to share feedback, we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            
            {/* Ways to Reach Us */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Ways to Reach Us</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-brand-saffron" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                      <p className="text-lg text-gray-600 dark:text-brand-silver mb-2">
                        For general inquiries, questions, or feedback:
                      </p>
                      <p className="text-lg">
                        <a href="mailto:contact@nifty50investing.com" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                          contact@nifty50investing.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0">
                      <InformationCircleIcon className="h-6 w-6 text-brand-saffron" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact Form</h3>
                      <p className="text-lg text-gray-600 dark:text-brand-silver">
                        Use the form below to send us a message directly from this page. We'll respond as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-saffron/10 flex-shrink-0">
                      <ClockIcon className="h-6 w-6 text-brand-saffron" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
                      <p className="text-lg text-gray-600 dark:text-brand-silver">
                        We typically respond to inquiries within 1-2 business days. For urgent matters or corrections, please mark your message accordingly and we'll prioritize it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* What We Can Help With */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">What We Can Help With</h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver mb-4">
                We're happy to assist with:
              </p>
              <ul className="list-disc list-outside space-y-2 text-lg leading-8 text-gray-600 dark:text-brand-silver pl-6 mb-4">
                <li>Questions about our content, guides, or reviews</li>
                <li>Corrections or updates to information on our website</li>
                <li>Feedback about your experience using our website</li>
                <li>Technical issues or accessibility concerns</li>
                <li>Partnership or collaboration inquiries</li>
                <li>Media or press inquiries</li>
              </ul>
              <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                Please note that we cannot provide personalized investment advice, answer questions about specific investment decisions, or provide recommendations about individual securities or brokers. For investment advice, please consult with qualified financial professionals.
              </p>
            </section>

            {/* Privacy Note */}
            <section className="mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-brand-saffron p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <InformationCircleIcon className="h-6 w-6 text-brand-saffron flex-shrink-0" />
                  Privacy Note
                </p>
                <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                  We respect your privacy and will never share your contact information with third parties. Your messages are confidential and will only be used to respond to your inquiry. For more information, please read our <Link href="/privacy" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline font-semibold">Privacy Policy</Link>.
                </p>
              </div>
            </section>

            {/* Related Pages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Related Pages</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">You may also want to visit:</p>
                <ul className="space-y-2 text-lg text-gray-600 dark:text-brand-silver">
                  <li>
                    <Link href="/about" className="text-brand-saffron hover:text-brand-saffron-hover hover:underline">
                      About Us →
                    </Link>
                  </li>
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

      {/* Contact Form Section */}
      <ContactUs />
    </>
  );
}

