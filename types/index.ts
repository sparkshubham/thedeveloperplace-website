export type NavLink = {
  href: string
  label: string
}

export type Service = {
  id: string
  title: string
  description: string
  icon: string
  href: string
}

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  tech: string[]
  demoUrl: string
  color: string
  flagship?: boolean
}

export type ProcessStep = {
  id: string
  title: string
  description: string
}

export type Stat = {
  value: number
  suffix: string
  label: string
  prefix?: string
}

export type TechItem = {
  name: string
  category: 'language' | 'framework' | 'database' | 'infra' | 'protocol'
}

export type AiFeature = {
  id: string
  title: string
  description: string
  icon: string
}

export type Industry = {
  id: string
  name: string
  description: string
  icon: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export type WhyItem = {
  id: string
  title: string
  description: string
  icon: string
}

export type ChatMessage = {
  role: 'customer' | 'assistant'
  text: string
  delay: number
}
