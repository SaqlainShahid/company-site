import React from 'react';
import { developerVerifiedData } from '../api/mockData';
import { useAppStore } from '../store/useAppStore';

export const DeveloperPreviewCard: React.FC = () => {
  const setCurrentView = useAppStore((state) => state.setCurrentView);

  const corePills = [
    'React', 'Next.js', 'TypeScript', 'Flutter', 
    'React Native', 'Node.js', 'Firebase', 'AI Systems'
  ];

  return (
    <section className="w-full bg-[#171817] text-on-surface border-b border-[#343634] py-16 sm:py-20 scroll-mt-20" id="developer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Overline Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [01 — TECHNICAL LEADERSHIP]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest font-mono">
            FOUNDER & PRINCIPAL ARCHITECT
          </span>
        </div>

        {/* High-Impact Architectural Preview Card */}
        <div className="border border-[#343634] bg-surface-container relative overflow-hidden">
          
          {/* Subtle architectural drafting background grid */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
              backgroundSize: '24px 24px' 
            }} 
          />

          {/* Technical Corner Measurement Marks */}
          <div className="absolute top-2 left-2 text-[10px] font-mono text-outline-variant select-none">+0.00</div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-outline-variant select-none">+1.00</div>

          <div className="p-6 sm:p-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Monogram & Identity */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-6 items-start">
                <div className="flex items-center gap-4">
                  {/* Monogram Box */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#FF4500] bg-surface-container-high flex items-center justify-center text-[#FF4500] font-headline text-2xl sm:text-3xl font-bold shrink-0">
                    SS
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-pulse" />
                      <span className="font-mono text-[10px] sm:text-xs text-[#FF4500] uppercase tracking-wider">
                        AUTHENTICATED PRACTITIONER
                      </span>
                    </div>
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-primary leading-tight">
                      {developerVerifiedData.name}
                    </h2>
                    <p className="font-headline text-xs sm:text-sm uppercase tracking-wider text-[#FF4500] mt-0.5 font-medium">
                      {developerVerifiedData.title}
                    </p>
                  </div>
                </div>

                {/* Short bio excerpt */}
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Leading our engineering collective to architect and ship resilient digital products across web, mobile, SaaS, and cloud environments.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {corePills.map((pill) => (
                    <span 
                      key={pill}
                      className="font-mono text-[11px] bg-surface-container-high border border-[#343634] px-2 py-0.5 text-on-surface-variant hover:text-primary transition-colors cursor-default"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle Column: Vertical Architectural Divider */}
              <div className="hidden lg:block lg:col-span-1 h-full flex items-center justify-center">
                <div className="w-[1px] h-48 bg-[#343634]" />
              </div>

              {/* Right Column: Verified Metrics & Action Triggers */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                
                {/* 4-Stat Metric Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="border border-[#343634] p-3.5 bg-surface-container-low">
                    <span className="font-mono text-[10px] text-on-surface-variant block uppercase">TIER</span>
                    <span className="font-headline text-sm sm:text-base font-bold text-primary mt-1 block">Level 1</span>
                    <span className="font-mono text-[9px] text-[#FF4500]">FIVERR SELLER</span>
                  </div>

                  <div className="border border-[#343634] p-3.5 bg-surface-container-low">
                    <span className="font-mono text-[10px] text-on-surface-variant block uppercase">RATING</span>
                    <span className="font-headline text-sm sm:text-base font-bold text-[#FF4500] mt-1 block">5.0 / 5.0</span>
                    <span className="font-mono text-[9px] text-on-surface-variant">7 REVIEWS</span>
                  </div>

                  <div className="border border-[#343634] p-3.5 bg-surface-container-low">
                    <span className="font-mono text-[10px] text-on-surface-variant block uppercase">RATE</span>
                    <span className="font-headline text-sm sm:text-base font-bold text-primary mt-1 block">$20 / HR</span>
                    <span className="font-mono text-[9px] text-on-surface-variant">VERIFIED</span>
                  </div>

                  <div className="border border-[#343634] p-3.5 bg-surface-container-low">
                    <span className="font-mono text-[10px] text-on-surface-variant block uppercase">RESPONSE</span>
                    <span className="font-headline text-sm sm:text-base font-bold text-primary mt-1 block">~2 HOURS</span>
                    <span className="font-mono text-[9px] text-on-surface-variant">AVERAGE</span>
                  </div>
                </div>

                {/* Primary & Secondary Action Triggers */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  <button
                    onClick={() => setCurrentView('developer')}
                    className="flex-1 bg-[#FF4500] text-white font-headline text-xs sm:text-sm uppercase tracking-wider py-3.5 px-5 border border-[#FF4500] hover:bg-transparent hover:text-[#FF4500] transition-all flex items-center justify-center gap-2 font-semibold"
                  >
                    <span>EXPLORE FULL FOUNDER DOSSIER</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>

                  <a
                    href={developerVerifiedData.fiverrUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-[#343634] bg-surface-container-high text-on-surface hover:text-[#FF4500] hover:border-[#FF4500] font-headline text-xs sm:text-sm uppercase tracking-wider py-3.5 px-5 transition-all flex items-center justify-center gap-1.5 font-medium shrink-0"
                  >
                    <span>VERIFY ON FIVERR</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>

                {/* Subtitle note */}
                <div className="flex items-center justify-between font-mono text-[11px] text-on-surface-variant pt-1 border-t border-[#343634]">
                  <span>INCLUDES 7 VERIFIED CLIENT REVIEWS & FULL TECH INDEX</span>
                  <button 
                    onClick={() => setCurrentView('developer')}
                    className="text-[#FF4500] hover:underline"
                  >
                    VIEW ALL SPECIFICATIONS →
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
