import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#FAF9F5] text-[#131413] border-b border-[#111111] scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#111111]/20 px-2 py-0.5 w-fit">
            [THE STUDIO / 010]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#111111]/20" />
          <span className="font-headline text-label-sm text-[#131413]/60 tracking-widest">
            ORIGIN & TEAM
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-headline-xl uppercase tracking-tight leading-tight font-bold">
              WE BUILD. WE LEARN. WE SHIP.
            </h2>
            <p className="font-body text-body-lg text-[#131413]/80 mt-6 leading-relaxed">
              Founded by veteran systems architects and design directors, Vectors & Code operates as an elite strike team for ambitious companies. We reject agency bloat in favor of senior-only talent that embeds directly into your product lifecycle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="border border-[#111111] p-4 bg-white shadow-sm flex-1 min-w-[140px]">
                <span className="font-headline text-2xl sm:text-headline-md text-[#131413] block font-bold">100%</span>
                <span className="font-headline text-label-sm text-[#131413]/60 uppercase">Senior Engineers</span>
              </div>
              <div className="border border-[#111111] p-4 bg-white shadow-sm flex-1 min-w-[140px]">
                <span className="font-headline text-2xl sm:text-headline-md text-[#FF4500] block font-bold">0%</span>
                <span className="font-headline text-label-sm text-[#131413]/60 uppercase">Outsourced Code</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 border border-[#111111] p-6 bg-white relative shadow-sm">
            <div className="w-full h-72 sm:h-80 bg-[#131413] relative overflow-hidden flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAB6SvPmz4gbMBxaSbi7iwKsV1CEeu31G8VAN-c6K4rGnmTwRXGJ8nFsGqgiZ9Xt8Qarr98m1hBTVHr31QCRUABV3wlupuVAf7ClUJRCvrUuy6WDCXv6AMtF4ICBAvwWXzr7Qv3JH6naRxFWQUuH8IPyBeguGTiT_Yyj3PHv6QdSscsM59ok_-72AWWIwJG1N2mOGV-9wNFGFswGczzzyUuLY30AF2pvWQMsvCXFdErMsZzpHWGWIH2eA')" 
                }} 
              />
              <div className="absolute bottom-4 left-4 bg-white/90 border border-[#111111] px-3 py-1">
                <span className="font-headline text-label-sm text-[#131413] font-medium">
                  STUDIO HQ // SAN FRANCISCO, CA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
