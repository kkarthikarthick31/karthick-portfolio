import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import Hero3DScene from './Hero3DScene';
import MagneticButton from './UI/MagneticButton';
import {
  IoArrowDownOutline,
  IoDocumentTextOutline,
  IoMailOutline,
  IoSparklesOutline,
  IoCheckmarkCircle,
  IoCodeSlashOutline,
  IoTerminalOutline,
} from 'react-icons/io5';
import {
  SiOpenjdk,
  SiSpringboot,
  SiReact,
  SiMysql,
  SiGithub,
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

export default function Hero({ onOpenHRView }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Parallax tilt micro-interaction for the Hero 3D frame
  const handleCardMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: y * -12,
      y: x * 12,
    });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const floatingBadges = [
    { name: 'JAVA', icon: SiOpenjdk, color: '#f89820', pos: 'top-5 left-0 sm:-left-7' },
    { name: 'SPRING BOOT', icon: SiSpringboot, color: '#6db33f', pos: 'top-20 right-0 sm:-right-7' },
    { name: 'REACT', icon: SiReact, color: '#61dafb', pos: 'bottom-28 left-0 sm:-left-8' },
    { name: 'MYSQL', icon: SiMysql, color: '#00758f', pos: 'bottom-8 right-1 sm:-right-6' },
    { name: 'REST API', icon: TbApi, color: '#38bdf8', pos: '-top-5 right-1/4' },
  ];

  const technologies = [
    { name: 'Java', icon: SiOpenjdk, color: '#f89820' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
    { name: 'ReactJS', icon: SiReact, color: '#61dafb' },
    { name: 'MySQL', icon: SiMysql, color: '#00758f' },
    { name: 'REST APIs', icon: TbApi, color: '#38bdf8' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 pt-28 sm:pt-32 pb-16"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-cyber-cyan/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/5 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-cyber-purple/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none" />

      {/* Tech Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#1f293d12_1px,transparent_1px),linear-gradient(to_bottom,#1f293d12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_65%,transparent_100%)]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Top Status Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan text-xs font-mono tracking-wide backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-cyan" />
                </span>
                JAVA FULL STACK DEVELOPER
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR OPPORTUNITIES
              </div>
            </motion.div>

            {/* System Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-3 text-[10px] sm:text-xs font-mono tracking-[0.28em] text-slate-500 uppercase"
            >
              <IoTerminalOutline className="text-cyber-cyan" />
              FULL STACK ENGINEERING / 01
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.9] text-white font-display uppercase">
                {PERSONAL_INFO.name}
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="origin-left mt-5 w-full max-w-[560px] h-[3px] bg-gradient-to-r from-cyber-cyan via-cyber-blue to-transparent"
              />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 font-display leading-tight mt-6 mb-4"
            >
              {PERSONAL_INFO.heroHeadline}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 }}
              className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 mb-6"
            >
              {PERSONAL_INFO.heroSupporting}
            </motion.p>

            {/* High-level Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/80 border border-slate-800 hover:border-slate-600 transition-all shadow-sm"
                  >
                    <Icon className="text-sm" style={{ color: tech.color }} />
                    <span className="text-xs font-mono text-slate-300">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* High-Level Experience Strip (No repeated project details) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.43 }}
              className="relative mb-7 p-4 rounded-2xl border border-slate-800 bg-dark-900/70 backdrop-blur-md overflow-hidden max-w-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/60 to-transparent" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <IoCheckmarkCircle className="text-cyber-cyan text-base shrink-0" />
                  <span>6 Months Internship Experience</span>
                </div>
                <div className="text-[11px] font-mono text-cyber-blue font-semibold">
                  API → UI Delivery
                </div>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <MagneticButton
                variant="primary"
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 text-sm font-semibold"
              >
                <span>VIEW MY WORK</span>
                <IoSparklesOutline className="text-base" />
              </MagneticButton>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-cyber-cyan/40 bg-cyber-cyan/5 text-cyber-cyan hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all duration-300 text-sm font-medium"
              >
                <IoMailOutline className="text-base" />
                CONTACT ME
              </button>

              <a
                href={PERSONAL_INFO.resumeFile}
                download="Karthick_K_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-dark-900/80 text-slate-200 hover:border-cyber-cyan hover:text-cyber-cyan hover:bg-cyber-cyan/5 transition-all duration-300 text-sm font-medium backdrop-blur-md"
              >
                <IoDocumentTextOutline className="text-cyber-cyan text-base" />
                DOWNLOAD RESUME
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.58 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-slate-500"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyber-cyan transition-colors"
              >
                <SiGithub />
                <span>github.com/kkarthikarthick31</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyber-blue transition-colors"
              >
                <FaLinkedin className="text-slate-400" />
                <span>linkedin.com/in/kkarthi2004</span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT: 3D GRAPHIC WITH MOUSE PARALLAX TILT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[520px] group"
            >
              {/* Ambient Glow Behind Frame */}
              <div className="absolute inset-10 rounded-full bg-cyber-cyan/8 blur-[80px] pointer-events-none" />

              {/* 3D Frame Outer Glow */}
              <div className="relative rounded-[2rem]">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyber-cyan/20 via-transparent to-cyber-purple/20 blur-xl opacity-80" />

                {/* Main Frame Box */}
                <div className="relative rounded-[2rem] border border-slate-800/80 bg-dark-950/20 overflow-visible backdrop-blur-sm">
                  {/* Corner Accent Brackets */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-cyber-cyan/70 rounded-tl-md z-30 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-cyber-cyan/50 rounded-tr-md z-30 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyber-purple/50 rounded-bl-md z-30 pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-cyber-purple/70 rounded-br-md z-30 pointer-events-none" />

                  {/* 3D WebGL Scene */}
                  <Hero3DScene />

                  {/* Floating Tech Badges */}
                  {floatingBadges.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <motion.div
                        key={badge.name}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0],
                        }}
                        transition={{
                          opacity: { duration: 0.6, delay: 0.55 + index * 0.1 },
                          scale: { duration: 0.6, delay: 0.55 + index * 0.1 },
                          y: {
                            duration: 4 + index * 0.4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1,
                          },
                        }}
                        className={`absolute ${badge.pos} z-40 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/70 bg-dark-950/90 backdrop-blur-md shadow-xl pointer-events-none whitespace-nowrap`}
                      >
                        <Icon className="text-xs" style={{ color: badge.color }} />
                        <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wide text-slate-200">
                          {badge.name}
                        </span>
                      </motion.div>
                    );
                  })}

                  {/* Top Right System Status */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="absolute top-7 right-7 z-40 hidden sm:block"
                  >
                    <div className="px-3 py-2.5 rounded-xl border border-slate-800 bg-dark-950/85 backdrop-blur-xl shadow-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <IoCodeSlashOutline className="text-cyber-cyan text-sm" />
                        <span className="text-[9px] font-mono tracking-[0.18em] text-slate-500">
                          ENGINEERING CORE
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                        <span className="text-[10px] font-mono font-bold text-white">
                          SYSTEM ACTIVE
                        </span>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Bottom Centered Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{
                  opacity: { duration: 0.7, delay: 0.95 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2 rounded-xl border border-cyber-cyan/40 bg-dark-950/90 backdrop-blur-xl shadow-glow-cyan whitespace-nowrap"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-cyan" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wide text-white">
                  6 MONTHS INTERNSHIP EXPERIENCE
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex justify-center mt-16 sm:mt-20"
        >
          <button
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-2 cursor-pointer text-slate-500 hover:text-cyber-cyan transition-colors"
          >
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase">
              ENGINEER • BUILDER • PROBLEM SOLVER
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <IoArrowDownOutline className="text-cyber-cyan text-base" />
            </motion.div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}