'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

export function CursorGlow() {
  const reduced = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 120, damping: 28 })
  const sy = useSpring(y, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine && !reduced)
    if (!fine || reduced) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 160)
      y.set(e.clientY - 160)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [reduced, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),rgba(34,211,238,0.08),transparent_70%)] blur-2xl md:block"
      style={{ translateX: sx, translateY: sy }}
    />
  )
}
