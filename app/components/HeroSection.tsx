'use client'

import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Design-driven developer who ships.'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'I build polished digital products at the intersection of design and engineering.'

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&q=80&fit=crop"
          alt="Portfolio workspace"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-950/90 to-accent-950/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-[15%] w-80 h-80 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-[10%] w-56 h-56 rounded-full bg-accent-600/8 blur-2xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Greeting tag */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-accent-400 text-sm font-medium tracking-wide">
              Available for new projects
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-primary-300 mt-8 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-200 hover:gap-3"
            >
              View My Work
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-semibold rounded-full hover:border-accent-400 hover:text-accent-400 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-16">
            <a href="#" className="text-primary-500 hover:text-accent-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-500 hover:text-accent-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-500 hover:text-accent-400 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-950 to-transparent" />
    </section>
  )
}
