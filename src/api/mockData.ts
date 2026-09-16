import type { 
  Capability, 
  ProjectArchive, 
  IndustryVertical, 
  ProcessPhase, 
  TechStackCategory, 
  ManifestoPillar, 
  TestimonialNote, 
  FaqEntry,
  RealClientReview,
  RealPortfolioItem
} from '../types';

export const mockCapabilities: Capability[] = [
  {
    id: 'web-apps',
    number: '01',
    title: 'Web Applications',
    subtitle: 'HIGH-PERFORMANCE FRONTENDS',
    description: 'Next-generation web platforms built with React, Next.js, and WebAssembly for instantaneous load times and fluid interactions.'
  },
  {
    id: 'mobile-products',
    number: '02',
    title: 'Mobile Products',
    subtitle: 'NATIVE & CROSS-PLATFORM',
    description: 'Immersive iOS and Android applications crafted with Swift, Kotlin, and React Native, optimized for 120Hz motion.'
  },
  {
    id: 'saas-platforms',
    number: '03',
    title: 'SaaS Platforms',
    subtitle: 'SCALABLE MULTI-TENANT SYSTEMS',
    description: 'Robust enterprise SaaS architectures complete with billing infrastructure, role-based access control, and telemetry dashboards.'
  },
  {
    id: 'ai-systems',
    number: '04',
    title: 'AI Systems',
    subtitle: 'LLM INTEGRATION & RAG PIPELINES',
    description: 'Custom artificial intelligence integrations, vector database setups, and intelligent workflow automation agents.'
  },
  {
    id: 'digital-experiences',
    number: '05',
    title: 'Digital Experiences',
    subtitle: 'WEBGL & IMMERSIVE BRANDING',
    description: 'Award-winning interactive websites powered by Three.js, GSAP motion design, and high-impact visual storytelling.'
  },
  {
    id: 'backend-api',
    number: '06',
    title: 'Backend & API Systems',
    subtitle: 'HIGH-THROUGHPUT MICROSERVICES',
    description: 'Distributed backend architectures engineered in Node.js, Go, and Rust with GraphQL and RESTful endpoints.'
  }
];

