import {
    BuildingLibraryIcon,
    CpuChipIcon,
    BoltIcon,
    ShoppingBagIcon,
    TruckIcon,
    BeakerIcon,
    WrenchScrewdriverIcon,
    SignalIcon
  } from '@heroicons/react/24/outline'

const sectors = [
  {
    name: 'Financial Services',
    description: 'The heavyweight of Nifty 50. Includes top private and public sector banks, insurance, and NBFCs.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Information Technology',
    description: 'Global tech giants driving India’s service exports. A key growth engine for the index.',
    icon: CpuChipIcon,
  },
  {
    name: 'Oil, Gas & Consumable Fuels',
    description: 'Powering the nation. Includes massive conglomerates and energy giants.',
    icon: BoltIcon,
  },
  {
    name: 'FMCG',
    description: 'Fast Moving Consumer Goods. Defensive stocks that provide stability during market volatility.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Automobile',
    description: 'Leading car and two-wheeler manufacturers. Cyclical stocks tied to economic growth.',
    icon: TruckIcon,
  },
  {
    name: 'Pharmaceuticals',
    description: 'The "Pharmacy of the World". Includes generic drug makers and biotech companies.',
    icon: BeakerIcon,
  },
  {
    name: 'Construction',
    description: 'Infrastructure and engineering giants building India’s future.',
    icon: WrenchScrewdriverIcon,
  },
    {
        name: 'Telecommunication',
        description: 'Connecting millions. Major telecom service providers with vast user bases.',
        icon: SignalIcon,
    }
]

export default function SectorPerformance() {
  
  return (
    <div className="bg-white dark:bg-[#061423] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-brand-saffron dark:text-brand-saffron">Sector Breakdown</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl no-hyphen-break">
            Understanding Nifty 50 Composition
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
           The Nifty 50 isn't just 50 random companies; it's a diversified portfolio representing the Indian economy. Here are the key sectors that drive its performance.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <div key={sector.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <sector.icon className="h-8 w-8 flex-none text-brand-saffron dark:text-brand-saffron" aria-hidden="true" />
                      <h3>{sector.name}</h3>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-100">
                      <p className="flex-auto">{sector.description}</p>
                  </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
