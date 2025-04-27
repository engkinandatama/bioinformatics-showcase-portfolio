import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import AboutSection from '../components/Sections/AboutSection';
import ExperienceEducationTabs from '../components/Sections/ExperienceEducationTabs';
import ProjectsSection from '../components/Sections/ProjectsSection';
import PublicationsSection from '../components/Sections/PublicationsSection';
import ContactSection from '../components/Sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceEducationTabs />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;