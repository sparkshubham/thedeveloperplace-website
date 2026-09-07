'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  tilt?: boolean
}

export function Card({ children, className, tilt = true }: Props) {
  const [transform, setTransform] = useState('')

  return (
    <div
      className={cn(
        'glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:border-electric/35 hover:shadow-glow',
        className,
      )}
      style={{ transform, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        if (!tilt) return
        const rect = e.currentTarget.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        const rx = (py - 0.5) * -8
        const ry = (px - 0.5) * 8
        setTransform(`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`)
      }}
      onMouseLeave={() => setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)')}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.12), transparent 40%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
