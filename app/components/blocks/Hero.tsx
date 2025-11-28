import React from 'react';
import dynamic from 'next/dynamic';
const AuroraBackground = dynamic(() => import('./AuroraBackground'), { ssr: false });

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink = "#", 
  secondaryButtonText, 
  secondaryButtonLink = "#" 
}) => {
  return (
      <div className="relative bg-gradient-to-b from-[#0E1424] to-[#16223D] pt-14 isolate overflow-hidden">
      {/* <AuroraBackground /> */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" style={{ textWrap: 'balance' }}>
            {(() => {
              if (title === 'Invest in the Nifty 50 with Confidence') {
                return (
                  <>
                    <span className="inline sm:whitespace-nowrap">Invest in the <span className="whitespace-nowrap">Nifty 50</span></span>
                    <br className="hidden sm:block" />
                    <span className="inline sm:whitespace-nowrap"> with Confidence</span>
                  </>
                );
              }
              if (title.includes('Invest in the Nifty 50')) {
                const parts = title.split('Invest in the Nifty 50');
                return (
                  <>
                    {parts.map((part, i) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < parts.length - 1 && <span className="whitespace-nowrap">Invest in the Nifty 50</span>}
                      </React.Fragment>
                    ))}
                  </>
                );
              }
              if (title.includes('Nifty 50')) {
                return title.split('Nifty 50').map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < array.length - 1 && <span className="whitespace-nowrap">Nifty 50</span>}
                  </React.Fragment>
                ));
              }
              return title;
            })()}
          </h1>

          <div className="mt-5 lg:grid lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-brand-silver max-w-2xl">{subtitle}</p>
              <div className="mt-10 flex flex-col gap-y-4">
                <div className="flex items-center justify-start gap-x-6">
                  <a
                    href={buttonLink}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-brand-saffron px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-saffron-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-saffron"
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-x-4">
                      {buttonText}
                    </span>
                    <span aria-hidden="true" className="absolute right-6 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      &gt;
                    </span>
                  </a>
                  {secondaryButtonText && (
                    <a
                      href={secondaryButtonLink}
                      className="text-sm font-semibold leading-6 text-[#D4D9E6] hover:text-brand-saffron transition-colors"
                    >
                      {secondaryButtonText} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
                
                {/* Link under CTA */}
                <a href="/methodology" className="text-[15px] tracking-[0.2px] text-[#AAB2C5] hover:text-brand-saffron transition-colors flex items-center gap-1 w-fit mt-3">
                   Learn how we review brokers <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 lg:mt-0 lg:col-span-5">
              <div className="flex flex-col gap-3 text-[15px] font-medium text-[#C6CAD9] leading-[1.45] whitespace-nowrap">
                <div className="flex items-baseline gap-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] text-brand-saffron flex-shrink-0 self-center translate-y-[1px]">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>SEBI-focused, India-first research</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] text-brand-saffron flex-shrink-0 self-center translate-y-[1px]">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>No investment advice — for educational use</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] text-brand-saffron flex-shrink-0 self-center translate-y-[1px]">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Updated monthly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute z-10 bottom-0 left-0 w-full h-20"
        style={{ transform: 'translateY(1px)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
          <path
            className="fill-gray-50 dark:fill-brand-secondary"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
