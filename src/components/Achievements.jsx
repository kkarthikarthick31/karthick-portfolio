import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import {
  IoRibbonOutline,
  IoShieldCheckmarkOutline,
  IoTrophyOutline,
  IoSchoolOutline,
  IoCheckmarkCircleOutline,
  IoArrowBackOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';

const ICON_MAP = {
  cyan: IoTrophyOutline,
  purple: IoSchoolOutline,
  amber: IoRibbonOutline,
  emerald: IoShieldCheckmarkOutline,
};

const COLOR_MAP = {
  cyan: {
    accent: 'text-cyber-cyan',
    border: 'border-cyber-cyan/30',
    bg: 'bg-cyber-cyan/10',
    glow: 'group-hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]',
    line: 'bg-cyber-cyan',
    ring: 'shadow-[0_0_0_rgba(34,211,238,0.5)]',
  },
  purple: {
    accent: 'text-cyber-purple',
    border: 'border-cyber-purple/30',
    bg: 'bg-cyber-purple/10',
    glow: 'group-hover:shadow-[0_0_35px_rgba(168,85,247,0.12)]',
    line: 'bg-cyber-purple',
    ring: 'shadow-[0_0_0_rgba(168,85,247,0.5)]',
  },
  amber: {
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    glow: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.12)]',
    line: 'bg-amber-400',
    ring: 'shadow-[0_0_0_rgba(245,158,11,0.5)]',
  },
  emerald: {
    accent: 'text-cyber-emerald',
    border: 'border-cyber-emerald/30',
    bg: 'bg-cyber-emerald/10',
    glow: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.12)]',
    line: 'bg-cyber-emerald',
    ring: 'shadow-[0_0_0_rgba(16,185,129,0.5)]',
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// --------------------------------------------------
// VERIFIED BADGE — one-time pulse ring when scrolled into view
// --------------------------------------------------

function VerifiedBadge({ colorLine, delay = 0 }) {
  return (
    <span className="relative flex items-center justify-center w-1.5 h-1.5">
      <motion.span
        initial={{ scale: 1, opacity: 0.7 }}
        whileInView={{ scale: [1, 2.8, 1], opacity: [0.7, 0, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.5, ease: 'easeOut' }}
        className={`absolute inline-flex w-full h-full rounded-full ${colorLine}`}
      />
      <span
        className={`relative w-1.5 h-1.5 rounded-full ${colorLine} shadow-[0_0_8px_currentColor]`}
      />
    </span>
  );
}

export default function Achievements() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 8
    );
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('article')?.offsetWidth || 360;
    el.scrollBy({
      left: direction * (cardWidth + 20),
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="achievements"
      className="relative py-28 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-cyber-cyan/5 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-2">
          <SectionHeading
            badge="// 08. RECOGNITION & CREDENTIALS"
            title="Certifications &"
            highlight="Achievements"
            subtitle="Credentials and milestones demonstrating continuous growth in full-stack development."
            className="mb-0"
          />

          {/* Scroll controls — desktop only */}
          <div className="hidden sm:flex items-center gap-2 mb-2">
            <button
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950/60 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all disabled:opacity-30 disabled:pointer-events-none"
            >
              <IoArrowBackOutline />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950/60 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all disabled:opacity-30 disabled:pointer-events-none"
            >
              <IoArrowForwardOutline />
            </button>
          </div>
        </div>

        {/* Achievement strip — horizontal scroll-snap */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = ICON_MAP[item.color] || IoTrophyOutline;
            const colors =
              COLOR_MAP[item.color] || COLOR_MAP.cyan;

            return (
              <motion.article
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
                className={`
                  group relative overflow-hidden shrink-0
                  snap-start
                  w-[85vw] xs:w-[360px] sm:w-[380px]
                  rounded-2xl
                  border border-slate-800/90
                  bg-slate-950/40
                  backdrop-blur-xl
                  p-6 sm:p-7
                  transition-all duration-300
                  ${colors.glow}
                `}
              >
                {/* Top accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.12 + 0.2,
                  }}
                  className={`
                    absolute top-0 left-0 right-0 h-[2px]
                    origin-left
                    ${colors.line}
                    opacity-60
                  `}
                />

                {/* Background number */}
                <div className="absolute right-5 top-4 text-6xl font-black font-mono text-white/[0.025] select-none pointer-events-none">
                  0{idx + 1}
                </div>

                <div className="relative z-10">

                  {/* Icon + credential label */}
                  <div className="flex items-start justify-between gap-4 mb-6">

                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className={`
                        w-14 h-14
                        rounded-2xl
                        flex items-center justify-center
                        border
                        ${colors.border}
                        ${colors.bg}
                        ${colors.accent}
                        text-2xl
                        transition-all duration-300
                      `}
                    >
                      <Icon />
                    </motion.div>

                    <span
                      className={`
                        inline-flex items-center gap-1.5
                        px-3 py-1.5
                        rounded-full
                        border
                        ${colors.border}
                        ${colors.bg}
                        ${colors.accent}
                        text-[10px]
                        sm:text-xs
                        font-mono
                        font-bold
                        tracking-wide
                      `}
                    >
                      <IoCheckmarkCircleOutline className="text-sm" />
                      {item.highlight}
                    </span>
                  </div>

                  {/* Category */}
                  <div
                    className={`
                      text-[10px]
                      font-mono
                      uppercase
                      tracking-[0.2em]
                      mb-2
                      ${colors.accent}
                      opacity-80
                    `}
                  >
                    // Credential / Milestone
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Organization + date */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-mono text-slate-400 mb-5">
                    <span>{item.organization}</span>

                    <span className="text-slate-700">
                      •
                    </span>

                    <span>{item.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-7">
                    {item.description}
                  </p>

                  {/* Bottom status */}
                  <div className="mt-7 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-500">
                      <VerifiedBadge colorLine={colors.line} delay={idx * 0.1} />
                      VERIFIED
                    </span>

                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-600">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Mobile scroll hint */}
        <p className="sm:hidden text-center text-[11px] font-mono text-slate-600 -mt-2 mb-2">
          ← swipe to explore →
        </p>

        {/* Bottom credential statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto mt-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 py-4 rounded-xl border border-slate-800/70 bg-slate-950/30 backdrop-blur-md">
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                // Credential Registry
              </p>
              <p className="text-sm text-slate-300 mt-1">
                Continuous learning • Technical recognition • Project experience
              </p>
            </div>

            <span className="text-[10px] font-mono text-slate-600">
              STATUS::ACTIVE
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}