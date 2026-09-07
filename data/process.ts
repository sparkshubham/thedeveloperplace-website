import type { ProcessStep } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'Discovery and Requirement Analysis',
    description:
      'We map business goals, users, constraints, and success metrics before a single screen is designed.',
  },
  {
    id: 'ux',
    title: 'UI/UX Planning',
    description:
      'Wireframes and interaction flows that keep complex operations clear for daily operators.',
  },
  {
    id: 'architecture',
    title: 'Architecture and Database Design',
    description:
      'Scalable schemas, APIs, and tenancy models designed for security, performance, and growth.',
  },
  {
    id: 'development',
    title: 'Agile Development',
    description:
      'Iterative sprints with visible progress, demos, and room to refine based on real feedback.',
  },
  {
    id: 'qa',
    title: 'Testing and Quality Assurance',
    description:
      'Functional, edge-case, and regression checks so releases are stable in production.',
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'Hardened cloud releases with environments, monitoring, and zero-drama go-lives.',
  },
  {
    id: 'maintenance',
    title: 'Maintenance and Continuous Improvement',
    description:
      'Ongoing support, feature iterations, and performance tuning as your business evolves.',
  },
]
