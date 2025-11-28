'use client'

import { Fragment, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChartBarIcon,
  BanknotesIcon,
  PercentBadgeIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import dynamic from 'next/dynamic'
const StarBorder = dynamic(() => import('@/app/components/common/StarBorder'), { ssr: false })

// Menu Data
const indicesMenu = [
  { name: 'Nifty 50', description: 'The benchmark index of India', href: '/indices/nifty-50', icon: ChartBarIcon },
  { name: 'Bank Nifty', description: 'Top 12 banking stocks', href: '/indices/bank-nifty', icon: BanknotesIcon },
  { name: 'Sensex', description: 'BSE benchmark index', href: '/indices/sensex', icon: BuildingOfficeIcon },
]

const brokersMenu = [
  { name: 'Best Trading Apps', description: 'Top mobile apps for trading', href: '/brokers/best-apps', icon: DevicePhoneMobileIcon },
  { name: 'Discount Brokers', description: 'Low brokerage platforms', href: '/brokers/discount-brokers', icon: PercentBadgeIcon },
  { name: 'Forex Brokers', description: 'Best for currency trading', href: '/brokers/forex', icon: CurrencyDollarIcon },
]

const navigation = [
  { name: 'Guides', href: '/guides' },
  { name: 'Comparisons', href: '/comparisons' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [indicesOpen, setIndicesOpen] = useState(false)
  const [brokersOpen, setBrokersOpen] = useState(false)
  const indicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const brokersTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (indicesTimeoutRef.current) {
        clearTimeout(indicesTimeoutRef.current)
      }
      if (brokersTimeoutRef.current) {
        clearTimeout(brokersTimeoutRef.current)
      }
    }
  }, [])

  const handleIndicesMouseEnter = () => {
    // Clear any pending timeouts
    if (indicesTimeoutRef.current) {
      clearTimeout(indicesTimeoutRef.current)
      indicesTimeoutRef.current = null
    }
    if (brokersTimeoutRef.current) {
      clearTimeout(brokersTimeoutRef.current)
      brokersTimeoutRef.current = null
    }
    // Close brokers menu and open indices
    setBrokersOpen(false)
    setIndicesOpen(true)
  }

  const handleIndicesMouseLeave = (e: React.MouseEvent) => {
    // Check if mouse is moving to panel or bridge
    const relatedTarget = e.relatedTarget as HTMLElement
    if (relatedTarget && (
      relatedTarget.closest('[data-indices-panel]') ||
      relatedTarget.closest('[data-indices-bridge]')
    )) {
      return // Don't close if moving to panel
    }
    // Close menu after short delay
    if (indicesTimeoutRef.current) {
      clearTimeout(indicesTimeoutRef.current)
    }
    indicesTimeoutRef.current = setTimeout(() => {
      setIndicesOpen(false)
    }, 150)
  }

  const handleBrokersMouseEnter = () => {
    // Clear any pending timeouts
    if (brokersTimeoutRef.current) {
      clearTimeout(brokersTimeoutRef.current)
      brokersTimeoutRef.current = null
    }
    if (indicesTimeoutRef.current) {
      clearTimeout(indicesTimeoutRef.current)
      indicesTimeoutRef.current = null
    }
    // Close indices menu and open brokers immediately
    setIndicesOpen(false)
    setBrokersOpen(true)
  }

  const handleBrokersMouseLeave = (e: React.MouseEvent) => {
    // Check if mouse is moving to panel or bridge
    const relatedTarget = e.relatedTarget as HTMLElement
    if (relatedTarget && (
      relatedTarget.closest('[data-brokers-panel]') ||
      relatedTarget.closest('[data-brokers-bridge]')
    )) {
      return // Don't close if moving to panel
    }
    // Close menu after short delay
    if (brokersTimeoutRef.current) {
      clearTimeout(brokersTimeoutRef.current)
    }
    brokersTimeoutRef.current = setTimeout(() => {
      setBrokersOpen(false)
    }, 150)
  }


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-white font-bold text-xl flex items-center gap-2">
            <ChartBarIcon className="h-8 w-8 text-brand-saffron" />
            <span>Nifty 50 Investing</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div 
          className="hidden lg:flex lg:gap-x-8"
          onMouseLeave={(e: React.MouseEvent) => {
            // Check if mouse is moving to a panel
            const relatedTarget = e.relatedTarget as HTMLElement
            if (relatedTarget && (
              relatedTarget.closest('[data-indices-panel]') ||
              relatedTarget.closest('[data-brokers-panel]') ||
              relatedTarget.closest('[data-indices-bridge]') ||
              relatedTarget.closest('[data-brokers-bridge]')
            )) {
              return // Don't close if moving to panel
            }
            // Close both menus when leaving the navigation area
            if (indicesTimeoutRef.current) {
              clearTimeout(indicesTimeoutRef.current)
            }
            if (brokersTimeoutRef.current) {
              clearTimeout(brokersTimeoutRef.current)
            }
            setIndicesOpen(false)
            setBrokersOpen(false)
          }}
        >
          <div className="flex gap-x-8">
          
          {/* Indices Dropdown */}
          <div 
            data-indices-container
            className="relative"
            onMouseEnter={handleIndicesMouseEnter}
            onMouseLeave={handleIndicesMouseLeave}
          >
            <button 
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none"
              onClick={() => setIndicesOpen(!indicesOpen)}
            >
              Indices
              <ChevronDownIcon className={`h-5 w-5 flex-none text-gray-400 transition-transform ${indicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {/* Invisible bridge to prevent menu from closing when moving cursor to panel */}
            {indicesOpen && (
              <div 
                data-indices-bridge
                className="absolute -left-8 top-full h-3 w-screen max-w-md"
                onMouseEnter={() => {
                  if (indicesTimeoutRef.current) {
                    clearTimeout(indicesTimeoutRef.current)
                    indicesTimeoutRef.current = null
                  }
                  setIndicesOpen(true)
                }}
              />
            )}
            <Transition
              show={indicesOpen}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <div 
                data-indices-panel
                className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => {
                  // Cancel timeout when entering panel
                  if (indicesTimeoutRef.current) {
                    clearTimeout(indicesTimeoutRef.current)
                    indicesTimeoutRef.current = null
                  }
                  setIndicesOpen(true)
                }}
                onMouseLeave={() => {
                  // Close menu immediately when leaving panel
                  if (indicesTimeoutRef.current) {
                    clearTimeout(indicesTimeoutRef.current)
                  }
                  setIndicesOpen(false)
                }}
              >
                <div className="p-4">
                  {indicesMenu.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-brand-saffron" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Transition>
          </div>

          {/* Brokers Dropdown */}
          <div 
            data-brokers-container
            className="relative"
            onMouseEnter={handleBrokersMouseEnter}
            onMouseLeave={handleBrokersMouseLeave}
          >
            <button 
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none"
              onClick={() => setBrokersOpen(!brokersOpen)}
            >
              Brokers
              <ChevronDownIcon className={`h-5 w-5 flex-none text-gray-400 transition-transform ${brokersOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {/* Invisible bridge to prevent menu from closing when moving cursor to panel */}
            {brokersOpen && (
              <div 
                data-brokers-bridge
                className="absolute -left-8 top-full h-3 w-screen max-w-md"
                onMouseEnter={() => {
                  if (brokersTimeoutRef.current) {
                    clearTimeout(brokersTimeoutRef.current)
                    brokersTimeoutRef.current = null
                  }
                  setBrokersOpen(true)
                }}
              />
            )}
            <Transition
              show={brokersOpen}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <div 
                data-brokers-panel
                className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => {
                  // Cancel timeout when entering panel
                  if (brokersTimeoutRef.current) {
                    clearTimeout(brokersTimeoutRef.current)
                    brokersTimeoutRef.current = null
                  }
                  setBrokersOpen(true)
                }}
                onMouseLeave={() => {
                  // Close menu immediately when leaving panel
                  if (brokersTimeoutRef.current) {
                    clearTimeout(brokersTimeoutRef.current)
                  }
                  setBrokersOpen(false)
                }}
              >
                <div className="p-4">
                  {brokersMenu.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-brand-saffron" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Transition>
          </div>

          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
              {item.name}
            </Link>
          ))}
        </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-6 lg:flex-1 lg:justify-end">
          <StarBorder
            as="a"
            href="/brokers"
            color="rgba(255,255,255,0.85)"
            speed="7s"
            thickness={2}
            radius={8}
            className="shadow-sm"
            innerStyle={{
              background: '#C04A0F',
              fontSize: '0.875rem',
              padding: '10px 14px'
            }}
          >
            Start Investing
          </StarBorder>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 text-white font-bold text-xl flex items-center gap-2">
               <ChartBarIcon className="h-8 w-8 text-brand-saffron" />
               <span>Nifty 50</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                
                {/* Indices Mobile */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                        Indices
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {indicesMenu.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-400 hover:bg-gray-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Brokers Mobile */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                        Brokers
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {brokersMenu.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-400 hover:bg-gray-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="py-6">
                <Link
                  href="/brokers"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Start Investing
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
