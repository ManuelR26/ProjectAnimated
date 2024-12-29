import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

export default function InteractiveBackground() {
  const cubeRef = useRef();

  // Rotación del cubo con cada frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas>
      {/* Luz ambiental */}
      <ambientLight intensity={0.5} />
      {/* Luz direccional */}
      <directionalLight position={[5, 5, 5]} />
      
      {/* Fondo animado */}
      <mesh>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#0a0a23" />
      </mesh>

      {/* Cubo añadido */}
      <mesh ref={cubeRef} position={[0, 0, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
