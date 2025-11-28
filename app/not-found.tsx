import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Could not find requested resource</p>
      <Link
        href="/"
        className="rounded-md bg-brand-saffron px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-saffron-hover"
      >
        Return Home
      </Link>
    </div>
  )
}

