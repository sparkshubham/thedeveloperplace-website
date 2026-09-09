'use client'

import { CheckCircle2 } from 'lucide-react'
import { Particles } from '@/components/animations/Particles'
import { FloatingOrbs } from '@/components/animations/FloatingOrbs'
import { HeroScene } from '@/components/animations/HeroScene'
import { GradientText } from '@/components/animations/GradientText'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/animations/Reveal'
import { trustIndicators } from '@/data/why'

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-radial pb-16 pt-10 md:pb-24 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <FloatingOrbs />
      <Particles className="pointer-events-none absolute inset-0 opacity-70" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-soft">
              Software · SaaS · Automation
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              We Build <GradientText>Intelligent Software</GradientText> That Moves Businesses Forward.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              From powerful SaaS platforms and business automation to modern web and mobile
              applications, we turn complex ideas into scalable digital products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/contact" size="lg">
                Start Your Project
              </MagneticButton>
              <Button href="/products" variant="secondary" size="lg">
                Explore Our Products
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 grid gap-3 sm:grid-cols-2">
            {trustIndicators.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-glow" aria-hidden />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <HeroScene />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {['Connected Systems', 'Live Data Nodes', 'AI-Ready Stack'].map((label) => (
              <div
                key={label}
                className="glass rounded-xl px-3 py-3 text-center text-xs font-medium text-slate-300"
              >
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
