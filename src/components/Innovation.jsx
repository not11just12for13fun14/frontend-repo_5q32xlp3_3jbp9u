import React from 'react'

export default function Innovation() {
  return (
    <section id="innovation" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">The innovation</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Unlike earlier low-cost units that produced bulky pads without wings, our machine manufactures modern, ultra-thin sanitary napkins with wings—delivering comfort and reliability people expect.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              <Feature label="Ultra-thin comfort" />
              <Feature label="Wings for secure fit" />
              <Feature label="Consistent quality" />
              <Feature label="Community-owned" />
            </ul>
            <div className="mt-8 rounded-xl border border-gray-200 p-6 bg-white">
              <p className="text-sm text-gray-600">Setup cost</p>
              <p className="text-2xl font-bold">₹1.5 lakh (~$1,800)</p>
              <p className="mt-2 text-sm text-gray-600">Affordable for schools, nonprofits, and self-help groups to own and operate.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-fuchsia-200/60 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-200/60 blur-2xl" />
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white flex items-center justify-center">
              <div className="p-8 text-center">
                <p className="text-gray-600">Product explainer video placeholder</p>
                <p className="text-sm text-gray-500">Embed a demo or photo carousel here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ label }) {
  return (
    <li className="flex items-center gap-3">
      <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
      <span className="text-gray-700">{label}</span>
    </li>
  )
}
