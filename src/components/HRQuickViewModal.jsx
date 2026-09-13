import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  IoCloseOutline,
  IoDocumentTextOutline,
  IoMailOutline,
  IoCheckmarkCircle,
  IoCodeSlashOutline,
} from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { TbBolt } from 'react-icons/tb';

export default function HRQuickViewModal({ isOpen, onClose, onOpenResume }) {
  if (!isOpen) return null;

  const scrollToSection = (id) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-950 border border-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,242,254,0.15)] text-left max-h-[92vh] overflow-y-auto"
        >
          {/* Header Strip with Close button */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyber-cyan/15 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan font-bold">
                <TbBolt className="text-lg" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-cyber-cyan tracking-wider uppercase">
                  EXECUTIVE RECRUITER DASHBOARD
                </span>
                <span className="text-[11px] font-mono text-slate-400 block">
                  10-Second Candidate Evaluation Snapshot
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-dark-850 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
              aria-label="Close modal"
            >
              <IoCloseOutline className="text-xl" />
            </button>
          </div>

          {/* Candidate Overview Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            <div className="md:col-span-8 p-5 rounded-2xl bg-dark-950 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight">
                  {PERSONAL_INFO.name}
                </h2>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  {PERSONAL_INFO.statusBadge}
                </span>
              </div>

              <div className="text-sm font-semibold text-cyber-cyan font-mono mb-3">
                {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                {PERSONAL_INFO.positioning}
              </p>

              {/* Direct Contact Links */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800/80">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-cyan transition-colors"
                >
                  github.com/kkarthikarthick31
                </a>
              </div>
            </div>

            {/* Quick Experience Badge */}
            <div className="md:col-span-4 p-5 rounded-2xl bg-dark-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  TOTAL INTERNSHIP EXPERIENCE
                </span>
                <div className="text-3xl font-black text-white font-display">
                  6 Months
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Top Tech Developers (4 mos) + CRUD Academy (2 mos)
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyber-blue">
                // Recognized by Managing Director for performance
              </div>
            </div>
          </div>

          {/* Core Stack & Specialization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5 font-semibold">
                // Core Tech Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Spring Data JPA', 'Hibernate', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-dark-850 border border-slate-700 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5 font-semibold">
                // Core Engineering Specialization:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Full Stack Development',
                  'Backend Development',
                  'REST APIs',
                  'Database Integration',
                ].map((spec) => (
                  <span
                    key={spec}
                    className="px-2.5 py-1 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Education Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                // Certifications & Honors:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2">
                  <IoCheckmarkCircle className="text-cyber-cyan" />
                  <span>LeetCode Top SQL 50 Practice</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkCircle className="text-cyber-cyan" />
                  <span>NPTEL Programming in Java — 71%</span>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkCircle className="text-cyber-cyan" />
                  <span>MD Recognition at Top Tech Developers</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                // Verified Education:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                <li className="flex items-center justify-between">
                  <span>MCA — Dhanalakshmi Srinivasan Univ.</span>
                  <span className="text-emerald-400 font-bold">80%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>BCA — SRM University, Chennai</span>
                  <span className="text-emerald-400 font-bold">78%</span>
                </li>
              </ul>
            </div>
          </div>

          {/* EXECUTIVE ACTION BUTTONS */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-xl bg-cyber-cyan text-dark-950 text-xs font-bold font-mono tracking-wide hover:bg-cyber-blue transition-colors flex items-center gap-2 shadow-glow-cyan"
              >
                <IoDocumentTextOutline className="text-sm" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="px-4 py-2.5 rounded-xl border border-slate-700 bg-dark-850 text-slate-200 text-xs font-mono hover:border-cyber-cyan hover:text-white transition-colors flex items-center gap-2"
              >
                <IoCodeSlashOutline className="text-sm" />
                <span>VIEW PROJECTS</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-850 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                title="GitHub"
              >
                <SiGithub className="text-base" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-850 border border-slate-700 text-slate-300 hover:text-cyber-blue hover:border-slate-500 transition-colors"
                title="LinkedIn"
              >
                 <FaLinkedin className="text-base" />
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2.5 rounded-xl border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono hover:bg-cyber-cyan/20 transition-colors flex items-center gap-1.5"
              >
                <IoMailOutline className="text-sm" />
                <span>CONTACT</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
