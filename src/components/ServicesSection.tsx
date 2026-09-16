import React from 'react';
import { useCapabilitiesQuery } from '../hooks/useDataQueries';

export const ServicesSection: React.FC = () => {
  const { data: capabilities, isLoading, isError } = useCapabilitiesQuery();

  return (
    <section className="w-full py-24 border-b border-[#343634] scroll-mt-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [CAPABILITIES / 003]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            WHAT WE ENGINEER
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
            CORE ENGINEERING CAPABILITIES
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mt-2">
            Specialized technical disciplines tailored for market-leading digital products.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-2 border-[#FF4500] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="text-center text-error py-4">Failed to load capabilities.</div>
        ) : (
          <div className="flex flex-col border-t border-[#343634]">
            {capabilities?.map((cap) => (
              <div 
                key={cap.id} 
                className="group py-8 border-b border-[#343634] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center hover:bg-surface-container transition-colors px-4 cursor-pointer"
              >
                <div className="md:col-span-1 font-headline text-2xl md:text-headline-md text-on-surface-variant group-hover:text-[#FF4500] transition-colors">
                  {cap.number}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-headline text-xl md:text-headline-md text-primary group-hover:translate-x-2 transition-transform font-semibold">
                    {cap.title}
                  </h3>
                  <span className="font-headline text-label-sm text-on-surface-variant mt-1 block">
                    {cap.subtitle}
                  </span>
                </div>
                <div className="md:col-span-5 font-body text-body-md text-on-surface-variant leading-relaxed">
                  {cap.description}
                </div>
                <div className="md:col-span-2 flex justify-start md:justify-end pt-2 md:pt-0">
                  <span className="material-symbols-outlined text-primary group-hover:text-[#FF4500] group-hover:translate-x-2 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
