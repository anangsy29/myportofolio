'use client';

import { skillsData } from '@/data/portfolioData';
import ScrollReveal from '@/components/ScrollReveal';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return (
          <svg className="w-5 h-5 text-[#ea580c] dark:text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'database':
        return (
          <svg className="w-5 h-5 text-[#ea580c] dark:text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 'cpu':
        return (
          <svg className="w-5 h-5 text-[#ea580c] dark:text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'tool':
      default:
        return (
          <svg className="w-5 h-5 text-[#ea580c] dark:text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {skillsData.map((group, index) => (
        <ScrollReveal key={index} direction="up" delay={index * 100}>
          <div
            className="group p-6 rounded-xl bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white/40 hover:bg-[#faf8f5] dark:hover:bg-[#111c33] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#fff7ed] dark:bg-[#070b14] border border-[#fed7aa] dark:border-[#1e293b] group-hover:border-[#ea580c]/50 dark:group-hover:border-white/40 transition-colors">
                {getIcon(group.iconName)}
              </div>
              <h3 className="font-semibold text-lg text-[#1c1917] dark:text-[#f8fafc] group-hover:text-[#ea580c] dark:group-hover:text-white transition-colors">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#fff7ed] dark:bg-[#070b14] border border-[#fed7aa] dark:border-[#1e293b] text-[#57534e] dark:text-[#cbd5e1] hover:text-[#ea580c] dark:hover:text-white hover:border-[#ea580c] dark:hover:border-white/60 hover:shadow-[0_0_10px_rgba(234,88,12,0.15)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
