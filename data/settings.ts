export const siteConfig = {
  name: 'The Developer Place',
  tagline: 'Code. Create. Elevate.',
  description:
    'Modern software development and SaaS company building intelligent platforms, business automation, and scalable digital products.',
  url: 'https://thedeveloperplace.co.in',
  email: 'hello@thedeveloperplace.co.in',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  address: 'India · Remote & on-site delivery',
  social: {
    linkedin: 'https://www.linkedin.com/company/thedeveloperplace',
    twitter: 'https://twitter.com/thedeveloperplace',
    github: 'https://github.com/thedeveloperplace',
    instagram: 'https://instagram.com/thedeveloperplace',
  },
  yearsExperience: 7,
} as const

export type SiteConfig = typeof siteConfig
