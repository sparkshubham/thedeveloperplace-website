import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { ContactSection } from '@/components/sections/ContactSection'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/settings'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Start a project with ${siteConfig.name}. Share your goals and we will respond with next steps.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Contact"
        title="Tell us what you want"
        highlight="to ship"
        description="Share a few details and we will come back with next steps, timeline guidance, and a demo if ColdFlow or OMNIRETAIL is a fit."
      >
        <MagneticButton href="#contact" size="lg">
          Jump to the form
        </MagneticButton>
        <Button href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} variant="secondary" size="lg">
          Call {siteConfig.phone}
        </Button>
        <Button href={`mailto:${siteConfig.email}`} variant="outline" size="lg">
          Email
        </Button>
      </PageHero>
      <ContactSection />
    </>
  )
}
