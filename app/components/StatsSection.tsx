'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="bg-primary-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {stats.map((stat: any, i: number) => (
              <span key={stat.id || i} className="flex items-center gap-x-3">
                <span className="font-display font-black text-2xl text-white">{stat.value || stat.number || stat.statValue}</span>
                <span className="text-sm text-primary-400">{stat.label || stat.statLabel || stat.title}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
