'use client';

import { personalInfo } from '@/data/portfolioData';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  const stats = [
    { label: 'Pendidikan', val: 'D3 Teknik Informatika', sub: 'Polibatam (IPK 3.79)', icon: '🎓' },
    { label: 'Pengalaman', val: 'Web Dev Intern', sub: 'Unit Transformasi Digital', icon: '💼' },
    { label: 'Sertifikasi', val: 'CFDA Certified', sub: 'Fullstack Developer Associate', icon: '🏅' },
    { label: 'Keahlian Inti', val: 'Laravel & Web Dev', sub: 'Backend, Frontend & IoT', icon: '⚡' },
  ];

  return (
    <section id="tentang" className="py-24 scroll-mt-24 border-t border-[#fed7aa]/60 dark:border-[#1e293b]">
      <ScrollReveal direction="down" delay={50}>
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1917] dark:text-[#f8fafc]">Tentang Saya</h2>
          <div className="h-[1px] bg-[#fed7aa] dark:bg-[#1e293b] flex-1 max-w-xs" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Bio */}
        <div className="lg:col-span-7 space-y-4 text-[#57534e] dark:text-[#cbd5e1] leading-relaxed text-base">
          <ScrollReveal direction="left" delay={100}>
            <p>
              Bagi saya, ngoding bukan sekadar merangkai baris kode, melainkan seni memecahkan masalah dan merancang solusi digital yang berdampak nyata. Sebagai lulusan{' '}
              <strong className="text-[#1c1917] dark:text-[#f8fafc]">{personalInfo.education.degree} {personalInfo.education.institution}</strong>{' '}
              (IPK <span className="text-[#ea580c] dark:text-[#38bdf8] font-semibold">{personalInfo.education.gpa}</span>, Lulus {personalInfo.education.graduation}), saya mendedikasikan fokus pada arsitektur modern web development dan integrasi hardware pintar.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={150}>
            <p>
              Pengalaman nyata saya teruji saat magang di{' '}
              <span className="text-[#ea580c] dark:text-[#38bdf8] font-medium">Unit Transformasi Digital Polibatam</span>, di mana saya dipercaya memimpin migrasi sistem enterprise kampus ({"\"Budget Management Information System\""}) dari arsitektur legacy C# ke stack modern{' '}
              <span className="text-[#1c1917] dark:text-[#f8fafc] font-medium">PHP Laravel {'&'} MySQL</span>. Sistem ini berhasil di-deploy ke production dan aktif digunakan dalam operasional kampus harian.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={200}>
            <p>
              Di ranah antarmuka, saya menikmati meracik UI/UX yang responsif, snappy, dan interaktif dengan ekosistem{' '}
              <span className="text-[#1c1917] dark:text-[#f8fafc] font-medium">Next.js {'&'} Tailwind CSS</span>. Rasa ingin tahu terhadap teknologi juga mendorong saya mengeksplorasi dunia{' '}
              <span className="text-[#ea580c] dark:text-[#38bdf8] font-medium">IoT (Internet of Things)</span> — memprogram mikrokontroler (ESP8266/ESP32, sensor RFID) dan menghubungkannya ke dashboard web serta aplikasi mobile via Flutter {'&'} Firebase.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={250}>
            <p>Terbiasa dengan git workflow, pengujian perangkat lunak (QA), serta penulisan dokumentasi teknis yang terstruktur. Selalu adaptif, komunikatif, dan siap berkolaborasi menghadirkan solusi teknologi terbaik.</p>
          </ScrollReveal>

          {/* Stats Grid */}
          <ScrollReveal direction="up" delay={300}>
            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map((card, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white/50 hover:bg-[#fff7ed]/50 dark:hover:bg-[#111c33] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="text-xl mb-1">{card.icon}</div>
                  <div className="text-xs font-mono text-[#ea580c] dark:text-[#38bdf8]">{card.label}</div>
                  <div className="text-sm font-bold text-[#1c1917] dark:text-[#f8fafc] mb-0.5">{card.val}</div>
                  <div className="text-xs text-[#78716c] dark:text-[#94a3b8]">{card.sub}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Profile Photo */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="right" delay={200}>
            <div className="relative group w-64 h-80 sm:w-72 sm:h-92">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#ea580c] dark:border-white translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 shadow-[0_0_20px_rgba(234,88,12,0.18)] dark:shadow-[0_0_25px_rgba(255,255,255,0.2)]" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-[#0d1322] border border-[#fed7aa] dark:border-[#1e293b] shadow-2xl">
                <img
                  src={personalInfo.contacts.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/85 dark:from-[#070b14]/95 via-transparent to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-bold text-sm">{personalInfo.name}</span>
                  <span className="text-[#fed7aa] dark:text-[#38bdf8] text-xs font-mono">{personalInfo.role}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
