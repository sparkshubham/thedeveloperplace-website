'use client'

import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/animations/Reveal'
import { techStack } from '@/data/tech'

export function TechSection() {
  return (
    <Section
      eyebrow="Technology Stack"
      title="Modern tools for"
      titleHighlight="production software"
      description="We pick proven technologies that keep systems fast, secure, and maintainable."
    >
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech, i) => (
          <Reveal key={tech.name} delay={i * 0.03}>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r from-white/[0.06] to-electric/10 px-4 py-2 text-sm font-semibold text-slate-200 shadow-glass transition hover:-translate-y-0.5 hover:border-cyan-glow/40 hover:shadow-glow-cyan">
              {tech.name}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
