import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import TiltCard from './UI/TiltCard';
import SupplyChain3D from './SupplyChain3D';
import { IoCheckmarkCircleOutline, IoCodeSlashOutline, IoGlobeOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';

export default function Projects() {
  const [modalNotice, setModalNotice] = useState(null);

  const handleActionClick = (e, url, title) => {
    e.preventDefault();
    if (url && !url.startsWith('#')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setModalNotice(`Repository / Demo for "${title}" is ready to be linked via PROJECT_GITHUB_URL / PROJECT_DOWNLOAD_URL in configuration.`);
    }
  };

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-cyan/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. FEATURED WORK"
          title="Featured"
          highlight="Projects"
          subtitle="Real-world full-stack and blockchain engineering systems built with Java, Spring Boot, MySQL, and React."
        />

        {/* Project Notification Banner if placeholder clicked */}
        {modalNotice && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-xl bg-cyber-blue/10 border border-cyber-blue/30 text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <IoInformationCircleOutline className="text-xl text-cyber-blue flex-shrink-0" />
              <span>{modalNotice}</span>
            </div>
            <button
              onClick={() => setModalNotice(null)}
              className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1"
            >
              ✕ Dismiss
            </button>
          </motion.div>
        )}

        <div className="space-y-20">
          {/* PROJECT 1: Inventory Management System */}
          {(() => {
            const project = FEATURED_PROJECTS[0];
            return (
              <TiltCard maxTilt={8} className="overflow-hidden">
                <div className="p-8 sm:p-12 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-cyber-cyan/50 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left: Project Details */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider mb-2">
                        <span>// Full Stack Enterprise App</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-cyber-blue mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Feature Bullet Grid */}
                      <div className="mb-8">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                          // Architectural Highlights & Capabilities:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {project.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <IoCheckmarkCircleOutline className="text-cyber-cyan text-sm mt-0.5 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-700/70 text-xs font-mono text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action CTAs */}
                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          onClick={(e) => handleActionClick(e, project.demoUrl, project.title)}
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-950 text-xs font-bold shadow-glow-cyan hover:brightness-110 transition-all flex items-center gap-2"
                        >
                          <IoGlobeOutline className="text-sm" />
                          <span>View Project</span>
                        </button>

                        <button
                          onClick={(e) => handleActionClick(e, project.githubUrl, project.title)}
                          className="px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-2"
                        >
                          <SiGithub className="text-sm text-cyber-cyan" />
                          <span>GitHub</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Abstract System Blueprint Preview */}
                    <div className="lg:col-span-5 bg-dark-950/80 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs font-mono">
                          <span className="text-slate-400">ARCH: 3-TIER CLIENT-SERVER</span>
                          <span className="text-cyber-cyan">ACTIVE STATUS</span>
                        </div>

                        {/* Interactive UI Mockup Card */}
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                            <div className="text-[10px] text-slate-500">// FRONTEND CLIENT</div>
                            <div className="text-slate-200 font-semibold mt-1">ReactJS Dashboard & Stock Grid</div>
                            <div className="text-[11px] text-cyber-blue mt-0.5">Axios Interceptors • State Sync</div>
                          </div>

                          <div className="flex justify-center text-cyber-cyan text-sm">
                            ↕ REST JSON Contracts
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                            <div className="text-[10px] text-slate-500">// BACKEND SERVICE</div>
                            <div className="text-slate-200 font-semibold mt-1">Spring Boot MVC & Controllers</div>
                            <div className="text-[11px] text-cyber-purple mt-0.5">Hibernate ORM • Validation Layers</div>
                          </div>

                          <div className="flex justify-center text-cyber-purple text-sm">
                            ↕ JDBC Connection Pool
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                            <div className="text-[10px] text-slate-500">// PERSISTENCE LAYER</div>
                            <div className="text-slate-200 font-semibold mt-1">MySQL Normalized Database</div>
                            <div className="text-[11px] text-cyber-emerald mt-0.5">ACID Transactions • Indexing</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 text-center">
                        Verified against Postman Test Suites
                      </div>
                    </div>

                  </div>
                </div>
              </TiltCard>
            );
          })()}

          {/* PROJECT 2: Farmer-to-Consumer Food Traceability System */}
          {(() => {
            const project = FEATURED_PROJECTS[1];
            return (
              <div className="p-8 sm:p-12 rounded-2xl bg-dark-900/90 border border-slate-800 relative hover:border-cyber-emerald/50 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-emerald uppercase tracking-wider mb-2">
                      <span>// Blockchain Distributed Ledger System</span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-cyber-blue">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={(e) => handleActionClick(e, project.demoUrl, project.title)}
                      className="px-5 py-2.5 rounded-xl bg-cyber-emerald text-dark-950 text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
                    >
                      <IoGlobeOutline className="text-sm" />
                      <span>View Project</span>
                    </button>

                    <button
                      onClick={(e) => handleActionClick(e, project.githubUrl, project.title)}
                      className="px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-2"
                    >
                      <SiGithub className="text-sm text-cyber-emerald" />
                      <span>GitHub</span>
                    </button>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-4xl">
                  {project.description} Engineered during internship at Top Tech Developers, Chennai. It enforces transparent accountability from the origin farm harvest through logistics checkpoints to the verified end consumer.
                </p>

                {/* 3D Supply Chain Traceability Visualizer */}
                <div className="my-8">
                  <SupplyChain3D />
                </div>

                {/* Features and Tech */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-dark-850/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                      <IoCodeSlashOutline className="text-cyber-emerald text-sm mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-dark-850 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
}
