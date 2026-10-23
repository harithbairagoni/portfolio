/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import ProjectDetailModal, { ProjectDetailData } from './components/ProjectDetailModal';

export default function App() {
  const [selectedDetail, setSelectedDetail] = useState<ProjectDetailData | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenColdConnectFromModal = () => {
    scrollToSection('projects');
    const tryBtn = document.getElementById('try-cold-connect-btn');
    if (tryBtn) {
      tryBtn.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#171717] selection:bg-[#66705B]/20 selection:text-[#171717] relative font-sans">
      {/* Extremely Minimal Sticky Navigation */}
      <Navbar />

      {/* Editorial Scroll-Driven Hero Section with Integrated Time Ticker */}
      <HeroSection
        onExploreWork={() => scrollToSection('work')}
        onExploreAbout={() => scrollToSection('about')}
      />

      {/* WORK EXPERIENCE: Where I have actually worked (Vertical Editorial Timeline) */}
      <WorkExperienceSection
        onOpenExperienceDetail={(item) => setSelectedDetail(item)}
      />

      {/* PROJECTS: Things I've built, experimented with and explored */}
      <ProjectsSection
        onOpenProjectDetail={(project) => setSelectedDetail(project)}
      />

      {/* Editorial About Section */}
      <AboutSection />

      {/* Complete Digital Resume Section */}
      <ResumeSection />

      {/* Quiet, Direct Contact Section */}
      <ContactSection />

      {/* Minimal Editorial Detail Modal */}
      <ProjectDetailModal
        project={selectedDetail}
        onClose={() => setSelectedDetail(null)}
        onOpenColdConnectDemo={handleOpenColdConnectFromModal}
      />
    </div>
  );
}
