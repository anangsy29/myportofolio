'use client';

export default function ScrollToTop({ show, scrollToTop }) {
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white dark:bg-[#0d1322] border border-[#ea580c]/40 dark:border-white/40 text-[#ea580c] dark:text-[#f8fafc] shadow-lg shadow-black/10 dark:shadow-black/50 hover:bg-[#ea580c] hover:text-white dark:hover:bg-white dark:hover:text-[#070b14] transition-all duration-300 transform hover:scale-110 cursor-pointer ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      title="Kembali ke atas"
      aria-label="Kembali ke atas"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
