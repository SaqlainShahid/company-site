import React from 'react';
import { useProjectsArchiveQuery } from '../hooks/useDataQueries';

export const SelectedWork: React.FC = () => {
  const { data: projects, isLoading, isError } = useProjectsArchiveQuery();

  return (
    <section className="w-full py-24 border-b border-[#343634] scroll-mt-20" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [PROJECT ARCHIVE / 004]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            SELECTED BUILDS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
              FEATURED ARCHIVE
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mt-2">
              Production-grade applications engineered for high-growth enterprises.
            </p>
          </div>
          <div>
            <span className="font-headline text-label-sm text-on-surface-variant uppercase">
              [SHOWING 4 OF 28 BUILDS]
            </span>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-2 border-[#FF4500] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="text-center text-error py-4">Failed to load projects archive.</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {projects?.map((project) => (
              <div 
                key={project.id} 
                className={`${
                  project.isLarge ? 'lg:col-span-8' : 'lg:col-span-4'
                } bg-surface-container border border-[#343634] group flex flex-col justify-between hover:border-outline-variant transition-colors`}
              >
                <div>
                  <div className="w-full h-80 sm:h-96 relative overflow-hidden bg-surface-container-high border-b border-[#343634]">
                    <div 
                      className="absolute inset-0 opacity-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                      style={{ backgroundImage: `url('${project.imageUrl}')` }}
                    />
                    <div className="absolute top-4 left-4 bg-surface/90 border border-[#343634] px-3 py-1 backdrop-blur-md">
                      <span className="font-headline text-label-sm text-[#FF4500]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-headline text-lg sm:text-headline-md lg:text-headline-lg text-primary uppercase font-semibold">
                        {project.title}
                      </h3>
                      <span className="font-headline text-label-sm text-on-surface-variant font-mono">
                        {project.status}
                      </span>
                    </div>
                    <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <div className="flex flex-wrap items-center justify-between pt-6 border-t border-[#343634] gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="font-headline text-label-sm border border-[#343634] px-2 py-1 text-on-surface-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      className="font-headline text-label-lg uppercase tracking-wider text-[#FF4500] flex items-center gap-1 group-hover:translate-x-1 transition-transform" 
                      href={project.link}
                    >
                      {project.isLarge ? 'VIEW CASE STUDY →' : 'VIEW →'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
