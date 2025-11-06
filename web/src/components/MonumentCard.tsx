"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { memo, Suspense } from "react";
import { DoubleSide } from "three";

export type Monument = {
  id: string;
  name: string;
  location: string;
  synopsis: string;
  projection: string;
  variant: "spire" | "ring" | "temple" | "garden" | "gateway" | "guardian";
  palette: {
    base: string;
    accent: string;
    glow: string;
  };
};

type MonumentCardProps = {
  monument: Monument;
  index: number;
};

const NeonPanel = ({
  monument,
  index,
}: MonumentCardProps) => {
  return (
    <motion.article
      className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] p-6 text-white matrix-flow scanlines transition-transform duration-300 hover:-translate-y-1"
      style={{
        boxShadow: `0 0 32px ${monument.palette.glow}33`,
      }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="relative w-full overflow-hidden rounded-[24px] neon-border aspect-[4/3]"
        data-variant={monument.variant}
      >
        <Suspense fallback={<div className="aspect-[4/3] w-full bg-black/60" />}>
          <HologramScene monument={monument} />
        </Suspense>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          Corridor {index + 1 < 10 ? `0${index + 1}` : index + 1} · {monument.location}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-white drop-shadow-[0_0_12px_rgba(19,245,255,0.2)]">
          {monument.name}
        </h3>
        <p className="text-sm leading-relaxed text-white/70">{monument.synopsis}</p>
      </div>

      <div className="flex items-start justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/45">
            Projection 2077
          </p>
          <p className="mt-2 text-sm text-white/80">{monument.projection}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-xs font-bold uppercase tracking-widest text-white/80">
          Neo
        </div>
      </div>
    </motion.article>
  );
};

const HologramScene = memo(function HologramScene({
  monument,
}: {
  monument: Monument;
}) {
  return (
    <Canvas dpr={[1, 2]} style={{ width: "100%", height: "100%" }}>
      <color attach="background" args={["#02010a"]} />
      <ambientLight intensity={0.75} />
      <pointLight
        position={[4, 6, 6]}
        intensity={2.6}
        color={monument.palette.glow}
      />
      <pointLight
        position={[-4, -3, -6]}
        intensity={1.4}
        color={monument.palette.accent}
      />
      <PerspectiveCamera makeDefault position={[0, 1.4, 5]} fov={42} />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2.8}
        enablePan={false}
      />
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1}>
        <HologramVariant monument={monument} />
      </Float>
      <Sparkles
        color={monument.palette.accent}
        size={4}
        speed={0.2}
        count={60}
        scale={6}
      />
      <Environment preset="night" />
    </Canvas>
  );
});

