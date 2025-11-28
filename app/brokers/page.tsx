import { getSortedBrokersData } from "@/lib/brokers";
import Link from "next/link";

export default function BrokersPage() {
  const brokers = getSortedBrokersData();

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Top Brokers & Reviews</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brokers.map((broker) => (
          <li key={broker.slug} className="rounded-2xl bg-gray-50 p-8 hover:bg-gray-100 transition-colors">
            <Link href={`/brokers/${broker.slug}`}>
              <h2 className="text-xl font-semibold text-gray-900">{broker.title}</h2>
              <p className="mt-2 text-gray-600 line-clamp-3">{broker.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-saffron">Read Review &rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

