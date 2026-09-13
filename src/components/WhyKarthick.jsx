import React from 'react';
import { motion } from 'framer-motion';
import { WHY_KARTHICK_CARDS } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import { TbLayersLinked, TbServer2, TbCpu, TbDatabaseSearch } from 'react-icons/tb';

const ICONS = {
  TbLayersLinked,
  TbServer2,
  TbCpu,
  TbDatabaseSearch,
};

export default function WhyKarthick() {
  return (
    <section
      id="why-karthick"
      className="relative py-24 sm:py-32 bg-dark-950 border-t border-slate-800/60 overflow-hidden"
    >
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyber-cyan/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          eyebrow="// VALUE PROPOSITION"
          title="WHY KARTHICK?"
          subtitle="Four core engineering pillars that make me a dependable, production-ready Full Stack contributor from day one."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {WHY_KARTHICK_CARDS.map((card, idx) => {
            const Icon = ICONS[card.iconName] || TbServer2;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-6 bg-gradient-to-b from-dark-900/90 to-dark-950/90 border border-slate-800 hover:border-cyber-cyan/50 shadow-lg hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Corner Index & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-2xl sm:text-3xl text-slate-600 group-hover:text-cyber-cyan transition-colors">
                      {card.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-dark-850 border border-slate-800 flex items-center justify-center text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-dark-950 transition-all duration-300 shadow-sm">
                      <Icon className="text-xl" />
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-cyber-blue uppercase tracking-wider mb-1.5 font-medium">
                    {card.highlight}
                  </div>

                  <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    "{card.description}"
                  </p>
                </div>

                {/* Bottom Pill */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">// PILLAR</span>
                  <span className="text-slate-300 group-hover:text-cyber-cyan transition-colors">
                    {card.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
