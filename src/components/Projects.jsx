import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import TiltCard from './UI/TiltCard';
import SupplyChain3D from './SupplyChain3D';
import {
  IoCheckmarkCircleOutline,
  IoCodeSlashOutline,
  IoGlobeOutline,
  IoInformationCircleOutline,
} from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';

// --------------------------------------------------
// PER-TECH BRAND COLOR MAP (for tech badges)
// --------------------------------------------------

const TECH_COLORS = {
  java: { text: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10' },
  'spring boot': { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
  spring: { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
  reactjs: { text: 'text-cyan-300', border: 'border-cyan-400/30', bg: 'bg-cyan-400/10' },
  react: { text: 'text-cyan-300', border: 'border-cyan-400/30', bg: 'bg-cyan-400/10' },
  mysql: { text: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10' },
  'rest apis': { text: 'text-sky-400', border: 'border-sky-500/30', bg: 'bg-sky-500/10' },
  git: { text: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/10' },
  blockchain: { text: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
  'cryptographic hashing': { text: 'text-pink-400', border: 'border-pink-500/30', bg: 'bg-pink-500/10' },
  'workflow engine': { text: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10' },
};

const DEFAULT_TECH_COLOR = { text: 'text-slate-300', border: 'border-slate-700/70', bg: 'bg-dark-850' };

function getTechColor(tech) {
  return TECH_COLORS[tech.toLowerCase()] || DEFAULT_TECH_COLOR;
}

function TechBadge({ tech, mono = true }) {
  const c = getTechColor(tech);
  return (
    <span
      className={`px-3 py-1.5 rounded-lg border text-xs ${mono ? 'font-mono' : ''} font-medium ${c.text} ${c.border} ${c.bg} transition-transform hover:scale-105`}
    >
      {tech}
    </span>
  );
}

// --------------------------------------------------
// SHIMMER BORDER WRAPPER
// Rotating conic-gradient "glow ring" behind the card,
// masked so only a thin edge is visible — classic premium effect
// --------------------------------------------------

function ShimmerBorder({ children, colorFrom = '#00f2fe', colorVia = '#a855f7', colorTo = '#10b981', className = '' }) {
  return (
    <div className={`relative rounded-2xl p-[1.5px] group/shimmer ${className}`}>
      {/* Rotating gradient layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/shimmer:opacity-100 transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg, ${colorFrom}, ${colorVia}, ${colorTo}, ${colorFrom})`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      {/* Static subtle border for non-hover state */}
      <div className="absolute inset-0 rounded-2xl border border-slate-800 group-hover/shimmer:opacity-0 transition-opacity duration-300" />

      {/* Inner content (covers the gradient except a thin edge) */}
      <div className="relative rounded-2xl bg-dark-900/95 h-full">
        {children}
      </div>
    </div>
  );
}

// --------------------------------------------------
// INVENTORY SYSTEM — ARCHITECTURE LAYER DATA
// --------------------------------------------------

const ARCH_LAYERS = [
  {
    id: 'frontend',
    label: '// FRONTEND CLIENT',
    title: 'ReactJS Dashboard & Stock Grid',
    detail: 'Axios Interceptors • State Sync',
    info: 'Handles the product catalog UI, real-time stock grid, and dispatches REST calls via Axios interceptors that attach auth headers and retry failed requests automatically.',
    classes: {
      borderActive: 'border-cyber-blue/70',
      borderHover: 'hover:border-cyber-blue/60',
      bg: 'bg-cyber-blue',
      bgTint: 'bg-cyber-blue/[0.06]',
      borderTint: 'border-cyber-blue/30',
      text: 'text-cyber-blue',
      shadowActive: 'shadow-[0_0_28px_rgba(59,130,246,0.28)]',
      shadowHover: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.18)]',
    },
  },
  {
    id: 'backend',
    label: '// BACKEND SERVICE',
    title: 'Spring Boot MVC & Controllers',
    detail: 'Hibernate ORM • Validation Layers',
    info: 'REST controllers route requests to service-layer business logic, with Hibernate ORM mapping entities and Bean Validation enforcing request contracts before they reach the database.',
    classes: {
      borderActive: 'border-cyber-purple/70',
      borderHover: 'hover:border-cyber-purple/60',
      bg: 'bg-cyber-purple',
      bgTint: 'bg-cyber-purple/[0.06]',
      borderTint: 'border-cyber-purple/30',
      text: 'text-cyber-purple',
      shadowActive: 'shadow-[0_0_28px_rgba(168,85,247,0.28)]',
      shadowHover: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]',
    },
  },
  {
    id: 'database',
    label: '// PERSISTENCE LAYER',
    title: 'MySQL Normalized Database',
    detail: 'ACID Transactions • Indexing',
    info: 'A normalized relational schema with foreign-key constraints and indexed lookup columns, wrapped in ACID-compliant transactions for consistent stock updates.',
    classes: {
      borderActive: 'border-cyber-emerald/70',
      borderHover: 'hover:border-cyber-emerald/60',
      bg: 'bg-cyber-emerald',
      bgTint: 'bg-cyber-emerald/[0.06]',
      borderTint: 'border-cyber-emerald/30',
      text: 'text-cyber-emerald',
      shadowActive: 'shadow-[0_0_28px_rgba(16,185,129,0.28)]',
      shadowHover: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.18)]',
    },
  },
];

const FLOW_LABELS = [
  { text: '↕ REST JSON Contracts', color: 'text-cyber-cyan', line: 'bg-cyber-cyan/60', delay: 0 },
  { text: '↕ JDBC Connection Pool', color: 'text-cyber-purple', line: 'bg-cyber-purple/60', delay: 0.4 },
];

export default function Projects() {
  const [modalNotice, setModalNotice] = useState(null);
  const [activeLayer, setActiveLayer] = useState(null);

  const handleActionClick = (e, url, title) => {
    e.preventDefault();

    if (url && !url.startsWith('#')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setModalNotice(
        `Repository / Demo for "${title}" is ready to be linked via PROJECT_GITHUB_URL / PROJECT_DOWNLOAD_URL in configuration.`
      );
    }
  };

  const activeLayerData = ARCH_LAYERS.find((l) => l.id === activeLayer);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-cyan/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="// 04. FEATURED WORK"
          title="Featured"
          highlight="Projects"
          subtitle="Real-world full-stack and blockchain engineering systems built with Java, Spring Boot, MySQL, and React."
        />

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

          {/* PROJECT 1: INVENTORY MANAGEMENT SYSTEM */}
          {(() => {
            const project = FEATURED_PROJECTS[0];

            return (
              <TiltCard maxTilt={8} className="overflow-hidden">
                <ShimmerBorder colorFrom="#00f2fe" colorVia="#38bdf8" colorTo="#a855f7">
                  <div className="p-8 sm:p-12 rounded-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                      {/* LEFT: PROJECT DETAILS */}
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

                        {/* TECH BADGES — now brand-colored */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.techStack.map((tech) => (
                            <TechBadge key={tech} tech={tech} />
                          ))}
                        </div>

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

                      {/* RIGHT: INTERACTIVE SYSTEM BLUEPRINT */}
                      <div className="lg:col-span-5 bg-dark-950/80 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs font-mono">
                            <span className="text-slate-400">ARCH: FULL-STACK CLIENT-SERVER</span>
                            <span className="text-cyber-cyan flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                              ACTIVE STATUS
                            </span>
                          </div>

                          <p className="text-[10px] font-mono text-slate-500 mb-3 -mt-1">
                            Tap a layer to inspect request flow
                          </p>

                          <div className="space-y-3 font-mono text-xs">
                            {ARCH_LAYERS.map((layer, i) => {
                              const isActive = activeLayer === layer.id;
                              const c = layer.classes;

                              return (
                                <React.Fragment key={layer.id}>
                                  <motion.button
                                    type="button"
                                    onClick={() => setActiveLayer(isActive ? null : layer.id)}
                                    whileHover={{ scale: 1.025, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className={`group relative w-full text-left p-4 rounded-xl bg-slate-900/90 border transition-all duration-300 cursor-pointer overflow-hidden ${
                                      isActive
                                        ? `${c.borderActive} ${c.shadowActive}`
                                        : `border-slate-800 ${c.borderHover} ${c.shadowHover}`
                                    }`}
                                  >
                                    <motion.div
                                      className={`absolute inset-y-0 left-0 w-1 ${c.bg}`}
                                      initial={{ scaleY: 0 }}
                                      animate={{ scaleY: isActive ? 1 : 0 }}
                                      whileHover={{ scaleY: 1 }}
                                      transition={{ duration: 0.25 }}
                                      style={{ transformOrigin: 'top' }}
                                    />

                                    <div className={isActive ? `text-[10px] ${c.text}` : 'text-[10px] text-slate-500 group-hover:text-white'}>
                                      {layer.label}
                                    </div>

                                    <div className="text-slate-200 font-semibold mt-1 flex items-center justify-between gap-2">
                                      {layer.title}
                                      <span className={`text-[9px] px-1.5 py-0.5 rounded border transition-opacity ${
                                        isActive ? `opacity-100 ${c.borderActive} ${c.text}` : 'opacity-0'
                                      }`}>
                                        SELECTED
                                      </span>
                                    </div>

                                    <div className={`text-[11px] mt-1 ${c.text}`}>
                                      {layer.detail}
                                    </div>
                                  </motion.button>

                                  {i < FLOW_LABELS.length && (
                                    <div className="relative flex flex-col items-center py-1">
                                      <div className={`text-[11px] ${FLOW_LABELS[i].color}`}>
                                        {FLOW_LABELS[i].text}
                                      </div>

                                      <motion.div
                                        className={`absolute h-5 w-px ${FLOW_LABELS[i].line}`}
                                        animate={{ opacity: [0.25, 1, 0.25], scaleY: [0.7, 1, 0.7] }}
                                        transition={{ duration: 1.2, repeat: Infinity, delay: FLOW_LABELS[i].delay }}
                                      />

                                      {activeLayer && (
                                        <motion.div
                                          className={`absolute w-1.5 h-1.5 rounded-full ${c.bg}`}
                                          initial={{ top: 0, opacity: 0 }}
                                          animate={{ top: [0, 20], opacity: [0, 1, 0] }}
                                          transition={{ duration: 1, repeat: Infinity, delay: FLOW_LABELS[i].delay, ease: 'linear' }}
                                        />
                                      )}
                                    </div>
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </div>

                          <AnimatePresence mode="wait">
                            {activeLayerData && (
                              <motion.div
                                key={activeLayerData.id}
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 14 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.25 }}
                                className={`overflow-hidden rounded-xl border ${activeLayerData.classes.borderTint} ${activeLayerData.classes.bgTint} p-3.5`}
                              >
                                <p className="text-[11px] leading-relaxed text-slate-300">
                                  {activeLayerData.info}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 text-center">
                          API Endpoints Tested with Postman
                        </div>
                      </div>

                    </div>
                  </div>
                </ShimmerBorder>
              </TiltCard>
            );
          })()}

          {/* PROJECT 2: FARMER-TO-CONSUMER FOOD TRACEABILITY SYSTEM */}
          {(() => {
            const project = FEATURED_PROJECTS[1];

            return (
              <ShimmerBorder colorFrom="#10b981" colorVia="#06b6d4" colorTo="#8b5cf6">
                <div className="p-8 sm:p-12 rounded-2xl relative">
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

                  <div className="my-8">
                    <SupplyChain3D />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-dark-850/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                        <IoCodeSlashOutline className="text-cyber-emerald text-sm mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* TECH STACK — now brand-colored */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} tech={tech} mono={true} />
                    ))}
                  </div>
                </div>
              </ShimmerBorder>
            );
          })()}

        </div>
      </div>
    </section>
  );
}