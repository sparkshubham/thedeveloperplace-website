import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { MagneticButton } from '@/components/animations/MagneticButton'

export const metadata: Metadata = {
  title: 'Process',
  description:
    'Discovery, UX, architecture, agile delivery, QA, deployment, and ongoing improvement — how The Developer Place ships software.',
}

export default function ProcessPage() {
  return (
    <>
      <PageHero
        variant="process"
        eyebrow="Development Process"
        title="A visible path from"
        highlight="discovery to launch"
        description="Seven stages with clear milestones. You always know what is shipping next — and why."
      >
        <MagneticButton href="/contact" size="lg">
          Plan a build
        </MagneticButton>
      </PageHero>
      <ProcessSection />
    </>
  )
}
