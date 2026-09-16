import React, { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { DeveloperProfile } from './DeveloperProfile';

export const DeveloperProfilePage: React.FC = () => {
  const setCurrentView = useAppStore((state) => state.setCurrentView);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full bg-[#171817] min-h-screen text-on-surface">
      
      {/* Top Breadcrumb / Return Bar */}
      <div className="sticky top-20 z-40 bg-[#171817]/95 backdrop-blur-md border-b border-[#343634] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-2 font-headline text-xs uppercase tracking-wider text-[#FF4500] hover:text-white transition-colors group w-fit"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <span className="font-semibold">[← RETURN TO MAIN STUDIO]</span>
          </button>

          <div className="flex items-center gap-3 font-mono text-xs text-on-surface-variant">
            <span>STUDIO / 001</span>
            <span>/</span>
            <span>LEADERSHIP</span>
            <span>/</span>
            <span className="text-primary font-medium">SAQLAIN SHAHID DOSSIER</span>
          </div>

        </div>
      </div>

      {/* Full Developer & Founder Profile View */}
      <DeveloperProfile />

      {/* Bottom Back Navigation Bar */}
      <div className="bg-[#131413] border-t border-[#343634] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => setCurrentView('home')}
            className="border border-[#343634] bg-surface-container text-on-surface hover:border-[#FF4500] hover:text-[#FF4500] font-headline text-xs uppercase tracking-wider px-5 py-3 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>RETURN TO MAIN STUDIO</span>
          </button>

          <span className="font-mono text-xs text-on-surface-variant">
            AUTHENTICATED PUBLIC DATA · NO FABRICATED METRICS
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-on-surface-variant hover:text-[#FF4500] font-headline text-xs uppercase tracking-wider font-mono transition-colors"
          >
            [BACK TO TOP ↑]
          </button>
        </div>
      </div>

    </div>
  );
};
