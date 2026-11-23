'use client';

import { experienceData, certifications } from '@/data/portfolioData';
import ScrollReveal from '@/components/ScrollReveal';

export default function Experience({ onSelectCert }) {
  return (
    <section id="pengalaman" className="py-24 scroll-mt-24 border-t border-[#fed7aa]/60 dark:border-[#1e293b]">
      <ScrollReveal direction="down" delay={50}>
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1917] dark:text-[#f8fafc]">
            Pengalaman Magang &amp; Kerja
          </h2>
          <div className="h-[1px] bg-[#fed7aa] dark:bg-[#1e293b] flex-1 max-w-xs" />
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {experienceData.map((exp, idx) => (
          <ScrollReveal key={idx} direction="up" delay={100 * (idx + 1)}>
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white/40 hover:shadow-xl hover:shadow-[#ea580c]/5 dark:hover:shadow-white/5 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1c1917] dark:text-[#f8fafc] flex items-center gap-2">
                    <span>{exp.role}</span>
                    <span className="text-[#ea580c] dark:text-[#38bdf8] font-normal text-base">@ {exp.institution}</span>
                  </h3>
                  <div className="text-sm font-mono text-[#78716c] dark:text-[#94a3b8]">{exp.unit}</div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#fff7ed] dark:bg-[#070b14] border border-[#ea580c]/30 dark:border-white/30 text-[#ea580c] dark:text-[#f8fafc] w-fit shadow-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 text-[#57534e] dark:text-[#cbd5e1] text-sm leading-relaxed list-disc list-inside">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <strong className="text-[#1c1917] dark:text-[#f8fafc]">{pt.title}:</strong> {pt.desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-[#fed7aa]/60 dark:border-[#1e293b]">
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono text-[#ea580c] dark:text-[#38bdf8] bg-[#fff7ed] dark:bg-[#070b14] px-2.5 py-1 rounded border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.certIndex !== undefined && (
                  <button
                    onClick={() => onSelectCert(certifications[exp.certIndex])}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ea580c] dark:text-[#f8fafc] hover:underline cursor-pointer group"
                  >
                    <span>Lihat Surat/Sertifikat Magang</span>
                    <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
