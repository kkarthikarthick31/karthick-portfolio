import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import Hero3DScene from './Hero3DScene';
import MagneticButton from './UI/MagneticButton';
import {
  IoArrowDownOutline,
  IoDocumentTextOutline,
  IoSparklesOutline,
} from 'react-icons/io5';
import {
  SiOpenjdk,
  SiSpringboot,
  SiReact,
  SiMysql,
} from 'react-icons/si';
import { TbApi, TbCube } from 'react-icons/tb';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const stackIcons = [
    { name: 'Java', icon: SiOpenjdk, color: '#f89820' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
    { name: 'ReactJS', icon: SiReact, color: '#61dafb' },
    { name: 'MySQL', icon: SiMysql, color: '#00758f' },
    { name: 'REST APIs', icon: TbApi, color: '#38bdf8' },
    { name: 'Blockchain', icon: TbCube, color: '#a855f7' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND AMBIENT LIGHTING */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* CONNECTING LIGHT LINE — visually bridges text and 3D scene */}
      <div className="hidden lg:block absolute top-1/2 left-[46%] right-[38%] -translate-y-1/2 h-px -z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="h-full w-full bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_10px_rgba(0,242,254,0.9)]"
          animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN — MAIN HERO CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">

            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-medium tracking-wide mb-6 backdrop-blur-md w-fit shadow-glow-blue"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan" />
              </span>
              <span>{PERSONAL_INFO.statusBadge}</span>
            </motion.div>

            {/* Name / Main Heading — now with elegant display typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3"
            >
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight text-white font-display uppercase leading-[0.95] relative">
                <span className="relative inline-block">
                  {PERSONAL_INFO.name}
                  {/* Subtle gradient underglow behind the name */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                    className="absolute -bottom-2 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-cyber-cyan via-cyber-blue to-transparent"
                  />
                </span>
              </h1>

              <div className="mt-4 text-xl sm:text-2xl font-semibold font-display text-gradient-cyber tracking-wide">
                {PERSONAL_INFO.title}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-semibold text-slate-200 mt-3 mb-4 leading-snug"
            >
              "{PERSONAL_INFO.headline}"
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8"
            >
              {PERSONAL_INFO.subtext}
            </motion.p>

            {/* CORE TECHNOLOGY STACK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
                // Core Engineering Stack
              </div>

              <div className="flex flex-wrap gap-2.5">
                {stackIcons.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.35, delay: 0.5 + idx * 0.06 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-850/80 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm hover:border-cyber-cyan/40 hover:text-white hover:shadow-[0_0_16px_rgba(0,242,254,0.15)] transition-all group"
                    >
                      <Icon
                        className="text-sm transition-transform group-hover:scale-110"
                        style={{ color: tech.color }}
                      />
                      <span>{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* HERO CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* View Projects — now with shimmer sweep on hover */}
              <div className="relative group/btn">
                <motion.div
                  className="absolute -inset-[2px] rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'conic-gradient(from 0deg, #00f2fe, #38bdf8, #a855f7, #00f2fe)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <div className="relative">
                  <MagneticButton
                    variant="primary"
                    onClick={() => scrollTo('projects')}
                  >
                    <span>View My Projects</span>
                    <IoSparklesOutline className="text-base text-dark-950" />
                  </MagneticButton>
                </div>
              </div>

              {/* Download Resume */}
              <MagneticButton
                variant="secondary"
                onClick={onOpenResume}
              >
                <IoDocumentTextOutline className="text-cyber-cyan text-base" />
                <span>Download Resume</span>
              </MagneticButton>

              {/* Contact */}
              <button
                onClick={() => scrollTo('contact')}
                className="text-xs font-mono text-slate-400 hover:text-cyber-cyan transition-colors underline-offset-4 hover:underline px-2 py-2"
              >
                // Let's Work Together →
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — 3D HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 0.72, scale: 0.75 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center lg:-translate-y-2 lg:translate-x-8"
          >
            <div className="w-full max-w-[420px] relative">
              <Hero3DScene />

              {/* FLOATING SPRING BOOT BADGE */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 right-4 glass-panel px-3.5 py-2 rounded-xl border border-slate-700/60 shadow-lg text-[11px] font-mono flex items-center gap-2 pointer-events-none"
              >
                <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                <span className="text-slate-300">Spring Boot REST Core</span>
              </motion.div>

              {/* FLOATING BLOCKCHAIN BADGE */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 left-4 glass-panel px-3.5 py-2 rounded-xl border border-slate-700/60 shadow-lg text-[11px] font-mono flex items-center gap-2 pointer-events-none"
              >
                <div className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse" />
                <span className="text-slate-300">Blockchain Food Traceability</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL DOWN INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full flex justify-center mt-12"
        >
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyber-cyan transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase group-hover:text-cyber-cyan">
              Explore
            </span>
            <IoArrowDownOutline className="text-base animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}