"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function GlobalBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash of mouse on mobile

  // Use springs for the mouse lerping effect (smooth trailing)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  const [particles, setParticles] = useState<Array<{id: number, size: number, left: string, top: string, duration: number, delay: number}>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * -20,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-primary-bg">
      {/* Layer 1: Dark Navy Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0D1B2E_0%,#07111F_100%)]"></div>
      
      {/* Layer 2: Ultra Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Layer 3: Animated Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-flow"
        ></div>
      </div>

      {/* Layer 4: Soft Animated Aurora Gradients */}
      {!isMobile && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-accent/10 blur-[120px] rounded-full animate-aurora-1 mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full animate-aurora-2 mix-blend-screen"></div>
        </>
      )}

      {/* Layer 5: Tiny Floating Particles */}
      {!isMobile && particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full opacity-[0.03] animate-float"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            top: p.top,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        ></div>
      ))}

      {/* Mouse Interaction Glow */}
      {!isMobile && (
        <motion.div
          className="absolute w-[440px] h-[440px] rounded-full bg-primary-accent opacity-10 blur-[100px] mix-blend-screen pointer-events-none"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </div>
  );
}
