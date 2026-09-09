'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Grid, Line } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import { Group, Mesh, Vector3 } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { CinematicRig, SceneLights } from './scenes/shared'

function latLon(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

function arcPoints(a: Vector3, b: Vector3, lift: number, segments = 36) {
  const pts: Vector3[] = []
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    pts.push(
      new Vector3()
        .lerpVectors(a, b, t)
        .normalize()
        .multiplyScalar(1.18 + Math.sin(t * Math.PI) * lift),
    )
  }
  return pts
}

function ConnectedGlobe() {
  const group = useRef<Group>(null)
  const packets = useRef<(Mesh | null)[]>([])
  const reduced = usePrefersReducedMotion()

  const { hubs, arcs } = useMemo(() => {
    const r = 1.18
    const hubs = [
      latLon(28.6, 77.2, r),
      latLon(40.7, -74, r),
      latLon(51.5, -0.1, r),
      latLon(1.3, 103.8, r),
      latLon(35.7, 139.7, r),
      latLon(-33.9, 151.2, r),
    ]
    const pairs: [number, number, number][] = [
      [0, 1, 0.62],
      [0, 2, 0.5],
      [0, 3, 0.42],
      [1, 4, 0.7],
      [2, 5, 0.58],
      [3, 4, 0.38],
    ]
    const arcs = pairs.map(([i, j, lift]) => arcPoints(hubs[i], hubs[j], lift))
    return { hubs, arcs }
  }, [])

  useFrame(({ clock }, delta) => {
    if (group.current && !reduced) {
      group.current.rotation.y += delta * 0.16
    }
    if (reduced) return
    const t = clock.elapsedTime
    arcs.forEach((pts, i) => {
      const mesh = packets.current[i]
      if (!mesh) return
      const u = (t * 0.18 + i * 0.16) % 1
      const idx = u * (pts.length - 1)
      const a = Math.floor(idx)
      const b = Math.min(a + 1, pts.length - 1)
      mesh.position.lerpVectors(pts[a], pts[b], idx - a)
    })
  })

  return (
    <group ref={group} position={[0, 0.15, 0]}>
      <mesh>
        <sphereGeometry args={[1.12, 48, 48]} />
        <meshStandardMaterial
          color="#0b1220"
          metalness={0.72}
          roughness={0.28}
          emissive="#102038"
          emissiveIntensity={0.35}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.145, 28, 28]} />
        <meshStandardMaterial
          color="#22D3EE"
          wireframe
          transparent
          opacity={0.38}
          emissive="#22D3EE"
          emissiveIntensity={0.22}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.22, 32, 32]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.06} />
      </mesh>

      {hubs.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color={i === 0 ? '#67E8F9' : '#A78BFA'} />
        </mesh>
      ))}

      {arcs.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color={i % 2 === 0 ? '#22D3EE' : '#A78BFA'}
          transparent
          opacity={0.55}
          lineWidth={1.4}
        />
      ))}

      {arcs.map((_, i) => (
        <mesh
          key={`pkt-${i}`}
          ref={(el) => {
            packets.current[i] = el
          }}
        >
          <sphereGeometry args={[0.048, 12, 12]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  )
}

export default function HeroSceneInner() {
  const reduced = usePrefersReducedMotion()

  return (
    <Canvas camera={{ position: [0, 0.35, 4.6], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <SceneLights keyColor="#22D3EE" fillColor="#8B5CF6" />
      <CinematicRig intensity={0.28} z={4.6} />
      <ConnectedGlobe />
      {!reduced ? (
        <Grid
          position={[0, -1.55, 0]}
          args={[12, 12]}
          cellSize={0.35}
          cellThickness={0.6}
          cellColor="#163056"
          sectionSize={1.4}
          sectionThickness={1.1}
          sectionColor="#1d4ed8"
          fadeDistance={7}
          fadeStrength={1.2}
          infiniteGrid
        />
      ) : null}
    </Canvas>
  )
}
