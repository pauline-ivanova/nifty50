'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const marketInsights = [
    {
        client: "Historical Event",
        title: "The 2020 Covid Recovery: Resilience in Action",
        description: "In March 2020, Nifty 50 crashed by nearly 40%. However, within 18 months, it not only recovered but doubled from its lows. This highlighted the resilience of the top 50 companies and the importance of staying invested during panic.",
        category: "Market Recovery",
        tagBgColor: "bg-green-200",
        tagTextColor: "text-green-900",
    },
    {
        client: "Sector Analysis",
        title: "The Rise of Banking & Financials",
        description: "Financial Services weightage in Nifty 50 has grown significantly over the last decade. Private banks have consistently outperformed, driving the index to new highs. Understanding sector rotation is key for active investors.",
        category: "Sector Trends",
        tagBgColor: "bg-blue-200",
        tagTextColor: "text-brand-primary",
    },
    {
        client: "Investment Strategy",
        title: "SIP vs Lump Sum: The Volatility Hedge",
        description: "Data shows that during volatile periods (like 2015-2016), SIP investors averaged better returns than those trying to time the market with lump sums. Rupee Cost Averaging works best when the market is fluctuating.",
        category: "Strategy",
        tagBgColor: "bg-purple-200",
        tagTextColor: "text-purple-900",
    },
    {
        client: "Long Term View",
        title: "12% CAGR: The Golden Benchmark",
        description: "Over the last 20 years, despite wars, recessions, and pandemics, the Nifty 50 has delivered an approximate CAGR of 12-13%. This consistency makes it a prime vehicle for retirement planning and long-term wealth creation.",
        category: "Performance",
        tagBgColor: "bg-amber-200",
        tagTextColor: "text-amber-900",
    }
]

export default function MarketInsights() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const list = marketInsights;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === list.length - 1 ? 0 : prevIndex + 1
                ),
            6000 // Slowed down slightly for reading
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, list.length]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const total = list.length;
        const newIndex = isFirstSlide ? total - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const total = list.length;
        const isLastSlide = currentIndex === total - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentInsight = list[currentIndex];

    return (
        <div className="bg-white dark:bg-brand-secondary py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="text-left max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl no-hyphen-break">
                            Lessons from History. Data-Driven Insights.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-brand-silver">
                            The market rewards patience and consistency. Explore key moments in Nifty 50 history and strategic insights that can help you become a better investor.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href="/guides" className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-brand-saffron px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-saffron-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-saffron">
                                <span className="transition-transform duration-300 group-hover:-translate-x-4">
                                    Read Investment Guides
                                </span>
                                <span aria-hidden="true" className="absolute right-6 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    &gt;
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="relative h-[30rem] w-full group">
                        <div
                          className="absolute -inset-12 -z-10 rounded-full bg-brand-saffron/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-900/10 dark:ring-gray-700/20 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="relative flex h-full flex-col p-8 text-gray-900 dark:text-white">
                                <div className="flex-1">
                                    <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${currentInsight.tagBgColor} ${currentInsight.tagTextColor}`}>
                                        {currentInsight.category}
                                    </span>
                                    <h3 className="mt-3 text-xl font-bold leading-7 text-gray-900 dark:text-white">{currentInsight.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{currentInsight.client}</p>
                                    <p className="mt-4 text-base leading-7 text-gray-700 dark:text-brand-silver">{currentInsight.description}</p>
                                </div>
                                <div className="flex items-center gap-x-3 self-end">
                                    <button onClick={prevSlide} className="rounded-full bg-white p-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-100">
                                        <span className="sr-only">Previous slide</span>
                                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                    <button onClick={nextSlide} className="rounded-full bg-white p-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-100">
                                        <span className="sr-only">Next slide</span>
                                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-2xl overflow-hidden">
                                <div
                                    key={currentIndex}
                                    className="h-full bg-brand-saffron"
                                    style={{ animation: 'progress 6s linear forwards' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
