'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

function Core() {
  const mesh = useRef<Mesh>(null)
  const reduced = usePrefersReducedMotion()

  useFrame((_, delta) => {
    if (reduced || !mesh.current) return
    mesh.current.rotation.x += delta * 0.2
    mesh.current.rotation.y += delta * 0.25
  })

  return (
    <Float speed={reduced ? 0 : 1.2} floatIntensity={reduced ? 0 : 0.5}>
      <mesh ref={mesh} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#3B82F6"
          emissive="#8B5CF6"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.55}
          distort={reduced ? 0.08 : 0.3}
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
    </Float>
  )
}

export default function HeroSceneInner() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.5]}>
      <color attach="background" args={['#070b16']} />
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 2]} intensity={1.3} color="#60A5FA" />
      <pointLight position={[-3, -2, -1]} intensity={0.9} color="#8B5CF6" />
      <Core />
    </Canvas>
  )
}
