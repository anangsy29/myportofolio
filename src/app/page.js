'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import CertificateModal from '@/components/CertificateModal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const SpaceBackground = dynamic(() => import('@/components/SpaceBackground'), { ssr: false });

export default function Home() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      setShowScrollTop(window.scrollY > 350);

      const sections = ['beranda', 'tentang', 'pengalaman', 'proyek', 'keahlian', 'kontak'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative min-h-screen bg-[#faf8f5] dark:bg-[#070b14] text-[#1c1917] dark:text-[#f1f5f9] antialiased transition-colors duration-300">

      {/* Celestial Moon & Space Cosmos Background */}
      <SpaceBackground />

      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        scrollTo={scrollTo}
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6">
        <Hero scrollTo={scrollTo} />
        <About />
        <Experience onSelectCert={setSelectedCert} />
        <Projects />

        {/* Keahlian & Sertifikasi */}
        <section id="keahlian" className="py-24 scroll-mt-24 border-t border-[#fed7aa]/60 dark:border-[#1e293b]">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1917] dark:text-[#f1f5f9]">
              Keahlian &amp; Sertifikasi
            </h2>
            <div className="h-[1px] bg-[#fed7aa] dark:bg-[#1e293b] flex-1 max-w-xs" />
          </div>
          <Skills />
          <Certifications onSelectCert={setSelectedCert} />
        </section>

        <Contact />
      </main>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          selectedCert={selectedCert}
          onClose={() => setSelectedCert(null)}
          onSelectCert={setSelectedCert}
        />
      )}

      <CustomCursor />
      <ThemeToggle />
      <ScrollToTop show={showScrollTop} scrollToTop={scrollToTop} />
      <Footer />
    </div>
  );
}
