'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { CinematicRig, SceneLights } from './scenes/shared'

function Core() {
  const mesh = useRef<Mesh>(null)
  const ring = useRef<Mesh>(null)
  const reduced = usePrefersReducedMotion()

  useFrame((_, delta) => {
    if (reduced) return
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2
      mesh.current.rotation.y += delta * 0.25
    }
    if (ring.current) {
      ring.current.rotation.z += delta * 0.18
      ring.current.rotation.x += delta * 0.08
    }
  })

  return (
    <Float speed={reduced ? 0 : 1.2} floatIntensity={reduced ? 0 : 0.5}>
      <mesh ref={ring} rotation={[0.6, 0.2, 0]}>
        <torusGeometry args={[1.55, 0.025, 12, 80]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#0891b2"
          emissiveIntensity={0.55}
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>
      <mesh ref={mesh} scale={1.15}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#3B82F6"
          emissive="#8B5CF6"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.55}
          distort={reduced ? 0.08 : 0.32}
          speed={reduced ? 0 : 2}
        />
      </mesh>
      {[
        [1.5, 0.7, 0.2],
        [-1.4, 0.5, -0.3],
        [0.3, -1.3, 0.5],
        [-0.6, 1.2, -0.6],
        [1.0, -0.8, -0.7],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#22D3EE' : '#A78BFA'}
            emissive={i % 2 === 0 ? '#0891b2' : '#7c3aed'}
            emissiveIntensity={0.4}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      ))}
      <Sparkles count={36} scale={5.5} size={2.2} speed={reduced ? 0 : 0.45} color="#67E8F9" />
    </Float>
  )
}

export default function HeroSceneInner() {
  return (
    <Canvas camera={{ position: [0, 0, 4.4], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <SceneLights />
      <CinematicRig intensity={0.38} z={4.4} />
      <Core />
    </Canvas>
  )
}
