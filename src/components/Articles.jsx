import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTICLES_DATA } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import TiltCard from './UI/TiltCard';
import { IoArrowForward, IoBookOutline, IoClose, IoTimeOutline } from 'react-icons/io5';

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="articles" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 06. ARCHITECTURAL WRITINGS"
          title="Featured"
          highlight="Articles"
          subtitle="In-depth technical breakdowns and design blueprints covering Java enterprise engineering and full-stack flows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article, idx) => (
            <TiltCard key={article.id} maxTilt={10}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 flex flex-col justify-between h-full group hover:border-cyber-purple/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyber-purple/15 text-cyber-purple border border-cyber-purple/30 font-semibold uppercase">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <IoTimeOutline />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-3 group-hover:text-cyber-cyan transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-850 text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full py-2.5 px-4 rounded-xl bg-dark-850 hover:bg-slate-850 border border-slate-700/70 hover:border-cyber-cyan/40 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 group-hover:bg-slate-800 transition-all"
                  >
                    <span>Read Article Blueprint</span>
                    <IoArrowForward className="text-xs text-cyber-cyan group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Article Blueprint Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-xl bg-dark-900 border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl z-10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-cyber-cyan uppercase font-bold">
                      // {selectedArticle.category}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display mt-1">
                      {selectedArticle.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  >
                    <IoClose className="text-xl" />
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed mb-6 space-y-3">
                  <p>
                    <strong className="text-white">Editorial Overview:</strong> {selectedArticle.excerpt}
                  </p>
                  <p className="text-slate-400">
                    This article outline documents real-world architectural workflows from Karthick's experience building full-stack applications with Spring Boot, MySQL, and ReactJS.
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2 text-xs font-semibold rounded-xl bg-cyber-cyan text-dark-950 hover:bg-cyber-blue transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
