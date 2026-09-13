import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import MagneticButton from './UI/MagneticButton';
import AnimatedCounter from './UI/AnimatedCounter';
import {
  IoBriefcaseOutline,
  IoCodeSlashOutline,
} from 'react-icons/io5';
import {
  SiOpenjdk,
  SiSpringboot,
  SiReact,
  SiMysql,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function About() {
  const imageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: y * -14,
      y: x * 14,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const corePills = [
    { name: 'Java', icon: SiOpenjdk, color: '#f89820' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
    { name: 'ReactJS', icon: SiReact, color: '#61dafb' },
    { name: 'REST APIs', icon: TbApi, color: '#38bdf8' },
    { name: 'MySQL', icon: SiMysql, color: '#00758f' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-dark-950 overflow-hidden border-t border-slate-800/60"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="// PROFESSIONAL PROFILE"
          title="ENGINEER. BUILDER. PROBLEM SOLVER."
          subtitle="Practical Java Full Stack Developer building reliable systems from relational database schemas to interactive client interfaces."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">

          {/* LEFT: DIGITAL ID PHOTO CARD WITH 3D TILT */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[380px] group cursor-pointer"
            >
              {/* Outer Animated Glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-cyber-cyan/40 via-cyber-blue/30 to-cyber-purple/40 blur-2xl opacity-70 group-hover:opacity-100 animate-pulse transition-opacity duration-500 -z-20" />
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple opacity-40 blur-md group-hover:opacity-80 transition-opacity duration-500 -z-10" />

              {/* Premium Glass Card Container */}
              <div className="relative rounded-[2rem] p-2.5 sm:p-3 bg-gradient-to-b from-slate-800/95 via-dark-900/95 to-dark-950 border border-cyber-cyan/30 shadow-2xl backdrop-blur-xl overflow-hidden">

                {/* Moving Light Glare */}
                <motion.div
                  animate={{ x: ['-120%', '220%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-cyber-cyan/10 to-transparent skew-x-12 pointer-events-none z-20"
                />

                {/* Corner Tech Brackets */}
                <div className="absolute top-5 left-5 w-7 h-7 border-l-2 border-t-2 border-cyber-cyan/80 z-30 pointer-events-none" />
                <div className="absolute top-5 right-5 w-7 h-7 border-r-2 border-t-2 border-cyber-cyan/80 z-30 pointer-events-none" />
                <div className="absolute bottom-16 left-5 w-7 h-7 border-l-2 border-b-2 border-cyber-cyan/80 z-30 pointer-events-none" />
                <div className="absolute bottom-16 right-5 w-7 h-7 border-r-2 border-b-2 border-cyber-cyan/80 z-30 pointer-events-none" />

                {/* Image Frame */}
                <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/4.8] bg-dark-900 border border-slate-700/80">
                  {/*
                    TODO (STRONGLY RECOMMENDED): Replace /profile.jpeg with a clean,
                    well-lit professional headshot (plain background, natural daylight,
                    business-casual attire, sharp focus). The CSS filter below only
                    partially compensates for lighting/sharpness — it cannot fully
                    fix a low-quality source photo. Swapping the actual file is the
                    real fix.
                  */}
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Karthick K - Java Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{
                      filter: 'contrast(1.08) brightness(1.05) saturate(1.05)',
                    }}
                    loading="lazy"
                  />

                  {/* Cinematic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 via-transparent to-cyber-purple/15 mix-blend-screen pointer-events-none" />

                  {/* Scanning Light */}
                  <motion.div
                    animate={{ y: ['0%', '480%'] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] opacity-60 pointer-events-none"
                  />

                  {/* Status Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <div className="px-2.5 py-1 rounded-full bg-dark-950/80 border border-cyber-cyan/40 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-cyber-cyan font-semibold tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse shadow-glow-cyan" />
                      SYSTEM ONLINE
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-dark-950/80 border border-emerald-400/30 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-emerald-400">
                      06 / 06
                    </div>
                  </div>

                  {/* Photo Identification Footer */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className="text-white font-display font-bold text-xl sm:text-2xl leading-tight tracking-tight">
                          {PERSONAL_INFO.name}
                        </div>
                        <div className="text-cyber-cyan text-xs sm:text-sm font-mono font-semibold mt-0.5">
                          {PERSONAL_INFO.role}
                        </div>
                        <div className="text-slate-400 text-[10px] sm:text-[11px] font-mono mt-1">
                          Tamil Nadu, India • 6 Mos Experience
                        </div>
                      </div>

                      <div className="hidden sm:flex w-10 h-10 rounded-full border border-cyber-cyan/40 bg-dark-950/70 backdrop-blur-md items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-ping" />
                      </div>
                    </div>
                  </div>
                </div>

                {/*
                  Under-Card Verification Status
                  FIX: Was `flex items-center justify-between` on one line, which caused
                  "PROFILE VERIFIED" and "AVAILABLE FOR OPPORTUNITIES" to overlap/crowd
                  on narrow (~320px) mobile screens. Now stacks vertically on mobile
                  (flex-col) and goes side-by-side from the sm breakpoint up (sm:flex-row).
                */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-dark-850/90 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">PROFILE</span>
                    <span className="text-cyber-cyan">VERIFIED</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>AVAILABLE FOR OPPORTUNITIES</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* RIGHT: NARRATIVE & ANIMATED HEADLINE STATS */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Candidate Identity */}
            <div className="mb-4">
              <div className="text-xs font-mono text-cyber-cyan uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-cyber-cyan" />
                <span>CANDIDATE POSITIONING</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h3>

              <div className="text-lg sm:text-xl font-semibold text-cyber-blue font-display mt-1">
                {PERSONAL_INFO.role}
              </div>
            </div>

            {/* Experience & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-medium">
                6 Months Internship Experience
              </span>
              <span className="px-3 py-1 rounded-full bg-dark-850 border border-slate-700 text-slate-300 text-xs font-mono">
                Top Tech Developers + CRUD Academy
              </span>
              <span className="px-3 py-1 rounded-full bg-dark-850 border border-slate-700 text-slate-400 text-xs font-mono">
                Tamil Nadu, India
              </span>
            </div>

            {/* Applied Tech Stack */}
            <div className="mb-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2.5">
                // Core Applied Technologies:
              </div>
              <div className="flex flex-wrap gap-2">
                {corePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={pill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 border border-slate-800 text-xs font-mono text-slate-200 shadow-sm"
                    >
                      <Icon style={{ color: pill.color }} className="text-sm" />
                      <span className="font-semibold">{pill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Narrative (Clean, concise, references projects by name without repeating bullet points) */}
            <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Java Full Stack Developer with <strong>6 months of internship experience</strong> building
                full-stack applications end to end using <strong>Java, Spring Boot, REST APIs, MySQL and ReactJS</strong>.
              </p>

              <p>
                Hands-on delivery includes the full-stack <strong>Inventory Management System</strong> with transactional CRUD endpoints and core modules for the blockchain-based <strong>Farmer-to-Consumer Food Traceability System</strong>.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm font-mono border-l-2 border-cyber-cyan/60 pl-3">
                // Focuses on end-to-end reliability: clean database design, strict API contracts, and intuitive, responsive user experiences.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <MagneticButton
                variant="primary"
                onClick={() => scrollTo('skills')}
                className="px-5 py-2.5 text-sm"
              >
                <span>EXPLORE SKILLS</span>
                <IoCodeSlashOutline className="text-base text-dark-950" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 text-sm"
              >
                <span>VIEW PROJECTS</span>
                <IoBriefcaseOutline className="text-base text-cyber-cyan" />
              </MagneticButton>
            </div>

            {/* 4 Animated Headline Stat Counters (Single source of truth references) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-3.5 rounded-xl bg-dark-900/80 border border-slate-800/80 hover:border-cyber-cyan/30 transition-colors">
                <div className="text-lg sm:text-xl font-bold text-cyber-cyan font-mono">
                  <AnimatedCounter value="6 Months" />
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Internships
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-900/80 border border-slate-800/80 hover:border-cyber-blue/30 transition-colors">
                <div className="text-lg sm:text-xl font-bold text-cyber-blue font-mono">
                  <AnimatedCounter value="Top SQL 50" />
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  LeetCode
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-900/80 border border-slate-800/80 hover:border-cyber-purple/30 transition-colors">
                <div className="text-lg sm:text-xl font-bold text-cyber-purple font-mono">
                  <AnimatedCounter value="71%" />
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  NPTEL Java
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-900/80 border border-slate-800/80 hover:border-emerald-400/30 transition-colors">
                <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono">
                  <AnimatedCounter value="80%" />
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  MCA Degree
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}