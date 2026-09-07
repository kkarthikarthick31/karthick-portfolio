import React from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDownloads from './components/ProjectDownloads';
import Articles from './components/Articles';
import CodingProfiles from './components/CodingProfiles';
import Achievements from './components/Achievements';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'articles',
  'coding',
  'achievements',
  'contact',
];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 180);

  // Navbar Resume → Open/View resume in a new tab
  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  // Hero Download Resume → Directly download resume
  const downloadResume = () => {
    const link = document.createElement('a');

    link.href = '/resume.pdf';
    link.download = 'Karthick_K_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-cyber-cyan selection:text-dark-950">

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Dynamic Particle Canvas Background */}
      <ParticleBackground />

      {/* Fixed Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={openResume}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">

        {/* Hero Section */}
        <Hero
          onOpenResume={downloadResume}
        />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <ProjectDownloads />

        <Articles />

        <CodingProfiles />

        <Achievements />

        <CTA />

        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}