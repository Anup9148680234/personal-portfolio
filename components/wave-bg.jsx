/**
 * WaveBackground.jsx
 * 
 * Full-screen shader gradient background using @shadergradient/react.
 * - Single wave flowing top-right → bottom-left (waterPlane type)
 * - Infinite animation
 * - Hover over the canvas increases uStrength + grain = "water disturbance"
 * 
 * Install deps:
 *   npm i @shadergradient/react @react-three/fiber three three-stdlib camera-controls
 */

import { useState, useRef } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function WaveBackground() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    });
  };

  // Normal state: gentle single wave, top-right to bottom-left
  // Hover state: crank up uStrength + grain for "disturbance" effect
  const waveStrength = isHovered ? 6.5 : 3.2;
  const waveFrequency = isHovered ? 3.5 : 2.0;
  const grainMode = isHovered ? "on" : "off";
  const brightness = isHovered ? 1.4 : 1.1;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        cursor: "crosshair",
      }}
    >
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0 }}
        pixelDensity={1.5}
        fov={45}
      >
        <ShaderGradient
          // waterPlane gives the single-wave / water-surface look
          type="waterPlane"
          animate="on"
          // Wave diagonal: top-right → bottom-left
          // rotationZ=135 tilts the wave direction to that diagonal
          rotationX={50}
          rotationY={0}
          rotationZ={-45}
          // Camera: low angle looking across the water surface
          cDistance={3.0}
          cPolarAngle={85}
          cAzimuthAngle={180}
          cameraZoom={1}
          // Wave parameters — change on hover for disturbance
          uSpeed={0.35}
          uStrength={waveStrength}
          uDensity={1.2}
          uFrequency={waveFrequency}
          uAmplitude={isHovered ? 4.5 : 3.0}
          // Colors: deep ocean blues with a teal highlight
          color1="#0a2a4a"
          color2="#1a6896"
          color3="#7ee8fa"
          // Lighting
          lightType="3d"
          envPreset="city"
          brightness={brightness}
          reflection={0.35}
          // Grain adds noise/"disturbed water" texture on hover
          grain={grainMode}
          grainBlending={0.6}
          // Position
          positionX={0}
          positionY={0}
          positionZ={0}
          // Smooth transitions between hover states
          rotSpringOption={{ mass: 2, tension: 280, friction: 60 }}
          posSpringOption={{ mass: 2, tension: 280, friction: 60 }}
        />
      </ShaderGradientCanvas>

      {/* Optional: overlay content goes here */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          pointerEvents: "none",
          fontFamily: "'Georgia', serif",
          color: "rgba(255,255,255,0.9)",
          textAlign: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "clamp(2rem,6vw,5rem)", fontWeight: 300, letterSpacing: "-0.02em", margin: 0 }}>
          {isHovered ? "Disturbed" : "Still Waters"}
        </h1>
        <p style={{ fontSize: "1rem", opacity: 0.5, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {isHovered ? "hover noise active — water disturbed" : "hover to disturb the wave"}
        </p>
      </div>
    </div>
  );
}
