import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AiSection } from '@/components/sections/AiSection'
import { MagneticButton } from '@/components/animations/MagneticButton'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom software, SaaS, ERP, ecommerce, AI automation, and cloud delivery from The Developer Place.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        variant="services"
        eyebrow="Services"
        title="Engineering that ships"
        highlight="real business systems"
        description="A connected stack of custom software, SaaS, mobile, ERP, and automation — built around how your teams actually work."
      >
        <MagneticButton href="/contact" size="lg">
          Start Your Project
        </MagneticButton>
      </PageHero>
      <ServicesSection />
      <AiSection />
    </>
  )
}
