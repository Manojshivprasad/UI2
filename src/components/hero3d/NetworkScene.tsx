"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 70;
const CONNECT_DISTANCE = 2.1;
const RADIUS = 4.2;

function buildNetwork() {
  const positions = new Float32Array(NODE_COUNT * 3);
  for (let i = 0; i < NODE_COUNT; i++) {
    const r = RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi) * 0.6;
  }

  const edgePositions: number[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    for (let j = i + 1; j < NODE_COUNT; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < CONNECT_DISTANCE) {
        edgePositions.push(
          positions[i * 3],
          positions[i * 3 + 1],
          positions[i * 3 + 2],
          positions[j * 3],
          positions[j * 3 + 1],
          positions[j * 3 + 2]
        );
      }
    }
  }

  return { positions, edgePositions: new Float32Array(edgePositions) };
}

export function NetworkScene() {
  const { positions, edgePositions } = useMemo(() => buildNetwork(), []);
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    group.rotation.y += delta * 0.08;
    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      pointer.y * 0.15,
      0.04
    );
    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      group.rotation.y + pointer.x * 0.001,
      1
    );
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#f0721e"
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </lineSegments>

      <Points positions={positions} stride={3}>
        <PointMaterial
          color="#f0721e"
          size={0.09}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
