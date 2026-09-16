import React from 'react';
import { useFaqsQuery } from '../hooks/useDataQueries';
import { useAppStore } from '../store/useAppStore';

export const FaqSection: React.FC = () => {
  const { data: faqs, isLoading, isError } = useFaqsQuery();
  const expandedFaqId = useAppStore((state) => state.expandedFaqId);
  const toggleFaq = useAppStore((state) => state.toggleFaq);

  return (
    <section className="w-full py-24 border-b border-[#343634] scroll-mt-20" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [QUESTIONS / 013]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            BEFORE WE BUILD
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mt-2">
            Clear answers regarding our engagement model, pricing, and timelines.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-2 border-[#FF4500] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="text-center text-error py-4">Failed to load FAQs.</div>
        ) : (
          <div className="flex flex-col border-t border-[#343634]">
            {faqs?.map((faq) => {
              const isOpen = expandedFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  onClick={() => toggleFaq(faq.id)}
                  className="py-6 border-b border-[#343634] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start hover:bg-surface-container/50 px-2 sm:px-4 transition-colors cursor-pointer"
                >
                  <div className="md:col-span-1 font-headline text-lg sm:text-headline-sm text-[#FF4500] font-mono">
                    {faq.number}
                  </div>
                  <div className="md:col-span-5 font-headline text-lg sm:text-headline-md text-primary font-semibold flex items-center justify-between pr-4">
                    <span>{faq.question}</span>
                    <span className={`material-symbols-outlined text-on-surface-variant md:hidden transition-transform ${isOpen ? 'rotate-180 text-[#FF4500]' : ''}`}>
                      expand_more
                    </span>
                  </div>
                  <div className={`md:col-span-6 font-body text-body-md text-on-surface-variant leading-relaxed ${isOpen ? 'block' : 'hidden md:block'}`}>
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
