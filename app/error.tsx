'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="rounded-md bg-brand-saffron px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-saffron-hover"
      >
        Try again
      </button>
    </div>
  )
}

