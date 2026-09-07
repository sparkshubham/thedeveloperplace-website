'use client'

import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/animations/Reveal'
import { processSteps } from '@/data/process'

export function ProcessSection() {
  return (
    <Section
      id="process"
      eyebrow="Development Process"
      title="From discovery to"
      titleHighlight="continuous improvement"
      description="A clear timeline with visible milestones — so stakeholders always know what is shipping next."
    >
      <ol className="relative mx-auto max-w-3xl space-y-6 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-electric before:via-violet before:to-cyan-glow md:before:left-1/2 md:before:-translate-x-px">
        {processSteps.map((step, i) => (
          <Reveal key={step.id} delay={i * 0.05}>
            <li
              className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
              }`}
            >
              <div className={`${i % 2 === 0 ? 'md:text-right' : ''} pl-14 md:pl-0`}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-soft">
                  Step {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.description}</p>
              </div>
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-electric/40 bg-navy-800 text-sm font-bold text-electric-soft shadow-glow md:left-1/2 md:-translate-x-1/2">
                {i + 1}
              </div>
              <div className="hidden md:block" />
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
