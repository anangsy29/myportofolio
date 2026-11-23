'use client';

import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#fed7aa]/60 dark:border-[#1e293b] py-8 text-center text-xs font-mono text-[#78716c] dark:text-[#94a3b8] bg-[#faf8f5] dark:bg-[#070b14] transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 {personalInfo.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Dibuat dengan
          <span className="text-[#ea580c] dark:text-[#38bdf8] font-semibold">Next.js</span> {'&'}
          <span className="text-[#ea580c] dark:text-[#38bdf8] font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
