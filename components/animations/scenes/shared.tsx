'use client'

import { useFrame } from '@react-three/fiber'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

export function SceneLights({
  keyColor = '#60A5FA',
  fillColor = '#8B5CF6',
}: {
  keyColor?: string
  fillColor?: string
}) {
  return (
    <>
      <color attach="background" args={['#070b16']} />
      <fog attach="fog" args={['#070b16', 8, 16]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 2]} intensity={1.25} color={keyColor} />
      <pointLight position={[-3, -2, -1]} intensity={0.9} color={fillColor} />
    </>
  )
}

export function CinematicRig({ intensity = 0.48, z = 4.4 }: { intensity?: number; z?: number }) {
  const reduced = usePrefersReducedMotion()

  useFrame(({ camera, clock, pointer }) => {
    if (reduced) {
      camera.position.set(0, 0, z)
      camera.lookAt(0, 0, 0)
      return
    }
    const t = clock.elapsedTime
    const tx = Math.sin(t * 0.2) * intensity + pointer.x * 0.42
    const ty = Math.cos(t * 0.16) * intensity * 0.38 + pointer.y * 0.24
    camera.position.x += (tx - camera.position.x) * 0.05
    camera.position.y += (ty - camera.position.y) * 0.05
    camera.position.z += (z - camera.position.z) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return null
}
