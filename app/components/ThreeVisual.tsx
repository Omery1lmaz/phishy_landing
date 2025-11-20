'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function OrganicStructure() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const structures = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.5,
      color: i % 3 === 0 ? '#A855F7' : i % 3 === 1 ? '#9333EA' : '#C084FC',
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {structures.map((struct, i) => (
        <Sphere
          key={i}
          position={struct.position}
          scale={struct.scale}
          args={[1, 32, 32]}
        >
          <meshStandardMaterial
            color={struct.color}
            emissive={struct.color}
            emissiveIntensity={0.3}
            roughness={0.5}
            metalness={0.3}
          />
        </Sphere>
      ))}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#A855F7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
    </group>
  );
}

const ThreeVisual: React.FC = () => {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <OrganicStructure />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-radial from-primary-600/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default ThreeVisual;

