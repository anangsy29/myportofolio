'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = '30px',
  threshold = 0.12,
  once = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef(null);

  // Mount guard: pre-check viewport to avoid flash for above-fold elements
  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) observer.unobserve(elementRef.current);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [threshold, once, mounted]);

  const getHiddenTransform = () => {
    switch (direction) {
      case 'up':    return `translate3d(0, ${distance}, 0)`;
      case 'down':  return `translate3d(0, -${distance}, 0)`;
      case 'left':  return `translate3d(${distance}, 0, 0)`;
      case 'right': return `translate3d(-${distance}, 0, 0)`;
      case 'scale': return 'scale(0.92) translate3d(0, 15px, 0)';
      case 'fade':
      default:      return 'translate3d(0, 0, 0)';
    }
  };

  // SSR / initial hydration: render without animation classes to prevent mismatch
  if (!mounted) {
    return (
      <div ref={elementRef} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getHiddenTransform(),
      }}
      className={`transition-all will-change-[transform,opacity] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
