import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-16 pb-24 border-b border-[#343634] overflow-hidden">
      {/* Dotted architectural background overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overline Technical Label */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [DIGITAL ENGINEERING / 001]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            LAT: 37.7749° N / LON: 122.4194° W
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-headline-xl text-primary tracking-tight uppercase leading-none font-bold">
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-on-surface-variant to-[#FF4500]">
                DIGITAL PRODUCTS
              </span>
              <br />
              THAT MOVE.
            </h1>

            <p className="font-body text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              A high-performance digital engineering studio fusing uncompromising architectural design with resilient full-stack systems. We craft software that commands attention and scales infinitely.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                className="bg-[#FF4500] text-white font-headline text-label-lg uppercase tracking-wider px-6 sm:px-space-xl py-4 border border-[#FF4500] hover:bg-transparent hover:text-[#FF4500] transition-all flex items-center gap-2" 
                href="#contact"
              >
                [START A PROJECT →]
              </a>
              <a 
                className="bg-transparent text-primary font-headline text-label-lg uppercase tracking-wider px-6 sm:px-space-xl py-4 border border-[#343634] hover:border-primary transition-all flex items-center gap-2" 
                href="#work"
              >
                [EXPLORE ARCHIVE]
              </a>
            </div>
          </div>

          {/* Right Side: Architectural Product Composition */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 border-t-2 border-l-2 border-[#FF4500] pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-12 h-12 border-b-2 border-r-2 border-[#FF4500] pointer-events-none" />
            
            <div className="bg-surface-container border border-[#343634] p-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#343634] mb-4">
                <span className="font-headline text-label-sm uppercase text-on-surface-variant">
                  SYS_DIAG_01 // ACTIVE_BUILD
                </span>
                <span className="flex items-center gap-2 font-headline text-label-sm text-[#FF4500]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-ping" />
                  LIVE COMPILE
                </span>
              </div>

              <div className="w-full h-72 bg-surface-container-high border border-[#343634] relative overflow-hidden flex items-center justify-center group">
                <div 
                  className="absolute inset-0 opacity-20" 
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #454843 1px, transparent 1px), linear-gradient(to bottom, #454843 1px, transparent 1px)', 
                    backgroundSize: '16px 16px' 
                  }} 
                />
                <img 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  alt="A sleek technical wireframe diagram of modular microservices architecture" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtw2PfaAoQX-jIfVFBeM6jRDCkp38R0kGFJE2YCuuzCtyjXa9R_kb1lTZRArKz3DkknlyVTzhAnC_p531n9zo9ow_JvbfHReWk2A-NiPQB9wBDSMt8h7ED2UNvE9ww1xeIm32sEuMbdbkwkvOxnWaIxJUeqTeLfW9LQAFmwHTk4epJZpRK9dAyUawNwTP3gE3tlWsBCEb6RkprcvgYjgCSW8lptSIj5WTz1xgVQ3nUHPUD7a92C7HqWA" 
                />
                <div className="absolute bottom-4 left-4 bg-surface/90 border border-[#343634] p-3 backdrop-blur-md">
                  <p className="font-headline text-label-sm text-primary uppercase">v2.4.0-STABLE</p>
                  <p className="font-body text-body-sm text-on-surface-variant">Throughput: 1.2M req/sec</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#343634] text-center">
                <div className="border border-[#343634] p-2">
                  <span className="block font-headline text-label-sm text-on-surface-variant">LATENCY</span>
                  <span className="font-headline text-headline-sm text-primary">12ms</span>
                </div>
                <div className="border border-[#343634] p-2">
                  <span className="block font-headline text-label-sm text-on-surface-variant">UPTIME</span>
                  <span className="font-headline text-headline-sm text-primary">99.99%</span>
                </div>
                <div className="border border-[#343634] p-2">
                  <span className="block font-headline text-label-sm text-on-surface-variant">COVERAGE</span>
                  <span className="font-headline text-headline-sm text-[#FF4500]">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Info Bar */}
        <div className="mt-16 pt-8 border-t border-[#343634] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <span className="block font-headline text-label-sm text-on-surface-variant uppercase">[CLIENT BASE]</span>
            <span className="font-headline text-lg sm:text-headline-md text-primary mt-1 block">Global Scaleups & Enterprises</span>
          </div>
          <div>
            <span className="block font-headline text-label-sm text-on-surface-variant uppercase">[DELIVERY MODEL]</span>
            <span className="font-headline text-lg sm:text-headline-md text-primary mt-1 block">Zero-Compromise Agile</span>
          </div>
          <div>
            <span className="block font-headline text-label-sm text-on-surface-variant uppercase">[STACK ARCHITECTURE]</span>
            <span className="font-headline text-lg sm:text-headline-md text-primary mt-1 block">TypeScript / Rust / Cloud</span>
          </div>
          <div>
            <span className="block font-headline text-label-sm text-on-surface-variant uppercase">[LOCATION]</span>
            <span className="font-headline text-lg sm:text-headline-md text-primary mt-1 block">San Francisco & Remote</span>
          </div>
        </div>
      </div>
    </section>
  );
};
