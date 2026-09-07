import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CODING_PROFILE } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import TiltCard from './UI/TiltCard';
import { SiLeetcode, SiMysql } from 'react-icons/si';
import { IoCheckmarkDoneCircle, IoCodeSlash, IoOpenOutline, IoTerminal } from 'react-icons/io5';

export default function CodingProfiles() {
  const [activeTopic, setActiveTopic] = useState(0);

  const sampleQueries = [
    {
      topic: "Joins",
      sql: `SELECT o.order_id, c.customer_name, SUM(p.price * oi.quantity) AS total_val\nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nJOIN order_items oi ON o.order_id = oi.order_id\nJOIN products p ON oi.product_id = p.product_id\nGROUP BY o.order_id, c.customer_name;`,
      note: "Multi-table relational aggregation with index scanning."
    },
    {
      topic: "Window Functions",
      sql: `SELECT employee_id, department_id, salary,\n       DENSE_RANK() OVER(PARTITION BY department_id ORDER BY salary DESC) as salary_rank\nFROM employee_salaries\nWHERE status = 'ACTIVE';`,
      note: "Partitioned ranking and leaderboards without self-joins."
    },
    {
      topic: "CTEs",
      sql: `WITH RegionalRevenue AS (\n    SELECT region, SUM(amount) AS revenue\n    FROM sales\n    GROUP BY region\n)\nSELECT region, revenue\nFROM RegionalRevenue\nWHERE revenue > (SELECT AVG(revenue) FROM RegionalRevenue);`,
      note: "Modular Common Table Expression for multi-step analytics."
    }
  ];

  return (
    <section id="coding" className="relative py-28 overflow-hidden bg-dark-950/50">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 07. ALGORITHMIC PROBLEM SOLVING"
          title="Code &"
          highlight="Problem Solving"
          subtitle="Advanced data querying, indexing strategies, and database optimization demonstrated through competitive SQL challenges."
        />

        <div className="max-w-5xl mx-auto">
          <TiltCard maxTilt={6}>
            <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 relative hover:border-amber-500/40">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 text-3xl shadow-lg">
                    <SiLeetcode />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-white font-display">
                        {CODING_PROFILE.platform}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-mono font-bold">
                        {CODING_PROFILE.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {CODING_PROFILE.statsBadge}
                    </p>
                  </div>
                </div>

                {/* Profile Link Button */}
                <a
                  href={CODING_PROFILE.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-2 transition-all w-fit group"
                >
                  <span>LeetCode Profile</span>
                  <IoOpenOutline className="text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 my-6 leading-relaxed">
                {CODING_PROFILE.summary} Demonstrated proficiency across complex SQL data structures, analytical window functions, query execution planning, and recursive hierarchies.
              </p>

              {/* 7 SQL Mastery Topics Grid */}
              <div className="mb-8">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  // Core SQL 50 Topics Mastered:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {CODING_PROFILE.topics.map((topic, i) => (
                    <div
                      key={topic.name}
                      className="p-3.5 rounded-xl bg-dark-850/80 border border-slate-800 flex flex-col justify-between hover:border-amber-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <IoCheckmarkDoneCircle className="text-amber-400 text-sm flex-shrink-0" />
                        <span className="text-xs font-bold text-white font-mono">{topic.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 leading-tight">
                        {topic.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive SQL Terminal Snippet */}
              <div className="rounded-2xl bg-dark-950 border border-slate-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-dark-900 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                      <IoTerminal className="text-amber-400" />
                      sql_query_simulator.sql
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {sampleQueries.map((q, idx) => (
                      <button
                        key={q.topic}
                        onClick={() => setActiveTopic(idx)}
                        className={`text-[10px] font-mono px-2.5 py-1 rounded transition-colors ${
                          activeTopic === idx
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {q.topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-6 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre className="text-cyber-cyan leading-relaxed">
                    <code>{sampleQueries[activeTopic].sql}</code>
                  </pre>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">
                    // Concept: {sampleQueries[activeTopic].note}
                  </div>
                </div>
              </div>

            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
