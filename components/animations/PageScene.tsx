'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { cn } from '@/lib/utils'

export type SceneVariant = 'services' | 'products' | 'process' | 'about' | 'contact'

const ServicesScene = dynamic(() => import('./scenes/ServicesSceneInner'), { ssr: false })
const ProductsScene = dynamic(() => import('./scenes/ProductsSceneInner'), { ssr: false })
const ProcessScene = dynamic(() => import('./scenes/ProcessSceneInner'), { ssr: false })
const AboutScene = dynamic(() => import('./scenes/AboutSceneInner'), { ssr: false })
const ContactScene = dynamic(() => import('./scenes/ContactSceneInner'), { ssr: false })

const scenes = {
  services: ServicesScene,
  products: ProductsScene,
  process: ProcessScene,
  about: AboutScene,
  contact: ContactScene,
} as const

export function PageScene({ variant, className }: { variant: SceneVariant; className?: string }) {
  const Inner = scenes[variant]

  return (
    <div className={cn('relative h-full min-h-[280px] w-full overflow-hidden', className)} aria-hidden>
      <Suspense fallback={<div className="h-full w-full animate-pulse bg-white/5" />}>
        <Inner />
      </Suspense>
    </div>
  )
}
