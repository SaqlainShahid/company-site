import React from 'react';
import { mockIndustriesList } from '../api/mockData';

export const IndustriesSection: React.FC = () => {
  return (
    <section className="w-full py-24 border-b border-[#343634] scroll-mt-20" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [APPLICATIONS / 006]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            BUILT FOR REAL BUSINESS PROBLEMS
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
            INDUSTRY EXPERTISE
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mt-2">
            Domain-specific engineering tailored to strict regulatory and performance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockIndustriesList.map((ind) => (
            <div 
              key={ind.id} 
              className="border border-[#343634] p-8 bg-surface-container hover:border-[#FF4500] transition-colors group"
            >
              <span className="font-headline text-label-sm text-[#FF4500] block mb-4 font-mono">
                [{ind.number} / VERTICAL]
              </span>
              <h3 className="font-headline text-lg sm:text-headline-md text-primary uppercase mb-2 group-hover:text-[#FF4500] transition-colors font-semibold">
                {ind.title}
              </h3>
              <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