const HologramVariant = memo(function HologramVariant({
  monument,
}: {
  monument: Monument;
}) {
  const baseMaterial = (
    <meshStandardMaterial
      color={monument.palette.base}
      emissive={monument.palette.glow}
      emissiveIntensity={0.45}
      roughness={0.2}
      metalness={0.85}
      transparent
      opacity={0.9}
    />
  );

  switch (monument.variant) {
    case "spire":
      return (
        <group>
          <mesh position={[0, -1.1, 0]}>
            <cylinderGeometry args={[1.8, 1.8, 0.35, 6]} />
            {baseMaterial}
          </mesh>
          <mesh position={[0, 0.8, 0]}>
            <coneGeometry args={[0.7, 3.2, 6]} />
            {baseMaterial}
          </mesh>
          <mesh position={[0, 0.8, 0]}>
            <torusGeometry args={[1.2, 0.08, 24, 64]} />
            <meshStandardMaterial
              color={monument.palette.accent}
              emissive={monument.palette.accent}
              emissiveIntensity={1.4}
            />
          </mesh>
          <mesh position={[0, 1.7, 0]}>
            <torusGeometry args={[0.8, 0.06, 24, 64]} />
            <meshStandardMaterial
              color={monument.palette.glow}
              emissive={monument.palette.glow}
              emissiveIntensity={1.8}
            />
          </mesh>
        </group>
      );
    case "ring":
      return (
        <group>
          <mesh position={[0, -1, 0]}>
            <cylinderGeometry args={[1.9, 1.9, 0.3, 8]} />
            {baseMaterial}
          </mesh>
          <mesh>
            <torusGeometry args={[1.6, 0.18, 32, 128]} />
            <meshStandardMaterial
              color={monument.palette.accent}
              emissive={monument.palette.accent}
              emissiveIntensity={1.2}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2.8, Math.PI / 4, 0]}>
            <torusGeometry args={[0.9, 0.08, 32, 128]} />
            <meshStandardMaterial
              color={monument.palette.glow}
              emissive={monument.palette.glow}
              emissiveIntensity={1.6}
            />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <icosahedronGeometry args={[0.5, 1]} />
            {baseMaterial}
          </mesh>
        </group>
      );
    case "temple":
      return (
        <group>
          <mesh position={[0, -1.1, 0]}>
            <boxGeometry args={[3.2, 0.4, 3.2]} />
            {baseMaterial}
          </mesh>
          <mesh position={[0, -0.4, 0]}>
            <boxGeometry args={[2.6, 0.5, 2.6]} />
            {baseMaterial}
          </mesh>
          <mesh position={[0, 0.7, 0]}>
            <cylinderGeometry args={[1.2, 1.2, 0.6, 32]} />
            {baseMaterial}
          </mesh>
          <mesh position={[0, 1.6, 0]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial
              color={monument.palette.accent}
              emissive={monument.palette.accent}
              emissiveIntensity={1.5}
            />
          </mesh>
          <mesh position={[0, 1, 0]}>
            <torusGeometry args={[1.5, 0.05, 32, 128]} />
            <meshStandardMaterial
              color={monument.palette.glow}
              emissive={monument.palette.glow}
              emissiveIntensity={1.7}
            />
          </mesh>
        </group>
      );
    case "garden":
      return (
        <group>
          <mesh position={[0, -1.2, 0]}>
            <cylinderGeometry args={[2.4, 2.5, 0.5, 24]} />
            {baseMaterial}
          </mesh>
          <mesh>
            <torusGeometry args={[1.8, 0.12, 32, 128]} />
            <meshStandardMaterial
              color={monument.palette.glow}
              emissive={monument.palette.glow}
              emissiveIntensity={1.5}
            />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <octahedronGeometry args={[0.9, 0]} />
            {baseMaterial}
          </mesh>
          <mesh position={[1.2, 0.6, 0]}>
            <sphereGeometry args={[0.35, 24, 24]} />
            <meshStandardMaterial
              color={monument.palette.accent}
              emissive={monument.palette.accent}
              emissiveIntensity={1.2}
            />
          </mesh>
          <mesh position={[-1.4, 0.2, 0.8]}>
            <sphereGeometry args={[0.4, 24, 24]} />
            <meshStandardMaterial
              color={monument.palette.glow}
              emissive={monument.palette.glow}
              emissiveIntensity={1.4}
            />
          </mesh>
        </group>
      );
    case "gateway":
      return (
        <group>
          <mesh position={[0, -1.2, 0]}>
            <boxGeometry args={[3.4, 0.5, 2]} />
            {baseMaterial}
          </mesh>
          <mesh>
            <torusGeometry args={[1.4, 0.14, 32, 128]} />
            <meshStandardMaterial
              color={monument.palette.accent}
              emissive={monument.palette.accent}
              emissiveIntensity={1.6}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.75, 1.7, 64, 1]} />
            <meshStandardMaterial
              color={monument.palette.glow}
              emissive={monument.palette.glow}
              emissiveIntensity={1.2}
              side={DoubleSide}
            />
          </mesh>
          <mesh position={[0, 0.9, 0]}>
            <boxGeometry args={[1.8, 1.8, 0.24]} />
            {baseMaterial}
          </mesh>
        </group>
      );
    case "guardian":
    default:
      return (
        <group>
          <mesh position={[0, -1.1, 0]}>
            <cylinderGeometry args={[2, 2, 0.4, 16]} />
            {baseMaterial}
          </mesh>
          <mesh position={[0, 0.9, 0]}>
            <dodecahedronGeometry args={[0.9, 0]} />
            {baseMaterial}
          </mesh>
          <mesh position={[0, 1.6, 0]}>
            <tetrahedronGeometry args={[0.6, 0]} />
            <meshStandardMaterial
              color={monument.palette.accent}
              emissive={monument.palette.accent}
              emissiveIntensity={1.7}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2.8, 0, 0]}>
            <torusGeometry args={[1.6, 0.08, 32, 128]} />
            <meshStandardMaterial
              color={monument.palette.glow}
              emissive={monument.palette.glow}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      );
  }
});

export const MonumentCard = memo(NeonPanel);
