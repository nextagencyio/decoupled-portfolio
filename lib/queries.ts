// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_PROJECT_TEASERS = gql`
  query GetProjectTeasers($first: Int = 10) {
    nodeProjects(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeProject {
          body {
            processed
            summary
          }
          category {
            ... on TermProjectCategory {
              name
            }
          }
          clientName
          projectYear
          projectUrl
          githubUrl
          projectRole
          technologies
          projectImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SKILL_TEASERS = gql`
  query GetSkillTeasers($first: Int = 10) {
    nodeSkills(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeSkill {
          body {
            processed
          }
          proficiency
          yearsExperience
          skillIcon
          skillCategory
        }
      }
    }
  }
`

export const GET_TESTIMONIAL_TEASERS = gql`
  query GetTestimonialTeasers($first: Int = 10) {
    nodeTestimonials(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeTestimonial {
          body {
            processed
          }
          clientName
          projectName
          clientTitle
          clientCompany
          clientPhoto {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          rating
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        heroImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        statsItems {
          ... on ParagraphStatItem { id number label }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeProject {
            __typename
            id
            title
            path
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            category {
              ... on TermProjectCategory {
                name
              }
            }
            clientName
            projectYear
            projectUrl
            githubUrl
            projectRole
            technologies
            projectImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeSkill {
            __typename
            id
            title
            path
            body {
              processed
            }
            proficiency
            yearsExperience
            skillIcon
            skillCategory
          }
          ... on NodeTestimonial {
            __typename
            id
            title
            path
            body {
              processed
            }
            clientName
            projectName
            clientTitle
            clientCompany
            clientPhoto {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
            rating
          }
          ... on NodeHomepage {
            __typename
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            heroImage {
              url
              alt
              width
              height
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`
