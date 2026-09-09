'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { CinematicRig, SceneLights } from './shared'

function ColdFlowCluster() {
  const group = useRef<Group>(null)
  const reduced = usePrefersReducedMotion()

  useFrame((_, delta) => {
    if (reduced || !group.current) return
    group.current.rotation.y += delta * 0.18
    group.current.rotation.x += delta * 0.05
  })

  return (
    <Float speed={reduced ? 0 : 1.1} floatIntensity={reduced ? 0 : 0.35}>
      <group ref={group} position={[-1.35, 0.05, 0]}>
        <mesh>
          <octahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial
            color="#01BAEF"
            emissive="#0891b2"
            emissiveIntensity={0.4}
            metalness={0.75}
            roughness={0.12}
          />
        </mesh>
        {[
          [0.85, 0.35, 0.15],
          [-0.7, 0.45, -0.25],
          [0.15, -0.8, 0.35],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial
              color="#67E8F9"
              emissive="#22D3EE"
              emissiveIntensity={0.5}
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function OmniRetailCluster() {
  const mesh = useRef<Group>(null)
  const reduced = usePrefersReducedMotion()

  useFrame((_, delta) => {
    if (reduced || !mesh.current) return
    mesh.current.rotation.y -= delta * 0.22
  })

  return (
    <Float speed={reduced ? 0 : 1.3} floatIntensity={reduced ? 0 : 0.4}>
      <group ref={mesh} position={[1.35, 0, 0]}>
        <mesh rotation={[0.45, 0.2, 0.15]}>
          <torusKnotGeometry args={[0.48, 0.13, 128, 18]} />
          <meshStandardMaterial
            color="#BE185D"
            emissive="#9d174d"
            emissiveIntensity={0.45}
            metalness={0.45}
            roughness={0.28}
          />
        </mesh>
      </group>
    </Float>
  )
}

export default function ProductsSceneInner() {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <SceneLights keyColor="#01BAEF" fillColor="#BE185D" />
      <CinematicRig intensity={0.36} z={5.2} />
      <ColdFlowCluster />
      <OmniRetailCluster />
    </Canvas>
  )
}
