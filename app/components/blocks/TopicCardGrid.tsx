import Link from 'next/link';
import React from 'react';

interface Service {
  name: string;
  description?: string; // Kept for backward compatibility
  leadText?: string;
  features?: string[];
  href: string;
  icon: React.ElementType;
  buttonText: string;
}

interface TopicCardGridProps {
  services: Service[];
  title: string;
  description?: string;
  padding?: 'default' | 'top-compact';
  background?: 'gray' | 'white' | 'gray-light' | 'orange-light' | 'orange-very-light' | 'slate-light';
  cardStyle?: 'default' | 'saffron';
}

const TopicCardGrid: React.FC<TopicCardGridProps> = ({ services, title, description, padding = 'default', background = 'gray', cardStyle = 'default' }) => {
  const paddingClasses = padding === 'top-compact'
    ? 'pt-16 sm:pt-24 pb-20 sm:pb-32'
    : 'py-20 sm:py-32';
  
  const bgClassMap = {
    'gray': 'bg-gray-50 dark:bg-brand-secondary',
    'white': 'bg-white dark:bg-gray-900',
    'gray-light': 'bg-gray-100 dark:bg-brand-secondary',
    'orange-light': 'bg-orange-50 dark:bg-brand-secondary',
    'orange-very-light': 'bg-orange-50/30 dark:bg-brand-secondary',
    'slate-light': 'bg-slate-50 dark:bg-brand-secondary',
  };
  
  const bgClass = bgClassMap[background] || bgClassMap['gray'];

  // Card styles
  const cardBgClass = cardStyle === 'saffron' 
    ? 'bg-brand-saffron dark:bg-brand-saffron' 
    : 'bg-white dark:bg-gray-800';
  
  const cardTitleClass = cardStyle === 'saffron'
    ? 'text-white'
    : 'text-gray-900 dark:text-white';
  
  const cardTextClass = cardStyle === 'saffron'
    ? 'text-white/90'
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
  
  const checkmarkClass = cardStyle === 'saffron'
    ? 'text-white'
    : 'text-brand-saffron dark:text-brand-saffron';

  return (
    <section className={`${bgClass} ${paddingClasses}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {description || "We offer a comprehensive suite of digital marketing services designed to elevate your brand and drive measurable results."}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <div key={service.name} className={`flex flex-col items-start justify-between rounded-2xl ${cardBgClass} p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2`}>
              <div className="relative flex items-center gap-x-4">
                <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-lg ${iconBgClass}`}>
                  <service.icon className={`h-8 w-8 ${iconClass}`} aria-hidden="true" />
                </div>
                <h3 className={`text-lg font-semibold leading-6 ${cardTitleClass} no-hyphen-break`}>{service.name}</h3>
              </div>
              {service.leadText && <p className={`mt-4 text-sm leading-6 ${cardTextClass}`}>{service.leadText}</p>}
              {service.features && service.features.length > 0 && (
                <ul className={`mt-4 space-y-1 text-sm leading-6 ${cardTextClass}`}>
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex gap-x-2">
                      <span className={checkmarkClass}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              {service.description && <p className={`mt-4 line-clamp-3 text-sm leading-6 ${cardTextClass}`}>{service.description}</p>}
              <div className="mt-6">
                <Link href={service.href} className={`text-sm font-semibold leading-6 ${linkClass} no-hyphen-break`}>
                  {service.buttonText} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicCardGrid;
