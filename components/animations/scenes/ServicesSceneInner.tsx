'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import { Group, Vector3 } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { CinematicRig, SceneLights } from './shared'

function fibonacciSphere(count: number, radius: number) {
  const pts: Vector3[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i
    pts.push(new Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius))
  }
  return pts
}

function ServiceNetwork() {
  const group = useRef<Group>(null)
  const reduced = usePrefersReducedMotion()
  const points = useMemo(() => fibonacciSphere(20, 1.65), [])
  const lines = useMemo(() => {
    const segs: [Vector3, Vector3][] = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 1.32) segs.push([points[i], points[j]])
      }
    }
    return segs
  }, [points])

  useFrame((_, delta) => {
    if (reduced || !group.current) return
    group.current.rotation.y += delta * 0.14
  })

  return (
    <group ref={group}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 4 === 0 ? 0.09 : 0.06, 16, 16]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#22D3EE' : '#60A5FA'}
            emissive={i % 3 === 0 ? '#0891b2' : '#2563EB'}
            emissiveIntensity={0.55}
            metalness={0.35}
            roughness={0.25}
          />
        </mesh>
      ))}
      {lines.map((pts, i) => (
        <Line key={i} points={pts} color="#67E8F9" transparent opacity={0.22} lineWidth={1} />
      ))}
    </group>
  )
}

export default function ServicesSceneInner() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <SceneLights keyColor="#22D3EE" fillColor="#3B82F6" />
      <CinematicRig intensity={0.4} z={5} />
      <ServiceNetwork />
    </Canvas>
  )
}
