'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Figma, Code2, Brush, PanelsTopLeft, ArrowUpRight, Star } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const featuredProjects = [
  {
    title: 'Fintech Dashboard',
    tag: 'Product Design',
    description: 'End-to-end design and frontend build for a real-time trading analytics platform used by 50k+ traders.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tech: ['React', 'TypeScript', 'D3.js'],
  },
  {
    title: 'Brand System Refresh',
    tag: 'Brand Identity',
    description: 'Complete visual identity overhaul for a Series B SaaS company, including design system and marketing site.',
    image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=800&q=80',
    tech: ['Figma', 'Motion', 'CSS'],
  },
  {
    title: 'E-commerce Experience',
    tag: 'Web Development',
    description: 'Headless commerce storefront with sub-second page loads and a conversion rate 3x above industry average.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80',
    tech: ['Next.js', 'Shopify', 'Tailwind'],
  },
  {
    title: 'Health & Wellness App',
    tag: 'Mobile Design',
    description: 'iOS and Android fitness tracking app with personalized coaching, used by 200k+ active members.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    tech: ['React Native', 'Firebase', 'Lottie'],
  },
]

const capabilities = [
  { icon: Figma, label: 'UI/UX Systems', description: 'Research-driven interfaces that users love' },
  { icon: PanelsTopLeft, label: 'Prototyping', description: 'Interactive prototypes that prove concepts fast' },
  { icon: Brush, label: 'Brand Direction', description: 'Visual identity that tells your story' },
  { icon: Code2, label: 'Design + Dev', description: 'Pixel-perfect implementation, every time' },
]

const testimonials = [
  {
    quote: 'One of the most talented designers I have ever worked with. Delivers exceptional results every single time.',
    name: 'Alex Rivera',
    role: 'CTO, TechVentures',
  },
  {
    quote: 'Transformed our product from good to extraordinary. The attention to detail is unmatched.',
    name: 'Maya Patel',
    role: 'Product Lead, Streamline',
  },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-950">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-accent-500" />
            <span className="text-accent-400 text-sm font-medium tracking-wide">Featured Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              Selected Projects
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 text-sm font-semibold transition-colors"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group bg-primary-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-accent-500/20 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-semibold text-accent-400 tracking-wider uppercase mb-3">
                    {project.tag}
                  </p>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-primary-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-accent-500" />
              <span className="text-accent-500 text-sm font-medium tracking-wide">What I Do</span>
              <div className="w-10 h-px bg-accent-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-primary-950 tracking-tight">
              Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item) => (
              <div
                key={item.label}
                className="group text-center p-8 rounded-2xl border border-primary-100 hover:border-accent-200 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-50 mb-5 group-hover:bg-accent-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-primary-900 mb-2">{item.label}</h3>
                <p className="text-sm text-primary-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-28 bg-primary-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-accent-500" />
              <span className="text-accent-400 text-sm font-medium tracking-wide">Kind Words</span>
              <div className="w-10 h-px bg-accent-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight">
              What People Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-primary-900/50 border border-white/5 rounded-2xl p-8 md:p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-primary-200 leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-display font-bold text-white">{t.name}</p>
                  <p className="text-sm text-primary-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-display text-lg font-bold text-white">Studio Desk</p>
              <p className="text-sm text-primary-500 mt-1">Design & Development Portfolio</p>
            </div>
            <div className="flex gap-8 text-sm text-primary-400">
              <Link href="/projects" className="hover:text-accent-400 transition-colors">Projects</Link>
              <Link href="/skills" className="hover:text-accent-400 transition-colors">Skills</Link>
              <Link href="/about" className="hover:text-accent-400 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-accent-400 transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-primary-600">
              &copy; {new Date().getFullYear()} Studio Desk. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
