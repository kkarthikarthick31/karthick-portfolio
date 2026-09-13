import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import {
  IoCheckmarkCircleOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoRibbonOutline,
} from 'react-icons/io5';

export default function Experience() {
  // Default to the most recent role (id: 2, 2026) while rendering 2025 on the left and 2026 on the right
  const [activeExp, setActiveExp] = useState(2);

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-dark-900/60 border-t border-slate-800/60 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyber-cyan/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          eyebrow="// PROFESSIONAL JOURNEY"
          title="INTERNSHIP EXPERIENCE"
          subtitle="6 months of practical internship experience developing backend services, RESTful APIs, relational databases, and blockchain applications in Agile teams."
        />

        {/* TIMELINE HORIZONTAL / STEPPED NODE BAR: Earliest (2025) on left, Recent (2026) on right */}
        <div className="max-w-3xl mx-auto mt-14 mb-12">
          <div className="relative flex items-center justify-between">
            {/* Connecting Track Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-800 -z-0" />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan transition-all duration-500 -z-0"
              style={{ width: activeExp === 2 ? '100%' : '50%' }}
            />

            {EXPERIENCE_TIMELINE.map((item) => {
              const isSelected = activeExp === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveExp(item.id)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-sm transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br from-cyber-cyan to-cyber-blue text-dark-950 shadow-glow-cyan scale-110'
                        : 'bg-dark-850 border border-slate-700 text-slate-400 group-hover:border-cyber-cyan group-hover:text-white'
                    }`}
                  >
                    {item.year}
                  </div>
                  <span
                    className={`text-xs font-mono font-semibold mt-2 transition-colors ${
                      isSelected ? 'text-cyber-cyan' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {item.company}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {item.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE EXPERIENCE CARD DETAILS */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_TIMELINE.map((item) => {
            if (item.id !== activeExp) return null;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-6 sm:p-8 bg-dark-950 border border-slate-800/90 shadow-2xl relative overflow-hidden text-left"
              >
                {/* Recognition Badge if available */}
                {item.recognition && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium mb-4 shadow-sm">
                    <IoRibbonOutline className="text-sm shrink-0" />
                    <span>{item.recognition}</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyber-cyan font-mono mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <IoCalendarOutline className="text-cyber-blue" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-slate-500">
                      <IoLocationOutline />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Work Responsibilities */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    // Key Responsibilities & Deliverables:
                  </div>
                  <div className="space-y-3">
                    {item.work.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        <IoCheckmarkCircleOutline className="text-cyber-cyan text-base shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Applied */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">TECH:</span>
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-dark-850 border border-slate-700/80 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}