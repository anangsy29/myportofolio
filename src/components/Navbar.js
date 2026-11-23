'use client';

import { navLinks, personalInfo } from '@/data/portfolioData';

export default function Navbar({ activeSection, scrollTo, isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf8f5]/90 dark:bg-[#070b14]/92 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/40 border-b border-[#fed7aa]/80 dark:border-[#1e293b] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo('beranda')}
          className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#ea580c]/40 dark:border-white/30 bg-white dark:bg-[#0d1322] text-[#ea580c] dark:text-[#f8fafc] font-mono font-bold text-lg group-hover:border-[#ea580c] dark:group-hover:border-white group-hover:scale-105 transition-all duration-300 shadow-sm">
            A
          </span>
          <span className="flex flex-col">
            <span className="font-bold text-[#1c1917] dark:text-[#f8fafc] text-base tracking-wide group-hover:text-[#ea580c] dark:group-hover:text-white transition-colors duration-200">
              {personalInfo.shortName}
            </span>
            <span className="text-[10px] font-mono text-[#ea580c] dark:text-[#38bdf8] tracking-wider">
              WEB DEVELOPER • JR. SOFTWARE ENGINEER
            </span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 font-mono text-xs">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#ea580c] dark:text-[#f8fafc] bg-[#fff7ed] dark:bg-[#0d1322] font-semibold border border-[#ea580c]/30 dark:border-white/30 shadow-sm'
                    : 'text-[#57534e] dark:text-[#cbd5e1] hover:text-[#ea580c] dark:hover:text-[#f8fafc] hover:bg-[#fff7ed]/60 dark:hover:bg-[#0d1322]/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <a
            href={personalInfo.contacts.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="ml-3 px-3.5 py-1.5 rounded border border-[#ea580c] text-[#ea580c] dark:border-white/80 dark:text-[#f8fafc] hover:bg-[#fff7ed] dark:hover:bg-white/10 transition-all duration-300 font-mono text-xs cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#57534e] dark:text-[#cbd5e1] hover:text-[#ea580c] dark:hover:text-[#f8fafc] hover:bg-[#fff7ed] dark:hover:bg-[#0d1322] focus:outline-none transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-[#fed7aa] dark:border-[#1e293b] bg-[#faf8f5]/95 dark:bg-[#070b14]/98 backdrop-blur-xl ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col space-y-2 font-mono text-sm">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'text-[#ea580c] dark:text-[#f8fafc] bg-[#fff7ed] dark:bg-[#0d1322] font-semibold'
                  : 'text-[#57534e] dark:text-[#cbd5e1] hover:text-[#ea580c] dark:hover:text-[#f8fafc] hover:bg-[#fff7ed]/50 dark:hover:bg-[#0d1322]/40'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={personalInfo.contacts.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="mt-2 text-center py-2.5 rounded border border-[#ea580c] text-[#ea580c] dark:border-white/80 dark:text-[#f8fafc] font-mono text-xs flex items-center justify-center gap-2 hover:bg-[#fff7ed] dark:hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </div>
    </header>
  );
}
