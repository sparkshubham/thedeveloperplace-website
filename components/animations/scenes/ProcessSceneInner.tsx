'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { CatmullRomCurve3, TubeGeometry, Vector3 } from 'three'
import type { Mesh } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { CinematicRig, SceneLights } from './shared'

function Journey() {
  const traveler = useRef<Mesh>(null)
  const reduced = usePrefersReducedMotion()
  const curve = useMemo(
    () =>
      new CatmullRomCurve3(
        [
          new Vector3(-2.2, -0.9, 0.2),
          new Vector3(-1.1, 0.7, 0.6),
          new Vector3(0.1, -0.35, -0.4),
          new Vector3(1.15, 0.85, 0.35),
          new Vector3(2.2, -0.15, 0),
        ],
        false,
        'catmullrom',
        0.45,
      ),
    [],
  )
  const tube = useMemo(() => new TubeGeometry(curve, 80, 0.028, 8, false), [curve])
  const nodes = useMemo(() => curve.getSpacedPoints(6), [curve])

  useEffect(() => () => tube.dispose(), [tube])

  useFrame(({ clock }) => {
    if (reduced || !traveler.current) return
    const t = (clock.elapsedTime * 0.07) % 1
    traveler.current.position.copy(curve.getPointAt(t))
  })

  return (
    <group>
      <mesh geometry={tube}>
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#8B5CF6"
          emissiveIntensity={0.45}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color="#A78BFA"
            emissive="#7c3aed"
            emissiveIntensity={0.55}
            metalness={0.3}
            roughness={0.25}
          />
        </mesh>
      ))}
      <mesh ref={traveler} position={nodes[0]}>
        <sphereGeometry args={[0.14, 20, 20]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.9}
          metalness={0.2}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

export default function ProcessSceneInner() {
  return (
    <Canvas camera={{ position: [0, 0.2, 5.4], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <SceneLights keyColor="#8B5CF6" fillColor="#22D3EE" />
      <CinematicRig intensity={0.32} z={5.4} />
      <Journey />
    </Canvas>
  )
}
