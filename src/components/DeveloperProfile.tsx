import React from 'react';
import { 
  developerVerifiedData, 
  verifiedReviewsList, 
  developerTechCategories, 
  developerSecondaryTech, 
  developerServicesList, 
  verifiedPortfolioList 
} from '../api/mockData';

export const DeveloperProfile: React.FC = () => {
  return (
    <section className="w-full bg-[#171817] text-on-surface border-b border-[#343634] scroll-mt-20" id="developer">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01 — DEVELOPER: HEADER & TECHNICAL PROFILE
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="border-b border-[#343634] py-20 relative overflow-hidden">
        {/* Subtle architectural grid lines */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Overline Technical Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
            <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
              [01 — DEVELOPER PROFILE]
            </span>
            <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
            <span className="font-headline text-label-sm text-on-surface-variant tracking-widest font-mono">
              VERIFIED PRACTITIONER SPECIFICATION
            </span>
          </div>

          {/* Heading & Intro */}
          <div className="mb-14">
            <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-primary leading-none">
              {developerVerifiedData.name}
            </h1>
            <p className="font-headline text-sm sm:text-base uppercase tracking-widest text-[#FF4500] mt-3 font-medium">
              {developerVerifiedData.title}
            </p>
            <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-3xl mt-5 leading-relaxed">
              {developerVerifiedData.intro}
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Portrait Placeholder with Technical Drafting Framing */}
            <div className="lg:col-span-6 border border-[#343634] p-6 bg-surface-container flex flex-col justify-between relative">
              {/* Corner measurement marks */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-outline-variant select-none">+0.00</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-outline-variant select-none">+1.00</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-outline-variant select-none">SCALE: 1:1</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-outline-variant select-none">ID: DEV_01</div>

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#343634] mb-4">
                  <span className="font-headline text-label-sm uppercase text-on-surface-variant font-mono">
                    PORTRAIT_REF // SS_FOUNDER
                  </span>
                  <span className="flex items-center gap-1.5 font-headline text-label-sm text-[#FF4500] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-pulse" />
                    AUTHENTICATED
                  </span>
                </div>

                {/* Technical Framing Canvas */}
                <div className="w-full h-80 sm:h-96 bg-surface-container-high border border-[#343634] relative overflow-hidden flex flex-col items-center justify-center">
                  <div 
                    className="absolute inset-0 opacity-15 pointer-events-none" 
                    style={{ 
                      backgroundImage: 'linear-gradient(to right, #454843 1px, transparent 1px), linear-gradient(to bottom, #454843 1px, transparent 1px)', 
                      backgroundSize: '20px 20px' 
                    }} 
                  />
                  
                  {/* Central Framing Icon & Monogram */}
                  <div className="relative z-10 text-center p-6 border border-[#343634] bg-surface/80 backdrop-blur-sm max-w-xs">
                    <div className="w-16 h-16 border border-[#FF4500] flex items-center justify-center mx-auto mb-3 text-[#FF4500] font-headline text-2xl font-bold">
                      SS
                    </div>
                    <span className="font-headline text-xs tracking-widest text-primary uppercase block">
                      SAQLAIN SHAHID
                    </span>
                    <span className="font-body text-[11px] text-on-surface-variant mt-1 block font-mono">
                      FULL-STACK & MOBILE APP DEVELOPER
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-[#131413]/90 border border-[#343634] px-3 py-1 font-mono text-[10px] text-on-surface-variant">
                    CANVAS: ARCHITECTURAL_MONOCHROME
                  </div>
                </div>
              </div>

              {/* Small Metadata Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-4 border-t border-[#343634]">
                <div>
                  <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">ROLE</span>
                  <span className="font-headline text-xs sm:text-sm text-primary mt-1 block font-medium">
                    {developerVerifiedData.title}
                  </span>
                </div>
                <div>
                  <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">FOCUS</span>
                  <span className="font-headline text-xs sm:text-sm text-primary mt-1 block font-medium">
                    {developerVerifiedData.focus}
                  </span>
                </div>
                <div>
                  <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">LOCATION</span>
                  <span className="font-headline text-xs sm:text-sm text-[#FF4500] mt-1 block font-medium">
                    {developerVerifiedData.location}
                  </span>
                </div>
              </div>

              {/* Work Experience */}
              <div className="mt-4 pt-3 border-t border-[#343634] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-on-surface-variant">
                <span>EXPERIENCE: {developerVerifiedData.experience.company}</span>
                <span className="text-[#FF4500]">{developerVerifiedData.experience.role} ({developerVerifiedData.experience.period})</span>
              </div>
            </div>

            {/* Right: Technical Profile Panel (System Specifications) */}
            <div className="lg:col-span-6 border border-[#343634] p-6 sm:p-8 bg-surface-container flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#343634] mb-6">
                  <span className="font-headline text-label-sm uppercase text-on-surface-variant tracking-wider font-mono">
                    SYS_METRICS // PUBLIC_FIVERR_VERIFICATION
                  </span>
                  <span className="font-headline text-label-sm text-primary uppercase font-mono">
                    JAN 2021 — PRESENT
                  </span>
                </div>

                {/* 6 Metric Specifications */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="border border-[#343634] p-4 bg-surface-container-high">
                    <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">FIVERR TIER</span>
                    <span className="font-headline text-xl sm:text-2xl text-primary font-bold mt-1 block">
                      {developerVerifiedData.level.toUpperCase()}
                    </span>
                    <span className="text-[11px] font-mono text-on-surface-variant mt-1 block">Public verification badge</span>
                  </div>

                  <div className="border border-[#343634] p-4 bg-surface-container-high">
                    <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">RATING</span>
                    <span className="font-headline text-xl sm:text-2xl text-[#FF4500] font-bold mt-1 block">
                      5.0 / 5.0
                    </span>
                    <span className="text-[11px] font-mono text-on-surface-variant mt-1 block">100% 5-Star score</span>
                  </div>

                  <div className="border border-[#343634] p-4 bg-surface-container-high">
                    <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">CLIENT REVIEWS</span>
                    <span className="font-headline text-xl sm:text-2xl text-primary font-bold mt-1 block">
                      7 REVIEWS
                    </span>
                    <span className="text-[11px] font-mono text-on-surface-variant mt-1 block">Zero negative feedback</span>
                  </div>

                  <div className="border border-[#343634] p-4 bg-surface-container-high">
                    <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">RESPONSE TIME</span>
                    <span className="font-headline text-xl sm:text-2xl text-primary font-bold mt-1 block">
                      ~2 HOURS
                    </span>
                    <span className="text-[11px] font-mono text-on-surface-variant mt-1 block">Direct communication</span>
                  </div>

                  <div className="border border-[#343634] p-4 bg-surface-container-high">
                    <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">HOURLY RATE</span>
                    <span className="font-headline text-xl sm:text-2xl text-[#FF4500] font-bold mt-1 block">
                      $20 / HR
                    </span>
                    <span className="text-[11px] font-mono text-on-surface-variant mt-1 block">Public baseline rate</span>
                  </div>

                  <div className="border border-[#343634] p-4 bg-surface-container-high">
                    <span className="block font-headline text-label-sm text-on-surface-variant uppercase font-mono">MEMBER SINCE</span>
                    <span className="font-headline text-xl sm:text-2xl text-primary font-bold mt-1 block">
                      2021
                    </span>
                    <span className="text-[11px] font-mono text-on-surface-variant mt-1 block">Since January 2021</span>
                  </div>
                </div>
              </div>

              {/* Primary Service Spec */}
              <div className="mt-6 pt-6 border-t border-[#343634]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-headline text-label-sm text-on-surface-variant uppercase font-mono block">
                      PRIMARY SERVICE GIG
                    </span>
                    <span className="font-headline text-sm sm:text-base text-primary font-semibold">
                      {developerVerifiedData.primaryGig.title}
                    </span>
                    <span className="font-mono text-xs text-[#FF4500] block mt-0.5">
                      Rating: {developerVerifiedData.primaryGig.rating} · Starting at {developerVerifiedData.primaryGig.startingPrice}
                    </span>
                  </div>
                  <a 
                    href={developerVerifiedData.fiverrUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-[#FF4500] text-white font-headline text-xs uppercase tracking-wider px-4 py-2.5 border border-[#FF4500] hover:bg-transparent hover:text-[#FF4500] transition-all flex items-center justify-center gap-1.5 w-fit shrink-0"
                  >
                    <span>VIEW FIVERR PROFILE →</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TECHNOLOGY STACK INDEX (TOOLS I WORK WITH)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="border-b border-[#343634] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
            <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
              [TECH STACK INDEX]
            </span>
            <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
            <span className="font-headline text-label-sm text-on-surface-variant tracking-widest font-mono">
              TOOLS I WORK WITH
            </span>
          </div>

          <div className="mb-12">
            <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
              TECHNOLOGY ECOSYSTEM
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Organized technical discipline across frontend, mobile, backend, database architectures, and artificial intelligence APIs.
            </p>
          </div>

          {/* Dense 6-column editorial grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-[#343634]">
            {developerTechCategories.map((group) => (
              <div 
                key={group.category} 
                className="border-r border-b border-[#343634] p-5 bg-surface-container/50 hover:bg-surface-container transition-colors"
              >
                <span className="font-headline text-label-sm text-[#FF4500] block mb-3 font-mono">
                  {group.number} / {group.category}
                </span>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="font-body text-sm text-primary flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-on-surface-variant shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Secondary Associated Capabilities: ASP.NET & Blazor */}
          <div className="mt-8 border border-[#343634] p-6 bg-surface-container-low">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#343634] mb-3 gap-2">
              <span className="font-headline text-label-sm text-on-surface-variant uppercase font-mono">
                ADDITIONAL CAPABILITIES // ASP.NET & BLAZOR ECOSYSTEM
              </span>
              <span className="font-mono text-xs text-on-surface-variant">
                Starting at $80
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {developerSecondaryTech.map((tech) => (
                <span 
                  key={tech} 
                  className="font-headline text-label-sm border border-[#343634] px-2.5 py-1 text-on-surface-variant hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02 — CLIENT PROOF: 7 VERIFIED CLIENT REVIEWS (5.0 / 5.0)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="border-b border-[#111111] py-20 bg-[#FAF9F5] text-[#131413]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
            <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#111111]/20 px-2 py-0.5 w-fit">
              [02 — CLIENT PROOF]
            </span>
            <div className="hidden sm:block h-[1px] flex-1 bg-[#111111]/20" />
            <span className="font-headline text-label-sm text-[#131413]/60 tracking-widest font-mono">
              VERIFIED CLIENT SOCIAL PROOF
            </span>
          </div>

          {/* Large Headline & Rating Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 pb-8 border-b border-[#111111]/20">
            <div className="lg:col-span-8">
              <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#131413] leading-none">
                7 CLIENT REVIEWS. 5.0 / 5.0.
              </h2>
              <p className="font-body text-base sm:text-lg text-[#131413]/70 mt-3 max-w-xl leading-relaxed">
                Archived feedback from clients across web, mobile, and cross-platform application deliveries.
              </p>
            </div>

            <div className="lg:col-span-4 border border-[#111111] p-5 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-headline text-4xl sm:text-5xl font-bold text-[#FF4500] block">5.0</span>
                  <span className="font-mono text-xs text-[#131413]/60 uppercase">OUT OF 5.0 RATING</span>
                </div>
                <div className="text-right font-mono text-xs text-[#131413]/70 space-y-0.5">
                  <p className="font-semibold text-[#131413]">100% 5-Star Reviews</p>
                  <p>7 Total Deliveries</p>
                  <p className="text-[#FF4500]">0 Negative Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Numbered Testimonials Grid with Thin Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedReviewsList.map((rev) => (
              <div 
                key={rev.id} 
                className="border border-[#111111] p-6 bg-white flex flex-col justify-between shadow-sm hover:border-[#FF4500] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#111111]/10 mb-4 font-mono text-xs text-[#131413]/60">
                    <span className="font-bold text-[#FF4500]">REVIEW // {rev.number}</span>
                    <span>5.0 ★★★★★</span>
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#131413] italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#111111]/10 flex items-center justify-between">
                  <span className="font-headline text-[11px] uppercase tracking-wider text-[#131413]/70 font-mono">
                    {rev.highlight}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#FF4500]">[VERIFIED]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          03 — WHAT I BUILD: 6 DISCIPLINE ROWS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="border-b border-[#343634] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
            <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
              [03 — WHAT I BUILD]
            </span>
            <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
            <span className="font-headline text-label-sm text-on-surface-variant tracking-widest font-mono">
              ENGINEERING DISCIPLINES
            </span>
          </div>

          <div className="mb-14">
            <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
              SERVICES & CAPABILITIES
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Focused, technical implementation across modern client and server architectures.
            </p>
          </div>

          {/* 6 Structured Service Rows */}
          <div className="flex flex-col border-t border-[#343634]">
            {developerServicesList.map((svc) => (
              <div 
                key={svc.number} 
                className="group py-6 border-b border-[#343634] grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-surface-container transition-colors px-4"
              >
                <div className="md:col-span-1 font-headline text-xl text-on-surface-variant group-hover:text-[#FF4500] font-mono transition-colors">
                  {svc.number}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-headline text-lg sm:text-xl text-primary font-semibold uppercase group-hover:translate-x-1 transition-transform">
                    {svc.title}
                  </h3>
                </div>
                <div className="md:col-span-6 font-body text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                  {svc.description}
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#FF4500] transition-colors">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              PUBLIC WORK PROFILE / FIVERR PROOF CARD
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="mt-14 border border-[#343634] p-6 sm:p-8 bg-surface-container">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase font-mono block mb-1">
                  PUBLIC WORK PROFILE
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl text-primary font-bold uppercase">
                  FIVERR / {developerVerifiedData.fiverrUsername}
                </h3>
                <div className="flex flex-wrap gap-4 mt-3 font-mono text-xs sm:text-sm text-on-surface-variant">
                  <span>Level: <strong className="text-primary">{developerVerifiedData.level}</strong></span>
                  <span>Rating: <strong className="text-[#FF4500]">5.0 / 5.0</strong></span>
                  <span>Reviews: <strong className="text-primary">7 Reviews</strong></span>
                  <span>Rate: <strong className="text-primary">{developerVerifiedData.hourlyRate}</strong></span>
                  <span>Response: <strong className="text-primary">{developerVerifiedData.averageResponse}</strong></span>
                </div>
              </div>

              <a 
                href={developerVerifiedData.fiverrUrl} 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#FF4500] text-white font-headline text-label-lg uppercase tracking-wider px-6 py-4 border border-[#FF4500] hover:bg-transparent hover:text-[#FF4500] transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>VIEW FIVERR PROFILE →</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04 — SELECTED WORK: REAL PORTFOLIO CATEGORIES
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="border-b border-[#343634] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-space-lg">
            <span className="font-headline text-label-sm text-[#FF4500] tracking-widest uppercase border border-[#FF4500]/40 px-2 py-0.5 w-fit">
              [04 — SELECTED WORK]
            </span>
            <div className="hidden sm:block h-[1px] flex-1 bg-[#343634]" />
            <span className="font-headline text-label-sm text-on-surface-variant tracking-widest font-mono">
              PUBLIC PORTFOLIO REFERENCES
            </span>
          </div>

          <div className="mb-14">
            <h2 className="font-headline text-2xl sm:text-headline-lg uppercase tracking-tight text-primary font-semibold">
              PROJECT REFERENCES
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Representative public portfolio work categories developed for clients across web, mobile, and custom interfaces.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedPortfolioList.map((item, idx) => (
              <div 
                key={item.id} 
                className="border border-[#343634] bg-surface-container flex flex-col justify-between hover:border-outline-variant transition-colors"
              >
                <div>
                  {/* Visual Placeholder Area with Blueprint Lines */}
                  <div className="w-full h-48 bg-surface-container-high border-b border-[#343634] relative overflow-hidden flex items-center justify-center">
                    <div 
                      className="absolute inset-0 opacity-15" 
                      style={{ 
                        backgroundImage: 'linear-gradient(to right, #454843 1px, transparent 1px), linear-gradient(to bottom, #454843 1px, transparent 1px)', 
                        backgroundSize: '16px 16px' 
                      }} 
                    />
                    <div className="text-center p-4 relative z-10">
                      <span className="material-symbols-outlined text-[#FF4500] text-3xl mb-1 block">
                        layers
                      </span>
                      <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest block">
                        PROJECT REF // 0{idx + 1}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 bg-[#131413]/90 border border-[#343634] px-2 py-0.5 font-mono text-[10px] text-[#FF4500]">
                      {item.status}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <span className="font-headline text-label-sm text-on-surface-variant uppercase font-mono block mb-1">
                      CATEGORY: {item.category}
                    </span>
                    <h3 className="font-headline text-lg text-primary font-bold uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#343634]">
                    <span className="font-mono text-[11px] text-on-surface-variant block uppercase">
                      TECHNOLOGY:
                    </span>
                    <span className="font-headline text-xs text-primary font-medium mt-0.5 block">
                      {item.technology}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PERSONAL POSITIONING: CLOSING STATEMENT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="py-20 bg-[#131413]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="border border-[#343634] p-8 sm:p-12 bg-surface-container relative">
            <span className="font-headline text-label-sm text-[#FF4500] uppercase tracking-widest font-mono block mb-3">
              [POSITIONING STATEMENT]
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary leading-tight max-w-4xl">
              I BUILD DIGITAL PRODUCTS FROM INTERFACE TO BACKEND.
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-5 max-w-3xl leading-relaxed">
              From responsive web applications and cross-platform mobile apps to APIs, databases and AI integrations — I work across the product stack to turn ideas into working software.
            </p>
            <div className="mt-8 pt-6 border-t border-[#343634] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-on-surface-variant">
                SAQLAIN SHAHID · FULL-STACK & MOBILE APP DEVELOPER
              </span>
              <a 
                href="#contact" 
                className="bg-[#FF4500] text-white font-headline text-label-lg uppercase tracking-wider px-6 py-3 border border-[#FF4500] hover:bg-transparent hover:text-[#FF4500] transition-all"
              >
                [START A CONVERSATION →]
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
