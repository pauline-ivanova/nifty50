import { getAllGuides } from '@/lib/guides';
import Link from 'next/link';

const categoryColors: { [key: string]: string } = {
  'Investing': 'bg-green-100 text-green-800',
  'Trading': 'bg-blue-100 text-blue-800',
  'Analysis': 'bg-purple-100 text-purple-800',
  'Basics': 'bg-yellow-100 text-yellow-800',
};

export default function GuidesPage() {
  const allGuides = getAllGuides();

  return (
    <>
      <div className="relative isolate bg-gradient-to-b from-emerald-600 to-emerald-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Investment Guides</h1>
            <p className="mt-6 text-lg leading-8 text-emerald-100">
              Master the market with our expert tutorials, strategies, and deep dives into Nifty 50 investing.
            </p>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {allGuides.map((guide) => {
              const colorClasses = categoryColors[guide.category] || 'bg-gray-100 text-gray-800';
              return (
                <article key={guide.slug} className="flex flex-col items-start self-start">
                  <div className="relative w-full">
                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]"></div>
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-sm">
                      <div className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${colorClasses}`}>
                        {guide.category}
                      </div>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={`/guides/${guide.slug}`}>
                          <span className="absolute inset-0" />
                          {guide.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{guide.excerpt}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

