'use client';

import { personalInfo } from '@/data/portfolioData';
import ScrollReveal from '@/components/ScrollReveal';

export default function Hero({ scrollTo }) {
  return (
    <section id="beranda" className="min-h-screen flex flex-col justify-center pt-24 pb-16 scroll-mt-24">

      {/* Status Badge */}
      <ScrollReveal direction="down" delay={50}>
        <div className="mb-5 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white dark:bg-[#0d1322] border border-[#ea580c]/30 dark:border-white/30 text-[#ea580c] dark:text-[#f8fafc] w-fit shadow-sm hover:border-[#ea580c] dark:hover:border-white/60 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea580c] dark:bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ea580c] dark:bg-white"></span>
          </span>
          <span>Lulusan D3 Teknik Informatika • Open to Work {'&'} Collaborations</span>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={150}>
        <h2 className="text-base sm:text-lg font-mono text-[#ea580c] dark:text-[#38bdf8] mb-3">
          Halo, perkenalkan saya
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1c1917] dark:text-[#f8fafc] tracking-tight mb-2">
          {personalInfo.name}.
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#57534e] dark:text-[#cbd5e1] mb-6">
          {personalInfo.role}.
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={250}>
        <p className="text-[#57534e] dark:text-[#cbd5e1] max-w-2xl text-base sm:text-lg leading-relaxed mb-8">
          Passionate dalam merancang dan mengembangkan aplikasi web modern yang cepat, clean, dan intuitif.
          Berpengalaman membangun sistem berbasis{' '}
          <span className="text-[#ea580c] dark:text-[#38bdf8] font-semibold">Laravel</span>{' & '}
          <span className="text-[#ea580c] dark:text-[#38bdf8] font-semibold">Next.js</span>,
          memodernisasi arsitektur sistem enterprise kampus, serta bereksperimen dengan integrasi perangkat{' '}
          <span className="text-[#ea580c] dark:text-[#38bdf8] font-semibold">IoT</span>.
        </p>
      </ScrollReveal>

      {/* CTA Buttons */}
      <ScrollReveal direction="up" delay={350}>
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo('proyek')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold bg-[#ea580c] text-white hover:bg-[#c2410c] dark:bg-[#f8fafc] dark:text-[#070b14] dark:hover:bg-white transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-[0_4px_20px_rgba(234,88,12,0.35)] dark:hover:shadow-[0_4px_25px_rgba(255,255,255,0.3)] cursor-pointer"
          >
            <span>Lihat Portofolio Proyek</span>
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <a
            href={personalInfo.contacts.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold border border-[#ea580c] text-[#ea580c] dark:border-white/80 dark:text-[#f8fafc] hover:bg-[#fff7ed] dark:hover:bg-white/10 transition-all duration-300 cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download CV (PDF)</span>
          </a>

          <button
            onClick={() => scrollTo('kontak')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-sm text-[#57534e] dark:text-[#cbd5e1] hover:text-[#ea580c] dark:hover:text-[#f8fafc] hover:bg-[#fff7ed] dark:hover:bg-[#0d1322] transition-all cursor-pointer"
          >
            Hubungi Saya
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg border border-[#fed7aa] dark:border-[#1e293b] bg-white dark:bg-[#0d1322]/80 text-[#57534e] dark:text-[#cbd5e1] hover:text-[#ea580c] dark:hover:text-[#f8fafc] hover:border-[#ea580c] dark:hover:border-white/50 hover:scale-105 shadow-sm transition-all duration-200"
              title="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg border border-[#fed7aa] dark:border-[#1e293b] bg-white dark:bg-[#0d1322]/80 text-[#57534e] dark:text-[#cbd5e1] hover:text-[#ea580c] dark:hover:text-[#f8fafc] hover:border-[#ea580c] dark:hover:border-white/50 hover:scale-105 shadow-sm transition-all duration-200"
              title="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* WhatsApp commented out for privacy */}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
