import React, { useEffect } from 'react';
import { useAppStore } from './store/useAppStore';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { DeveloperPreviewCard } from './components/DeveloperPreviewCard';
import { DeveloperProfilePage } from './components/DeveloperProfilePage';
import { ServicesSection } from './components/ServicesSection';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudyDeepDive } from './components/CaseStudyDeepDive';
import { IndustriesSection } from './components/IndustriesSection';
import { ProcessSection } from './components/ProcessSection';
import { TechStackSection } from './components/TechStackSection';
import { ManifestoSection } from './components/ManifestoSection';
import { AboutSection } from './components/AboutSection';
import { StudioDataSection } from './components/StudioDataSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const currentView = useAppStore((state) => state.currentView);
  const setCurrentView = useAppStore((state) => state.setCurrentView);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('developer')) {
        setCurrentView('developer');
      } else if (window.location.hash === '' || window.location.hash === '#' || window.location.hash === '#/') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setCurrentView]);

  return (
    <div className="bg-[#171817] font-body text-on-surface min-h-screen flex flex-col selection:bg-[#FF4500] selection:text-white">
      <Header />
      
      <main className="flex-1 w-full pt-20 bg-[#171817]">
        {currentView === 'developer' ? (
          <DeveloperProfilePage />
        ) : (
          <div className="flex flex-col w-full text-on-surface bg-[#171817]">
            <HeroSection />
            <IntroSection />
            <DeveloperPreviewCard />
            <ServicesSection />
            <SelectedWork />
            <CaseStudyDeepDive />
            <IndustriesSection />
            <ProcessSection />
            <TechStackSection />
            <ManifestoSection />
            <AboutSection />
            <StudioDataSection />
            <TestimonialsSection />
            <FaqSection />
            <FinalCtaSection />
            <ContactSection />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
