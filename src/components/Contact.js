'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Copy email to clipboard with feedback
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Copy phone to clipboard with feedback
  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.contacts.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="kontak" className="py-24 scroll-mt-24 border-t border-[#fed7aa]/60 dark:border-[#1e293b]">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal direction="down" delay={50}>
          <span className="font-mono text-sm text-[#ea580c] dark:text-[#38bdf8] mb-2 block">Apa Langkah Selanjutnya?</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1c1917] dark:text-[#f8fafc] mb-4">
            Mari Terhubung &amp; Berkolaborasi!
          </h2>
          <p className="text-[#57534e] dark:text-[#cbd5e1] text-base leading-relaxed mb-8">
            Tertarik mendiskusikan peluang kerja, proyek kolaborasi baru, atau butuh developer yang siap langsung terjun berkontribusi ke codebase? Inbox saya selalu terbuka — mari terhubung dan berkolaborasi membangun solusi digital yang keren!
          </p>
        </ScrollReveal>

        {/* Interactive Action Buttons */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${personalInfo.contacts.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono text-sm font-semibold bg-[#ea580c] text-white hover:bg-[#c2410c] hover:shadow-[0_0_25px_rgba(234,88,12,0.35)] dark:bg-[#f8fafc] dark:text-[#070b14] dark:hover:bg-white dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Kirim Pesan Email</span>
            </a>

            {/* <a
              href={personalInfo.contacts.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20ba59] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>WhatsApp: {personalInfo.contacts.phone}</span>
            </a> */}

            <a
              href={personalInfo.contacts.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono text-sm font-semibold border border-[#ea580c] text-[#ea580c] hover:bg-[#fff7ed] dark:border-white/80 dark:text-[#f8fafc] dark:hover:bg-white/10 hover:shadow-[0_0_15px_rgba(234,88,12,0.15)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Quick Contact Cards */}
        <ScrollReveal direction="up" delay={250}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
            <button
              onClick={handleCopyEmail}
              className="p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white/50 hover:bg-[#fff7ed]/50 dark:hover:bg-[#111c33] transition-all text-left group cursor-pointer shadow-sm hover:shadow-lg block w-full"
            >
              <span className="block text-xs font-mono text-[#ea580c] dark:text-[#38bdf8] mb-1">Email</span>
              <span className="block text-xs text-[#1c1917] dark:text-[#f8fafc] font-mono truncate group-hover:text-[#ea580c] dark:group-hover:text-white transition-colors">
                {personalInfo.contacts.email}
              </span>
              <span className="text-[11px] text-[#78716c] dark:text-[#94a3b8] mt-2 font-mono flex items-center gap-1">
                {copiedEmail ? (
                  <span className="text-[#ea580c] dark:text-[#38bdf8] font-semibold">✓ Berhasil Disalin!</span>
                ) : (
                  <span>Klik untuk salin</span>
                )}
              </span>
            </button>

            {/* <button
              onClick={handleCopyPhone}
              className="p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white/50 hover:bg-[#fff7ed]/50 dark:hover:bg-[#111c33] transition-all text-left group cursor-pointer shadow-sm hover:shadow-lg"
            >
              <div className="text-xs font-mono text-[#ea580c] dark:text-[#38bdf8] mb-1">Telepon / WhatsApp</div>
              <div className="text-xs text-[#1c1917] dark:text-[#f8fafc] font-mono truncate group-hover:text-[#ea580c] dark:group-hover:text-white transition-colors">
                {personalInfo.contacts.phone}
              </div>
              <div className="text-[11px] text-[#78716c] dark:text-[#94a3b8] mt-2 font-mono flex items-center gap-1">
                {copiedPhone ? (
                  <span className="text-[#ea580c] dark:text-[#38bdf8] font-semibold">✓ Berhasil Disalin!</span>
                ) : (
                  <span>Klik untuk salin</span>
                )}
              </div>
            </button> */}

            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white/50 hover:bg-[#fff7ed]/50 dark:hover:bg-[#111c33] transition-all text-left group shadow-sm hover:shadow-lg"
            >
              <div className="text-xs font-mono text-[#ea580c] dark:text-[#38bdf8] mb-1">LinkedIn</div>
              <div className="text-xs text-[#1c1917] dark:text-[#f8fafc] font-mono truncate group-hover:text-[#ea580c] dark:group-hover:text-white transition-colors">
                {personalInfo.contacts.linkedinDisplay}
              </div>
              <div className="text-[11px] text-[#78716c] dark:text-[#94a3b8] mt-2 font-mono">Buka Profil ↗</div>
            </a>

            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white/50 hover:bg-[#fff7ed]/50 dark:hover:bg-[#111c33] transition-all text-left group shadow-sm hover:shadow-lg"
            >
              <div className="text-xs font-mono text-[#ea580c] dark:text-[#38bdf8] mb-1">GitHub</div>
              <div className="text-xs text-[#1c1917] dark:text-[#f8fafc] font-mono truncate group-hover:text-[#ea580c] dark:group-hover:text-white transition-colors">
                {personalInfo.contacts.githubDisplay}
              </div>
              <div className="text-[11px] text-[#78716c] dark:text-[#94a3b8] mt-2 font-mono">Buka Repositori ↗</div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
