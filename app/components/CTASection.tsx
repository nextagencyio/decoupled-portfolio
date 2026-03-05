'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || "Have a project in mind?"
  const primaryLabel = (homepageContent as any)?.ctaPrimary || "Let's Talk"

  return (
    <section className="relative bg-gradient-to-br from-accent-600 via-accent-500 to-accent-700 py-28 md:py-36 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
          {title}
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          I am always excited to work on new challenges. Drop me a line and let us create something great together.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-white text-accent-600 px-8 py-4 text-sm font-bold rounded-full hover:bg-primary-950 hover:text-white transition-all duration-300 hover:gap-3"
        >
          {primaryLabel}
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}
