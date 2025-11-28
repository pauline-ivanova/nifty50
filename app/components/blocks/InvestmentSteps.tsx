import Link from 'next/link';

interface SubItem {
    name: string;
    href: string;
}

interface Step {
    name: string;
    description: string;
    icon?: React.ElementType;
    href?: string;
    linkText?: string;
    subItems?: SubItem[];
}

interface InvestmentStepsProps {
    title: string;
    description: string;
    steps: Step[];
    conclusion?: string;
    microText?: string;
    padding?: 'default' | 'top-compact';
    buttonText?: string;
    buttonLink?: string;
}

const InvestmentSteps: React.FC<InvestmentStepsProps> = ({ title, description, steps, conclusion, microText, padding = 'default', buttonText, buttonLink }) => {
    const paddingClasses = padding === 'top-compact'
    ? 'pt-16 sm:pt-24 pb-24 sm:pb-32'
    : 'py-24 sm:py-32';
    return (
        <div className={`bg-white dark:bg-gray-900 ${paddingClasses}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-brand-silver">
                        {description}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className={`grid max-w-none grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 ${steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.name} className={`relative ${Icon ? 'pl-16' : ''}`}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                        {Icon && (
                                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-saffron">
                                                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                        )}
                                        <h3 className="text-lg">{step.name}</h3>
                                    </dt>
                                    <dd className={`mt-2 text-base leading-7 text-gray-600 dark:text-brand-silver ${!Icon ? 'ml-4 border-l-2 pl-4 border-gray-200 dark:border-gray-700' : ''}`}>
                                        {step.description}
                                        {step.subItems && step.subItems.length > 0 && (
                                            <ul className="mt-3 space-y-2 list-none pl-0">
                                                {step.subItems.map((subItem, subIndex) => (
                                                    <li key={`${step.name}-${subIndex}`} className="flex items-start gap-2">
                                                        <span className="text-brand-saffron mt-0.5 flex-shrink-0">•</span>
                                                        <Link 
                                                            href={subItem.href}
                                                            className="text-brand-saffron hover:text-brand-saffron-hover font-medium text-sm inline-flex items-center gap-1"
                                                        >
                                                            {subItem.name}
                                                            <span aria-hidden="true">→</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {step.href && (
                                            <div className={`mt-3 ${step.subItems ? 'mt-4' : ''}`}>
                                                <Link 
                                                    href={step.href}
                                                    className="text-brand-saffron hover:text-brand-saffron-hover font-medium text-sm inline-flex items-center gap-1"
                                                >
                                                    {step.linkText || 'Learn more'}
                                                    <span aria-hidden="true">→</span>
                                                </Link>
                                            </div>
                                        )}
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
                {microText && (
                    <div className="mt-12 mx-auto max-w-2xl text-center">
                        <p className="text-base leading-7 text-gray-600 dark:text-brand-silver italic">
                            {microText}
                        </p>
                    </div>
                )}
                {conclusion && (
                    <div className="mt-16 mx-auto max-w-2xl text-center">
                        <p className="text-lg leading-8 text-gray-600 dark:text-brand-silver">
                            {conclusion}
                        </p>
                    </div>
                )}
                {buttonText && (
                    <div className={`flex items-center justify-center gap-x-6 ${conclusion || microText ? 'mt-10' : 'mt-16'}`}>
                        <Link
                            href={buttonLink || '#'}
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-brand-saffron px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-saffron-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-saffron"
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-4">
                                {buttonText}
                            </span>
                            <span aria-hidden="true" className="absolute right-6 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                &gt;
                            </span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InvestmentSteps;
