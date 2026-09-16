import React from 'react';
import { useTestimonialsQuery } from '../hooks/useDataQueries';

export const TestimonialsSection: React.FC = () => {
  const { data: testimonials, isLoading, isError } = useTestimonialsQuery();

  return (
    <section className="w-full py-24 border-b border-[#343634]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [CLIENT NOTES / 012]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            WHAT CLIENTS SAY
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
            TESTIMONIAL ARCHIVE
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mt-2">
            Unfiltered feedback from founders and engineering VPs.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-2 border-[#FF4500] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="text-center text-error py-4">Failed to load testimonials.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials?.map((t) => (
              <div 
                key={t.id} 
                className="border border-[#343634] p-8 bg-surface-container flex flex-col justify-between hover:border-outline-variant transition-colors"
              >
                <p className="font-body text-body-lg text-on-surface mb-6 leading-relaxed">
                  {t.quote}
                </p>
                <div className="border-t border-[#343634] pt-4">
                  <span className="font-headline text-headline-sm text-primary block font-medium">
                    {t.author}
                  </span>
                  <span className="font-headline text-label-sm text-[#FF4500] uppercase font-mono">
                    {t.role}
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
