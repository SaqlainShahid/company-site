import React from 'react';
import { mockManifestoPillars } from '../api/mockData';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="w-full py-24 border-b border-[#343634]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [STUDIO PRINCIPLES / 009]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            SMALL TEAM. SERIOUS ENGINEERING.
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
            THE 6 MANIFESTO PILLARS
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mt-2">
            The operational code by which our studio evaluates every line of code and every pixel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mockManifestoPillars.map((pillar) => (
            <div key={pillar.id} className="border border-[#343634] p-8 bg-surface-container hover:border-outline-variant transition-colors flex flex-col justify-between">
              <div>
                <span className="font-headline text-base sm:text-headline-md text-[#FF4500] block mb-2 font-mono">
                  {pillar.number} / {pillar.title}
                </span>
                <p className="font-body text-body-md text-on-surface-variant leading-relaxed mt-4">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
