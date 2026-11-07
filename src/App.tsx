/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhotoGalleryBento from './components/PhotoGalleryBento';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import ProjectDetailModal, { ProjectDetailData } from './components/ProjectDetailModal';
import SecretVaultModal from './components/SecretVaultModal';
import DossierClearance from './components/DossierClearance';

export default function App() {
  const [selectedDetail, setSelectedDetail] = useState<ProjectDetailData | null>(null);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);

  // Gamification tracking state
  const [gamificationState, setGamificationState] = useState({
    viewedPhoto: false,
    exploredLandsafe: false,
    scrubbedEthanol: false,
    triedPitch: false,
  });

  const markTask = (key: keyof typeof gamificationState) => {
    setGamificationState((prev) => ({ ...prev, [key]: true }));
  };

  const isUnlocked = Object.values(gamificationState).filter(Boolean).length >= 2;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenColdConnectFromModal = () => {
    scrollToSection('projects');
    markTask('triedPitch');
    const tryBtn = document.getElementById('try-cold-connect-btn');
    if (tryBtn) {
      tryBtn.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#171717] selection:bg-[#66705B]/20 selection:text-[#171717] relative font-sans">
      {/* Extremely Minimal Sticky Navigation */}
      <Navbar
        onOpenVault={() => setIsVaultOpen(true)}
        isVaultUnlocked={isUnlocked}
      />

      {/* Editorial Scroll-Driven Hero Section with Integrated Desk Clock & Portrait */}
      <HeroSection
        onExploreWork={() => scrollToSection('work')}
        onExploreAbout={() => scrollToSection('about')}
      />

      {/* NEW: THE VISUAL PHOTO DOSSIER BENTO (Uploadable Real Pictures + Stories) */}
      <PhotoGalleryBento
        onPhotoInteracted={() => markTask('viewedPhoto')}
      />

      {/* WORK EXPERIENCE: Tactile ₹152 Cr Scrubber & LANDSAFE Cadastral Map */}
      <WorkExperienceSection
        onOpenExperienceDetail={(item) => {
          setSelectedDetail(item);
          if (item.id === 'landsafe') markTask('exploredLandsafe');
          if (item.id === 'vivek-bio') markTask('scrubbedEthanol');
        }}
      />

      {/* PROJECTS: Cold Connect (Interactive Pitch Studio) */}
      <ProjectsSection
        onOpenProjectDetail={(project) => {
          setSelectedDetail(project);
          markTask('triedPitch');
        }}
      />

      {/* Editorial About Section */}
      <AboutSection />

      {/* Complete Digital Resume Section */}
      <ResumeSection />

      {/* Quiet, Direct Contact Section */}
      <ContactSection />

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedDetail}
        onClose={() => setSelectedDetail(null)}
        onOpenColdConnectDemo={handleOpenColdConnectFromModal}
      />

      {/* Secret Vault Modal (Gamification Surprise / Director's Cut) */}
      <SecretVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />

      {/* Dossier Clearance Gamification Floating Pill */}
      <DossierClearance
        unlockedVault={isUnlocked}
        onOpenVault={() => setIsVaultOpen(true)}
        state={gamificationState}
      />
    </div>
  );
}
