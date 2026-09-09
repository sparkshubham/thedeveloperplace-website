export const siteConfig = {
  name: 'The Developer Place',
  tagline: 'Code. Create. Elevate.',
  description:
    'Modern software development and SaaS company building intelligent platforms, business automation, and scalable digital products.',
  url: 'https://thedeveloperplace.co.in',
  email: 'thedeveloperplace@gmail.com',
  phone: '+91 86967 42118',
  whatsapp: '918696742118',
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
