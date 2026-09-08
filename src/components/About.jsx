
import React, { useEffect, useRef, useState } from 'react';

import { motion, useInView, animate } from 'framer-motion';

import { PERSONAL_INFO, STATS } from '../data/portfolioData';

import SectionHeading from './UI/SectionHeading';

import TiltCard from './UI/TiltCard';

import {
  IoCheckmarkCircle,
  IoCodeSlash,
  IoLayers,
  IoServer,
  IoShieldCheckmark,
  IoFlaskOutline,
} from 'react-icons/io5';

// --------------------------------------------------
// ANIMATED COUNT-UP FOR STAT VALUES
// --------------------------------------------------

function AnimatedStatValue({ value }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;

    const end = parseFloat(numStr);

    const decimals = numStr.includes('.')
      ? numStr.split('.')[1].length
      : 0;

    const controls = animate(0, end, {
      duration: 1.4,
      ease: 'easeOut',

      onUpdate(latest) {
        setDisplay(
          `${prefix}${latest.toFixed(decimals)}${suffix}`
        );
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

// --------------------------------------------------
// TILTING PROFILE PHOTO
// --------------------------------------------------

function TiltPhoto() {
  const ref = useRef(null);

  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const el = ref.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const px =
      (e.clientX - rect.left) /
        rect.width -
      0.5;

    const py =
      (e.clientY - rect.top) /
        rect.height -
      0.5;

    setRotate({
      x: py * -14,
      y: px * 14,
    });
  };

  const handleMouseLeave = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative flex-shrink-0 self-center sm:self-auto"
      style={{
        perspective: '800px',
      }}
    >
      {/* Glow ring behind photo */}

      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-cyber-cyan via-cyber-blue to-cyber-purple opacity-40 blur-md -z-10"
      />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-2 border-cyber-cyan/50 shadow-glow-cyan bg-dark-850 cursor-pointer"
      >
        <img
          src="/profile.jpeg"
          alt="Karthick K"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Online/status dot */}

      <span className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-dark-950 border-2 border-dark-950 flex items-center justify-center">
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />

          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyber-emerald" />
        </span>
      </span>
    </motion.div>
  );
}

// --------------------------------------------------
// COLOR-CODED HIGHLIGHT CARD SYSTEM
// --------------------------------------------------

const CARD_COLORS = [
  {
    text: 'text-cyber-cyan',
    border: 'border-cyber-cyan/30',
    bg: 'bg-cyber-cyan/10',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,242,254,0.12)]',
  },

  {
    text: 'text-cyber-purple',
    border: 'border-cyber-purple/30',
    bg: 'bg-cyber-purple/10',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]',
  },

  {
    text: 'text-cyber-blue',
    border: 'border-cyber-blue/30',
    bg: 'bg-cyber-blue/10',
    glow: 'group-hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]',
  },

  {
    text: 'text-cyber-emerald',
    border: 'border-cyber-emerald/30',
    bg: 'bg-cyber-emerald/10',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]',
  },

  {
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]',
  },

  {
    text: 'text-pink-400',
    border: 'border-pink-500/30',
    bg: 'bg-pink-500/10',
    glow: 'group-hover:shadow-[0_0_30px_rgba(244,114,182,0.12)]',
  },
];

