'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Figma, Code2, Brush, PanelsTopLeft } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 bg-primary-50 border-y border-primary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-semibold text-primary-900">Selected Projects</h2>
            <p className="text-primary-600 mt-2">A sample of recent product, brand, and web design work.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fintech Dashboard', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', tag: 'Product Design' },
              { title: 'Brand System Refresh', image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=800&q=80', tag: 'Brand Identity' },
              { title: 'E-commerce Experience', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80', tag: 'Web Experience' },
            ].map((project) => (
              <article key={project.title} className="bg-white border border-primary-100 rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-primary-500 mb-2">{project.tag}</p>
                  <h3 className="text-lg font-semibold text-primary-900">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-semibold text-primary-900 text-center mb-8">Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Figma, label: 'UI/UX Systems' },
              { icon: PanelsTopLeft, label: 'Prototyping' },
              { icon: Brush, label: 'Brand Direction' },
              { icon: Code2, label: 'Design + Dev' },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 rounded-lg border border-primary-100">
                <item.icon className="w-6 h-6 text-primary-700 mx-auto mb-2" />
                <p className="text-sm text-primary-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-white border-t border-primary-200 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-primary-500">
          <p>&copy; {new Date().getFullYear()} Studio Desk. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-primary-900 transition-colors">About</Link>
            <Link href="/projects" className="hover:text-primary-900 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-primary-900 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
