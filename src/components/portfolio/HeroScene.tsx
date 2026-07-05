import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function FloatingDevice({ position, rotation, scale = 1, color = "#3b82f6" }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y = rotation[1] + x * 0.3;
    ref.current.rotation.x = rotation[0] + -y * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        {/* laptop base */}
        <mesh position={[0, -0.05, 0]} castShadow>
          <boxGeometry args={[2.4, 0.08, 1.6]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* screen */}
        <group position={[0, 0.8, -0.78]} rotation={[-0.3, 0, 0]}>
          <mesh>
            <boxGeometry args={[2.4, 1.6, 0.06]} />
            <meshStandardMaterial color="#050505" metalness={0.85} roughness={0.25} />
          </mesh>
          <mesh position={[0, 0, 0.035]}>
            <planeGeometry args={[2.25, 1.45]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} toneMapped={false} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

function HoloOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    const { x, y } = state.pointer;
    ref.current.position.x = 2.2 + x * 0.3;
    ref.current.position.y = 1.2 + y * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <mesh ref={ref} position={[2.2, 1.2, 0]}>
        <icosahedronGeometry args={[0.55, 4]} />
        <MeshDistortMaterial
          color="#60a5fa"
          emissive="#3b82f6"
          emissiveIntensity={0.4}
          distort={0.35}
          speed={2}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function HoloRing({ position, radius, color }: { position: [number, number, number]; radius: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} toneMapped={false} />
    </mesh>
  );
}

function Particles({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.04;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#60a5fa" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#60a5fa" />
        <pointLight position={[-4, -2, 3]} intensity={0.8} color="#3b82f6" />
        <spotLight position={[0, 5, 2]} intensity={0.6} angle={0.4} penumbra={1} />

        <FloatingDevice position={[0, -0.4, 0]} rotation={[-0.1, 0.4, 0]} scale={1} color="#3b82f6" />
        <HoloOrb />
        <HoloRing position={[-2.2, -0.8, 0.5]} radius={0.4} color="#60a5fa" />
        <HoloRing position={[2.3, -1.2, -0.5]} radius={0.25} color="#3b82f6" />
        <Particles count={120} />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
