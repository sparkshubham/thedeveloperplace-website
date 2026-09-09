'use client'

import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'
import { GradientText } from '@/components/animations/GradientText'
import { PageScene, type SceneVariant } from '@/components/animations/PageScene'
import { Reveal } from '@/components/animations/Reveal'
import { cn } from '@/lib/utils'

const tints: Record<SceneVariant, string> = {
  services: 'from-navy-900 via-navy-900/55 to-electric/10',
  products: 'from-navy-900 via-navy-900/50 to-cyan-glow/10',
  process: 'from-navy-900 via-navy-900/55 to-violet/15',
  about: 'from-navy-900 via-navy-900/50 to-violet/10',
  contact: 'from-navy-900 via-navy-900/55 to-cyan-glow/10',
}

export function PageHero({
  variant,
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  variant: SceneVariant
  eyebrow: string
  title: string
  highlight?: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <PageScene variant={variant} className="h-full min-h-full" />
      </div>
      <div
        className={cn('pointer-events-none absolute inset-0 bg-gradient-to-t', tints[variant])}
        aria-hidden
      />
      <Container className="pointer-events-none relative flex min-h-[420px] flex-col justify-end pb-14 pt-24 md:min-h-[520px] md:pb-20">
        <Reveal className="pointer-events-auto max-w-2xl">
          <Badge className="mb-4">{eyebrow}</Badge>
          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
            {title} {highlight ? <GradientText>{highlight}</GradientText> : null}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  )
}