export default function About() {
  const highlights = [
    {
      title: 'Spring Boot REST APIs',
      desc: 'REST controllers, service layers, custom exception handling, and API development.',
      icon: IoServer,
    },

    {
      title: 'ReactJS Interfaces',
      desc: 'Modern dynamic SPAs, state hooks, responsive styling, and API integration.',
      icon: IoCodeSlash,
    },

    {
      title: 'MySQL Databases',
      desc: 'Relational modeling, schema constraints, indexing, and complex SQL joins.',
      icon: IoLayers,
    },

    {
      title: 'API Testing with Postman',
      desc: 'Verifying endpoint payloads, response codes, auth headers, and performance.',
      icon: IoFlaskOutline,
    },

    {
      title: 'Full-Stack Development',
      desc: 'End-to-end implementation from database architecture to user interface.',
      icon: IoCheckmarkCircle,
    },

    {
      title: 'Blockchain Traceability',
      desc: 'Building blockchain-based traceability for farmer-to-consumer food products.',
      icon: IoShieldCheckmark,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background glow */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-blue/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 01. PROFILE OVERVIEW"
          title="About"
          highlight="Me"
          subtitle="Engineering reliable backend services, database architectures, and reactive interfaces."
        />

        {/* Narrative & Philosophy */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-10 items-stretch">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-12 relative overflow-hidden glass-panel p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            {/* Corner glow accents */}

            <div className="absolute -top-16 -left-16 w-56 h-56 bg-cyber-cyan/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-cyber-purple/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Top accent line */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-cyber-cyan via-cyber-purple to-transparent opacity-70"
            />

            <div className="relative z-10 min-w-0">
              {/* PROFILE PHOTO + INTRO HEADER */}

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 mb-7">
                <TiltPhoto />

                <div className="min-w-0 w-full text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-xs font-mono text-cyber-cyan">
                    <span>&gt; whoami</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display leading-tight break-words">
                    Java Full Stack Developer with 6 Months of Specialized Internship Experience
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base max-w-4xl">
                I am a dedicated Java Full Stack Developer from Tamil Nadu, India. Having completed 6 months of hands-on internship experience across full-stack and software development roles, I specialize in architecting end-to-end applications that bridge robust data persistence with dynamic user experiences.
              </p>

              {/* Highlight Quote Box */}

              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border-l-4 border-cyber-cyan text-slate-200 font-medium italic text-sm mb-6 w-full max-w-4xl overflow-hidden">
                "{PERSONAL_INFO.approach}"
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs font-mono text-slate-400">
                <span className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-800 break-words">
                  📍 Location:{' '}
                  <strong className="text-slate-200">
                    {PERSONAL_INFO.location}
                  </strong>
                </span>

                <span className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-800 break-words">
                  🎓 Degree:{' '}
                  <strong className="text-slate-200">
                    MCA (80%)
                  </strong>
                </span>

                <span className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-800 break-words">
                  ⚡ Focus:{' '}
                  <strong className="text-slate-200">
                    Spring Boot + ReactJS
                  </strong>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Competencies */}

        <div className="mb-12 sm:mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-4">
            // Core Engineering Competencies
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;

              const c =
                CARD_COLORS[
                  idx % CARD_COLORS.length
                ];

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className={`group relative overflow-hidden p-4 sm:p-5 rounded-2xl glass-card border border-slate-800/80 flex items-start gap-3 sm:gap-4 transition-all duration-300 ${c.glow}`}
                >
                  {/* Watermark number */}

                  <div className="absolute right-4 top-2 text-4xl font-black font-mono text-white/[0.03] select-none pointer-events-none">
                    0{idx + 1}
                  </div>

                  <div
                    className={`relative z-10 shrink-0 p-2.5 rounded-xl border ${c.border} ${c.bg} ${c.text} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-xl" />
                  </div>

                  <div className="relative z-10 min-w-0">
                    <h4
                      className={`text-sm font-bold text-white transition-colors group-hover:${c.text}`}
                    >
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-400 mt-1 leading-normal break-words">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Animated Statistics Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((stat, idx) => (
            <TiltCard
              key={stat.id}
              maxTilt={10}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                className="p-5 sm:p-6 rounded-2xl bg-dark-900/90 border border-slate-800 text-center flex flex-col justify-center min-h-[150px] h-full hover:border-cyber-cyan/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-gradient-cyber mb-1">
                  <AnimatedStatValue
                    value={stat.value}
                  />
                </div>

                <div className="text-xs font-bold text-white uppercase tracking-wider mb-1 break-words">
                  {stat.label}
                </div>

                <div className="text-[11px] text-slate-400 font-sans leading-tight break-words">
                  {stat.sublabel}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

