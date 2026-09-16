import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { useSubmitBriefMutation } from '../hooks/useDataQueries';

export const ContactSection: React.FC = () => {
  const formData = useAppStore((state) => state.formData);
  const setFormField = useAppStore((state) => state.setFormField);
  const lastSubmitted = useAppStore((state) => state.lastSubmittedBrief);

  const mutation = useSubmitBriefMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <section className="w-full py-24 border-b border-[#343634] scroll-mt-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
            [CONTACT / 015]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
          <span className="font-headline text-label-sm text-on-surface-variant tracking-widest">
            PROJECT INQUIRY FORM
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-surface-container border border-[#343634] p-6 sm:p-8 md:p-12">
            <h2 className="font-headline text-2xl sm:text-headline-lg uppercase text-primary mb-2 font-semibold">
              INITIATE BRIEF
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mb-8">
              Provide your project parameters below for a direct review by our managing partners.
            </p>

            {mutation.isSuccess && (
              <div className="mb-6 p-4 bg-[#FF4500]/10 border border-[#FF4500] text-[#FF4500] flex items-start gap-3">
                <span className="material-symbols-outlined text-[24px]">check_circle</span>
                <div>
                  <p className="font-headline text-sm uppercase tracking-wider font-semibold">
                    Brief transmitted successfully.
                  </p>
                  <p className="font-body text-xs text-on-surface-variant mt-1">
                    Thank you, {lastSubmitted?.name || 'Partner'}. Our engineering lead will contact you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {mutation.isError && (
              <div className="mb-6 p-4 bg-error/10 border border-error text-error flex items-start gap-3">
                <span className="material-symbols-outlined text-[24px]">error</span>
                <div>
                  <p className="font-headline text-sm uppercase tracking-wider font-semibold">
                    Transmission Error
                  </p>
                  <p className="font-body text-xs text-on-surface-variant mt-1">
                    {(mutation.error as Error)?.message || 'Something went wrong. Please check your fields.'}
                  </p>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-headline text-label-sm text-on-surface-variant uppercase mb-2">
                    NAME *
                  </label>
                  <input 
                    className="w-full bg-[#131413] border border-[#343634] px-4 py-3 text-primary font-body focus:border-[#FF4500] outline-none transition-colors" 
                    placeholder="Marcus Vance" 
                    required 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormField('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-headline text-label-sm text-on-surface-variant uppercase mb-2">
                    EMAIL *
                  </label>
                  <input 
                    className="w-full bg-[#131413] border border-[#343634] px-4 py-3 text-primary font-body focus:border-[#FF4500] outline-none transition-colors" 
                    placeholder="marcus@company.com" 
                    required 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormField('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-headline text-label-sm text-on-surface-variant uppercase mb-2">
                    COMPANY
                  </label>
                  <input 
                    className="w-full bg-[#131413] border border-[#343634] px-4 py-3 text-primary font-body focus:border-[#FF4500] outline-none transition-colors" 
                    placeholder="Axis Financial" 
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormField('company', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-headline text-label-sm text-on-surface-variant uppercase mb-2">
                    PROJECT TYPE
                  </label>
                  <select 
                    className="w-full bg-[#131413] border border-[#343634] px-4 py-3 text-primary font-body focus:border-[#FF4500] outline-none transition-colors"
                    value={formData.projectType}
                    onChange={(e) => setFormField('projectType', e.target.value)}
                  >
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile Product">Mobile Product</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="AI System Integration">AI System Integration</option>
                    <option value="Full Architectural Overhaul">Full Architectural Overhaul</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-headline text-label-sm text-on-surface-variant uppercase mb-2">
                  BUDGET RANGE
                </label>
                <select 
                  className="w-full bg-[#131413] border border-[#343634] px-4 py-3 text-primary font-body focus:border-[#FF4500] outline-none transition-colors"
                  value={formData.budget}
                  onChange={(e) => setFormField('budget', e.target.value)}
                >
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="$250,000+">$250,000+</option>
                </select>
              </div>

              <div>
                <label className="block font-headline text-label-sm text-on-surface-variant uppercase mb-2">
                  PROJECT DESCRIPTION *
                </label>
                <textarea 
                  className="w-full bg-[#131413] border border-[#343634] px-4 py-3 text-primary font-body focus:border-[#FF4500] outline-none transition-colors" 
                  placeholder="Describe your technical scope, goals, and target launch timeline..." 
                  required 
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormField('description', e.target.value)}
                />
              </div>

              <button 
                className="w-full bg-[#FF4500] text-white font-headline text-label-lg uppercase tracking-wider py-4 border border-[#FF4500] hover:bg-transparent hover:text-[#FF4500] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50" 
                type="submit"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>TRANSMITTING BRIEF...</span>
                  </>
                ) : (
                  <span>[TRANSMIT BRIEF →]</span>
                )}
              </button>
            </form>
          </div>

          {/* Right: Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="border border-[#343634] p-6 sm:p-8 bg-surface-container">
              <span className="font-headline text-label-sm text-[#FF4500] uppercase tracking-widest block mb-4">
                [DIRECT CHANNELS]
              </span>
              <h3 className="font-headline text-xl sm:text-headline-md text-primary uppercase mb-6 font-semibold">
                PREFER DIRECT CONTACT?
              </h3>
              <div className="space-y-6 font-body text-body-md text-on-surface-variant">
                <div className="flex items-center justify-between border-b border-[#343634] pb-4">
                  <span className="font-headline text-sm text-primary">EMAIL</span>
                  <a className="text-[#FF4500] hover:underline" href="mailto:engineer@vectorsandcode.com">
                    engineer@vectorsandcode.com
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-[#343634] pb-4">
                  <span className="font-headline text-sm text-primary">WHATSAPP</span>
                  <a className="text-[#FF4500] hover:underline" href="https://whatsapp.com" target="_blank" rel="noreferrer">
                    +1 (415) 890-2341
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-headline text-sm text-primary">LINKEDIN</span>
                  <a className="text-[#FF4500] hover:underline" href="https://linkedin.com" target="_blank" rel="noreferrer">
                    /company/vectors-code
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-[#343634] p-6 sm:p-8 bg-surface-container">
              <span className="font-headline text-label-sm text-on-surface-variant uppercase tracking-widest block mb-2">
                [STUDIO LOCATION]
              </span>
              <p className="font-headline text-headline-sm text-primary font-medium">
                555 Mission Street, Suite 2400
              </p>
              <p className="font-body text-body-sm text-on-surface-variant mt-1">
                San Francisco, CA 94105
              </p>
              <div className="mt-4 pt-4 border-t border-[#343634] flex items-center justify-between text-label-sm text-on-surface-variant">
                <span>TZ: PST (UTC-8)</span>
                <span className="text-[#FF4500] font-mono">STATUS: ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
