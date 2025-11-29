'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
};

const categoryColors: { [key: string]: string } = {
  'Investing': 'bg-blue-100 text-blue-800',
  'Trading': 'bg-purple-100 text-purple-800',
  'Analysis': 'bg-indigo-100 text-indigo-800',
  'Basics': 'bg-green-100 text-green-800',
};

const GuidePreview = ({ initialPosts }: { initialPosts: Post[] }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    setFilteredPosts(initialPosts.slice(0, 3));
    const uniqueCategories = ['All', ...Array.from(new Set(initialPosts.map(p => p.category)))];
    setCategories(uniqueCategories);
  }, [initialPosts]);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredPosts(initialPosts.slice(0, 3));
    } else {
      setFilteredPosts(initialPosts.filter(post => post.category === category).slice(0, 3));
    }
  };
  
  return (
    <div className="bg-white dark:bg-brand-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl no-hyphen-break">
                    Learning Hub
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-brand-silver">
                    A growing collection of clear, beginner-friendly articles designed to help you understand India's market structure, essential concepts and long-term investing fundamentals.
                </p>
            </div>
            <div className="mt-10 flex justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-brand-saffron text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {(filteredPosts.length > 0 ? filteredPosts : []).map((post) => {
                    const colorClasses = categoryColors[post.category] || 'bg-gray-100 text-gray-800';
                    return (
                        <article key={post.slug} className="flex flex-col items-start self-start">
                            <div className="relative w-full">
                            <Link href={`/guides/${post.slug}`}>
                                <img
                                    src={`/api/og/guide/${post.slug}`}
                                    alt={post.title}
                                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                                    loading="lazy"
                                />
                            </Link>
                            </div>
                            <div className="max-w-xl">
                            <div className="mt-8 flex items-center gap-x-4 text-sm">
                                <div className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${colorClasses}`}>
                                  {post.category}
                                </div>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                                  <Link href={`/guides/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                  </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-brand-silver">{post.excerpt}</p>
                            </div>
                            </div>
                        </article>
                )
            })}
            </div>
            {filteredPosts.length === 0 && (
              <div className="mx-auto mt-12 max-w-2xl text-center text-gray-600 dark:text-brand-silver">
                No guides available yet. Check back soon.
              </div>
            )}
            <div className="mt-20 text-center">
              <Link href="/guides" className="rounded-md bg-brand-saffron px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-saffron-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-saffron">
                View All Guides
              </Link>
            </div>
        </div>
    </div>
  );
};

export default GuidePreview;
