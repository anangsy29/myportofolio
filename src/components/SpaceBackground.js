'use client';

import { useEffect, useState } from 'react';

// Floating low-poly 3D Asteroid Chunk (Puing-puing Antariksa)
function AsteroidChunk({ size = 22, rotation = 0 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ transform: `rotate(${rotation}deg)` }}
      className="drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)] select-none pointer-events-none"
    >
      {/* Facet 1: Top highlight */}
      <polygon
        points="20,4 32,12 24,22 12,16"
        className="fill-[#fb923c] dark:fill-[#f1f5f9]"
      />
      {/* Facet 2: Right side */}
      <polygon
        points="32,12 37,24 28,34 24,22"
        className="fill-[#ea580c] dark:fill-[#94a3b8]"
      />
      {/* Facet 3: Left side */}
      <polygon
        points="20,4 12,16 5,26 8,12"
        className="fill-[#f97316] dark:fill-[#cbd5e1]"
      />
      {/* Facet 4: Bottom shadow */}
      <polygon
        points="12,16 24,22 28,34 16,36 5,26"
        className="fill-[#9a3412] dark:fill-[#475569]"
      />
      {/* Tiny impact crater on asteroid */}
      <circle cx="21" cy="18" r="2" className="fill-[#7c2d12] dark:fill-[#1e293b]" />
    </svg>
  );
}

// Background space debris & floating space rocks around the moon
function SpaceDebris() {
  const debrisData = [
    { id: 1, size: 26, top: '4%', right: '28%', dur: '18s', delay: '0s', rot: 45 },
    { id: 2, size: 16, top: '14%', right: '8%', dur: '22s', delay: '1s', rot: 110 },
    { id: 3, size: 22, top: '24%', right: '34%', dur: '16s', delay: '2s', rot: 80 },
    { id: 4, size: 14, top: '34%', right: '14%', dur: '24s', delay: '0.5s', rot: 210 },
    { id: 5, size: 20, top: '8%', right: '40%', dur: '20s', delay: '3s', rot: 15 },
    { id: 6, size: 12, top: '18%', right: '42%', dur: '14s', delay: '1.5s', rot: 160 },
    { id: 7, size: 18, top: '42%', right: '24%', dur: '26s', delay: '2.5s', rot: 290 },
    { id: 8, size: 10, top: '12%', right: '20%', dur: '19s', delay: '4s', rot: 40 },
    { id: 9, size: 15, top: '30%', right: '5%', dur: '21s', delay: '1.8s', rot: 190 },
    { id: 10, size: 18, top: '48%', right: '16%', dur: '25s', delay: '0.2s', rot: 75 },
    // Left-side cosmic debris drift
    { id: 11, size: 14, top: '65%', left: '8%', dur: '23s', delay: '3.5s', rot: 125 },
    { id: 12, size: 20, top: '78%', left: '16%', dur: '19s', delay: '1.2s', rot: 205 },
    { id: 13, size: 12, top: '85%', left: '6%', dur: '17s', delay: '2.8s', rot: 55 },
  ];

  return (
    <>
      {debrisData.map((d) => (
        <div
          key={d.id}
          className="fixed pointer-events-none z-0"
          style={{
            top: d.top,
            right: d.right,
            left: d.left,
            animation: `debrisFloat ${d.dur} ease-in-out infinite alternate`,
            animationDelay: d.delay,
          }}
        >
          <AsteroidChunk size={d.size} rotation={d.rot} />
        </div>
      ))}
    </>
  );
}

// Twinkling stars generator for deep space ambiance
function StarField() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: Math.round(Math.random() * 98),
      y: Math.round(Math.random() * 96),
      size: Math.random() > 0.85 ? 2.5 : Math.random() > 0.4 ? 1.8 : 1.2,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
      opacity: 0.25 + Math.random() * 0.65,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 select-none overflow-hidden" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-orange-400 dark:bg-white transition-opacity"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `starTwinkle ${s.duration} ease-in-out infinite alternate`,
            animationDelay: s.delay,
            boxShadow: `0 0 4px ${s.size > 2 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)'}`,
          }}
        />
      ))}

      {/* Occasional Meteor Streak */}
      <div className="meteor-streak" />
    </div>
  );
}

export default function SpaceBackground() {
  return (
    <>
      {/* 1. Twinkling Starlight Field */}
      <StarField />

      {/* 2. Realistic Moon Container (Using User's Reference Moon) */}
      <div
        className="fixed -top-8 -right-10 sm:-top-12 sm:-right-8 md:top-2 md:right-4 w-[290px] sm:w-[400px] md:w-[480px] lg:w-[540px] pointer-events-none z-0 select-none transition-all duration-700 rotate-180"
        aria-hidden="true"
      >
        {/* Atmospheric Lunar Glow Behind Moon */}
        <div className="absolute inset-4 rounded-full blur-3xl transition-all duration-700 bg-orange-500/15 dark:bg-white/10 scale-110 pointer-events-none" />

        {/* Orbit Ring Silhouette around the Moon */}
        <div className="absolute -inset-10 sm:-inset-16 rounded-full border border-dashed border-orange-500/20 dark:border-white/15 animate-[spin_80s_linear_infinite] pointer-events-none" />
        <div className="absolute -inset-20 sm:-inset-28 rounded-full border border-orange-500/10 dark:border-white/10 animate-[spin_120s_linear_infinite_reverse] pointer-events-none" />

        {/* Dark Mode: Realistic Silvery White Moon with Sharp Craters (from user image) */}
        <img
          src="/images/moon-white.png"
          alt="Realistic White Moon"
          className="w-full h-auto drop-shadow-[0_0_45px_rgba(255,255,255,0.3)] hidden dark:block transition-all duration-700"
        />

        {/* Light Mode: Realistic Blood Moon (Red-Orange) with Same Craters (from user image) */}
        <img
          src="/images/moon-orange.png"
          alt="Realistic Red-Orange Moon"
          className="w-full h-auto drop-shadow-[0_0_45px_rgba(234,88,12,0.35)] block dark:hidden transition-all duration-700"
        />
      </div>

      {/* 3. Floating Space Debris & Asteroids (Puing-puing Antariksa) */}
      <SpaceDebris />
    </>
  );
}
