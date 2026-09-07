'use client'

import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/animations/Reveal'
import { services } from '@/data/services'

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Engineering that ships"
      titleHighlight="real business systems"
      description="From greenfield SaaS to industry ERPs and automation — we design, build, and maintain software your teams actually use."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.04}>
            <Card className="h-full">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-cyan-soft transition group-hover:scale-110 group-hover:bg-electric/25">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
              <a
                href={service.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-electric-soft transition hover:text-cyan-glow"
              >
                Learn More <ArrowUpRight className="h-4 w-4" />
              </a>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
