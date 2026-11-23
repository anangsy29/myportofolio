'use client';

import { useState, useEffect, useCallback } from 'react';
import { certifications } from '@/data/portfolioData';

export default function CertificateModal({ selectedCert, onClose, onSelectCert }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const currentIndex = certifications.findIndex((c) => c.id === selectedCert?.id);

  const goToIndex = useCallback(
    (index) => {
      if (index >= 0 && index < certifications.length) {
        setIsChanging(true);
        setZoomLevel(1);
        setRotation(0);
        setTimeout(() => {
          onSelectCert(certifications[index]);
          setIsChanging(false);
        }, 220);
      }
    },
    [onSelectCert]
  );

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % certifications.length;
    goToIndex(nextIdx);
  }, [currentIndex, goToIndex]);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + certifications.length) % certifications.length;
    goToIndex(prevIdx);
  }, [currentIndex, goToIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, handleNext, handlePrev]);

  useEffect(() => {
    setZoomLevel(1);
    setRotation(0);
  }, [selectedCert]);

  if (!selectedCert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1c1917]/70 dark:bg-black/85 backdrop-blur-md animate-modal-backdrop-slow select-none transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-white dark:bg-[#0d1322] rounded-2xl border border-[#fed7aa] dark:border-white/40 overflow-hidden shadow-2xl shadow-black/20 dark:shadow-[0_0_50px_rgba(255,255,255,0.15)] animate-modal-card-slow flex flex-col max-h-[92vh] transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#fed7aa] dark:border-[#1e293b] bg-[#faf8f5] dark:bg-[#070b14]/90 transition-colors">
          <div className="pr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fff7ed] dark:bg-[#0d1322] border border-[#ea580c]/30 dark:border-white/30 text-[#ea580c] dark:text-[#f8fafc]">
                {selectedCert.badge}
              </span>
              <span className="text-xs font-mono text-[#78716c] dark:text-[#94a3b8]">
                Sertifikat {currentIndex + 1} dari {certifications.length}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#1c1917] dark:text-[#f8fafc] tracking-wide">
              {selectedCert.title}
            </h3>
            <p className="text-xs text-[#78716c] dark:text-[#94a3b8] font-mono mt-0.5">
              {selectedCert.issuer} • {selectedCert.date}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-xl text-[#78716c] hover:text-[#1c1917] hover:bg-[#fed7aa]/60 dark:text-[#94a3b8] dark:hover:text-[#f8fafc] dark:hover:bg-[#1e293b] hover:scale-105 transition-all duration-200 cursor-pointer shrink-0"
            aria-label="Tutup Modal"
            title="Tutup (Esc)"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#fff7ed]/80 dark:bg-[#070b14]/60 border-b border-[#fed7aa] dark:border-[#1e293b]/60 text-xs font-mono transition-colors">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5))}
              className="px-2.5 py-1 rounded bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:border-[#ea580c] dark:hover:border-white hover:text-[#ea580c] dark:hover:text-white transition-all flex items-center gap-1 cursor-pointer shadow-sm"
              title="Perbesar Zoom"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <span>Zoom +</span>
            </button>

            <button
              onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
              className="px-2.5 py-1 rounded bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:border-[#ea580c] dark:hover:border-white hover:text-[#ea580c] dark:hover:text-white transition-all flex items-center gap-1 cursor-pointer shadow-sm"
              title="Perkecil Zoom"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <span>Zoom -</span>
            </button>

            <button
              onClick={() => {
                setZoomLevel(1);
                setRotation(0);
              }}
              className="px-2.5 py-1 rounded bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:border-[#ea580c] dark:hover:border-white hover:text-[#ea580c] dark:hover:text-white transition-all cursor-pointer shadow-sm"
              title="Reset Tampilan"
            >
              Reset ({Math.round(zoomLevel * 100)}%)
            </button>

            <button
              onClick={() => setRotation((prev) => (prev + 90) % 360)}
              className="hidden sm:flex px-2.5 py-1 rounded bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:border-[#ea580c] dark:hover:border-white hover:text-[#ea580c] dark:hover:text-white transition-all items-center gap-1 cursor-pointer shadow-sm"
              title="Putar 90 Derajat"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Putar</span>
            </button>
          </div>

          {/* Quick Navigator Counter Dots */}
          <div className="flex items-center gap-1">
            {certifications.map((cert, idx) => (
              <button
                key={cert.id}
                onClick={() => goToIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 bg-[#ea580c] dark:bg-white shadow-[0_0_8px_rgba(234,88,12,0.4)] dark:shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                    : 'w-2.5 bg-[#fed7aa] dark:bg-[#1e293b] hover:bg-[#ea580c]/60 dark:hover:bg-white/50'
                }`}
                title={cert.title}
              />
            ))}
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="relative flex-1 min-h-[350px] sm:min-h-[460px] max-h-[65vh] overflow-hidden flex items-center justify-center bg-[#faf8f5]/90 dark:bg-black/75 p-4 transition-colors">
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-white/90 dark:bg-[#070b14]/85 border border-[#fed7aa] dark:border-white/40 text-[#57534e] dark:text-[#f8fafc] hover:bg-[#ea580c] hover:text-white dark:hover:bg-white dark:hover:text-[#070b14] hover:scale-110 shadow-lg shadow-black/10 dark:shadow-black/50 transition-all duration-200 cursor-pointer"
            title="Sertifikat Sebelumnya (Panah Kiri)"
            aria-label="Previous Certificate"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-white/90 dark:bg-[#070b14]/85 border border-[#fed7aa] dark:border-white/40 text-[#57534e] dark:text-[#f8fafc] hover:bg-[#ea580c] hover:text-white dark:hover:bg-white dark:hover:text-[#070b14] hover:scale-110 shadow-lg shadow-black/10 dark:shadow-black/50 transition-all duration-200 cursor-pointer"
            title="Sertifikat Selanjutnya (Panah Kanan)"
            aria-label="Next Certificate"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className={`transition-all duration-500 ease-out flex items-center justify-center max-w-full max-h-full ${
              isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            style={{
              transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
            }}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-h-[55vh] sm:max-h-[58vh] w-auto max-w-full object-contain rounded-lg shadow-xl dark:shadow-2xl transition-transform duration-500 border border-[#fed7aa]/50 dark:border-transparent"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#fed7aa] dark:border-[#1e293b] bg-[#faf8f5] dark:bg-[#070b14]/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#57534e] dark:text-[#cbd5e1] transition-colors">
          <p className="leading-relaxed text-center sm:text-left">{selectedCert.desc}</p>
          <a
            href={selectedCert.image}
            target="_blank"
            rel="noreferrer"
            download
            className="px-5 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white dark:bg-[#f8fafc] dark:hover:bg-white dark:text-[#070b14] font-mono font-semibold shadow-md hover:shadow-[0_0_15px_rgba(234,88,12,0.3)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Unduh File Gambar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
