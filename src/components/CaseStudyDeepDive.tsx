import React from 'react';

export const CaseStudyDeepDive: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#FAF9F5] text-[#131413] border-b border-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
          <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#111111]/20 px-2 py-0.5 w-fit">
            [CASE STUDY / 005]
          </span>
          <div className="hidden sm:block h-[1px] flex-1 bg-[#111111]/20" />
          <span className="font-headline text-label-sm text-[#131413]/60 tracking-widest">
            DEEP DIVE: AXIS LIQUIDITY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="font-headline text-label-sm text-[#FF4500] uppercase tracking-widest block mb-2">
              [FEATURED CASE STUDY]
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-headline-xl uppercase tracking-tight leading-tight font-bold">
              SCALING TO 1M+ REQUESTS PER SECOND.
            </h2>
            <p className="font-body text-body-lg text-[#131413]/80 mt-6 leading-relaxed">
              When Axis Liquidity needed a complete infrastructure overhaul to support explosive institutional trading volume, they turned to Vectors & Code to architect a bulletproof real-time engine.
            </p>
          </div>

          <div className="lg:col-span-6 border border-[#111111] p-6 bg-white shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-b border-r border-[#111111]/10 pb-4 pr-4">
                <span className="font-headline text-label-sm text-[#131413]/60 block">[CLIENT]</span>
                <span className="font-headline text-headline-sm text-[#131413] font-semibold">Axis Financial Group</span>
              </div>
              <div className="border-b border-[#111111]/10 pb-4">
                <span className="font-headline text-label-sm text-[#131413]/60 block">[TIMELINE]</span>
                <span className="font-headline text-headline-sm text-[#131413] font-semibold">14 Weeks</span>
              </div>
              <div className="border-r border-[#111111]/10 pt-4 pr-4">
                <span className="font-headline text-label-sm text-[#131413]/60 block">[STACK]</span>
                <span className="font-headline text-headline-sm text-[#131413] font-semibold">Rust, Next.js, AWS</span>
              </div>
              <div className="pt-4">
                <span className="font-headline text-label-sm text-[#131413]/60 block">[OUTCOME]</span>
                <span className="font-headline text-headline-sm text-[#FF4500] font-semibold">+340% Throughput</span>
              </div>
            </div>
          </div>
        </div>

        {/* Immersive Product Screenshot Mock */}
        <div className="w-full h-80 sm:h-[450px] lg:h-[500px] bg-[#131413] border border-[#111111] relative overflow-hidden mb-16">
          <div 
            className="absolute inset-0 opacity-65 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxs82OX2SQnijllsn5Dk-wtjqqy7vE3BL9bzOUV3pGt_5fwnYu2iqv578y5AwT1xef6jM3kIYyx7Ws30LtZ1BPgR4fLhDRqR9XodkxjRs6aeKseBXxqRtN5mvCd-wPWylye4rVvQj9ALyLMY39HW_48KGa7Htc-_CJUmJ2wY1P3-P8qci8gXNvQE0641S36pwCuyAi_RH5iHowsRebnzx1dcNk7Vx7194fAXeFqPAFF038CgELqQXGVg')" 
            }} 
          />
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 border border-[#111111] px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md">
            <span className="font-headline text-label-sm text-[#131413] font-medium">
              SYSTEM ARCHITECTURE OVERVIEW // AXIS PROTOCOL
            </span>
          </div>
        </div>

        {/* 4 Pillars Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border-t border-[#111111] pt-6">
            <span className="font-headline text-label-sm text-[#FF4500] block mb-2 font-mono">
              01 / THE PROBLEM
            </span>
            <h3 className="font-headline text-lg sm:text-headline-md text-[#131413] mb-2 font-semibold">
              Legacy Bottlenecks
            </h3>
            <p className="font-body text-body-md text-[#131413]/70 leading-relaxed">
              Existing monolith infrastructure suffered frequent websocket drops and high latency spikes during peak market volatility.
            </p>
          </div>

          <div className="border-t border-[#111111] pt-6">
            <span className="font-headline text-label-sm text-[#FF4500] block mb-2 font-mono">
              02 / THE APPROACH
            </span>
            <h3 className="font-headline text-lg sm:text-headline-md text-[#131413] mb-2 font-semibold">
              Micro-Services & Rust
            </h3>
            <p className="font-body text-body-md text-[#131413]/70 leading-relaxed">
              Migrated core matching engine to high-performance Rust microservices coupled with a zero-allocation state machine.
            </p>
          </div>

          <div className="border-t border-[#111111] pt-6">
            <span className="font-headline text-label-sm text-[#FF4500] block mb-2 font-mono">
              03 / THE SYSTEM
            </span>
            <h3 className="font-headline text-lg sm:text-headline-md text-[#131413] mb-2 font-semibold">
              Resilient Pipelines
            </h3>
            <p className="font-body text-body-md text-[#131413]/70 leading-relaxed">
              Deployed multi-region active-active clusters with automated failover and real-time telemetry dashboards.
            </p>
          </div>

          <div className="border-t border-[#111111] pt-6">
            <span className="font-headline text-label-sm text-[#FF4500] block mb-2 font-mono">
              04 / THE RESULT
            </span>
            <h3 className="font-headline text-lg sm:text-headline-md text-[#131413] mb-2 font-semibold">
              Zero Downtime
            </h3>
            <p className="font-body text-body-md text-[#131413]/70 leading-relaxed">
              Achieved 99.999% uptime with median response times dropping from 85ms to 12ms globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
