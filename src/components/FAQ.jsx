import React from 'react'

export default function FAQ() {
  const faqs = [
    { q: 'What is the total cost of ownership?', a: 'Typical setup is ~₹1.5 lakh (~$1,800). Ongoing costs include consumables and routine maintenance, which we support.' },
    { q: 'Who can run a unit?', a: 'Schools, nonprofits, self-help groups, and CSR programs. Training gets most teams production-ready within a week.' },
    { q: 'What about product quality?', a: 'The machine produces modern ultra-thin pads with wings, meeting comfort and reliability expectations.' },
    { q: 'Do you provide raw materials?', a: 'Yes. We ensure a steady supply of quality inputs and provide guidance on inventory planning.' },
    { q: 'How do you address stigma?', a: 'We run awareness campaigns and education sessions alongside deployments to normalize conversation and increase adoption.' },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">FAQ</h2>
        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-gray-50">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-white open:shadow-sm">
              <summary className="cursor-pointer list-none p-6 flex items-center justify-between">
                <span className="font-semibold text-gray-900">{f.q}</span>
                <span className="text-gray-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
