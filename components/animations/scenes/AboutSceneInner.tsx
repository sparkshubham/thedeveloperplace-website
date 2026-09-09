'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { CinematicRig, SceneLights } from './shared'

function InterlockingRings() {
  const group = useRef<Group>(null)
  const reduced = usePrefersReducedMotion()

  useFrame((_, delta) => {
    if (reduced || !group.current) return
    group.current.rotation.x += delta * 0.12
    group.current.rotation.y += delta * 0.18
  })

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.25, 0.042, 16, 80]} />
        <meshStandardMaterial color="#60A5FA" emissive="#2563EB" emissiveIntensity={0.45} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh rotation={[0.2, 0, Math.PI / 3]}>
        <torusGeometry args={[1.25, 0.042, 16, 80]} />
        <meshStandardMaterial color="#A78BFA" emissive="#7c3aed" emissiveIntensity={0.45} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 5, Math.PI / 2.2, 0.15]}>
        <torusGeometry args={[1.25, 0.042, 16, 80]} />
        <meshStandardMaterial color="#22D3EE" emissive="#0891b2" emissiveIntensity={0.5} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.42, 1]} />
        <MeshDistortMaterial
          color="#3B82F6"
          emissive="#8B5CF6"
          emissiveIntensity={0.28}
          roughness={0.22}
          metalness={0.5}
          distort={reduced ? 0.06 : 0.28}
          speed={reduced ? 0 : 1.6}
        />
      </mesh>
    </group>
  )
}

export default function AboutSceneInner() {
  return (
    <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <SceneLights keyColor="#A78BFA" fillColor="#22D3EE" />
      <CinematicRig intensity={0.42} z={4.8} />
      <InterlockingRings />
    </Canvas>
  )
}
