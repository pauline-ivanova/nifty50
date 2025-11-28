import { getAllGuides, getGuideData } from '@/lib/guides';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function GuidePage({ params: { slug } }: { params: { slug: string } }) {
  const guide = getGuideData(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <div className="relative isolate bg-gradient-to-b from-emerald-600 to-emerald-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,27,75,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-base font-semibold leading-7 text-emerald-300">{guide.frontmatter.category}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">{guide.frontmatter.title}</h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100">{guide.frontmatter.excerpt}</p>
        </div>
      </div>

      <div className="bg-white">
        <div className="prose prose-lg mx-auto py-16 px-6 lg:px-8">
          <MDXRemote source={guide.content} />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map(guide => ({
    slug: guide.slug,
  }));
}

