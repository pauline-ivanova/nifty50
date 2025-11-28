import React from 'react';
import Link from 'next/link';

interface Resource {
  icon: React.ElementType;
  title: string;
  description: string;
  url?: string; // URL для ссылки на сокращение
  abbreviation?: string; // сокращение для ссылки
}

interface OfficialResourcesProps {
  title: string;
  description: string;
  closingText?: string;
  resources: Resource[];
  padding?: 'default' | 'top-compact';
  background?: 'gray' | 'white';
}

const OfficialResources: React.FC<OfficialResourcesProps> = ({ 
  title, 
  description, 
  closingText,
  resources, 
  padding = 'default',
  background = 'gray'
}) => {
  const paddingClasses = padding === 'top-compact'
    ? 'pt-16 sm:pt-24 pb-20 sm:pb-32'
    : 'py-20 sm:py-32';
  
  const bgClass = background === 'gray' ? 'bg-gray-50 dark:bg-brand-secondary' : 'bg-white dark:bg-gray-900';

  return (
    <section className={`${bgClass} ${paddingClasses}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          {/* Left Column */}
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">
                {title}
              </h2>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                {description}
              </p>
              {closingText && (
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {closingText}
                </p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:pl-8">
            <dl className="space-y-10">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                <div key={index} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 dark:bg-brand-primary/30">
                      <Icon className="h-6 w-6 text-brand-saffron dark:text-brand-saffron" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg">
                      {resource.url && resource.abbreviation ? (
                        <>
                          {resource.title.replace(` (${resource.abbreviation})`, '')} (
                          <Link 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-white hover:text-brand-saffron dark:hover:text-brand-saffron transition-colors"
                          >
                            {resource.abbreviation}
                          </Link>
                          )
                        </>
                      ) : (
                        resource.title
                      )}
                    </h3>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {resource.description}
                  </dd>
                </div>
              );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialResources;

