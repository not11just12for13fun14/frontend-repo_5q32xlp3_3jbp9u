import React from 'react'

export default function CTA() {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-blue-600 to-fuchsia-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Start a community unit</h2>
            <p className="mt-4 text-blue-50">Schools, nonprofits, SHGs, and CSR programs can deploy a turnkey unit in weeks. We provide supply, training, maintenance, and awareness support.</p>
            <ul className="mt-6 space-y-2 text-blue-50">
              <li>• Typical setup: ₹1.5 lakh (~$1,800)</li>
              <li>• Training timeline: 3–5 days</li>
              <li>• Ongoing service and QA</li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-md px-4 py-3 bg-white text-gray-900 placeholder-gray-500" placeholder="Name" required />
              <input className="w-full rounded-md px-4 py-3 bg-white text-gray-900 placeholder-gray-500" placeholder="Organization" required />
              <input type="email" className="w-full rounded-md px-4 py-3 bg-white text-gray-900 placeholder-gray-500 sm:col-span-2" placeholder="Email" required />
              <textarea className="w-full rounded-md px-4 py-3 bg-white text-gray-900 placeholder-gray-500 sm:col-span-2" placeholder="Tell us about your community" rows={4} />
            </div>
            <button className="mt-4 inline-flex items-center rounded-md bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50">Request a call</button>
            <p className="mt-3 text-sm text-blue-100">Live form handling can be added if you’d like—just share a destination email or API.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
