import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IoHelpCircleOutline,
  IoCloseOutline,
  IoPersonOutline,
  IoHardwareChipOutline,
  IoCodeSlashOutline,
  IoBriefcaseOutline,
  IoRibbonOutline,
  IoDocumentTextOutline,
  IoMailOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';

const HELPER_OPTIONS = [
  { label: 'ABOUT KARTHICK', sectionId: 'about', icon: IoPersonOutline, desc: '6 Months Internship & Core Story' },
  { label: 'TECH STACK', sectionId: 'skills', icon: IoHardwareChipOutline, desc: 'Java, Spring Boot, React, MySQL' },
  { label: 'PROJECTS', sectionId: 'projects', icon: IoCodeSlashOutline, desc: 'Inventory & Blockchain Systems' },
  { label: 'EXPERIENCE', sectionId: 'experience', icon: IoBriefcaseOutline, desc: 'Top Tech Dev & CRUD Academy' },
  { label: 'ACHIEVEMENTS', sectionId: 'achievements', icon: IoRibbonOutline, desc: 'LeetCode SQL 50, NPTEL 71%, MCA' },
  { label: 'RESUME', action: 'resume', icon: IoDocumentTextOutline, desc: 'Download or View ATS Resume' },
  { label: 'CONTACT', sectionId: 'contact', icon: IoMailOutline, desc: 'Direct Email & Social Connect' },
];

export default function RecruiterHelper({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setIsOpen(false);
    if (option.action === 'resume') {
      if (onOpenResume) onOpenResume();
    } else if (option.sectionId) {
      const el = document.getElementById(option.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    // FIX: Reduced offset on mobile (bottom-4 right-4) vs desktop (sm:bottom-6 sm:right-6)
    // so the launcher sits closer to the edge and clears content below it on small screens.
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Pop-up Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.2 }}
            // FIX: Constrain width on mobile so the panel never exceeds the viewport,
            // and cap max-height so it doesn't run off the bottom of small screens.
            className="mb-3 w-[85vw] max-w-xs sm:w-80 max-h-[70vh] rounded-2xl p-4 bg-dark-900/95 border border-slate-700 shadow-2xl backdrop-blur-xl text-left overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-cyber-cyan uppercase tracking-wider block">
                  RECRUITER ASSISTANT
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Quick-jump to relevant profile section
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Close menu"
              >
                <IoCloseOutline className="text-lg" />
              </button>
            </div>

            {/* Jump Options */}
            <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
              {HELPER_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect(opt)}
                    className="w-full p-2.5 rounded-xl bg-dark-850/80 hover:bg-dark-800 border border-slate-800/80 hover:border-cyber-cyan/40 transition-all flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-dark-950 border border-slate-700 flex items-center justify-center text-cyber-blue group-hover:text-cyber-cyan">
                        <Icon className="text-sm" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200 group-hover:text-white font-display">
                          {opt.label}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {opt.desc}
                        </div>
                      </div>
                    </div>
                    <IoArrowForwardOutline className="text-slate-500 group-hover:text-cyber-cyan transition-transform group-hover:translate-x-0.5 text-xs" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      {/*
        FIX: On mobile (below sm breakpoint), collapse to a round icon-only button
        so it doesn't stretch across the screen and overlap content. Full text
        label only shows from sm breakpoint upward.
      */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5 rounded-full bg-dark-900/90 border border-cyber-cyan/40 text-cyber-cyan hover:bg-dark-850 text-xs font-mono font-semibold shadow-glow-cyan flex items-center justify-center sm:gap-2 backdrop-blur-md"
        aria-label="Recruiter quick overview assistant"
      >
        <IoHelpCircleOutline className="text-lg sm:text-base animate-pulse" />
        <span className="hidden sm:inline">NEED A QUICK OVERVIEW?</span>
      </motion.button>
    </div>
  );
}