import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#131413] border-t border-[#343634] py-space-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-space-md text-label-sm uppercase tracking-widest text-on-surface-variant font-mono text-center md:text-left">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span>© 2025 STUDIO 001</span>
          <span className="text-[#343634]">/</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a className="hover:text-primary transition-colors text-[#FF4500]" href="#">
            SYSTEM STATUS: OPTIMAL
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            TERMS
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            PRIVACY
          </a>
        </div>
      </div>
    </footer>
  );
};