export const mockProjectsArchive: ProjectArchive[] = [
  {
    id: 'axis-liquidity',
    title: 'AXIS LIQUIDITY PROTOCOL',
    category: 'FINTECH / SERIES B',
    status: 'STATUS: SHIPPED',
    description: 'High-frequency algorithmic trading platform handling $450M+ daily volume with sub-millisecond execution latency.',
    tags: ['NEXT.JS', 'RUST', 'WEBSOCKETS'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP8NzLyL3dyX5eCwG26Vdy-MfpDayQwvABw00LPXjMvp-LGjGIiLzHC_NcO9IbONlA6aVzwN4AuwZpednfi2vK-UmiGf9sNADt8snUJvOXjYFEelZW1LkrNM8yL2G63DgZtW66keYUaqf5YgZgcbHFnuON_SiYy4tv2SioDDHmq_wAXH1RQNoSqtg1Cs0ZdJ1iIcZnWRrdjNaenRdX6ZSfwKJtKWbmeBqWa7mBSi8nv0tKZCZuMCjOFA',
    imageAlt: 'A sophisticated dark-mode fintech analytics dashboard interface displaying real-time candlestick charts, portfolio valuations, and transaction streams in high contrast white and charcoal with orange highlight metrics.',
    isLarge: true,
    link: '#contact'
  },
  {
    id: 'synapse-med',
    title: 'SYNAPSE MED',
    category: 'HEALTHCARE / AI',
    status: 'SHIPPED',
    description: 'HIPAA-compliant diagnostic assistant powered by custom LLM medical models.',
    tags: ['PYTHON / REACT'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7rMaOoJPeG04qRYOautbKUR1HdFiRY4D9kxOsPGP_zOA9tmsAPOqLPM5UaqPJxkj5xfbVMkYv4mc5-BS0BaEnaJUSlUERMHRQUeDytXC46DHng5NihQh-7nybnbye4xvlq119fGk2YiuRXP0B1QL8QJSraOEJ-N2YulDyKQGa9XAiHN8pBzDS_DSr-hcdE8znAybIDbM53hcqXcMa39xan-eBT-NCTOAs5maTQB9YKiC6tRCzKYwpFg',
    imageAlt: 'An immaculate medical AI diagnostic interface showing neural scan analysis, patient biometric graphs, and clean typography in a clinical dark theme.',
    isLarge: false,
    link: '#contact'
  },
  {
    id: 'atelier-nord',
    title: 'ATELIER NORD',
    category: 'COMMERCE / RETAIL',
    status: 'SHIPPED',
    description: 'Headless e-commerce storefront with immersive WebGL product configurators.',
    tags: ['SHOPIFY / THREE.JS'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ewGH83Xd71ncp1BCHSZSWuDPQAS9MIj5v01Q1wsWzMwfPXdw14Zv7ALjzNIrWxSvJ9eByfm1UHd7s4paiXmDr4qeAfaurindS_k_H-guSWrt2o1yZI6gHv0omc_mQlaVZl6UORpMTH7swmGcNApvkdBHKwjOX7SSr-Q5uhYl-5kMkgZ5VIs1W1pR5TvIwgSo_PEIKPalA0HK6M4Rv-K66VaHgw9UhYTlpH19qdcnlrSfXpYzhceypg',
    imageAlt: 'A sleek minimalist e-commerce platform for luxury architectural furniture with immersive grid layouts and precise typography.',
    isLarge: false,
    link: '#contact'
  },
  {
    id: 'orbit-freight',
    title: 'ORBIT FREIGHT NETWORK',
    category: 'LOGISTICS / ENTERPRISE',
    status: 'STATUS: SHIPPED',
    description: 'Global supply chain intelligence platform providing real-time container tracking and automated customs clearance routing.',
    tags: ['GO / KUBERNETES', 'MAPBOX'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHKBDiIQGMw9N0HTXd_3TzcLvqgy_ENg_7R66x9-ysMOF50TOaPKOtB1F_WThC_klJPJSwbzmLxrNA4d2mOOpkTEKDEdHfcu_nidZ6TixpEnH6e4BS56TT4DHPDEEVe8orecCUypL46oJk5NTCeBt5wHTIB4JLyL1QRnOHsnU7HNh4tWDi4SMoRX3oyh5oTo-V-MzJuBKGvFrezaFOvpybW8B5u748AHNQVjHo-KQs2Jzr-Yhdy7hAYg',
    imageAlt: 'A global logistics and supply chain tracking map interface with vector flight paths, container status indicators, and telemetry feeds in dark charcoal and orange.',
    isLarge: true,
    link: '#contact'
  }
];

export const mockIndustriesList: IndustryVertical[] = [
  {
    id: 'startups',
    number: '01',
    title: 'Startups & Scaleups',
    description: 'Rapid MVPs and foundational architectures engineered to secure Series A/B funding.'
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-Commerce',
    description: 'High-conversion headless storefronts capable of handling Black Friday traffic spikes.'
  },
  {
    id: 'healthcare',
    number: '03',
    title: 'Healthcare',
    description: 'HIPAA-compliant patient portals, diagnostic tools, and secure medical data pipelines.'
  },
  {
    id: 'education',
    number: '04',
    title: 'Education',
    description: 'Interactive learning management systems and virtual classroom streaming platforms.'
  },
  {
    id: 'fintech',
    number: '05',
    title: 'Fintech',
    description: 'Secure payment gateways, ledger systems, and algorithmic trading interfaces.'
  },
  {
    id: 'logistics',
    number: '06',
    title: 'Logistics',
    description: 'Fleet tracking systems, route optimization engines, and supply chain telemetry.'
  },
  {
    id: 'real-estate',
    number: '07',
    title: 'Real Estate',
    description: 'Property management dashboards, 3D virtual tour integrations, and CRM platforms.'
  },
  {
    id: 'saas',
    number: '08',
    title: 'SaaS Enterprises',
    description: 'Multi-tenant subscription platforms with robust RBAC and automated billing.'
  }
];

export const mockProcessPhases: ProcessPhase[] = [
  {
    id: 'phase-1',
    number: 'PHASE 01',
    title: 'DISCOVERY & BLUEPRINT',
    description: 'We dissect your product requirements, analyze market positioning, map technical constraints, and deliver a comprehensive architectural blueprint before writing a single line of code.'
  },
  {
    id: 'phase-2',
    number: 'PHASE 02',
    title: 'DEFINE & PROTOTYPE',
    description: 'High-fidelity UI/UX design systems built in Figma, interactive component prototypes, and meticulous user journey flows tested against real target audiences.'
  },
  {
    id: 'phase-3',
    number: 'PHASE 03',
    title: 'DESIGN SYSTEM ARCHITECTURE',
    description: 'Establishing atomic token systems, typography hierarchies, and accessible color tokens that ensure absolute consistency across every screen and device viewport.'
  },
  {
    id: 'phase-4',
    number: 'PHASE 04',
    title: 'ENGINEERING & SPRINT CYCLES',
    description: 'Rigorous bi-weekly sprint cycles with continuous integration, automated testing suites, code reviews, and transparent staging deployments.'
  },
  {
    id: 'phase-5',
    number: 'PHASE 05',
    title: 'LAUNCH & SCALE',
    description: 'Zero-downtime production deployment, DNS optimization, CDN configuration, real-time error tracking, and ongoing maintenance retainers.'
  }
];

export const mockTechCategories: TechStackCategory[] = [
  {
    id: 'frontend',
    number: '01',
    name: 'FRONTEND',
    items: [
      { name: 'React / Next.js', tag: 'Core', isPrimary: true },
      { name: 'TypeScript', tag: 'Strict' },
      { name: 'Tailwind CSS', tag: 'UI' },
      { name: 'Three.js', tag: 'WebGL' },
      { name: 'Vue / Nuxt', tag: 'Alt' },
    ]
  },
  {
    id: 'mobile',
    number: '02',
    name: 'MOBILE',
    items: [
      { name: 'React Native', tag: 'Cross', isPrimary: true },
      { name: 'Swift', tag: 'iOS' },
      { name: 'Kotlin', tag: 'Android' },
      { name: 'Flutter', tag: 'UI' },
      { name: 'Expo', tag: 'Tooling' },
    ]
  },
  {
    id: 'backend',
    number: '03',
    name: 'BACKEND',
    items: [
      { name: 'Node.js', tag: 'Runtime', isPrimary: true },
      { name: 'Go', tag: 'Services' },
      { name: 'Rust', tag: 'Performance' },
      { name: 'Python / FastAPI', tag: 'AI/ML' },
      { name: 'GraphQL', tag: 'API' },
    ]
  },
  {
    id: 'database',
    number: '04',
    name: 'DATABASE',
    items: [
      { name: 'PostgreSQL', tag: 'Relational', isPrimary: true },
      { name: 'Redis', tag: 'Cache' },
      { name: 'Pinecone', tag: 'Vector' },
      { name: 'MongoDB', tag: 'NoSQL' },
      { name: 'Supabase', tag: 'BaaS' },
    ]
  },
  {
    id: 'ai-cloud',
    number: '05',
    name: 'AI & CLOUD',
    items: [
      { name: 'AWS', tag: 'Cloud', isPrimary: true },
      { name: 'Vercel', tag: 'Edge' },
      { name: 'OpenAI API', tag: 'LLM' },
      { name: 'LangChain', tag: 'Agents' },
      { name: 'Docker / K8s', tag: 'DevOps' },
    ]
  }
];

export const mockManifestoPillars: ManifestoPillar[] = [
  {
    id: 'p1',
    number: '01',
    title: 'SPEED IS A FEATURE',
    description: 'Latency kills conversion and user engagement. We optimize every asset, query, and bundle to render instantaneously.'
  },
  {
    id: 'p2',
    number: '02',
    title: 'UNCOMPROMISING CRAFT',
    description: 'No shortcuts, no technical debt masked as velocity. Every architectural decision is built to withstand enterprise scale.'
  },
  {
    id: 'p3',
    number: '03',
    title: 'RADICAL TRANSPARENCY',
    description: 'Direct access to senior engineers. No account managers, no game of telephone—just honest technical dialogue.'
  },
  {
    id: 'p4',
    number: '04',
    title: 'ARCHITECTURAL RIGOR',
    description: 'We blueprint before we build. Solid system design prevents costly rewrites down the road.'
  },
  {
    id: 'p5',
    number: '05',
    title: 'DESIGN-DRIVEN CODE',
    description: 'Aesthetic precision and technical performance are not mutually exclusive. We deliver both at the highest tier.'
  },
  {
    id: 'p6',
    number: '06',
    title: 'SHIP RELENTLESSLY',
    description: 'Ideas have zero value in a vacuum. We push code to production rapidly and iterate based on real user telemetry.'
  }
];

export const mockTestimonialNotes: TestimonialNote[] = [
  {
    id: 'note-1',
    quote: '"Vectors & Code completely restructured our trading platform\'s core architecture. Their insistence on technical precision and speed transformed our product into an institutional-grade powerhouse."',
    author: 'Marcus Vance',
    role: 'CTO, Axis Financial'
  },
  {
    id: 'note-2',
    quote: '"Most agencies deliver pretty Figma files and leave you stranded when it\'s time to code. Vectors & Code engineered our entire HIPAA-compliant AI diagnostic tool with flawless execution."',
    author: 'Dr. Sarah Lin',
    role: 'Founder, Synapse Med'
  },
  {
    id: 'note-3',
    quote: '"The speed of their sprint cycles is staggering. They delivered our headless e-commerce platform 3 weeks ahead of schedule with zero production bugs during our Black Friday launch."',
    author: 'Henrik Sterling',
    role: 'CEO, Atelier Nord'
  }
];

export const mockFaqEntries: FaqEntry[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'How do you structure your project engagements?',
    answer: 'We work on dedicated retainer or fixed-scope milestone models. Every project begins with a 2-week Discovery & Blueprint phase before engineering kicks off.'
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'What is your typical project timeline?',
    answer: 'Most MVPs and platform redesigns take between 8 to 16 weeks from initial kickoff to production deployment, depending on architectural complexity.'
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Will I work with junior developers or interns?',
    answer: 'Never. Vectors & Code is strictly a senior-only engineering studio. You will work directly with veteran architects and design directors.'
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Do you help with post-launch maintenance?',
    answer: 'Yes. We offer continuous engineering retainers for ongoing feature development, telemetry monitoring, security patches, and performance optimization.'
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'What tech stack do you recommend for SaaS?',
    answer: 'For most modern SaaS products, we recommend Next.js for the frontend, Node.js or Go for backend services, and PostgreSQL hosted on secure cloud infrastructure.'
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'How do we start a project with Vectors & Code?',
    answer: 'Fill out our project intake form below with your specifications. Our managing director will review and schedule a technical scoping call within 24 hours.'
  }
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   REAL VERIFIED DEVELOPER PROFILE DATA (SOURCE OF TRUTH)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const developerVerifiedData = {
  name: "Saqlain Shahid",
  title: "Founder & Lead Full-Stack Architect",
  intro: "Leading our engineering collective to architect and ship high-performance web, mobile, SaaS, and custom software products across modern JavaScript, React, Next.js, Flutter, Node.js, and cloud ecosystems.",
  fiverrUsername: "@saqlain_shahid_",
  fiverrUrl: "https://www.fiverr.com/saqlain_shahid_",
  level: "Level 1 Seller",
  rating: "5.0 / 5.0",
  totalReviews: 7,
  fiveStarReviews: 7,
  hourlyRate: "$20 / HR",
  averageResponse: "~2 HOURS",
  memberSince: "January 2021",
  location: "Pakistan",
  focus: "Web · Mobile · SaaS · AI",
  primaryGig: {
    title: "Cross-Platform Development",
    rating: "5.0 (7)",
    startingPrice: "$100",
    description: "Developing responsive React, Expo, and Flutter applications for mobile, desktop, and web"
  },
  experience: {
    company: "Techlania",
    role: "Web Developer — Part-time",
    period: "July 2025 – August 2025"
  }
};

export const verifiedReviewsList: RealClientReview[] = [
  {
    id: 'rev-1',
    number: '01',
    text: "Saqlain was fast, careful, responsive, used modern solutions, and stayed in touch all the way through the project. He delivered excellent value for his very reasonable fee. I highly recommend him.",
    rating: 5.0,
    highlight: "MODERN SOLUTIONS & CAREFUL EXECUTION"
  },
  {
    id: 'rev-2',
    number: '02',
    text: "Exceptional delivery from saqlain on my Flutter Flow app project. Highly recommended for his expertise and professionalism.",
    rating: 5.0,
    highlight: "FLUTTER FLOW & PROFESSIONALISM"
  },
  {
    id: 'rev-3',
    number: '03',
    text: "good job as expected",
    rating: 5.0,
    highlight: "RELIABLE SPECIFICATION DELIVERY"
  },
  {
    id: 'rev-4',
    number: '04',
    text: "Great work done",
    rating: 5.0,
    highlight: "QUALITY OUTCOME"
  },
  {
    id: 'rev-5',
    number: '05',
    text: "Great attentive to details",
    rating: 5.0,
    highlight: "ATTENTION TO ARCHITECTURAL DETAIL"
  }
];

export const developerTechCategories = [
  {
    number: '01',
    category: 'FRONTEND',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    number: '02',
    category: 'MOBILE',
    skills: ['Flutter', 'React Native', 'Expo']
  },
  {
    number: '03',
    category: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'Python', 'REST APIs']
  },
  {
    number: '04',
    category: 'DATA',
    skills: ['Firebase', 'MongoDB', 'MySQL', 'Supabase']
  },
  {
    number: '05',
    category: 'AI',
    skills: ['AI Integrations', 'LLM APIs', 'Chatbots', 'AI Automation']
  },
  {
    number: '06',
    category: 'OTHER',
    skills: ['Git', 'GitHub', 'Authentication', 'API Integrations']
  }
];

export const developerSecondaryTech = [
  'ASP.NET', 'Blazor', 'C#', 'MVC', 'Entity Framework', 'RESTful APIs',
  'Web API', 'Role Management', 'SQL Server', 'Bootstrap', 'AJAX',
  'Dependency Injection', 'Repository Pattern', 'N-Tier Architecture'
];

export const developerServicesList = [
  {
    number: '01',
    title: 'WEB APPLICATIONS',
    description: 'High-performance responsive frontends and full-stack web platforms engineered for speed and reliability.'
  },
  {
    number: '02',
    title: 'MOBILE APPLICATIONS',
    description: 'Cross-platform mobile applications for iOS and Android crafted with Flutter, React Native, and Expo.'
  },
  {
    number: '03',
    title: 'SAAS & CUSTOM SOFTWARE',
    description: 'Tailored multi-tenant software systems, operational dashboards, and automated business platforms.'
  },
  {
    number: '04',
    title: 'AI & AUTOMATION',
    description: 'Custom artificial intelligence integrations, LLM workflows, intelligent assistants, and automated pipelines.'
  },
  {
    number: '05',
    title: 'UI / UX & PRODUCT DEVELOPMENT',
    description: 'End-to-end interface implementation translating Figma blueprints into pixel-perfect production code.'
  },
  {
    number: '06',
    title: 'BACKEND & API SYSTEMS',
    description: 'Structured REST APIs, database schemas, authentication systems, and cloud backend microservices.'
  }
];

export const verifiedPortfolioList: RealPortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'TRAVEL BOOKING WEBSITE',
    category: 'TRAVEL & HOSPITALITY',
    technology: 'React / Next.js / Tailwind CSS / API Integration',
    status: 'SHIPPED',
    description: 'Custom digital product developed for a client.'
  },
  {
    id: 'proj-2',
    title: 'AI-POWERED SERVICE & BOOKING MOBILE APP',
    category: 'MOBILE APPLICATION & AI',
    technology: 'Flutter / Firebase / LLM APIs / Cloud Functions',
    status: 'SHIPPED',
    description: 'Custom digital product developed for a client.'
  },
  {
    id: 'proj-3',
    title: 'NFT MARKETPLACE WEBSITE',
    category: 'WEB APPLICATIONS',
    technology: 'React / TypeScript / Web3 APIs / Tailwind CSS',
    status: 'SHIPPED',
    description: 'Custom digital product developed for a client.'
  },
  {
    id: 'proj-4',
    title: 'MODERN RESTAURANT WEB APP WITH ONLINE ORDERING',
    category: 'E-COMMERCE & HOSPITALITY',
    technology: 'Next.js / Node.js / Database / Payment Flow',
    status: 'SHIPPED',
    description: 'Custom digital product developed for a client.'
  },
  {
    id: 'proj-5',
    title: 'RESPONSIVE INTERIOR DESIGN WEBSITE',
    category: 'DIGITAL EXPERIENCES',
    technology: 'HTML5 / CSS3 / JavaScript / Responsive Grid',
    status: 'SHIPPED',
    description: 'Custom digital product developed for a client.'
  }
];
