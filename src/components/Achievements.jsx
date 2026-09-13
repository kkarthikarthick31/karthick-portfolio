import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_LIST, EDUCATION_LIST } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import AnimatedCounter from './UI/AnimatedCounter';
import {
  IoSchoolOutline,
} from 'react-icons/io5';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 sm:py-32 bg-dark-950 border-t border-slate-800/60 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-cyber-blue/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          eyebrow="// VERIFIABLE MILESTONES"
          title="PROOF OF PROGRESS"
          subtitle="The definitive record of technical certifications, algorithmic milestones, and academic foundation. 100% factual and verified."
        />

        {/* ==================================================== */}
        {/* 1. CERTIFICATIONS & RECOGNITIONS (Single Source)     */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mb-16">
          {ACHIEVEMENTS_LIST.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 bg-dark-900/80 border border-slate-800/90 hover:border-cyber-cyan/40 shadow-xl flex flex-col justify-between text-left transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-bold tracking-wider">
                    {item.badge.includes('71%') ? (
                      <>
                        <AnimatedCounter value="71%" /> SCORE
                      </>
                    ) : item.badge.includes('SQL') ? (
                      <AnimatedCounter value="TOP SQL 50" />
                    ) : (
                      item.badge
                    )}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight mb-1">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-cyber-blue mb-3">
                  {item.organization}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">// HIGHLIGHT</span>
                <span className="text-emerald-400 font-semibold">{item.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================================================== */}
        {/* 2. ACADEMIC FOUNDATION TIMELINE                      */}
        {/* ==================================================== */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-dark-850 border border-slate-800 flex items-center justify-center text-cyber-cyan">
              <IoSchoolOutline className="text-lg" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight">
                ACADEMIC FOUNDATION
              </h3>
              <div className="text-xs font-mono text-slate-500">
                // Rigorous Computer Science & Applications Degrees
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl p-6 bg-gradient-to-b from-dark-900/90 to-dark-950/90 border border-slate-800/90 hover:border-slate-700 shadow-lg text-left transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400">
                    {edu.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                    SCORE: <AnimatedCounter value={edu.score} />
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white font-display tracking-tight uppercase mb-1">
                  {edu.degree}
                </h4>

                <div className="text-xs sm:text-sm font-semibold text-cyber-blue font-mono mb-3">
                  {edu.institution}
                </div>

                <div className="text-xs text-slate-400 font-sans border-t border-slate-800/80 pt-3">
                  <span className="font-mono text-slate-500">Core Focus: </span>
                  {edu.highlights}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}