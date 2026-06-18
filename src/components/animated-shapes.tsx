"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three-stdlib";
import { renderToStaticMarkup } from "react-dom/server";

interface ShapeProps {
  type: "torus" | "cube" | "cylinder" | "dodecahedron" | "octahedron" | "icosahedron";
  color: string;
}

const FloatingMesh = ({ type, color }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Rotate mesh slowly
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    // Add subtle floating vertical movement
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.12;
  });

  return (
    <mesh ref={meshRef}>
      {type === "torus" && <torusGeometry args={[0.55, 0.18, 16, 100]} />}
      {type === "cube" && <boxGeometry args={[0.7, 0.7, 0.7]} />}
      {type === "cylinder" && <cylinderGeometry args={[0.45, 0.45, 0.9, 32]} />}
      {type === "dodecahedron" && <dodecahedronGeometry args={[0.6]} />}
      {type === "octahedron" && <octahedronGeometry args={[0.65]} />}
      {type === "icosahedron" && <icosahedronGeometry args={[0.65]} />}
      
      <meshStandardMaterial
        color={color}
        roughness={0.15}
        metalness={0.8}
      />
    </mesh>
  );
};

export const ThreeDIcon = ({ type, color }: ShapeProps) => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 2], fov: 45 }} gl={{ antialias: true }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} intensity={2.0} />
        <pointLight position={[-3, -3, 2]} intensity={1.0} />
        <spotLight position={[0, 5, 0]} intensity={1.5} />
        <FloatingMesh type={type} color={color} />
      </Canvas>
    </div>
  );
};

export const ThreeDSVGIcon = ({ icon, color, index = 0 }: { icon: React.ReactNode, color: string, index?: number }) => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 2], fov: 45 }} gl={{ antialias: true }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} intensity={2.0} />
        <pointLight position={[-3, -3, 2]} intensity={1.0} />
        <spotLight position={[0, 5, 0]} intensity={1.5} />
        <FloatingSVG icon={icon} color={color} index={index} />
      </Canvas>
    </div>
  );
};

const FloatingSVG = ({ icon, color, index }: { icon: React.ReactNode, color: string, index: number }) => {
  const meshRef = React.useRef<THREE.Group>(null);
  const [geometries, setGeometries] = React.useState<THREE.TubeGeometry[]>([]);

  React.useEffect(() => {
    if (typeof window === "undefined" || !icon) return;
    try {
      const svgString = renderToStaticMarkup(icon as React.ReactElement);
      const loader = new SVGLoader();
      const svgData = loader.parse(svgString);

      const newGeometries: THREE.TubeGeometry[] = [];
      for (const path of svgData.paths) {
        for (const subPath of path.subPaths) {
          const points = subPath.getPoints();
          if (points.length > 1) {
            const vec3Points = points.map((p: THREE.Vector2) => new THREE.Vector3(p.x, p.y, 0));
            const isClosed = vec3Points[0].distanceTo(vec3Points[vec3Points.length - 1]) < 0.1;
            const curve = new THREE.CatmullRomCurve3(vec3Points, isClosed, "catmullrom", 0.5);
            const tube = new THREE.TubeGeometry(curve, Math.max(vec3Points.length * 3, 20), 0.9, 8, isClosed);
            newGeometries.push(tube);
          }
        }
      }
      setGeometries(newGeometries);
    } catch (e) {
      console.error("Failed to parse SVG icon:", e);
    }
  }, [icon]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Different speed and phase per card based on index
    const speedY = 0.3 + (index % 3) * 0.1;
    const speedX = 0.2 + (index % 2) * 0.1;
    const phase = index * Math.PI / 3;

    // Very slight pendulum and floating motion
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speedY + phase) * 0.15;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * speedX + phase * 2) * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.0 + phase) * 0.05;
  });

  if (geometries.length === 0) return null;

  return (
    <group ref={meshRef}>
      <group position={[-12 * 0.045, 12 * 0.045, 0]} scale={[0.045, -0.045, 0.045]}>
        {geometries.map((geometry, index) => (
          <mesh key={index} geometry={geometry}>
            <meshStandardMaterial
              color={color}
              roughness={0.15}
              metalness={0.8}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

