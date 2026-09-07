import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './UI/MagneticButton';
import { IoChatbubblesOutline, IoSparklesOutline } from 'react-icons/io5';

export default function CTA() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-10 sm:p-16 overflow-hidden border border-cyber-cyan/30 shadow-2xl glass-panel text-center"
        >
          {/* Animated Background Mesh Inside CTA */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 via-cyber-purple/10 to-cyber-blue/10 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyber-cyan/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyber-purple/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>Ready for New Opportunities</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
            Have an engineering challenge or project in mind?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            "Let's turn ideas into reliable, scalable applications from database to interface."
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              variant="primary"
              onClick={() => scrollTo('contact')}
            >
              <IoChatbubblesOutline className="text-lg text-dark-950" />
              <span>Start a Conversation</span>
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              onClick={() => scrollTo('projects')}
            >
              <IoSparklesOutline className="text-cyber-cyan text-lg" />
              <span>View Projects</span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
