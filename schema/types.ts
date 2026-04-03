// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroImage: { url: string; alt: string; width: number; height: number };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProject {
  id: string;
  body: { value: string; summary?: string };
  category: any[];
  clientName: string;
  githubUrl: string;
  path: string;
  projectImage: { url: string; alt: string; width: number; height: number };
  projectRole: string;
  projectUrl: string;
  projectYear: string;
  technologies: string[];
  title: string;
}

export interface NodeSkill {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  proficiency: string;
  skillCategory: string;
  skillIcon: string;
  title: string;
  yearsExperience: string;
}

export interface NodeTestimonial {
  id: string;
  body: { value: string; summary?: string };
  clientCompany: string;
  clientName: string;
  clientPhoto: { url: string; alt: string; width: number; height: number };
  clientTitle: string;
  path: string;
  projectName: string;
  rating: number;
  title: string;
}
