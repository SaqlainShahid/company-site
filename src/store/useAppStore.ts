import { create } from 'zustand';
import type { NavTab, BriefFormData } from '../types';

interface AppState {
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

export const useAppStore = create<AppState>((set) => ({
  activeNavTab: 'work',
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
