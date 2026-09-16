import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#FAF9F5] text-[#131413] border-b border-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#111111]/20 px-2 py-0.5 w-fit">
            [STUDIO / 002]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#111111]/20" />
          <span className="font-headline text-label-sm text-[#131413]/60 tracking-widest">
            PHILOSOPHY & SPECIFICATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-headline-xl uppercase tracking-tight leading-tight font-bold">
              WE TURN COMPLEX IDEAS INTO SIMPLE DIGITAL EXPERIENCES.
            </h2>
            <p className="font-body text-body-lg text-[#131413]/80 mt-6 max-w-2xl leading-relaxed">
              In an era of bloated software and rushed iterations, Vectors & Code stands for structural integrity. We treat digital products like architectural masterworks—built on rigorous research, reinforced by resilient code, and finished with absolute aesthetic precision.
            </p>
          </div>

          <div className="lg:col-span-4 border border-[#111111] p-6 bg-white shadow-sm">
            <span className="font-headline text-label-sm uppercase tracking-widest text-[#FF4500] block mb-4">
              [SYSTEM LIFECYCLE]
            </span>
            <ul className="space-y-4 font-headline text-base sm:text-headline-sm">
              <li className="flex items-center justify-between pb-3 border-b border-[#111111]/10">
                <span>01. DISCOVERY</span>
                <span className="text-xs text-[#131413]/60 font-body">Audit & Blueprint</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-[#111111]/10">
                <span>02. DESIGN</span>
                <span className="text-xs text-[#131413]/60 font-body">UI / UX Systems</span>
              </li>
              <li className="flex items-center justify-between pb-3 border-b border-[#111111]/10">
                <span>03. ENGINEERING</span>
                <span className="text-xs text-[#131413]/60 font-body">Full-Stack Code</span>
              </li>
              <li className="flex items-center justify-between">
                <span>04. LAUNCH</span>
                <span className="text-xs text-[#131413]/60 font-body">Deploy & Scale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
