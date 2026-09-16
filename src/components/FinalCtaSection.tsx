import React from 'react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#FAF9F5] text-[#131413] border-b border-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#111111]/20 px-2 py-0.5 w-fit">
            [PROJECT INTAKE / 014]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#111111]/20" />
          <span className="font-headline text-label-sm text-[#131413]/60 tracking-widest">
            INTAKE STATUS: OPEN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-headline-xl uppercase tracking-tight leading-tight font-bold">
              LET'S BUILD SOMETHING WORTH SHIPPING.
            </h2>
            <p className="font-body text-body-lg text-[#131413]/80 mt-6 max-w-xl leading-relaxed">
              Our Q2 engineering calendar is currently accepting new architectural briefs. Secure your slot for a dedicated senior engineering sprint.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <a 
              className="bg-[#FF4500] text-white font-headline text-label-lg uppercase tracking-wider px-6 sm:px-space-xl py-5 border border-[#FF4500] hover:bg-transparent hover:text-[#FF4500] transition-all text-center" 
              href="#contact"
            >
              [START YOUR PROJECT →]
            </a>

            <div className="border border-[#111111] p-4 bg-white flex items-center justify-between shadow-sm">
              <span className="font-headline text-label-sm text-[#131413]/60 uppercase">
                CURRENT QUEUE
              </span>
              <span className="font-headline text-label-sm text-[#FF4500] flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
                2 SLOTS REMAINING
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
