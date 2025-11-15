import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Innovation from './components/Innovation'
import Model from './components/Model'
import Impact from './components/Impact'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Innovation />
        <Model />
        <Impact />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Rag Innovations. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#problem" className="text-gray-600 hover:text-gray-900">The Problem</a>
          <a href="#innovation" className="text-gray-600 hover:text-gray-900">Innovation</a>
          <a href="#model" className="text-gray-600 hover:text-gray-900">Model</a>
          <a href="#impact" className="text-gray-600 hover:text-gray-900">Impact</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
        </div>
      </div>
    </footer>
  )
}
