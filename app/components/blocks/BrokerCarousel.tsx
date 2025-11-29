'use client';

import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

interface Broker {
  name: string;
  description: string;
  href: string;
  iconName?: string;
  buttonText: string;
}

// Icon mapping for client component
const iconMap: { [key: string]: React.ElementType } = {
  'BuildingOffice2Icon': BuildingOffice2Icon,
  'default': BuildingOffice2Icon,
};

interface BrokerCarouselProps {
  title: string;
  description?: string;
  brokers: Broker[];
  background?: 'gray' | 'white' | 'gray-light' | 'orange-light' | 'orange-very-light' | 'slate-light';
  cardStyle?: 'default' | 'saffron';
  padding?: 'default' | 'top-compact';
}

const BrokerCarousel: React.FC<BrokerCarouselProps> = ({ 
  title, 
  description, 
  brokers, 
  background = 'orange-very-light', 
  cardStyle = 'saffron',
  padding = 'default'
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isResettingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollLeftRef = useRef(0);
  
  // Create infinite loop by duplicating brokers array 3 times
  const infiniteBrokers = [...brokers, ...brokers, ...brokers];

  const paddingClasses = padding === 'top-compact'
    ? 'pt-16 sm:pt-24 pb-0'
    : 'py-20 sm:py-32';

  const bgClassMap = {
    'gray': 'bg-gray-50 dark:bg-brand-secondary',
    'white': 'bg-white dark:bg-gray-900',
    'gray-light': 'bg-gray-100 dark:bg-brand-secondary',
    'orange-light': 'bg-orange-50 dark:bg-brand-secondary',
    'orange-very-light': 'bg-orange-50/30 dark:bg-brand-secondary',
    'slate-light': 'bg-slate-50 dark:bg-brand-secondary',
  };

  const bgClass = bgClassMap[background] || bgClassMap['orange-very-light'];

  // Card styles
  const cardBgClass = cardStyle === 'saffron' 
    ? 'bg-brand-saffron dark:bg-brand-saffron' 
    : 'bg-white dark:bg-gray-800';

  const cardTitleClass = cardStyle === 'saffron'
    ? 'text-white'
    : 'text-gray-900 dark:text-white';

  const cardTextClass = cardStyle === 'saffron'
    ? 'text-white'
    : 'text-gray-600 dark:text-gray-300';

  const iconBgClass = cardStyle === 'saffron'
    ? 'bg-white/20'
    : 'bg-brand-primary/10 dark:bg-brand-primary/30';

  const iconClass = cardStyle === 'saffron'
    ? 'text-white'
    : 'text-brand-saffron dark:text-brand-saffron';

  const linkClass = cardStyle === 'saffron'
    ? 'text-white hover:text-yellow-100 dark:text-white dark:hover:text-yellow-100'
    : 'text-brand-saffron dark:text-brand-saffron hover:text-brand-saffron-hover dark:hover:text-brand-saffron-hover';

  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 0;
    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    if (isMobile) {
      return container.clientWidth - 24; // 100% - 1.5rem gap
    } else if (isTablet) {
      return (container.clientWidth - 24) / 2; // 50% - gap
    } else {
      return (container.clientWidth - 48) / 3; // 33.333% - gap (with padding)
    }
  };

  const getSingleSetWidth = () => {
    const cardWidth = getCardWidth();
    const gap = 24;
    return brokers.length * (cardWidth + gap);
  };

  const updateActiveIndex = () => {
    if (scrollContainerRef.current && !isResettingRef.current) {
      const cardWidth = getCardWidth();
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const singleSetWidth = getSingleSetWidth();
      
      // Calculate position within any set
      const positionInSet = scrollLeft % singleSetWidth;
      const index = Math.round(positionInSet / (cardWidth + gap));
      setActiveIndex(index % brokers.length);
    }
  };

  const handleInfiniteScroll = () => {
    if (!scrollContainerRef.current || isResettingRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const singleSetWidth = getSingleSetWidth();
    
    // Reset to middle section when reaching or passing the end (third copy)
    if (scrollLeft >= singleSetWidth * 2) {
      isResettingRef.current = true;
      const offset = scrollLeft - singleSetWidth * 2;
      // Instant reset without smooth behavior - happens during scroll so it's invisible
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = singleSetWidth + offset;
      // Restore smooth behavior in next frame
      requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.scrollBehavior = 'smooth';
          isResettingRef.current = false;
        }
      });
    }
    // Reset to middle section when in first copy (scrolled back)
    else if (scrollLeft < singleSetWidth) {
      isResettingRef.current = true;
      // Instant reset without smooth behavior
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = singleSetWidth + scrollLeft;
      // Restore smooth behavior in next frame
      requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.scrollBehavior = 'smooth';
          isResettingRef.current = false;
        }
      });
    }
    
    // Update active index during scrolling
    updateActiveIndex();
    setCanScrollLeft(true);
    setCanScrollRight(true);
    
    lastScrollLeftRef.current = scrollLeft;
  };

  const checkScrollability = () => {
    handleInfiniteScroll();
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Initialize scroll position to middle section (second copy)
      const singleSetWidth = getSingleSetWidth();
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = singleSetWidth;
      container.style.scrollBehavior = 'smooth';
      
      container.addEventListener('scroll', checkScrollability, { passive: true });
      window.addEventListener('resize', () => {
        // Reset to middle section on resize
        const newSingleSetWidth = getSingleSetWidth();
        const currentScroll = container.scrollLeft;
        const positionInSet = currentScroll % newSingleSetWidth;
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = newSingleSetWidth + positionInSet;
        container.style.scrollBehavior = 'smooth';
        checkScrollability();
      });
      
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [brokers.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 3000);
      const cardWidth = getCardWidth();
      const gap = 24;
      const scrollAmount = (cardWidth + gap) * 1; // Scroll by 1 card
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const scrollTo = direction === 'left' 
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index: number, pauseAutoScroll = false) => {
    if (scrollContainerRef.current) {
      if (pauseAutoScroll) {
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
      }
      const cardWidth = getCardWidth();
      const gap = 24;
      const singleSetWidth = getSingleSetWidth();
      // Scroll to the index in the middle section (second copy)
      const scrollTo = singleSetWidth + (index * (cardWidth + gap));
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const resetAutoScroll = () => {
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
  };

  const startAutoScroll = () => {
    if (isPaused || !scrollContainerRef.current) return;
    
    resetAutoScroll();
    autoScrollTimeoutRef.current = setTimeout(() => {
      if (scrollContainerRef.current && !isPaused) {
        const nextIndex = (activeIndex + 1) % brokers.length;
        scrollToIndex(nextIndex);
      }
    }, 5000); // 5 секунд между прокрутками
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoScroll();
    }
    return () => {
      resetAutoScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isPaused, brokers.length]);

  return (
    <section className={`${bgClass} ${paddingClasses}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
        
        <div className="relative mt-16">
          {/* Left scroll button - always visible for infinite scroll */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 text-gray-700 shadow-lg ring-1 ring-inset ring-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-saffron transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar md:pl-12 md:pr-12"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPaused(false), 3000);
            }}
          >
            {infiniteBrokers.map((broker, index) => {
              const IconComponent = iconMap[broker.iconName || 'default'] || iconMap['default'];
              return (
                <div
                  key={`${broker.name}-${index}`}
                  className={`flex-shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex flex-col items-start justify-between rounded-2xl ${cardBgClass} p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2`}
                >
                  <div className="relative flex items-center gap-x-4 w-full">
                    <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-lg ${iconBgClass}`}>
                      <IconComponent className={`h-8 w-8 ${iconClass}`} aria-hidden="true" />
                    </div>
                    <h3 className={`text-lg font-semibold leading-6 ${cardTitleClass} no-hyphen-break`}>{broker.name}</h3>
                  </div>
                {broker.description && (
                  <p className={`mt-4 line-clamp-3 text-sm leading-6 ${cardTextClass}`}>
                    {broker.description}
                  </p>
                )}
                  <div className="mt-6">
                    <Link href={broker.href} className={`text-sm font-semibold leading-6 ${linkClass} no-hyphen-break`}>
                      {broker.buttonText} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right scroll button - always visible for infinite scroll */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 text-gray-700 shadow-lg ring-1 ring-inset ring-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-saffron transition-all"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {brokers.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index, true)}
                className={`h-6 w-6 rounded-full transition-all duration-300 flex items-center justify-center ${
                  index === activeIndex
                    ? 'bg-brand-saffron'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to card ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              >
                <span className={`h-2 w-2 rounded-full ${
                  index === activeIndex
                    ? 'bg-white'
                    : 'bg-gray-500 dark:bg-gray-400'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokerCarousel;

