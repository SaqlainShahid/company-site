import React from 'react';

export const StudioDataSection: React.FC = () => {
  return (
    <section className="w-full py-24 border-b border-[#343634]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [STUDIO DATA / 011]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            METRICS & CAPABILITIES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-[#343634] p-8 bg-surface-container hover:border-outline-variant transition-colors">
            <span className="font-headline text-label-sm text-on-surface-variant uppercase block mb-2 font-mono">
              [PROJECTS DELIVERED]
            </span>
            <span className="font-headline text-4xl sm:text-headline-xl text-primary font-bold">
              45+
            </span>
            <span className="font-body text-body-sm text-on-surface-variant mt-2 block">
              Production-grade builds shipped globally.
            </span>
          </div>

          <div className="border border-[#343634] p-8 bg-surface-container hover:border-outline-variant transition-colors">
            <span className="font-headline text-label-sm text-on-surface-variant uppercase block mb-2 font-mono">
              [GLOBAL CLIENTS]
            </span>
            <span className="font-headline text-4xl sm:text-headline-xl text-primary font-bold">
              12
            </span>
            <span className="font-body text-body-sm text-on-surface-variant mt-2 block">
              Countries across North America & EU.
            </span>
          </div>

          <div className="border border-[#343634] p-8 bg-surface-container hover:border-outline-variant transition-colors">
            <span className="font-headline text-label-sm text-on-surface-variant uppercase block mb-2 font-mono">
              [FULL-STACK CAPABILITY]
            </span>
            <span className="font-headline text-4xl sm:text-headline-xl text-[#FF4500] font-bold">
              100%
            </span>
            <span className="font-body text-body-sm text-on-surface-variant mt-2 block">
              From UI tokens to database clusters.
            </span>
          </div>

          <div className="border border-[#343634] p-8 bg-surface-container hover:border-outline-variant transition-colors">
            <span className="font-headline text-label-sm text-on-surface-variant uppercase block mb-2 font-mono">
              [END-TO-END DELIVERY]
            </span>
            <span className="font-headline text-4xl sm:text-headline-xl text-primary font-bold">
              14w
            </span>
            <span className="font-body text-body-sm text-on-surface-variant mt-2 block">
              Average time from kickoff to launch.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
