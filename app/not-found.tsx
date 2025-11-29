import Link from 'next/link'
import { HomeIcon, MagnifyingGlassIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
const AuroraBackground = dynamic(() => import('@/app/components/blocks/AuroraBackground'), { ssr: false })

export default function NotFound() {
  return (
    <div className="relative isolate bg-white">
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-b from-brand-primary to-brand-secondary overflow-hidden">
        <AuroraBackground blendMode="normal" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-white mb-4">404</h1>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Page Not Found</h2>
            <p className="mt-6 text-lg leading-8 text-brand-silver max-w-2xl mx-auto">
              Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might be incorrect.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-brand-saffron px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-saffron-hover transition-colors flex items-center gap-2"
              >
                <HomeIcon className="h-5 w-5" />
                Return Home
              </Link>
              <Link
                href="/guides"
                className="text-base font-semibold leading-6 text-white hover:text-brand-silver transition-colors flex items-center gap-2"
              >
                <BookOpenIcon className="h-5 w-5" />
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Helpful Links Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Where would you like to go?
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link
              href="/"
              className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-8 hover:bg-gray-100 transition-colors group"
            >
              <HomeIcon className="h-10 w-10 text-brand-saffron group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Home</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Return to the homepage and explore our investment guides and resources.
                </p>
              </div>
            </Link>
            <Link
              href="/brokers"
              className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-8 hover:bg-gray-100 transition-colors group"
            >
              <ChartBarIcon className="h-10 w-10 text-brand-saffron group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Brokers</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Compare top brokers and find the best platform for your investments.
                </p>
              </div>
            </Link>
            <Link
              href="/guides"
              className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-8 hover:bg-gray-100 transition-colors group"
            >
              <BookOpenIcon className="h-10 w-10 text-brand-saffron group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Guides</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Learn about investing in Nifty 50 and explore our comprehensive guides.
                </p>
              </div>
            </Link>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="text-base font-semibold text-brand-saffron hover:text-brand-saffron-hover transition-colors flex items-center justify-center gap-2"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              Can't find what you're looking for? Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

