import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PERSONAL_INFO,
  EXPERIENCE_TIMELINE,
  PROJECTS_DATA,
  ACHIEVEMENTS_LIST,
  EDUCATION_LIST,
  TECHNICAL_SKILLS,
} from '../data/portfolioData';
import { IoClose, IoDownloadOutline, IoPrintOutline, IoDocumentTextOutline } from 'react-icons/io5';
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

  const handleDownloadPDF = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
    });
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeFile;
    link.download = 'Karthick_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 text-left"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-950">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse" />
              <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                ATS Resume: {PERSONAL_INFO.name} ({PERSONAL_INFO.role})
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-dark-950 bg-cyber-cyan hover:bg-cyber-blue rounded-lg transition-all shadow-glow-cyan"
              >
                <IoDownloadOutline className="text-sm" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-dark-850 hover:bg-dark-800 border border-slate-700 rounded-lg transition-all"
              >
                <IoPrintOutline className="text-sm" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-dark-800 transition-colors"
                aria-label="Close modal"
              >
                <IoClose className="text-xl" />
              </button>
            </div>
          </div>

          {/* Clean ATS Resume Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-300 font-sans text-xs sm:text-sm bg-dark-950/70">
            {/* Candidate Header */}
            <div className="border-b border-slate-800 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-cyber-cyan font-mono text-sm font-medium mt-1">
                {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
              </p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs font-mono text-slate-400">
                <span>Email: <strong className="text-slate-200">{PERSONAL_INFO.email}</strong></span>
                <span>GitHub: <strong className="text-slate-200">github.com/kkarthikarthick31</strong></span>
                <span>LinkedIn: <strong className="text-slate-200">linkedin.com/in/kkarthi2004</strong></span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold text-cyber-blue uppercase tracking-widest mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {PERSONAL_INFO.aboutSummary}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold text-cyber-blue uppercase tracking-widest mb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <strong className="text-slate-200">Languages:</strong> Java, JavaScript, SQL
                </div>
                <div>
                  <strong className="text-slate-200">Backend:</strong> Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, REST APIs, JWT
                </div>
                <div>
                  <strong className="text-slate-200">Frontend:</strong> ReactJS, HTML, CSS, JavaScript
                </div>
                <div>
                  <strong className="text-slate-200">Databases:</strong> MySQL, PostgreSQL, JDBC
                </div>
                <div>
                  <strong className="text-slate-200">Core Concepts:</strong> OOP, Data Structures, Collections, MVC Architecture, Exception Handling
                </div>
                <div>
                  <strong className="text-slate-200">Tools:</strong> Git, GitHub, Postman, Maven, VS Code, Eclipse
                </div>
              </div>
            </div>

            {/* Internship Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold text-cyber-blue uppercase tracking-widest mb-3">
                INTERNSHIP EXPERIENCE (6 MONTHS TOTAL)
              </h2>
              <div className="space-y-4">
                {[...EXPERIENCE_TIMELINE].reverse().map((exp) => (
                  <div key={exp.id} className="p-3.5 rounded-xl bg-dark-900 border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between mb-1">
                      <span className="font-bold text-white text-sm">{exp.role}</span>
                      <span className="text-xs font-mono text-cyber-cyan">{exp.period}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 mb-2">
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                      {exp.work.map((w, i) => (
                        <li key={i}>{w}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold text-cyber-blue uppercase tracking-widest mb-3">
                KEY PROJECTS
              </h2>
              <div className="space-y-3">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-dark-900 border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between mb-1">
                      <span className="font-bold text-white text-sm">{proj.title}</span>
                      <span className="text-xs font-mono text-slate-400">Tech: {proj.techStack.join(', ')}</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">{proj.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                      {proj.features.slice(0, 3).map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <h2 className="text-xs font-mono font-bold text-cyber-blue uppercase tracking-widest mb-2">
                  EDUCATION
                </h2>
                <div className="space-y-2 text-xs">
                  {EDUCATION_LIST.map((edu) => (
                    <div key={edu.degree} className="p-2.5 rounded-lg bg-dark-900 border border-slate-800">
                      <div className="font-bold text-white">{edu.degree}</div>
                      <div className="text-slate-400 font-mono">{edu.institution} ({edu.period})</div>
                      <div className="text-emerald-400 font-mono font-semibold">Score: {edu.score}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-mono font-bold text-cyber-blue uppercase tracking-widest mb-2">
                  CERTIFICATIONS & RECOGNITION
                </h2>
                <div className="space-y-2 text-xs">
                  {ACHIEVEMENTS_LIST.map((ach) => (
                    <div key={ach.id} className="p-2.5 rounded-lg bg-dark-900 border border-slate-800">
                      <div className="font-bold text-white">{ach.title}</div>
                      <div className="text-slate-400 font-mono">{ach.organization}</div>
                      <div className="text-cyber-cyan font-mono">{ach.highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
