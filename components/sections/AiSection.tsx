'use client'

import { useEffect, useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/animations/Reveal'
import { aiFeatures, chatDemo } from '@/data/ai'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function AiSection() {
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(reduced ? chatDemo.length : 0)

  useEffect(() => {
    if (reduced) {
      setVisible(chatDemo.length)
      return
    }
    const timers = chatDemo.map((msg, index) =>
      window.setTimeout(() => setVisible(index + 1), msg.delay),
    )
    const loop = window.setInterval(() => {
      setVisible(0)
      chatDemo.forEach((msg, index) => {
        window.setTimeout(() => setVisible(index + 1), msg.delay)
      })
    }, 9000)
    return () => {
      timers.forEach(clearTimeout)
      clearInterval(loop)
    }
  }, [reduced])

  return (
    <Section
      className="overflow-hidden"
      eyebrow="AI Solutions"
      title="Add Intelligence to Your"
      titleHighlight="Existing Business Software"
      description="Layer AI assistants, forecasting, and automation onto the systems you already run — without ripping out your ERP."
    >
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {aiFeatures.map((feature, i) => (
            <Reveal key={feature.id} delay={i * 0.04}>
              <Card tilt={false} className="h-full !p-4">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-soft">
                  <Icon name={feature.icon} className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{feature.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="glass-strong rounded-2xl p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">AI sales assistant demo</p>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                Live simulation
              </span>
            </div>
            <div className="space-y-3" aria-live="polite">
              {chatDemo.slice(0, visible).map((msg, i) => (
                <div
                  key={`${msg.role}-${i}`}
                  className={cn(
                    'max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                    msg.role === 'customer'
                      ? 'ml-auto bg-electric/20 text-slate-100'
                      : 'mr-auto bg-white/5 text-slate-300',
                  )}
                >
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {msg.role === 'customer' ? 'Customer' : 'AI Assistant'}
                  </span>
                  {msg.text}
                </div>
              ))}
              {visible < chatDemo.length ? (
                <div className="mr-auto rounded-2xl bg-white/5 px-3 py-2 text-xs text-slate-500">
                  Typing…
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
