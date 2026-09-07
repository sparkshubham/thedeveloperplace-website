'use client'

import { motion } from 'framer-motion'
import { useMagnetic } from '@/hooks/useMagnetic'
import { Button, type ButtonProps } from '@/components/ui/Button'

export function MagneticButton(props: ButtonProps) {
  const { ref, style, onMouseMove, onMouseLeave } = useMagnetic(0.28)

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: style.x, y: style.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.4 }}
      className="inline-flex"
    >
      <Button {...props} />
    </motion.div>
  )
}
