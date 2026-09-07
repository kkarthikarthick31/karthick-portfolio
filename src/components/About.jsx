import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import TiltCard from './UI/TiltCard';
import { IoCheckmarkCircle, IoCodeSlash, IoLayers, IoServer, IoShieldCheckmark } from 'react-icons/io5';

export default function About() {
  const highlights = [
    { title: "Spring Boot REST APIs", desc: "Production-ready controllers, service layers, custom exceptions, and DTO contracts.", icon: IoServer },
    { title: "ReactJS Interfaces", desc: "Modern dynamic SPAs, state hooks, responsive styling, and API integration.", icon: IoCodeSlash },
    { title: "MySQL Databases", desc: "Relational modeling, schema constraints, indexing, and complex SQL joins.", icon: IoLayers },
    { title: "API Testing with Postman", desc: "Verifying endpoint payloads, response codes, auth headers, and performance.", icon: IoCheckmarkCircle },
    { title: "Full-Stack Development", desc: "End-to-end implementation from database architecture to user interface.", icon: IoLayers },
    { title: "Blockchain Traceability", desc: "Architecting tamper-proof provenance networks for farm-to-consumer goods.", icon: IoShieldCheckmark },
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-cyber-cyan">
                <span>&gt; whoami</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
                Java Full Stack Developer with 6 Months of Specialized Internship Experience
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-base">
                I am a dedicated Java Full Stack Developer from Tamil Nadu, India. Having completed 6 months of hands-on internship experience across full-stack and software development roles, I specialize in architecting end-to-end applications that bridge robust data persistence with dynamic user experiences.
              </p>
              
              {/* Highlight Quote Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border-l-4 border-cyber-cyan text-slate-200 font-medium italic text-sm mb-6">
                "{PERSONAL_INFO.approach}"
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span className="px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-800">
                  📍 Location: <strong className="text-slate-200">{PERSONAL_INFO.location}</strong>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-800">
                  🎓 Degree: <strong className="text-slate-200">MCA (80%)</strong>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-800">
                  ⚡ Focus: <strong className="text-slate-200">Spring Boot + ReactJS</strong>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Technical Competencies Checklist */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-4 rounded-xl glass-card border border-slate-800/80 flex items-start gap-3.5 group"
                >
                  <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan group-hover:scale-110 transition-transform">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">
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
            <TiltCard key={stat.id} maxTilt={10}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-dark-900/90 border border-slate-800 text-center flex flex-col justify-center h-full hover:border-cyber-cyan/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-gradient-cyber mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-sans leading-tight">
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
