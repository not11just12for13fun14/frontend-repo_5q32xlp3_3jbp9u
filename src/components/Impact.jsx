import React from 'react'

export default function Impact() {
  const stats = [
    { label: 'Local jobs', value: 'New livelihoods' },
    { label: 'Hygiene & dignity', value: 'Quality products' },
    { label: 'Attendance', value: 'More days in school' },
    { label: 'Culture shift', value: 'Open conversation' },
  ]

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">Impact flywheel</h2>
            <p className="mt-4 text-gray-700">Local manufacturing powers a virtuous cycle of access, income, and awareness—scaling change from the ground up.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-sm text-gray-600">{s.label}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
          <blockquote className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg self-center">
            <p className="text-gray-800 text-lg leading-relaxed">
              “We set up a manufacturing unit inside our school. It now supplies the community and serves as a platform for vital education.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">— Nishi Mishra, School Principal, Gwalior</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
