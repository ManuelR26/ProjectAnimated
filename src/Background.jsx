import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';


function AnimatedBackground() {
  const meshRef = useRef();

  // Animación del fondo (rotación)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Geometría del fondo */}
      <sphereGeometry args={[5, 32, 32]} />
      {/* Material del fondo */}
      <meshStandardMaterial color="#ccc" side={THREE.BackSide} />
    </mesh>
  );
}

  export default function Background() {
    return (
        <Canvas>
          {/* Luz ambiental */}
          <ambientLight intensity={0.2} />
          {/* Luz direccional */}
          <directionalLight position={[1, 5, 10]} />
          {/* Fondo animado */}
          <AnimatedBackground />
        </Canvas>
  );
}
