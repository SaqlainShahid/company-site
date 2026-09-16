import { create } from 'zustand';
import type { NavTab, BriefFormData } from '../types';

interface AppState {
  currentView: 'home' | 'developer';
  setCurrentView: (view: 'home' | 'developer') => void;

  activeNavTab: NavTab;
  setActiveNavTab: (tab: NavTab) => void;

  expandedFaqId: string | null;
  toggleFaq: (id: string) => void;

  formData: BriefFormData;
  setFormField: (field: keyof BriefFormData, value: string) => void;
  resetForm: () => void;

  lastSubmittedBrief: BriefFormData | null;
  setLastSubmittedBrief: (brief: BriefFormData | null) => void;
}

const initialFormData: BriefFormData = {
  name: '',
  email: '',
  company: '',
  projectType: 'Web Application',
  budget: '$25,000 - $50,000',
  description: ''
};

const getInitialView = (): 'home' | 'developer' => {
  if (typeof window !== 'undefined' && window.location.hash.includes('developer')) {
    return 'developer';
  }
  return 'home';
};

export const useAppStore = create<AppState>((set) => ({
  currentView: getInitialView(),
  setCurrentView: (view) => {
    if (typeof window !== 'undefined') {
      window.location.hash = view === 'developer' ? '#/developer' : '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    set({ 
      currentView: view,
      activeNavTab: view === 'developer' ? 'developer' : 'work'
    });
  },

  activeNavTab: getInitialView() === 'developer' ? 'developer' : 'work',
  setActiveNavTab: (tab) => set({ activeNavTab: tab }),

  expandedFaqId: 'faq-1',
  toggleFaq: (id) =>
    set((state) => ({
      expandedFaqId: state.expandedFaqId === id ? null : id
    })),

  formData: initialFormData,
  setFormField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value }
    })),
  resetForm: () => set({ formData: initialFormData }),

  lastSubmittedBrief: null,
  setLastSubmittedBrief: (brief) => set({ lastSubmittedBrief: brief })
}));
