export interface DrupalNode {
  id: string
  title: string
  path: string
  __typename?: string
  created?: {
    timestamp: number
  }
  changed?: {
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
  category?: Array<{ name: string }>
  clientName?: string
  projectYear?: string
  projectUrl?: string
  githubUrl?: string
  projectRole?: string
  technologies?: string[]
  projectImage?: DrupalImage
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
  proficiency?: string
  yearsExperience?: string
  skillIcon?: string
  skillCategory?: string
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
  clientTitle?: string
  clientCompany?: string
  clientPhoto?: DrupalImage
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

export interface DrupalStatItem {
  id: string
  number?: string
  label?: string
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  heroImage?: DrupalImage
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
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
