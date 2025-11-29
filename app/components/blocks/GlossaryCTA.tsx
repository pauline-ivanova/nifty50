import Link from 'next/link';
import { BookOpenIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function GlossaryCTA() {
  return (
    <div className="my-16 relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-emerald-50/95 to-teal-50 dark:from-emerald-950/40 dark:via-emerald-900/30 dark:to-teal-950/40 border border-emerald-200/60 dark:border-emerald-800/60 shadow-xl shadow-emerald-100/50 dark:shadow-emerald-900/20 p-8 sm:p-10 lg:p-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-200/30 dark:bg-teal-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/20 dark:bg-emerald-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Icon section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-60 animate-pulse"></div>
              <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 transform transition-transform hover:scale-105">
                <BookOpenIcon className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                📚 Glossary
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
              Explore Our Complete Financial Glossary
            </h3>
            <p className="text-base sm:text-lg leading-7 text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              Want to learn more financial terms? Visit our comprehensive glossary with detailed explanations of investment, trading, and market terminology.
            </p>
            <Link
              href="/glossary"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <span>View Full Glossary</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

