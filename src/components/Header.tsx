import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import type { NavTab } from '../types';

export const Header: React.FC = () => {
  const activeTab = useAppStore((state) => state.activeNavTab);
  const setActiveTab = useAppStore((state) => state.setActiveNavTab);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavTab; label: string; href: string }[] = [
    { id: 'developer', label: 'FOUNDER & TEAM', href: '#developer' },
    { id: 'work', label: 'WORK', href: '#work' },
    { id: 'services', label: 'SERVICES', href: '#services' },
    { id: 'solutions', label: 'SOLUTIONS', href: '#solutions' },
    { id: 'process', label: 'PROCESS', href: '#process' },
    { id: 'about', label: 'ABOUT', href: '#about' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#171817]/90 backdrop-blur-md border-b border-[#343634]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Live Status */}
        <div className="flex items-center gap-space-lg">
          <a 
            className="font-headline text-headline-sm tracking-widest text-primary flex items-center gap-2 hover:text-[#FF4500] transition-colors" 
            href="#"
          >
            [STUDIO / 001]
          </a>
          <div className="hidden lg:flex items-center gap-2 text-label-sm uppercase text-on-surface-variant border border-[#343634] px-2 py-1">
            <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></span>
            INTAKE OPEN
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`font-headline text-label-lg uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#FF4500] font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA & Avatar */}
        <div className="flex items-center gap-4">
          <a 
            className="hidden sm:flex bg-[#FF4500] text-white font-headline text-label-lg uppercase tracking-wider px-4 sm:px-6 py-3 border border-[#FF4500] hover:bg-transparent hover:text-[#FF4500] transition-all items-center gap-2" 
            href="#contact"
          >
            [CONTACT / START A PROJECT →]
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

          {/* Mobile Hamburger */}
          <button 
            type="button"
            className="md:hidden text-primary p-1 flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171817] border-b border-[#343634] px-6 py-6 space-y-4">
          <div className="flex items-center gap-2 text-label-sm uppercase text-on-surface-variant border border-[#343634] px-2 py-1 w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></span>
            INTAKE OPEN
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              className="block font-headline text-sm uppercase tracking-wider text-on-surface-variant hover:text-[#FF4500]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block bg-[#FF4500] text-white font-headline text-xs uppercase tracking-wider px-4 py-3 text-center border border-[#FF4500] mt-4"
          >
            [CONTACT / START A PROJECT →]
          </a>
        </div>
      )}
    </header>
  );
};
