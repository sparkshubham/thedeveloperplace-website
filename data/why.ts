import type { WhyItem, Stat } from '@/types'

export const whyItems: WhyItem[] = [
  {
    id: 'business-focus',
    title: 'Business-focused product development',
    description:
      'Every feature is tied to operational outcomes — speed, accuracy, revenue, and control.',
    icon: 'Target',
  },
  {
    id: 'architecture',
    title: 'Modern and scalable architecture',
    description:
      'Clean APIs, solid databases, and SaaS patterns that grow with your company.',
    icon: 'Layers',
  },
  {
    id: 'multi-company',
    title: 'Secure multi-company systems',
    description:
      'Tenant isolation, RBAC, and audit trails built for platforms that serve many businesses.',
    icon: 'ShieldCheck',
  },
  {
    id: 'code-quality',
    title: 'Clean and maintainable code',
    description:
      'Typed, modular codebases your future team can extend without fear.',
    icon: 'FileCode2',
  },
  {
    id: 'communication',
    title: 'Transparent project communication',
    description:
      'Clear timelines, demos, and decisions — no black-box delivery.',
    icon: 'MessagesSquare',
  },
  {
    id: 'support',
    title: 'Long-term technical support',
    description:
      'We stay after launch for fixes, improvements, and production care.',
    icon: 'LifeBuoy',
  },
  {
    id: 'integrations',
    title: 'Integration with existing software',
    description:
      'We connect your ERP, marketplaces, WhatsApp, payments, and logistics — not replace everything overnight.',
    icon: 'Link2',
  },
]

export const stats: Stat[] = [
  { value: 7, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Responsive Solutions' },
  { value: 100, suffix: '%', label: 'End-to-End Development' },
]

export const trustIndicators = [
  '7+ Years of Development Experience',
  'Full-Stack Development',
  'Scalable SaaS Architecture',
  'Business Automation Experts',
] as const
