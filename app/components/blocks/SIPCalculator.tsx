'use client';
import React, { useState, useEffect } from 'react';
import { CurrencyRupeeIcon, ChartBarIcon, CalendarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function SIPCalculator() {
  const locale = 'en-IN';
  const currencyCode = 'INR';
  const currencySym = '₹';
  
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const P = monthlyInvestment;
    const i = expectedReturn / 12 / 100;
    const n = timePeriod * 12;

    // SIP Formula: M = P × ({[1 + i]^n - 1} / i) × (1 + i)
    // If i is 0 (0% return), simpler formula: P * n
    let M = 0;
    if (expectedReturn === 0) {
      M = P * n;
    } else {
      M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }

    const totalInvested = P * n;
    
    setInvestedAmount(Math.round(totalInvested));
    setTotalValue(Math.round(M));
    setEstimatedReturns(Math.round(M - totalInvested));
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString(locale, {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl no-hyphen-break">
            SIP Calculator
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            See the power of compounding. Estimate the future value of your Nifty 50 investments.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-xl ring-1 ring-gray-900/10 dark:ring-gray-700/20 sm:p-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            
            {/* Inputs Section */}
            <div className="space-y-8">
              
              {/* Monthly Investment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                    <label htmlFor="monthly-investment" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white flex items-center gap-2">
                        <CurrencyRupeeIcon className="h-5 w-5 text-brand-saffron" />
                        Monthly Investment
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <input
                            type="number"
                            id="monthly-investment"
                            className="block w-32 rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-saffron sm:text-sm sm:leading-6 text-right bg-white/5 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            value={monthlyInvestment}
                            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                        />
                    </div>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-saffron"
                />
              </div>

              {/* Expected Return */}
              <div>
                <div className="flex justify-between items-center mb-2">
                    <label htmlFor="expected-return" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white flex items-center gap-2">
                        <ArrowTrendingUpIcon className="h-5 w-5 text-brand-saffron" />
                        Expected Return (p.a)
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span className="text-gray-500 sm:text-sm">%</span>
                        </div>
                        <input
                            type="number"
                            id="expected-return"
                            className="block w-24 rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-saffron sm:text-sm sm:leading-6 text-right bg-white/5 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            value={expectedReturn}
                            onChange={(e) => setExpectedReturn(Number(e.target.value))}
                        />
                    </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-saffron"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">Nifty 50 avg: ~12-13%</p>
              </div>

              {/* Time Period */}
              <div>
                <div className="flex justify-between items-center mb-2">
                    <label htmlFor="time-period" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-brand-saffron" />
                        Time Period
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span className="text-gray-500 sm:text-sm">Yr</span>
                        </div>
                        <input
                            type="number"
                            id="time-period"
                            className="block w-24 rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-saffron sm:text-sm sm:leading-6 text-right bg-white/5 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                            value={timePeriod}
                            onChange={(e) => setTimePeriod(Number(e.target.value))}
                        />
                    </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-saffron"
                />
              </div>

            </div>

            {/* Results Section */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 flex flex-col justify-center space-y-6">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Invested Amount</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">{formatCurrency(investedAmount)}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Est. Returns</p>
                    <p className="text-2xl font-semibold text-green-600 dark:text-green-400 mt-1">+{formatCurrency(estimatedReturns)}</p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Value</p>
                    <p className="text-4xl font-bold text-brand-saffron mt-2">{formatCurrency(totalValue)}</p>
                </div>
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 italic">
                    *Figures are estimates based on assumed returns. Market investments are subject to market risks.
                </div>
            </div>
            
          </div>

          {/* CTA */}
          <div className="mt-10 pt-10 text-center border-t border-gray-200 dark:border-gray-700">
            <a
              href="/guides/how-to-start-sip"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-brand-saffron px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-saffron-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-saffron"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-4">
                Start Investing Today
              </span>
              <span aria-hidden="true" className="absolute right-6 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                &gt;
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
