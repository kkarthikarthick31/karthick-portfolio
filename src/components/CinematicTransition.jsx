import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import MagneticButton from './UI/MagneticButton';
import { IoDocumentTextOutline, IoMailOutline } from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';

export default function CinematicTransition({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-dark-950 border-t border-b border-slate-800/80 overflow-hidden text-center flex items-center justify-center">
      {/* Background particles & atmospheric radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,254,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyber-purple/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Engineering Philosophy Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-mono tracking-widest text-cyber-cyan uppercase mb-6"
        >
          // ENGINEERING PHILOSOPHY
        </motion.div>

        {/* Personal tightened engineering quote */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight mb-8 max-w-3xl mx-auto"
        >
          “DISCIPLINED PROBLEM SOLVING, TYPE-SAFE ARCHITECTURE, AND RELIABLE DATA FLOW FROM DATABASE SCHEMA TO USER INTERFACE.”
        </motion.h2>

        {/* Candidate Identifier */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex flex-col items-center mb-6"
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-display tracking-wider">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-xs sm:text-sm font-mono text-cyber-blue tracking-widest uppercase mt-1">
            {PERSONAL_INFO.role}
          </div>
        </motion.div>

        {/* Call to Action Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl font-bold text-slate-300 font-display uppercase tracking-wider mb-10"
        >
          LET’S BUILD WHAT’S NEXT.
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            variant="primary"
            onClick={onOpenResume}
            className="px-6 py-3 text-xs font-semibold"
          >
            <IoDocumentTextOutline className="text-base text-dark-950" />
            <span>DOWNLOAD RESUME</span>
          </MagneticButton>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-slate-700 bg-dark-850 hover:border-cyber-cyan hover:text-white text-slate-300 text-xs font-mono font-medium transition-all flex items-center gap-2"
          >
            <SiGithub className="text-base" />
            <span>VIEW GITHUB</span>
          </a>

          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 rounded-xl border border-cyber-cyan/40 bg-cyber-cyan/10 hover:bg-cyber-cyan/20 text-cyber-cyan text-xs font-mono font-medium transition-all flex items-center gap-2"
          >
            <IoMailOutline className="text-base" />
            <span>CONTACT</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
