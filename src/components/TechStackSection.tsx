import React from 'react';
import { mockTechCategories } from '../api/mockData';

export const TechStackSection: React.FC = () => {
  return (
    <section className="w-full py-24 border-b border-[#343634]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [TECHNOLOGY INDEX / 008]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            THE TOOLS BEHIND THE WORK
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
            TECH STACK SPECIFICATION
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mt-2">
            Tested, battle-hardened frameworks and languages chosen for maximum velocity and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mockTechCategories.map((cat) => (
            <div key={cat.id} className="bg-surface-container border border-[#343634] p-6 hover:border-outline-variant transition-colors">
              <span className="font-headline text-label-sm text-[#FF4500] block mb-4 uppercase font-mono">
                [{cat.number} / {cat.name}]
              </span>
              <ul className="space-y-3 font-body text-body-md text-on-surface-variant">
                {cat.items.map((item, idx) => {
                  const isLast = idx === cat.items.length - 1;
                  return (
                    <li 
                      key={item.name} 
                      className={`flex items-center justify-between ${
                        !isLast ? 'border-b border-[#343634] pb-2' : ''
                      } ${item.isPrimary ? 'text-primary font-headline' : ''}`}
                    >
                      <span>{item.name}</span>
                      <span className={`text-xs ${item.isPrimary ? 'text-[#FF4500]' : 'text-on-surface-variant'}`}>
                        {item.tag}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
