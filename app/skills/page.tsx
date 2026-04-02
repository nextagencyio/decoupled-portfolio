import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_SKILL_TEASERS } from '@/lib/queries'
import { SkillData } from '@/lib/types'
import Header from '../components/Header'
import SkillCard from '../components/SkillCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: 'Technologies, languages, and frameworks I work with, from React and TypeScript to Node.js and cloud infrastructure.',
}

async function getSkills() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_SKILL_TEASERS, { first: 50 })
    return data?.nodeSkills?.nodes || []
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}

export default async function SkillsPage() {
  const items = await getSkills()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Skills
            </h1>
            <p className="text-xl text-zinc-100 max-w-3xl mx-auto">
              Technologies, frameworks, and tools I use to build modern web applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Skills Yet</h2>
              <p className="text-gray-500">
                Skills will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <SkillCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
