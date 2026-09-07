'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HeroSceneInner = dynamic(() => import('./HeroSceneInner'), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />,
})

export function HeroScene() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-electric/20 bg-navy-850/80 shadow-glow sm:h-[400px] lg:h-[460px]">
      <Suspense fallback={<div className="h-full w-full animate-pulse bg-white/5" />}>
        <HeroSceneInner />
      </Suspense>
    </div>
  )
}
