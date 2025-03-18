import { useState } from 'react';
import Link from 'next/link';

export default function PaymentSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payment Settings</h1>
          <p className="mt-2 text-sm text-gray-700">
            Configure payment providers and billing options for your onboarding processes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Payment Providers */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Payment Providers</h3>
              <p className="mt-1 text-sm text-gray-500">
                Connect payment gateways to process payments during onboarding
              </p>
            </div>
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="space-y-6">
                {/* Stripe */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="sm:flex sm:items-start sm:justify-between">
                    <div className="sm:flex sm:items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-10 w-10" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 18.75c0-1.25-1.03-1.74-2.15-1.74-1.12 0-1.9.49-1.9 1.74 0 1.25.88 1.66 1.9 1.66 1.04 0 2.15-.41 2.15-1.66zm-4.04-3.87h2.85c2.21 0 3.98 1.13 3.98 3.87 0 2.75-1.77 3.79-3.98 3.79h-2.85v-7.66zm7.89 7.66v-7.66h1.79v7.66h-1.79zm2.36-7.66H22c1.2 0 2.43.47 2.43 1.9 0 .7-.42 1.48-1.39 1.81 1.01.17 1.61.87 1.61 1.92 0 1.42-1.14 2.02-2.64 2.02h-3.3v-7.66zm1.79 3.04h1.61c.67 0 1.14-.26 1.14-.9 0-.59-.47-.88-1.14-.88h-1.61v1.77zm0 3.36h1.61c.82 0 1.39-.25 1.39-.96 0-.65-.53-.95-1.39-.95h-1.61v1.91z" fill="#6772E5"/>
                        </svg>
                      </div>
                      <div className="mt-3 sm:ml-4 sm:mt-0">
                        <h4 className="text-lg font-medium text-gray-900">Stripe</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Process credit/debit cards and ACH payments
                        </p>
                        <span className="mt-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Connected
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Configure
                      </button>
                    </div>
                  </div>
                </div>

                {/* PayPal */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="sm:flex sm:items-start sm:justify-between">
                    <div className="sm:flex sm:items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-10 w-10" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.41 15.43c.06-.59.06-1.17 0-1.76-.3-2.76-2.7-4.84-5.48-4.84h-7.23c-.42-.01-.79.28-.88.69l-3.87 18.9c-.03.15 0 .3.09.43.09.13.22.22.38.25h3.02c.42.01.79-.29.88-.69l1.07-5.19c.09-.4.46-.7.88-.69h2.77c2.79 0 5.19-2.08 5.48-4.84.06-.59.06-1.17 0-1.76" fill="#009cde"/>
                          <path d="M14.69 22.38l1.07-5.19c.09-.4.46-.7.88-.69h2.77c2.79 0 5.19-2.08 5.48-4.84.06-.59.06-1.17 0-1.76 0 0-6.55 0-8.31 0-.51 0-.95.36-1.04.86l-3.71 18.1h2.86z" fill="#003087"/>
                        </svg>
                      </div>
                      <div className="mt-3 sm:ml-4 sm:mt-0">
                        <h4 className="text-lg font-medium text-gray-900">PayPal</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Accept PayPal payments globally
                        </p>
                        <span className="mt-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          Not Connected
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>

                {/* Square */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="sm:flex sm:items-start sm:justify-between">
                    <div className="sm:flex sm:items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-10 w-10" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                          <rect x="10" y="10" width="20" height="20" rx="3" fill="#000"/>
                        </svg>
                      </div>
                      <div className="mt-3 sm:ml-4 sm:mt-0">
                        <h4 className="text-lg font-medium text-gray-900">Square</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Point of sale and online payments
                        </p>
                        <span className="mt-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          Not Connected
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Configuration */}
        <div className="space-y-6 lg:col-span-1">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Billing Settings</h3>
              <p className="mt-1 text-sm text-gray-500">Configure your billing preferences</p>
            </div>
            <div className="bg-white px-4 py-5 sm:p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                    Default Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    defaultValue="USD"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="JPY">JPY (¥)</option>
                    <option value="CAD">CAD ($)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="auto-invoice"
                        name="auto-invoice"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="auto-invoice" className="font-medium text-gray-700">
                        Automatic Invoicing
                      </label>
                      <p className="text-gray-500">Generate invoices automatically at payment time</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="payment-reminders"
                        name="payment-reminders"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="payment-reminders" className="font-medium text-gray-700">
                        Payment Reminders
                      </label>
                      <p className="text-gray-500">Send reminders for pending payments</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Settings
                </button>
              </form>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Payment Methods</h3>
              <p className="mt-1 text-sm text-gray-500">Manage accepted payment methods</p>
            </div>
            <div className="divide-y divide-gray-200 bg-white">
              <div className="flex items-center justify-between px-4 py-4 sm:px-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Credit Cards</span>
                </div>
                <div>
                  <label
                    htmlFor="credit-cards"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      id="credit-cards"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-4 sm:px-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">PayPal</span>
                </div>
                <div>
                  <label
                    htmlFor="paypal"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      id="paypal"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-4 sm:px-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Bank Transfer (ACH)</span>
                </div>
                <div>
                  <label
                    htmlFor="bank-transfer"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      id="bank-transfer"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Transactions</h3>
          <p className="mt-1 text-sm text-gray-500">
            View recent payments processed through your onboarding flows
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Payment Method
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                        <span className="text-sm font-medium leading-none text-white">JS</span>
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">John Smith</div>
                      <div className="text-gray-500">john.smith@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">$250.00</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">May 21, 2023</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Visa •••• 4242</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    View<span className="sr-only">, John Smith payment</span>
                  </a>
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500">
                        <span className="text-sm font-medium leading-none text-white">SR</span>
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">Sarah Robinson</div>
                      <div className="text-gray-500">sarah.r@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">$150.00</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">May 20, 2023</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">PayPal</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    View<span className="sr-only">, Sarah Robinson payment</span>
                  </a>
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500">
                        <span className="text-sm font-medium leading-none text-white">MP</span>
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">Marco Polo</div>
                      <div className="text-gray-500">marco@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">$450.00</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">May 19, 2023</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Mastercard •••• 5555</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    View<span className="sr-only">, Marco Polo payment</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 