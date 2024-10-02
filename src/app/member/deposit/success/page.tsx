'use client'

import Link from 'next/link'

export default function SuccessPage({ amount }: { amount: string }) {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Make a deposit successfully
        </h2>
        <p className="mt-2 text-lg leading-8">We have received your amount {amount}</p>
        <br />
        <Link
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          href="/member/history"
        >
          View your history
        </Link>
      </div>
    </div>
  )
}
