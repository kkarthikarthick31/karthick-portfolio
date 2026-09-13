import React from 'react';
import { motion } from 'framer-motion';
import { PROOF_POINTS } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { SiOpenjdk, SiSpringboot, SiReact, SiMysql } from 'react-icons/si';
import { TbApi, TbDatabase } from 'react-icons/tb';

const SKILL_ICONS = {
  JAVA: { icon: SiOpenjdk, color: '#f89820' },
  'SPRING BOOT': { icon: SiSpringboot, color: '#6db33f' },
  REACTJS: { icon: SiReact, color: '#61dafb' },
  MYSQL: { icon: SiMysql, color: '#00758f' },
  'REST APIS': { icon: TbApi, color: '#38bdf8' },
  SQL: { icon: TbDatabase, color: '#a855f7' },
};

export default function ProofNotClaims() {
  return (
    <section
      id="proof"
      className="relative py-24 sm:py-32 bg-dark-900/60 border-t border-slate-800/60 overflow-hidden"
    >
      {/* Background subtle glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-cyber-purple/[0.05] rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          eyebrow="// TECHNICAL CREDIBILITY"
          title="PROOF, NOT JUST CLAIMS."
          subtitle="No arbitrary skill percentages or self-assigned ratings. Real evidence of where each technology was implemented across production code, internships, and algorithmic problem-solving."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {PROOF_POINTS.map((item, idx) => {
            const iconObj = SKILL_ICONS[item.skill] || { icon: TbApi, color: '#38bdf8' };
            const Icon = iconObj.icon;

            return (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 bg-dark-950/90 border border-slate-800/90 hover:border-cyber-cyan/40 shadow-lg hover:shadow-[0_0_24px_rgba(0,242,254,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-dark-850 border border-slate-800 flex items-center justify-center shadow-sm">
                        <Icon style={{ color: iconObj.color }} className="text-lg" />
                      </div>
                      <h3 className="text-base font-bold text-white font-display tracking-tight uppercase">
                        {item.skill}
                      </h3>
                    </div>

                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2.5 py-1 rounded bg-dark-850 border border-slate-800">
                      {item.category}
                    </span>
                  </div>

                  {/* PROOF BADGE */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-bold tracking-wide mb-3 shadow-glow-cyan">
                    <IoCheckmarkCircleOutline className="text-sm shrink-0" />
                    <span>{item.proof}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>VERIFICATION</span>
                  <span className="text-cyber-blue font-medium">100% FACTUAL</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
