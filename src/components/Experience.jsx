import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import { IoBriefcaseOutline, IoCalendarOutline, IoLocationOutline, IoRadioButtonOnOutline } from 'react-icons/io5';

// --------------------------------------------------
// SINGLE TIMELINE ITEM
// (separated so each card can track its own in-view state)
// --------------------------------------------------

function TimelineItem({ exp, index, isEven, isCurrent }) {
  const itemRef = useRef(null);
  const isActive = useInView(itemRef, { once: false, amount: 0.5 });

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col sm:flex-row items-start ${
        isEven ? 'sm:flex-row-reverse' : ''
      } gap-8 group`}
    >
      {/* Center Node Marker */}
      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
        {/* Outer glow ring — pulses when this entry is in view */}
        <motion.div
          animate={
            isActive
              ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }
              : { scale: 1, opacity: 0 }
          }
          transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-cyber-cyan"
        />

        <div
          className={`relative w-9 h-9 rounded-full bg-dark-950 border-2 flex items-center justify-center transition-all duration-500 group-hover:scale-125 ${
            isActive
              ? 'border-cyber-cyan shadow-[0_0_20px_rgba(0,242,254,0.6)]'
              : 'border-slate-700 shadow-none'
          }`}
        >
          <IoBriefcaseOutline
            className={`text-sm transition-colors duration-500 ${
              isActive ? 'text-cyber-cyan' : 'text-slate-500'
            }`}
          />
        </div>
      </div>

      {/* Empty Spacer Column for Desktop */}
      <div className="hidden sm:block sm:w-1/2" />

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-6"
      >
        <div
          className={`glass-card p-6 sm:p-8 rounded-2xl border relative transition-all duration-500 ${
            isActive
              ? 'border-cyber-cyan/50 shadow-[0_0_35px_-8px_rgba(0,242,254,0.15)]'
              : 'border-slate-800 hover:border-cyber-cyan/40'
          }`}
        >
          {/* Current Role ribbon */}
          {isCurrent && (
            <div className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-emerald/15 border border-cyber-emerald/40 text-[10px] font-mono font-bold text-cyber-emerald tracking-wide">
              <IoRadioButtonOnOutline className="text-[10px] animate-pulse" />
              CURRENT ROLE
            </div>
          )}

          {/* Date & Type Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyber-cyan">
              <IoCalendarOutline className="text-sm" />
              <span>{exp.period}</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-850 border border-slate-700/70 text-[11px] font-mono text-slate-300">
              {exp.duration} • {exp.type}
            </span>
          </div>

          {/* Role & Company */}
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyber-blue mt-1 mb-4">
            <span>{exp.company}</span>
            <span>•</span>
            <div className="flex items-center gap-1 text-slate-400 font-normal text-xs">
              <IoLocationOutline />
              <span>{exp.location}</span>
            </div>
          </div>

          {/* Overview */}
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Responsibilities list */}
          <div className="space-y-2 mb-6">
            <div className="text-[11px] font-mono text-cyber-cyan/70 uppercase tracking-widest">
              // Key Responsibilities & Contributions:
            </div>
            <ul className="space-y-1.5">
              {exp.responsibilities.map((resp, rIdx) => (
                <li key={rIdx} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                  <span className="text-cyber-cyan mt-1">▹</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
            {exp.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-dark-850 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// --------------------------------------------------
// EXPERIENCE SECTION
// --------------------------------------------------

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 03. CAREER TIMELINE"
          title="Professional"
          highlight="Experience"
          subtitle="Hands-on internship background delivering enterprise software, backend services, and distributed architectures."
        />

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* Vertical Drawing Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-slate-800">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="w-full bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-emerald shadow-[0_0_8px_rgba(0,242,254,0.4)]"
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-16">
            {EXPERIENCE_DATA.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={index}
                isEven={index % 2 === 0}
                isCurrent={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}