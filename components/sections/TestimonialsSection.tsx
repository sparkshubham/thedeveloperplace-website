'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { testimonials } from '@/data/testimonials'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const reduced = usePrefersReducedMotion()
  const item = testimonials[index]

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <Section
      eyebrow="Testimonials"
      title="What partners say"
      titleHighlight="about working with us"
      description="Placeholder stories for design purposes — swap in real client quotes anytime from data/testimonials.ts."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="glass-strong overflow-hidden rounded-3xl p-8 sm:p-10">
          <Quote className="mb-4 h-8 w-8 text-electric/70" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="text-lg leading-relaxed text-slate-200 sm:text-xl">
                “{item.quote}”
              </blockquote>
              <footer className="mt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">
                  {item.role} · {item.company}
                </p>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-200 hover:border-electric/40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition ${
                  i === index ? 'w-6 bg-electric' : 'w-2.5 bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-200 hover:border-electric/40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  )
}
