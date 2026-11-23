'use client';

import { useEffect, useState, useRef } from 'react';

// Base classes for follower ball — defined outside component so string is stable
const followerBase =
  'rounded-full pointer-events-none border transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs instead of state for hover/click so React never re-renders → no position glitch
  const isHoveredRef = useRef(false);
  const isClickedRef = useRef(false);

  const dotRef = useRef(null);
  const followerRef = useRef(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const followerPos = useRef({ x: -200, y: -200 });
  const rafId = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setMounted(true);

    // Apply follower classes via DOM — bypasses React render cycle
    const applyFollowerClass = () => {
      const el = followerRef.current;
      if (!el) return;
      if (isHoveredRef.current) {
        el.className =
          followerBase +
          ' w-14 h-14 bg-orange-500/20 dark:bg-white/20 border-[#ea580c] dark:border-white shadow-[0_0_25px_rgba(234,88,12,0.4)] dark:shadow-[0_0_30px_rgba(255,255,255,0.5)]';
      } else if (isClickedRef.current) {
        el.className =
          followerBase +
          ' w-8 h-8 bg-orange-500/30 dark:bg-white/30 border-[#ea580c] dark:border-white';
      } else {
        el.className =
          followerBase +
          ' w-10 h-10 bg-orange-500/10 dark:bg-white/10 border-[#ea580c]/50 dark:border-white/50 shadow-[0_0_15px_rgba(234,88,12,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.25)] backdrop-blur-[0.5px]';
      }
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      // Dot snaps instantly to exact cursor — fixed inline size/margin means no shift ever
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => {
      isClickedRef.current = true;
      applyFollowerClass();
    };
    const handleMouseUp = () => {
      isClickedRef.current = false;
      applyFollowerClass();
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect interactive elements — mutate DOM directly, no setState
    const handleElementHover = (e) => {
      const target = e.target;
      if (!target) return;
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      const hovered = !!interactive;
      if (hovered !== isHoveredRef.current) {
        isHoveredRef.current = hovered;
        applyFollowerClass();
        // Dot: no scale change — stays identical to normal state
      }
    };

    window.addEventListener('pointermove', handleMouseMove, { passive: true });
    window.addEventListener('pointerdown', handleMouseDown, { passive: true });
    window.addEventListener('pointerup', handleMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleElementHover, { passive: true });

    // RAF loop: smooth lerp follower, centers it dynamically by reading actual size
    const animateFollower = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.18;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.18;

      const el = followerRef.current;
      if (el) {
        const half = el.offsetWidth / 2;
        el.style.marginLeft = `-${half}px`;
        el.style.marginTop = `-${half}px`;
        el.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animateFollower);
    };

    rafId.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
      window.removeEventListener('pointerdown', handleMouseDown);
      window.removeEventListener('pointerup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleElementHover);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Dot — exact mouse position. Inline style size + margin = never shifts */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          marginLeft: '-4px',
          marginTop: '-4px',
          transform: 'translate3d(-200px, -200px, 0)',
          borderRadius: '9999px',
          pointerEvents: 'none',
          backgroundColor: 'var(--cursor-dot-color, #ea580c)',
          boxShadow: '0 0 8px rgba(234,88,12,0.6)',
          zIndex: 9999,
        }}
        className="dark:!bg-white dark:!shadow-[0_0_10px_rgba(255,255,255,0.9)]"
      />

      {/* 2. Follower Ball — size via Tailwind class, centering via JS RAF */}
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: 'translate3d(-200px, -200px, 0)',
          zIndex: 9998,
        }}
        className={followerBase + ' w-10 h-10 bg-orange-500/10 dark:bg-white/10 border-[#ea580c]/50 dark:border-white/50 shadow-[0_0_15px_rgba(234,88,12,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.25)] backdrop-blur-[0.5px]'}
      />
    </div>
  );
}
