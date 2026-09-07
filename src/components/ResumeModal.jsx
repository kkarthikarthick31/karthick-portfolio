import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, EXPERIENCE_DATA, FEATURED_PROJECTS, ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { IoClose, IoDownloadOutline, IoPrintOutline } from 'react-icons/io5';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-dark-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-950/70">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyber-cyan animate-pulse" />
                <h3 className="text-base font-semibold text-white font-display">
                  Resume Preview: {PERSONAL_INFO.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-dark-950 bg-cyber-cyan hover:bg-cyber-blue rounded-lg transition-all shadow-glow-cyan"
                  title="Print or Save as PDF"
                >
                  <IoPrintOutline className="text-sm" />
                  <span>Download / Print PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <IoClose className="text-xl" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-300 font-sans text-sm">
              {/* Header */}
              <div className="border-b border-slate-800 pb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-cyber-cyan font-medium text-base mt-1">
                  {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
                </p>
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400">
                  <span>Email: <strong className="text-slate-200">{PERSONAL_INFO.email}</strong></span>
                  <span>LinkedIn: <strong className="text-slate-200">linkedin.com/in/kkarthi2004</strong></span>
                  <span>GitHub: <strong className="text-slate-200">github.com/kkarthikarthick31</strong></span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-bold mb-2">
                  // Professional Summary
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.subtext} {PERSONAL_INFO.approach}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-bold mb-2">
                  // Education
                </h2>
                <div className="bg-dark-850 p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-white">Master of Computer Applications (MCA)</span>
                    <span className="text-xs text-cyber-emerald font-mono font-bold">80% Aggregate</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Tamil Nadu, India</p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-bold mb-3">
                  // Work Experience (6 Months Internship)
                </h2>
                <div className="space-y-4">
                  {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="bg-dark-850 p-4 rounded-xl border border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-white">{exp.role}</h3>
                          <p className="text-xs text-cyber-blue">{exp.company} • {exp.location}</p>
                        </div>
                        <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-3">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-bold mb-3">
                  // Key Projects
                </h2>
                <div className="space-y-4">
                  {FEATURED_PROJECTS.map((proj) => (
                    <div key={proj.id} className="bg-dark-850 p-4 rounded-xl border border-slate-800">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-white">{proj.title}</h3>
                        <span className="text-[11px] font-mono text-cyber-cyan">
                          {proj.techStack.join(' • ')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1.5">{proj.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 mt-2">
                        {proj.features.slice(0, 4).map((f, idx) => (
                          <li key={idx}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Recognition */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-bold mb-3">
                  // Certifications & Honors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ACHIEVEMENTS_DATA.map((ach) => (
                    <div key={ach.id} className="p-3.5 rounded-xl bg-dark-850 border border-slate-800 text-xs">
                      <div className="flex justify-between items-start">
                        <strong className="text-white">{ach.title}</strong>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-cyber-cyan font-mono text-[10px]">
                          {ach.highlight}
                        </span>
                      </div>
                      <p className="text-slate-400 mt-1 text-[11px]">{ach.organization}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-500 font-mono">
                {PERSONAL_INFO.statusBadge}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
