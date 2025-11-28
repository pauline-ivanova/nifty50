'use client'
import dynamic from 'next/dynamic'

const AuroraBackground = dynamic(() => import('./AuroraBackground'), { ssr: false })
const StarBorder = dynamic(() => import('@/app/components/common/StarBorder'), { ssr: false })

export default function CTA() {
  return (
    <div className="bg-white dark:bg-brand-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-brand-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <div className="absolute inset-0 pointer-events-none">
            <AuroraBackground variant="compact" blendMode="overlay" />
          </div>
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl no-hyphen-break">
              Ready to Start Your Wealth Creation Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-silver">
              Don't wait for the perfect moment. The best time to invest was yesterday, the second best time is now.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <StarBorder
                as="a"
                href="/brokers"
                color="rgba(255,255,255,0.95)"
                speed="6s"
                thickness={3}
                radius={8}
                className="shadow-md"
                innerStyle={{
                  background: '#C04A0F',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  padding: '10px 14px',
                  border: '1px solid rgba(255,255,255,0.35)'
                }}
              >
                Find Best Broker
              </StarBorder>
            </div>
          </div>
          {/* wave divider consistent with hero if needed stays outside */}
        </div>
      </div>
    </div>
  )
}
