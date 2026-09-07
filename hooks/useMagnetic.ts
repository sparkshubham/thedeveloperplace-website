'use client'

import { useCallback, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement | null>(null)
  const reduced = usePrefersReducedMotion()
  const [style, setStyle] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setStyle({ x: x * strength, y: y * strength })
    },
    [reduced, strength],
  )

  const onMouseLeave = useCallback(() => {
    setStyle({ x: 0, y: 0 })
  }, [])

  return { ref, style, onMouseMove, onMouseLeave }
}
