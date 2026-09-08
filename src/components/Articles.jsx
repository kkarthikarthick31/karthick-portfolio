import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTICLES_DATA } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import {
  IoArrowForward,
  IoBookOutline,
  IoClose,
  IoTimeOutline,
} from 'react-icons/io5';

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
// ROADMAP STATUS TRACKER
// Small 3-stage pipeline indicator replacing the flat
// "UPCOMING" badge — reads as an active roadmap rather
// than a dead-end label.
//
// `stage` accepts: 'planned' | 'in-progress' | 'published'
// Defaults to 'planned' since ARTICLES_DATA currently
// has no status field — safe fallback, no data changes needed.
// --------------------------------------------------

const STAGES = ['Planned', 'In Progress', 'Published'];

function RoadmapStatus({ stage = 'planned', compact = false }) {
  const currentIndex = STAGES.findIndex(
    (s) => s.toLowerCase().replace(' ', '-') === stage
  );
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;

  return (
    <div className="flex items-center gap-1.5">
      {STAGES.map((label, i) => {
        const isDone = i < activeIndex;
        const isCurrent = i === activeIndex;

        return (
          <React.Fragment key={label}>
            <div className="flex items-center gap-1">
              <span className="relative flex items-center justify-center">
                {isCurrent && (
                  <motion.span
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inline-flex w-1.5 h-1.5 rounded-full bg-amber-400"
                  />
                )}
                <span
                  className={`relative w-1.5 h-1.5 rounded-full ${
                    isDone
                      ? 'bg-cyber-emerald'
                      : isCurrent
                      ? 'bg-amber-400'
                      : 'bg-slate-700'
                  }`}
                />
              </span>
              {!compact && (
                <span
                  className={`text-[9px] font-mono uppercase tracking-wide ${
                    isCurrent
                      ? 'text-amber-400 font-bold'
                      : isDone
                      ? 'text-cyber-emerald'
                      : 'text-slate-600'
                  }`}
                >
                  {label}
                </span>
              )}
            </div>
            {i < STAGES.length - 1 && (
              <span
                className={`w-3 h-px ${
                  i < activeIndex ? 'bg-cyber-emerald' : 'bg-slate-800'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="articles" className="relative py-28 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          badge="// 06. ARCHITECTURAL WRITINGS"
          title="Featured"
          highlight="Articles"
          subtitle="Planned technical writeups covering Java enterprise engineering, databases, security, and full-stack application architecture."
        />

        {/* Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ARTICLES_DATA.map((article, idx) => {
            return (
              <motion.article
                key={article.id}
                variants={itemVariants}
                className="relative group"
              >
                <div
                  className="
                    relative h-auto min-h-[350px] lg:h-[350px] lg:min-h-0
                    overflow-hidden rounded-3xl
                    border border-slate-800
                    bg-dark-900/70
                    backdrop-blur-xl
                    p-6 sm:p-8
                    transition-all duration-500
                    group-hover:border-cyber-purple/50
                    group-hover:-translate-y-1
                  "
                >
                  {/* Decorative number */}
                  <div className="absolute -top-8 -right-2 text-[110px] sm:text-[140px] font-black font-mono text-white/[0.025] select-none pointer-events-none">
                    0{idx + 1}
                  </div>

                  {/* Top accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.08,
                    }}
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-cyber-purple via-cyber-cyan to-transparent"
                  />

                  <div className="relative z-10 flex flex-col h-full">

                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center">
                          <IoBookOutline className="text-cyber-purple text-lg" />
                        </div>

                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-cyber-purple font-bold">
                          // {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Roadmap status tracker — replaces flat "UPCOMING" pill */}
                    <div className="mb-5">
                      <RoadmapStatus stage={article.stage || 'planned'} />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        font-display font-black
                        text-white
                        leading-tight
                        mb-4
                        transition-colors duration-300
                        group-hover:text-cyber-cyan
                        text-xl sm:text-2xl
                      "
                    >
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="
                        text-slate-400
                        leading-relaxed
                        mb-6
                        text-sm
                      "
                    >
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-7">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-lg bg-dark-850 text-slate-400 border border-slate-800 group-hover:border-slate-700 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-5 border-t border-slate-800/70 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-slate-500">
                        <IoTimeOutline />
                        <span>{article.readTime}</span>
                      </div>

                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        <span>View Blueprint</span>

                        <IoArrowForward className="text-cyber-cyan group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Article Blueprint Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
              />

              {/* Modal */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  y: 25,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-dark-900 border border-slate-700/70 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
              >

                {/* Modal Header */}
                <div className="flex items-start justify-between gap-5 mb-7">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-cyber-cyan uppercase font-bold">
                        // {selectedArticle.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white font-display leading-tight mb-3">
                      {selectedArticle.title}
                    </h3>

                    <RoadmapStatus stage={selectedArticle.stage || 'planned'} />
                  </div>

                  <button
                    onClick={() => setSelectedArticle(null)}
                    aria-label="Close article preview"
                    className="shrink-0 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <IoClose className="text-xl" />
                  </button>
                </div>

                {/* Blueprint Content */}
                <div className="space-y-5">

                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedArticle.excerpt}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="p-4 rounded-2xl bg-dark-850 border border-slate-800">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-cyber-purple mb-2">
                        // Category
                      </span>

                      <span className="text-sm font-semibold text-white">
                        {selectedArticle.category}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-850 border border-slate-800">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-cyber-purple mb-2">
                        // Roadmap Stage
                      </span>

                      <span className="text-sm font-semibold text-amber-400">
                        {STAGES[
                          STAGES.findIndex(
                            (s) =>
                              s.toLowerCase().replace(' ', '-') ===
                              (selectedArticle.stage || 'planned')
                          ) === -1
                            ? 0
                            : STAGES.findIndex(
                                (s) =>
                                  s.toLowerCase().replace(' ', '-') ===
                                  (selectedArticle.stage || 'planned')
                              )
                        ]}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-3">
                      // Topics
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {selectedArticle.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-cyber-cyan/10 bg-cyber-cyan/[0.03]">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      This entry represents a planned technical writeup topic.
                      No published article or external publication link is claimed here.
                    </p>
                  </div>
                </div>

                {/* Close */}
                <div className="flex justify-end mt-7">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-cyber-cyan text-dark-950 hover:bg-cyber-blue transition-colors"
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