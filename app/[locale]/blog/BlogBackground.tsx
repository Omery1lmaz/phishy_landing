'use client';

import React, { useState, useEffect } from 'react';

export default function BlogBackground() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
    isPrimary: boolean;
  }>>([]);

  const [gridLines, setGridLines] = useState<Array<{
    id: number;
    duration: number;
    delay: number;
    position: number;
  }>>([]);

  const [floatingShapes, setFloatingShapes] = useState<Array<{
    id: number;
    size: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    // Generate random values only on client-side
    setParticles(Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: 3 + Math.random() * 8, // 3px to 11px
      left: Math.random() * 100, // 0% to 100%
      top: Math.random() * 100, // 0% to 100%
      duration: 8 + Math.random() * 12, // 8s to 20s
      delay: Math.random() * 5, // 0s to 5s
      isPrimary: Math.random() > 0.5, // Primary or Secondary color
    })));

    setGridLines(Array.from({ length: 15 }, (_, i) => ({
      id: i,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * 10,
      position: Math.random() * 100,
    })));

    setFloatingShapes(Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: 100 + Math.random() * 200, // 100px to 300px
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
    })));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      {/* Base Background with Gradient - More Colorful */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] via-[#0d0020] to-[#1a0033]" />

      {/* Animated Gradient Waves - Multiple Layers - Brighter */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/50 via-primary-800/30 to-transparent animate-[gradientWave_25s_ease-in-out_infinite_alternate]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary-600/45 via-secondary-800/25 to-transparent animate-[gradientWave_30s_linear_infinite_reverse_alternate]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/40 via-secondary-500/40 to-primary-500/40 animate-[gradientWave_35s_ease-in-out_infinite_alternate]" />
      
      {/* Additional Color Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(127,61,255,0.4),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,61,127,0.35),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,61,255,0.25),transparent_70%)]" />

      {/* Animated Mesh Pattern - Enhanced - More Visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(127,61,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,61,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px] opacity-80 animate-[meshMove_80s_linear_infinite]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,61,127,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,61,127,0.12)_1px,transparent_1px)] bg-[size:120px_120px] opacity-60 animate-[meshMove_100s_linear_infinite_reverse]" />

      {/* Large Glowing Orbs - Enhanced - Brighter */}
      <div className="absolute -left-64 top-20 h-[40rem] w-[40rem] rounded-full bg-primary-500/50 blur-[120px] animate-[orbFloat_20s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
      <div className="absolute right-[-20rem] top-32 h-[44rem] w-[44rem] rounded-full bg-secondary-500/45 blur-[140px] animate-[orbFloat_25s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
      <div className="absolute left-1/2 bottom-[-10rem] h-[36rem] w-[36rem] rounded-full bg-primary-400/50 blur-[100px] animate-[orbFloat_22s_ease-in-out_infinite]" style={{ animationDelay: '12s' }} />
      <div className="absolute top-1/3 left-1/4 h-[28rem] w-[28rem] rounded-full bg-secondary-400/40 blur-[90px] animate-[orbFloat_18s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 right-1/3 h-[32rem] w-[32rem] rounded-full bg-primary-300/35 blur-[110px] animate-[orbFloat_24s_ease-in-out_infinite]" style={{ animationDelay: '9s' }} />

      {/* Animated Grid Lines - Enhanced - More Visible */}
      {gridLines.map((line) => (
        <React.Fragment key={line.id}>
          <div
            className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-primary-400/60 to-transparent animate-[gridLinePulse_8s_ease-in-out_infinite]"
            style={{
              left: `${line.position}%`,
              animationDelay: `${line.delay}s`,
            }}
          />
          <div
            className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-secondary-400/60 to-transparent animate-[gridLinePulse_8s_ease-in-out_infinite]"
            style={{
              top: `${line.position}%`,
              animationDelay: `${line.delay + 2}s`,
            }}
          />
        </React.Fragment>
      ))}

      {/* Floating Geometric Shapes - More Visible */}
      {floatingShapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute opacity-35 animate-[shapeFloat_var(--duration)_ease-in-out_infinite]"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            background: `linear-gradient(135deg, rgba(127, 61, 255, 0.5), rgba(255, 61, 127, 0.4))`,
            borderRadius: shape.id % 2 === 0 ? '50%' : '20%',
            filter: 'blur(40px)',
            transform: `rotate(${shape.rotation}deg)`,
            '--duration': `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Animated Particles - Enhanced - Brighter */}
      {particles.map(p => (
        <div
          key={p.id}
          className={`absolute rounded-full animate-[particleFloat_var(--duration)_ease-in-out_infinite]`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.isPrimary 
              ? `radial-gradient(circle, rgba(127, 61, 255, 1), rgba(127, 61, 255, 0.4))` 
              : `radial-gradient(circle, rgba(255, 61, 127, 1), rgba(255, 61, 127, 0.4))`,
            boxShadow: p.isPrimary
              ? `0 0 ${p.size * 3}px rgba(127, 61, 255, 0.8)`
              : `0 0 ${p.size * 3}px rgba(255, 61, 127, 0.8)`,
            '--duration': `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Animated Light Rays - Brighter */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary-400/70 via-primary-500/40 to-transparent animate-[lightRay_12s_ease-in-out_infinite]" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-secondary-400/70 via-secondary-500/40 to-transparent animate-[lightRay_15s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-primary-300/60 via-primary-400/30 to-transparent animate-[lightRay_18s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
      </div>
    </div>
  );
}
