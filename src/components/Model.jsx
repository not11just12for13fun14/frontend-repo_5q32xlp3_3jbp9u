import React from 'react'

export default function Model() {
  const items = [
    { title: 'Secure supply', desc: 'Reliable raw materials to keep units running without interruption.' },
    { title: 'Hands-on training', desc: 'Step-by-step onboarding so teams can operate efficiently and safely.' },
    { title: 'Maintenance', desc: 'Proactive service to maximize uptime and product quality.' },
    { title: 'Awareness', desc: 'Community programs that normalize menstrual health conversations.' },
  ]

  return (
    <section id="model" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">The wraparound model</h2>
          <p className="mt-4 text-gray-700">Hardware is only the start. We pair technology with the ecosystem that makes it work.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
