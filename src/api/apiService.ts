import { 
  mockCapabilities, 
  mockProjectsArchive, 
  mockTestimonialNotes, 
  mockFaqEntries 
} from './mockData';
import type { 
  Capability, 
  ProjectArchive, 
  TestimonialNote, 
  FaqEntry, 
  BriefFormData, 
  BriefResponse 
} from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  getCapabilities: async (): Promise<Capability[]> => {
    await delay(150);
    return [...mockCapabilities];
  },

  getProjectsArchive: async (): Promise<ProjectArchive[]> => {
    await delay(200);
    return [...mockProjectsArchive];
  },

  getTestimonials: async (): Promise<TestimonialNote[]> => {
    await delay(150);
    return [...mockTestimonialNotes];
  },

  getFaqs: async (): Promise<FaqEntry[]> => {
    await delay(150);
    return [...mockFaqEntries];
  },

  submitBrief: async (formData: BriefFormData): Promise<BriefResponse> => {
    await delay(600); // realistic server latency
    if (!formData.name || !formData.email || !formData.description) {
      throw new Error('Name, email, and project description are required.');
    }
    return {
      success: true,
      message: 'Brief transmitted successfully. Our engineering lead will contact you within 24 hours.',
      data: formData
    };
  }
};
