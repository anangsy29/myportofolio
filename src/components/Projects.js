'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { projects } from '@/data/portfolioData';
import ScrollReveal from '@/components/ScrollReveal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const filterOptions = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'web', label: 'Web Application' },
    { id: 'iot', label: 'IoT & Embedded' },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const total = filteredProjects.length;

  useEffect(() => {
    setActiveIndex(Math.min(1, Math.max(0, total - 1)));
  }, [filter, total]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) handleNext();
    else if (diff < -45) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getOffset = (index, current, totalCount) => {
    let diff = (index - current) % totalCount;
    if (diff > totalCount / 2) diff -= totalCount;
    if (diff < -totalCount / 2) diff += totalCount;
    return diff;
  };

  const getCardStyle = (diff) => {
    if (isMobile) {
      if (diff === 0)
        return { transform: 'translateX(0%) scale(1) translateZ(0px)', opacity: 1, zIndex: 30, pointerEvents: 'auto', visibility: 'visible' };
      if (diff === -1)
        return { transform: 'translateX(-98%) scale(0.86) translateZ(-40px)', opacity: 0.35, zIndex: 20, pointerEvents: 'auto', visibility: 'visible' };
      if (diff === 1)
        return { transform: 'translateX(98%) scale(0.86) translateZ(-40px)', opacity: 0.35, zIndex: 20, pointerEvents: 'auto', visibility: 'visible' };
      return { transform: `translateX(${diff > 0 ? 160 : -160}%) scale(0.7) translateZ(-100px)`, opacity: 0, zIndex: 10, pointerEvents: 'none', visibility: 'hidden' };
    }

    switch (diff) {
      case 0:
        return { transform: 'translateX(0%) scale(1.02) translateZ(0px) rotateY(0deg)', opacity: 1, zIndex: 30, pointerEvents: 'auto', visibility: 'visible' };
      case -1:
        return { transform: 'translateX(-106%) scale(0.92) translateZ(-60px) rotateY(12deg)', opacity: 0.82, zIndex: 20, pointerEvents: 'auto', visibility: 'visible' };
      case 1:
        return { transform: 'translateX(106%) scale(0.92) translateZ(-60px) rotateY(-12deg)', opacity: 0.82, zIndex: 20, pointerEvents: 'auto', visibility: 'visible' };
      case -2:
        return { transform: 'translateX(-195%) scale(0.75) translateZ(-160px) rotateY(28deg)', opacity: 0, zIndex: 10, pointerEvents: 'none', visibility: 'hidden' };
      case 2:
      default:
        return { transform: 'translateX(195%) scale(0.75) translateZ(-160px) rotateY(-28deg)', opacity: 0, zIndex: 10, pointerEvents: 'none', visibility: 'hidden' };
    }
  };

  return (
    <section id="proyek" className="py-24 scroll-mt-24 border-t border-[#fed7aa]/60 dark:border-[#1e293b]">
      {/* Section Header */}
      <ScrollReveal direction="down" delay={50}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1917] dark:text-[#f8fafc]">
              Proyek Unggulan
            </h2>
            <div className="h-[1px] bg-[#fed7aa] dark:bg-[#1e293b] w-24 hidden sm:block" />
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#fff7ed] dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-xs font-mono w-fit shadow-sm">
            {filterOptions.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${filter === btn.id
                    ? 'bg-[#ea580c] text-white dark:bg-[#f8fafc] dark:text-[#070b14] font-semibold shadow-sm'
                    : 'text-[#57534e] hover:text-[#1c1917] dark:text-[#cbd5e1] dark:hover:text-[#f8fafc] hover:bg-[#fed7aa]/50 dark:hover:bg-[#1e293b]/60'
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Carousel */}
      <div>
        {/* Carousel Header: title + arrows */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#1c1917] dark:text-[#f8fafc] flex items-center gap-2">
              <span className="text-[#ea580c] dark:text-[#38bdf8]">🪐</span> Project Showcase
            </h3>
            {/* <p className="text-xs text-[#78716c] dark:text-[#94a3b8] mt-0.5">
              Menampilkan 3 proyek berjejer. Putar slider untuk melihat proyek lainnya.
            </p> */}
          </div>

          {/* Arrow Buttons & Counter */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs font-mono text-[#ea580c] dark:text-[#38bdf8] px-2.5 py-1 rounded-full bg-[#fff7ed] dark:bg-[#0d1322] border border-[#ea580c]/30 dark:border-[#38bdf8]/30 shadow-sm">
              {activeIndex + 1} / {total}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-lg bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:border-[#ea580c] dark:hover:border-white hover:text-[#ea580c] dark:hover:text-white hover:scale-105 transition-all shadow-sm cursor-pointer"
                aria-label="Putar Proyek ke Kiri"
                title="Proyek Sebelumnya"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-lg bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:border-[#ea580c] dark:hover:border-white hover:text-[#ea580c] dark:hover:text-white hover:scale-105 transition-all shadow-sm cursor-pointer"
                aria-label="Putar Proyek ke Kanan"
                title="Proyek Selanjutnya"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 3D Rotary Stage */}
        <div
          className="relative w-full h-[520px] sm:h-[530px] flex items-center justify-center overflow-hidden py-4 select-none"
          style={{ perspective: '1200px' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-orange-500/10 dark:bg-white/5 blur-3xl pointer-events-none -z-10" />

          {/* Cards */}
          {filteredProjects.map((project, idx) => {
            const diff = getOffset(idx, activeIndex, total);
            const isCenter = diff === 0;
            const isSide = diff === -1 || diff === 1;
            const cardStyle = getCardStyle(diff);

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (isSide) setActiveIndex(idx);
                }}
                style={{
                  ...cardStyle,
                  transition: 'all 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                className={`absolute top-4 w-[86%] sm:w-[330px] md:w-[350px] h-[475px] p-5 rounded-2xl flex flex-col justify-between transition-colors ${isCenter
                    ? 'bg-white dark:bg-[#0d1322] border-2 border-[#ea580c] dark:border-white shadow-[0_15px_35px_rgba(234,88,12,0.18)] dark:shadow-[0_15px_40px_rgba(255,255,255,0.15)]'
                    : 'bg-white/95 dark:bg-[#0d1322]/85 border border-[#fed7aa] dark:border-[#1e293b] shadow-md hover:border-[#ea580c]/60 dark:hover:border-white/50 cursor-pointer'
                  }`}
              >
                <div>
                  {/* Badge & GitHub Link */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fff7ed] dark:bg-[#070b14] border border-[#ea580c]/30 dark:border-white/30 text-[#ea580c] dark:text-[#f8fafc]">
                      {project.badge}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#94a3b8] hover:text-[#ea580c] dark:hover:text-white hover:scale-110 transition-all p-1"
                      title="Lihat Source Code GitHub"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  {/* Period & Role */}
                  <div className="text-[11px] font-mono text-[#ea580c] dark:text-[#38bdf8] mb-1.5">
                    {project.period} • {project.role}
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-[#1c1917] dark:text-[#f8fafc] line-clamp-2 mb-2">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-[#57534e] dark:text-[#cbd5e1] leading-relaxed line-clamp-4 mb-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-[#78716c] dark:text-[#94a3b8] bg-[#fff7ed] dark:bg-[#070b14]/80 px-2 py-0.5 rounded border border-[#fed7aa] dark:border-[#1e293b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-[#fed7aa] dark:border-[#1e293b]/60 flex items-center justify-between text-xs font-mono">
                  {isCenter ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-1.5 px-3 rounded-lg bg-[#ea580c] text-white dark:bg-[#f8fafc] dark:text-[#070b14] font-semibold flex items-center justify-center gap-1.5 hover:bg-[#c2410c] dark:hover:bg-white transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Lihat di GitHub</span>
                      <span>↗</span>
                    </a>
                  ) : (
                    <div className="w-full flex items-center justify-between text-[#78716c] dark:text-[#94a3b8] hover:text-[#ea580c] dark:hover:text-white transition-colors">
                      <span>Klik untuk geser ke tengah</span>
                      <span>↺</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {filteredProjects.map((project, dotIdx) => {
            const isActive = activeIndex === dotIdx;
            return (
              <button
                key={project.id}
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                    ? 'w-8 bg-[#ea580c] dark:bg-white shadow-[0_0_12px_rgba(234,88,12,0.4)] dark:shadow-[0_0_12px_rgba(255,255,255,0.6)]'
                    : 'w-2.5 bg-[#fed7aa] dark:bg-[#1e293b] hover:bg-[#ea580c]/60 dark:hover:bg-white/60'
                  }`}
                title={`Pindah ke ${project.title}`}
                aria-label={`Slide ${dotIdx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
