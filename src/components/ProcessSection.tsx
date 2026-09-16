import React from 'react';
import { mockProcessPhases } from '../api/mockData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="w-full py-24 border-b border-[#343634] relative scroll-mt-20" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [ENGINEERING PROCESS / 007]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            FROM IDEA TO LAUNCH
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
            THE 5-PHASE METHODOLOGY
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mt-2">
            A predictable, transparent engineering pipeline designed for zero friction.
          </p>
        </div>

        {/* Vertical Timeline with continuous orange line */}
        <div className="relative pl-8 md:pl-16 space-y-16">
          <div className="absolute left-3 md:left-6 top-2 bottom-2 w-0.5 bg-[#FF4500]" />

          {mockProcessPhases.map((phase) => (
            <div key={phase.id} className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 bg-[#171817] border-2 border-[#FF4500] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#FF4500]" />
              </div>
              <span className="font-headline text-label-sm text-[#FF4500] uppercase tracking-widest block mb-1 font-mono">
                {phase.number}
              </span>
              <h3 className="font-headline text-xl sm:text-headline-lg text-primary uppercase mb-2 font-semibold">
                {phase.title}
              </h3>
              <p className="font-body text-base sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
