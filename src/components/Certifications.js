'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { certifications } from '@/data/portfolioData';

export default function Certifications({ onSelectCert }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = certifications.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
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
      if (diff === 0) {
        return { transform: 'translateX(0%) scale(1) translateZ(0px)', opacity: 1, zIndex: 30, pointerEvents: 'auto', visibility: 'visible' };
      }
      if (diff === -1) {
        return { transform: 'translateX(-98%) scale(0.86) translateZ(-40px)', opacity: 0.35, zIndex: 20, pointerEvents: 'auto', visibility: 'visible' };
      }
      if (diff === 1) {
        return { transform: 'translateX(98%) scale(0.86) translateZ(-40px)', opacity: 0.35, zIndex: 20, pointerEvents: 'auto', visibility: 'visible' };
      }
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
    <div className="relative">
      {/* Section Header with Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-xl font-bold text-[#1c1917] dark:text-[#f8fafc] flex items-center gap-2">
            <span className="text-[#ea580c] dark:text-[#38bdf8]">📜</span> Sertifikasi {'&'} Pencapaian Resmi
          </h3>
          {/* <p className="text-xs text-[#78716c] dark:text-[#94a3b8] mt-0.5">
            Menampilkan 3 sertifikasi berjejer. Putar slider untuk melihat sertifikasi lainnya.
          </p> */}
        </div>

        {/* Carousel Arrow Buttons & Counter */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-xs font-mono text-[#ea580c] dark:text-[#38bdf8] px-2.5 py-1 rounded-full bg-[#fff7ed] dark:bg-[#0d1322] border border-[#ea580c]/30 dark:border-white/30 shadow-sm">
            {activeIndex + 1} / {total}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-lg bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:border-[#ea580c] dark:hover:border-white hover:text-[#ea580c] dark:hover:text-white hover:scale-105 transition-all shadow-sm cursor-pointer"
              aria-label="Putar Sertifikasi ke Kiri"
              title="Sertifikasi Sebelumnya"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-lg bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:border-[#ea580c] dark:hover:border-white hover:text-[#ea580c] dark:hover:text-white hover:scale-105 transition-all shadow-sm cursor-pointer"
              aria-label="Putar Sertifikasi ke Kanan"
              title="Sertifikasi Selanjutnya"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 3D Rotary Stage Container */}
      <div
        className="relative w-full h-[470px] sm:h-[480px] flex items-center justify-center overflow-hidden py-4 select-none"
        style={{ perspective: '1200px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute w-72 h-72 rounded-full bg-orange-500/10 dark:bg-white/5 blur-3xl pointer-events-none -z-10" />

        {/* Carousel Cards */}
        {certifications.map((cert, idx) => {
          const diff = getOffset(idx, activeIndex, total);
          const isCenter = diff === 0;
          const isSide = diff === -1 || diff === 1;
          const cardStyle = getCardStyle(diff);

          return (
            <div
              key={cert.id}
              onClick={() => {
                if (isCenter) {
                  onSelectCert(cert);
                } else if (isSide) {
                  setActiveIndex(idx);
                }
              }}
              style={{
                ...cardStyle,
                transition: 'all 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              className={`absolute top-4 w-[86%] sm:w-[330px] md:w-[350px] h-[430px] p-5 rounded-2xl flex flex-col justify-between cursor-pointer transition-colors ${isCenter
                  ? 'bg-white dark:bg-[#0d1322] border-2 border-[#ea580c] dark:border-white shadow-[0_15px_35px_rgba(234,88,12,0.18)] dark:shadow-[0_15px_40px_rgba(255,255,255,0.15)]'
                  : 'bg-white/95 dark:bg-[#0d1322]/85 border border-[#fed7aa] dark:border-[#1e293b] shadow-md hover:border-[#ea580c]/60 dark:hover:border-white/50'
                }`}
            >
              <div>
                {/* Certificate Thumbnail Preview */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-3.5 border border-[#fed7aa] dark:border-[#1e293b] bg-[#fff7ed] dark:bg-[#070b14] group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-[#1c1917]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-lg bg-[#1c1917]/95 dark:bg-[#070b14]/95 text-[#fed7aa] dark:text-white text-xs font-mono font-semibold flex items-center gap-1.5 border border-[#fed7aa]/60 dark:border-white/50 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Perbesar
                    </span>
                  </div>
                </div>

                {/* Badge & Date */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fff7ed] dark:bg-[#070b14] border border-[#ea580c]/30 dark:border-white/30 text-[#ea580c] dark:text-[#f8fafc]">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-mono text-[#78716c] dark:text-[#94a3b8]">{cert.date}</span>
                </div>

                {/* Title & Issuer */}
                <h4 className="text-sm font-bold text-[#1c1917] dark:text-[#f8fafc] line-clamp-2 mb-1">
                  {cert.title}
                </h4>
                <div className="text-xs font-mono text-[#ea580c] dark:text-[#38bdf8] mb-2 truncate">
                  {cert.issuer}
                </div>

                {/* Description */}
                <p className="text-xs text-[#57534e] dark:text-[#cbd5e1] leading-relaxed line-clamp-3">
                  {cert.desc}
                </p>
              </div>

              {/* Bottom Card Action Footer */}
              <div className="pt-3 border-t border-[#fed7aa] dark:border-[#1e293b]/60 flex items-center justify-between text-xs font-mono">
                {isCenter ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCert(cert);
                    }}
                    className="w-full py-1.5 px-3 rounded-lg bg-[#ea580c] text-white dark:bg-[#f8fafc] dark:text-[#070b14] font-semibold flex items-center justify-center gap-1.5 hover:bg-[#c2410c] dark:hover:bg-white transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Buka Detail Lightbox</span>
                    <span>↗</span>
                  </button>
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

      {/* Pagination Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {certifications.map((cert, dotIdx) => {
          const isActive = activeIndex === dotIdx;
          return (
            <button
              key={cert.id}
              onClick={() => setActiveIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                  ? 'w-8 bg-[#ea580c] dark:bg-white shadow-[0_0_12px_rgba(234,88,12,0.4)] dark:shadow-[0_0_12px_rgba(255,255,255,0.6)]'
                  : 'w-2.5 bg-[#fed7aa] dark:bg-[#1e293b] hover:bg-[#ea580c]/60 dark:hover:bg-white/60'
                }`}
              title={`Pindah ke ${cert.title}`}
              aria-label={`Slide ${dotIdx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
