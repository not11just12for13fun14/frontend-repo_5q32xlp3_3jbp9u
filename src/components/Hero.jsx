import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-50 via-white to-blue-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              One machine. Two problems. A community-powered solution.
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Tackling menstrual poverty and social taboo through accessible, high-quality manufacturing and wraparound support. A grassroots model that turns hardware into lasting empowerment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#innovation" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700">
                See how it works
              </a>
              <a href="#get-involved" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white font-semibold shadow hover:bg-black">
                Start a unit
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">Recognized as a social enterprise in India • Aligns with Make in India</p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 h-36 w-36 rounded-full bg-fuchsia-200/60 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-blue-200/60 blur-2xl" />
            <div className="relative rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <Stat label="Setup cost" value="₹1.5 lakh" />
                <Stat label="Pad type" value="Ultra-thin with wings" />
                <Stat label="Ownership" value="Schools, NGOs, SHGs" />
                <Stat label="Support" value="Supply • Training • Maintenance • Awareness" />
              </div>
              <p className="mt-4 text-sm text-gray-600">Affordable, modern pads that meet comfort and performance expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-gray-900">{value}</p>
    </div>
  )
}
