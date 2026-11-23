'use client';

import { useState, useEffect, useRef } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Apply theme to document element
  const applyTheme = (targetTheme) => {
    const root = document.documentElement;
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (targetTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (targetTheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      // System mode
      if (isSystemDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme-mode') || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      const currentMode = localStorage.getItem('theme-mode') || 'dark';
      if (currentMode === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  // Close radial menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme-mode', newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  if (!mounted) {
    return null;
  }

  // Radial items configuration with 90-degree quadrant coordinates (North, Northeast, East)
  const radialItems = [
    {
      id: 'light',
      label: 'Light',
      desc: 'Blood Moon (Red-Orange)',
      transformOpen: '-translate-y-[80px] translate-x-0',
      delay: 'delay-75',
      icon: (
        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" strokeWidth="2" fill="currentColor" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>
      ),
    },
    {
      id: 'system',
      label: 'Auto',
      desc: 'Ikuti Perangkat',
      transformOpen: '-translate-y-[58px] translate-x-[58px]',
      delay: 'delay-100',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 'dark',
      label: 'Dark',
      desc: 'White Moon & Cosmos',
      transformOpen: 'translate-y-0 translate-x-[80px]',
      delay: 'delay-150',
      icon: (
        <svg className="w-4 h-4 text-slate-100" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11.69 1 1 0 00-.36-1.05z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 left-6 z-40 select-none"
      aria-label="Radial Theme Switcher"
    >
      {/* Radial Fan-Out Sub-Buttons */}
      {radialItems.map((item) => {
        const isActive = theme === item.id;
        return (
          <div
            key={item.id}
            className={`absolute bottom-1 left-1 transition-all duration-300 ease-out ${
              isOpen
                ? `${item.transformOpen} ${item.delay} opacity-100 scale-100 pointer-events-auto`
                : 'translate-x-0 translate-y-0 opacity-0 scale-50 pointer-events-none'
            }`}
          >
            <div className="relative group">
              <button
                onClick={() => handleSelectTheme(item.id)}
                className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#ea580c] text-white dark:bg-white dark:text-[#070b14] ring-2 ring-[#ea580c]/60 dark:ring-white/60 shadow-[0_0_15px_rgba(234,88,12,0.4)] dark:shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                    : 'bg-white dark:bg-[#0d1322] text-[#57534e] dark:text-[#cbd5e1] border border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white hover:scale-110'
                }`}
                title={item.desc}
              >
                {item.icon}
              </button>

              {/* Floating Tooltip Label */}
              <div className="absolute left-1/2 -top-8 -translate-x-1/2 px-2 py-0.5 rounded bg-[#1c1917]/95 dark:bg-[#070b14]/95 text-white dark:text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-[#fed7aa]/30 dark:border-[#1e293b]">
                {item.desc}
              </div>
            </div>
          </div>
        );
      })}

      {/* Main Radial Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-13 h-13 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer ${
          isOpen
            ? 'bg-[#ea580c] text-white dark:bg-white dark:text-[#070b14] shadow-[0_0_20px_rgba(234,88,12,0.4)] dark:shadow-[0_0_20px_rgba(255,255,255,0.5)] scale-105'
            : 'bg-white/95 dark:bg-[#0d1322]/95 backdrop-blur-md text-[#ea580c] dark:text-white border-2 border-[#fed7aa] dark:border-[#1e293b] hover:border-[#ea580c] dark:hover:border-white hover:scale-105 shadow-black/10 dark:shadow-black/50'
        }`}
        title={isOpen ? 'Tutup Pengatur Tema' : 'Buka Pengatur Tema (Radial Menu)'}
        aria-expanded={isOpen}
      >
        <span className={`flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}>
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <span className="relative flex items-center justify-center">
              {theme === 'light' && (
                <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                  {/* Stylized Red-Orange Moon / Sun */}
                  <circle cx="12" cy="12" r="8" />
                </svg>
              )}
              {theme === 'dark' && (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  {/* Glowing White Moon */}
                  <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11.69 1 1 0 00-.36-1.05z" />
                </svg>
              )}
              {theme === 'system' && (
                <svg className="w-5 h-5 text-[#ea580c] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {/* Subtle active status indicator dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ea580c] dark:bg-white ring-2 ring-white dark:ring-[#0d1322] shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            </span>
          )}
        </span>
      </button>
    </div>
  );
}
