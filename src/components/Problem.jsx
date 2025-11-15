import React from 'react'

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">The twin challenge</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Menstrual poverty is not just about affordability—it is about access to hygiene, safety, and dignity. It keeps girls from school and women from work. Alongside this economic barrier sits a cultural one: silence and stigma around menstruation that prevents open conversation and timely support.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                <span className="text-gray-700">Access gap: inconsistent supply and high costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                <span className="text-gray-700">Participation gap: absenteeism in schools and workplaces.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                <span className="text-gray-700">Conversation gap: stigma keeps needs invisible.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-fuchsia-50 to-blue-50">
            <h3 className="text-xl font-semibold text-gray-900">Why solving one requires solving both</h3>
            <p className="mt-3 text-gray-700">Without quality, affordable products, demand stalls. Without awareness and dialogue, even available products go unused. Real change needs an economic solution and a cultural shift—together.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-gray-900">Access</p>
                <p className="text-sm text-gray-600">Local manufacturing</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-gray-900">Quality</p>
                <p className="text-sm text-gray-600">Ultra-thin with wings</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-gray-900">Dialogue</p>
                <p className="text-sm text-gray-600">Awareness & education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
