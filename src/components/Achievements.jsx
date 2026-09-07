import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import TiltCard from './UI/TiltCard';
import { IoRibbonOutline, IoShieldCheckmarkOutline, IoTrophyOutline, IoSchoolOutline } from 'react-icons/io5';

const ICON_MAP = {
  cyan: IoTrophyOutline,
  purple: IoSchoolOutline,
  amber: IoRibbonOutline,
  emerald: IoShieldCheckmarkOutline,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-cyber-cyan/5 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 08. RECOGNITION & CREDENTIALS"
          title="Certifications &"
          highlight="Achievements"
          subtitle="Honors, competitive milestones, and formal certifications validating full-stack engineering proficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = ICON_MAP[item.color] || IoTrophyOutline;

            const colorClasses = {
              cyan: {
                badge: "bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/30",
                icon: "text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30",
                glow: "hover:border-cyber-cyan/50",
              },
              purple: {
                badge: "bg-cyber-purple/15 text-cyber-purple border-cyber-purple/30",
                icon: "text-cyber-purple bg-cyber-purple/10 border-cyber-purple/30",
                glow: "hover:border-cyber-purple/50",
              },
              amber: {
                badge: "bg-amber-500/15 text-amber-400 border-amber-500/30",
                icon: "text-amber-400 bg-amber-500/10 border-amber-500/30",
                glow: "hover:border-amber-500/50",
              },
              emerald: {
                badge: "bg-cyber-emerald/15 text-cyber-emerald border-cyber-emerald/30",
                icon: "text-cyber-emerald bg-cyber-emerald/10 border-cyber-emerald/30",
                glow: "hover:border-cyber-emerald/50",
              },
            }[item.color];

            return (
              <TiltCard key={item.id} maxTilt={8}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`glass-card p-8 rounded-2xl border border-slate-800/90 flex flex-col justify-between h-full ${colorClasses.glow} transition-all`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl shadow-sm ${colorClasses.icon}`}>
                        <Icon />
                      </div>
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${colorClasses.badge}`}>
                        {item.highlight}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white font-display mb-1.5">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-400 mb-4 font-mono">
                      {item.organization} • {item.date}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Verified Credential Tag */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>STATUS: VERIFIED CREDENTIAL</span>
                    <span className="text-slate-400">#RESUME-AUTHENTICATED</span>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
