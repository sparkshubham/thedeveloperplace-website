import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { WhySection } from '@/components/sections/WhySection'
import { TechSection } from '@/components/sections/TechSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { MagneticButton } from '@/components/animations/MagneticButton'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The Developer Place is a product partner for industry software — ColdFlow, OMNIRETAIL, and custom SaaS.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="about"
        eyebrow="About"
        title="A product partner,"
        highlight="not a body shop"
        description="We combine business context with modern engineering so software compounds value over years — not just a launch week."
      >
        <MagneticButton href="/contact" size="lg">
          Work with us
        </MagneticButton>
      </PageHero>
      <WhySection />
      <TechSection />
      <IndustriesSection />
      <TestimonialsSection />
    </>
  )
}
