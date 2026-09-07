'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/animations/Reveal'
import { Counter } from '@/components/animations/Counter'
import { whyItems, stats } from '@/data/why'

export function WhySection() {
  return (
    <Section
      id="about"
      eyebrow="Why Choose Us"
      title="A product partner,"
      titleHighlight="not a body shop"
      description="We combine business context with modern engineering so your software compounds value over years — not just a launch week."
    >
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05}>
            <div className="glass-strong rounded-2xl px-5 py-6 text-center">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {whyItems.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.04}>
            <Card tilt={false} className="h-full">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet/15 text-violet-soft">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
