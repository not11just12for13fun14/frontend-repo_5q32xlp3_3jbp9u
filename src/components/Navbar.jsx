import React from 'react'

const links = [
  { href: '#problem', label: 'The Problem' },
  { href: '#innovation', label: 'The Innovation' },
  { href: '#model', label: 'The Model' },
  { href: '#impact', label: 'Impact' },
  { href: '#faq', label: 'FAQ' },
  { href: '#get-involved', label: 'Get Involved' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-fuchsia-500 to-blue-600"></div>
            <span className="font-bold text-gray-800">Rag Innovations</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#get-involved" className="ml-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">
              Partner with us
            </a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span className="i">☰</span>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded text-gray-700 hover:bg-gray-100">
                  {l.label}
                </a>
              ))}
              <a href="#get-involved" onClick={() => setOpen(false)} className="px-2 py-2 rounded bg-blue-600 text-white text-center">
                Partner with us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
