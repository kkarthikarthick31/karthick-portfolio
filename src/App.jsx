import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import CinematicTransition from './components/CinematicTransition';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HRQuickViewModal from './components/HRQuickViewModal';
import RecruiterHelper from './components/RecruiterHelper';
import ResumeModal from './components/ResumeModal';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'achievements',
  'contact',
];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 160);
  const [hrViewOpen, setHrViewOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Directly download the verified resume file
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Karthick_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Open the interactive ATS resume viewer modal
  const openResumeModal = () => {
    setResumeModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-cyber-cyan selection:text-dark-950">

      {/* Signature Standout Moment: System Boot Terminal Intro */}
      <LoadingScreen />

      {/* Smooth Magnetic Custom Cursor with Glow Trail (Desktop Only) */}
      <CustomCursor />

      {/* Subtle Atmospheric Particle Background */}
      <ParticleBackground />

      {/* Fixed Navigation Bar with Top Scroll Depth Progress Indicator */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={openResumeModal}
        onOpenHRView={() => setHrViewOpen(true)}
      />

      {/* Main 7-Section Content Layout */}
      <main className="relative z-10">

        {/* 1. Home / Hero Front Page */}
        <Hero
          onOpenResume={downloadResume}
          onOpenHRView={() => setHrViewOpen(true)}
        />

        {/* 2. About Section (Narrative + Digital ID Photo + Animated Headline Stats) */}
        <About />

        {/* 3. Skills (ONE Consolidated Interactive Node Graph & Evidence Section) */}
        <Skills />

        {/* 4. Projects (Full Case Studies: Inventory & Blockchain Food Traceability) */}
        <Projects />

        {/* 5. Internship Experience (Correct Chronological Order: 2025 on Left, 2026 on Right) */}
        <Experience />

        {/* 6. Achievements (Single Source of Truth for LeetCode, NPTEL, MD Recognition & Degrees) */}
        <Achievements />

        {/* Closing Engineering Philosophy Bridge */}
        <CinematicTransition onOpenResume={downloadResume} />

        {/* 7. Contact Section (Direct ATS Resume Download, One-Click Email Copy & Form) */}
        <Contact onOpenResume={downloadResume} />

      </main>

      {/* Minimalist Terminal Footer */}
      <Footer />

      {/* Floating Recruiter Quick Navigation Helper */}
      <RecruiterHelper onOpenResume={openResumeModal} />

      {/* HR Quick View Executive Modal Panel */}
      <HRQuickViewModal
        isOpen={hrViewOpen}
        onClose={() => setHrViewOpen(false)}
        onOpenResume={downloadResume}
      />

      {/* ATS-Formatted Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}