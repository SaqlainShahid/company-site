import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '../api/apiService';
import type { BriefFormData } from '../types';
import { useAppStore } from '../store/useAppStore';

export const useCapabilitiesQuery = () => {
  return useQuery({
    queryKey: ['capabilities'],
    queryFn: apiService.getCapabilities,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProjectsArchiveQuery = () => {
  return useQuery({
    queryKey: ['projectsArchive'],
    queryFn: apiService.getProjectsArchive,
    staleTime: 1000 * 60 * 5,
  });
};

export const useTestimonialsQuery = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: apiService.getTestimonials,
    staleTime: 1000 * 60 * 5,
  });
};

export const useFaqsQuery = () => {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: apiService.getFaqs,
    staleTime: 1000 * 60 * 5,
  });
};

export const useSubmitBriefMutation = () => {
  const queryClient = useQueryClient();
  const resetForm = useAppStore((state) => state.resetForm);
  const setLastSubmittedBrief = useAppStore((state) => state.setLastSubmittedBrief);

  return useMutation({
    mutationFn: (formData: BriefFormData) => apiService.submitBrief(formData),
    onSuccess: (data) => {
      if (data.data) {
        setLastSubmittedBrief(data.data);
      }
      resetForm();
      queryClient.invalidateQueries({ queryKey: ['briefs'] });
    }
  });
};
