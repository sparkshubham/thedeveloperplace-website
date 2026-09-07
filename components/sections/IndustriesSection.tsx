'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/animations/Reveal'
import { industries } from '@/data/industries'

export function IndustriesSection() {
  return (
    <Section
      eyebrow="Industries"
      title="Domain expertise across"
      titleHighlight="operations-heavy businesses"
      description="We understand the workflows behind retail, cold storage, education, and professional services."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, i) => (
          <Reveal key={industry.id} delay={i * 0.04}>
            <Card className="h-full text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-electric-soft">
                <Icon name={industry.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-white">{industry.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{industry.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
