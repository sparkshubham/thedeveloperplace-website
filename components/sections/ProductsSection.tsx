'use client'

import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'

export function ProductsSection() {
  return (
    <Section
      id="products"
      className="bg-section-glow"
      eyebrow="Featured Products"
      title="Flagship platforms"
      titleHighlight="built for industry"
      description="ColdFlow and OMNIRETAIL lead our portfolio — plus a reusable marketplace integration engine for ERP-connected commerce."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.06}>
            <article
                id={product.id}
                className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition hover:border-electric/40 hover:shadow-glow"
              >
              <div
                className="relative h-44 overflow-hidden border-b border-white/10"
                style={{
                  background: `linear-gradient(145deg, ${product.color}33, transparent 60%), #0b1220`,
                }}
              >
                <div className="absolute inset-4 rounded-xl border border-white/10 bg-navy-900/70 p-4 shadow-glass transition duration-500 group-hover:scale-[1.04]">
                  <div className="mb-3 flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <p className="text-sm font-bold text-white">{product.name}</p>
                  <p className="text-xs text-slate-400">{product.tagline}</p>
                  <div className="mt-4 flex gap-2">
                    <div className="h-8 flex-1 rounded-md bg-white/5" />
                    <div className="h-8 w-16 rounded-md" style={{ background: `${product.color}55` }} />
                  </div>
                  <div className="mt-2 h-16 rounded-md bg-gradient-to-br from-white/10 to-transparent" />
                </div>
                {product.flagship ? (
                  <span className="absolute right-3 top-3 rounded-full bg-electric/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-soft">
                    Flagship
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.tech.map((t) => (
                    <Badge key={t} className="normal-case tracking-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {product.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full')} style={{ background: product.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={product.demoUrl} size="sm" className="flex-1">
                    View Demo
                  </Button>
                  <Button href="/contact" variant="secondary" size="sm" className="flex-1">
                    Request Consultation
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
