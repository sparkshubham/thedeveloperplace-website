'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DoubleSide, type Mesh, type MeshBasicMaterial } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { CinematicRig, SceneLights } from './shared'

function SignalPulse() {
  const rings = useRef<(Mesh | null)[]>([])
  const reduced = usePrefersReducedMotion()

  useFrame(({ clock }) => {
    if (reduced) return
    const t = clock.elapsedTime
    rings.current.forEach((mesh, i) => {
      if (!mesh) return
      const wave = ((t * 0.45 + i * 0.33) % 1)
      const scale = 0.45 + wave * 2.1
      mesh.scale.setScalar(scale)
      const mat = mesh.material as MeshBasicMaterial
      mat.opacity = Math.max(0, 0.55 * (1 - wave))
    })
  })

  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.85}
          metalness={0.25}
          roughness={0.2}
        />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            rings.current[i] = el
          }}
        >
          <ringGeometry args={[0.92, 0.98, 64]} />
          <meshBasicMaterial color="#67E8F9" transparent opacity={0.4} side={DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

export default function ContactSceneInner() {
  return (
    <Canvas camera={{ position: [0, 0, 4.6], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <SceneLights keyColor="#22D3EE" fillColor="#3B82F6" />
      <CinematicRig intensity={0.28} z={4.6} />
      <SignalPulse />
    </Canvas>
  )
}
