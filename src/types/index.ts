export interface Capability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProjectArchive {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  isLarge: boolean;
  link: string;
}

export interface IndustryVertical {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessPhase {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TechStackCategory {
  id: string;
  number: string;
  name: string;
  items: {
    name: string;
    tag: string;
    isPrimary?: boolean;
  }[];
}

export interface ManifestoPillar {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TestimonialNote {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface FaqEntry {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface BriefFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
}

export interface BriefResponse {
  success: boolean;
  message: string;
  data?: BriefFormData;
}

export type NavTab = 'work' | 'services' | 'solutions' | 'process' | 'about' | 'contact';
