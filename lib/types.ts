export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalProject extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  projectCategory?: string
  clientName?: string
  year?: string
  projectUrl?: string
  image?: DrupalImage
  featured?: boolean
}

export interface ProjectData {
  nodeProjects: {
    nodes: DrupalProject[]
  }
}

export interface DrupalSkill extends DrupalNode {
  body?: {
    processed: string
  }
  proficiencyLevel?: string
  yearsExperience?: number
  image?: DrupalImage
}

export interface SkillData {
  nodeSkills: {
    nodes: DrupalSkill[]
  }
}

export interface DrupalTestimonial extends DrupalNode {
  body?: {
    processed: string
  }
  clientName?: string
  projectName?: string
  role?: string
  photo?: DrupalImage
  rating?: number
}

export interface TestimonialData {
  nodeTestimonials: {
    nodes: DrupalTestimonial[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
