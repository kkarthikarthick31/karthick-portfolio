import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './UI/SectionHeading';
import {
  PROOF_POINTS,
  ECOSYSTEM_NODES,
  TECHNICAL_SKILLS,
} from '../data/portfolioData';
import {
  SiOpenjdk,
  SiSpringboot,
  SiReact,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiHibernate,
  SiSpring,
  SiJsonwebtokens,
} from 'react-icons/si';
import {
  TbApi,
  TbDatabase,
  TbNetwork,
  TbCheck,
  TbCode,
  TbTerminal2,
  TbServer2,
  TbBrowser,
  TbTools,
  TbBraces,
} from 'react-icons/tb';
import { IoCheckmarkCircle, IoInformationCircleOutline } from 'react-icons/io5';

const NODE_ICONS = {
  java: { icon: SiOpenjdk, color: '#f89820' },
  springboot: { icon: SiSpringboot, color: '#6db33f' },
  restapis: { icon: TbApi, color: '#38bdf8' },
  react: { icon: SiReact, color: '#61dafb' },
  mysql: { icon: SiMysql, color: '#00758f' },
  jpa: { icon: SiHibernate, color: '#8b5cf6' },
  hibernate: { icon: SiHibernate, color: '#b45309' },
  security: { icon: SiSpring, color: '#10b981' },
  jwt: { icon: SiJsonwebtokens, color: '#ec4899' },
  postgresql: { icon: SiPostgresql, color: '#336791' },
  jdbc: { icon: TbDatabase, color: '#0284c7' },
  javascript: { icon: SiJavascript, color: '#f7df1e' },
  postman: { icon: SiPostman, color: '#ff6c37' },
  git: { icon: SiGit, color: '#f05032' },
  github: { icon: SiGithub, color: '#ffffff' },
};

const PROOF_CARDS_DATA = [
  {
    skill: "JAVA",
    category: "Languages",
    detail: "Core language for backend controllers, business services, OOP models, and blockchain modules.",
    project: "Inventory System & Blockchain Traceability",
    icon: SiOpenjdk,
    color: "#f89820",
  },
  {
    skill: "SPRING BOOT",
    category: "Backend",
    detail: "Built REST API endpoints, service layer, dependency injection, and CRUD operations at Crud Academy.",
    project: "CRUD Academy Internship",
    icon: SiSpringboot,
    color: "#6db33f",
  },
  {
    skill: "REACTJS",
    category: "Frontend",
    detail: "Built responsive client interface, stock management views, and interactive state management.",
    project: "Inventory Management System",
    icon: SiReact,
    color: "#61dafb",
  },
  {
    skill: "MYSQL",
    category: "Database",
    detail: "Designed schemas, modeled product and transaction data at Top Tech Developers & Crud Academy.",
    project: "Both Internships & Systems",
    icon: SiMysql,
    color: "#00758f",
  },
  {
    skill: "REST APIS",
    category: "Backend",
    detail: "Developed CRUD endpoints, verified payload formats, status codes, and tested via Postman.",
    project: "Inventory System & CRUD Academy",
    icon: TbApi,
    color: "#38bdf8",
  },
  {
    skill: "SQL",
    category: "Database",
    detail: "LeetCode Top SQL 50 completed; complex multi-table joins, subqueries, aggregations, and query optimization.",
    project: "LeetCode Top SQL 50",
    icon: TbDatabase,
    color: "#a855f7",
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ecosystem'); // 'ecosystem', 'proof', 'stack'
  const [activeNode, setActiveNode] = useState('java');
  const [tooltipSkill, setTooltipSkill] = useState(null);

  const selectedNodeData = ECOSYSTEM_NODES.find((n) => n.id === activeNode) || ECOSYSTEM_NODES[0];

  const isConnected = (nodeId) => {
    if (activeNode === nodeId) return true;
    const current = ECOSYSTEM_NODES.find((n) => n.id === activeNode);
    if (current && current.connectsTo && current.connectsTo.includes(nodeId)) return true;
    const target = ECOSYSTEM_NODES.find((n) => n.id === nodeId);
    if (target && target.connectsTo && target.connectsTo.includes(activeNode)) return true;
    return false;
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-dark-950 border-t border-slate-800/60 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyber-blue/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="// TECHNICAL CREDIBILITY & ECOSYSTEM"
          title="SKILLS & ARCHITECTURE ECOSYSTEM"
          subtitle="Credibility-based engineering. Every skill is grounded in real-world implementation across production code, internships, and algorithm mastery — zero arbitrary self-ratings or progress bars."
        />

        {/* VIEW TOGGLE SELECTOR */}
        <div className="flex justify-center mt-10 mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-dark-900 border border-slate-800 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActiveTab('ecosystem')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'ecosystem'
                  ? 'bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 border border-cyber-cyan/40 text-cyber-cyan shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Node Graph (Java Core)
            </button>
            <button
              onClick={() => setActiveTab('proof')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'proof'
                  ? 'bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 border border-cyber-cyan/40 text-cyber-cyan shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Evidence & Proof Cards
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer hidden sm:inline-block ${
                activeTab === 'stack'
                  ? 'bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 border border-cyber-cyan/40 text-cyber-cyan shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Categorized Stack
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE TECH ECOSYSTEM (JAVA CENTER) */}
        {activeTab === 'ecosystem' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6"
          >
            {/* Visual Node Cloud */}
            <div className="lg:col-span-8 relative rounded-3xl p-6 sm:p-8 bg-dark-900/60 border border-slate-800 backdrop-blur-md min-h-[460px] flex flex-col justify-between overflow-hidden shadow-2xl">
              {/* Data Flow Banner at top */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <TbNetwork className="text-cyber-cyan text-base" />
                  ARCHITECTURAL DATA FLOW:
                </span>
                <span className="text-cyber-blue font-semibold hidden sm:inline">
                  JAVA → SPRING BOOT → REST APIS → REACT → DATABASE
                </span>
              </div>

              {/* CENTER NODE: JAVA */}
              <div className="flex flex-col items-center justify-center my-6">
                <motion.div
                  onMouseEnter={() => setActiveNode('java')}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeNode === 'java'
                      ? 'bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-dark-950 border-orange-500 shadow-[0_0_30px_rgba(248,152,32,0.35)] scale-110'
                      : 'bg-dark-850/90 border-slate-700 hover:border-orange-500/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <SiOpenjdk className="text-3xl text-orange-400" />
                    <div className="text-left">
                      <div className="text-base font-bold text-white font-display">JAVA</div>
                      <div className="text-[10px] font-mono text-orange-300">CORE EPICENTER</div>
                    </div>
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-orange-500 animate-ping" />
                </motion.div>
              </div>

              {/* SURROUNDING SATELLITE NODES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 z-10">
                {ECOSYSTEM_NODES.filter((n) => n.id !== 'java').map((node) => {
                  const iconObj = NODE_ICONS[node.id] || { icon: TbApi, color: '#38bdf8' };
                  const Icon = iconObj.icon;
                  const connected = isConnected(node.id);

                  return (
                    <motion.div
                      key={node.id}
                      onMouseEnter={() => setActiveNode(node.id)}
                      whileHover={{ scale: 1.05 }}
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                        activeNode === node.id
                          ? 'bg-cyber-cyan/15 border-cyber-cyan text-white shadow-glow-cyan'
                          : connected
                          ? 'bg-dark-850/90 border-slate-700 text-slate-200'
                          : 'bg-dark-900/40 border-slate-800/60 text-slate-500 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon style={{ color: iconObj.color }} className="text-base shrink-0" />
                        <span className="text-xs font-mono font-bold truncate">
                          {node.name}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">
                        {node.role}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Flow Guide Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 mt-4">
                <span>Hover over any node to inspect data flow</span>
                <span className="text-cyber-cyan font-semibold">15 Connected Components</span>
              </div>
            </div>

            {/* Live Node Inspection Card */}
            <div className="lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-dark-900/95 to-dark-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl text-left">
              <div className="text-[11px] font-mono text-cyber-cyan uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                // NODE INSPECTOR
              </div>

              <div className="flex items-center gap-3 my-4 pb-4 border-b border-slate-800">
                {(() => {
                  const iconObj = NODE_ICONS[selectedNodeData.id] || { icon: TbApi, color: '#38bdf8' };
                  const Icon = iconObj.icon;
                  return (
                    <div className="w-12 h-12 rounded-xl bg-dark-850 border border-slate-700 flex items-center justify-center">
                      <Icon style={{ color: iconObj.color }} className="text-2xl" />
                    </div>
                  );
                })()}

                <div>
                  <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight">
                    {selectedNodeData.name}
                  </h3>
                  <span className="text-xs font-mono text-cyber-blue">
                    {selectedNodeData.role}
                  </span>
                </div>
              </div>

              {/* Verification & Real-world Usage (Evidence, Not Arbitrary Claims) */}
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-slate-500 uppercase text-[10px] tracking-wider mb-1">
                    Architectural Layer
                  </div>
                  <div className="text-slate-200 capitalize font-medium">
                    {selectedNodeData.category} Tier
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 uppercase text-[10px] tracking-wider mb-1">
                    Connected Components
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedNodeData.connectsTo ? (
                      selectedNodeData.connectsTo.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 rounded bg-dark-850 border border-slate-800 text-[10px] text-cyber-cyan"
                        >
                          {c.toUpperCase()}
                        </span>
                      ))
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-dark-850 border border-slate-800 text-[10px] text-orange-400">
                        CONNECTED TO ALL TIERS
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="text-slate-500 uppercase text-[10px] tracking-wider mb-1">
                    Verification Ethos
                  </div>
                  <div className="flex items-center gap-1.5 text-cyber-cyan text-xs font-semibold">
                    <IoCheckmarkCircle className="text-base text-cyber-cyan shrink-0" />
                    <span>Verified in Project Codebase</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: EVIDENCE & PROOF CARDS (Clean, Credibility-Based, No Percentage Contradiction) */}
        {activeTab === 'proof' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          >
            {PROOF_CARDS_DATA.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-6 bg-dark-900/80 border border-slate-800 hover:border-cyber-cyan/40 shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-dark-850 border border-slate-800 flex items-center justify-center shadow-sm">
                          <Icon style={{ color: item.color }} className="text-xl" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white font-display tracking-tight uppercase">
                            {item.skill}
                          </h3>
                          <span className="text-[10px] font-mono text-slate-400">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Subtle Verified Badge with Tooltip */}
                      <div
                        className="relative cursor-help"
                        onMouseEnter={() => setTooltipSkill(item.skill)}
                        onMouseLeave={() => setTooltipSkill(null)}
                      >
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[11px] font-mono font-medium">
                          <TbCheck className="text-xs shrink-0" />
                          <span>Verified</span>
                        </div>

                        {tooltipSkill === item.skill && (
                          <div className="absolute right-0 bottom-full mb-2 w-48 p-2 rounded-lg bg-dark-950 border border-slate-700 text-[10px] font-mono text-slate-300 shadow-2xl z-20">
                            Verified through practical application in project source code.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Real-World Usage Sentence */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                      {item.detail}
                    </p>
                  </div>

                  {/* Implementation Context Bottom Strip (Clean, replaces repeated 100% FACTUAL text) */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-slate-500">CONTEXT</span>
                    <span className="text-cyber-blue font-medium truncate max-w-[190px]">
                      {item.project}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 3: CATEGORIZED STACK (Organized Reference) */}
        {activeTab === 'stack' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          >
            {Object.entries(TECHNICAL_SKILLS).map(([catKey, skills], idx) => {
              const categoryTitles = {
                languages: { title: "Languages", icon: TbTerminal2, color: "text-cyber-cyan" },
                backend: { title: "Backend & Frameworks", icon: TbServer2, color: "text-cyber-purple" },
                frontend: { title: "Frontend Development", icon: TbBrowser, color: "text-cyber-blue" },
                database: { title: "Databases & ORM", icon: TbDatabase, color: "text-emerald-400" },
                coreConcepts: { title: "Architecture & Concepts", icon: TbBraces, color: "text-amber-400" },
                tools: { title: "Tools & DevOps", icon: TbTools, color: "text-pink-400" },
              };

              const catInfo = categoryTitles[catKey] || { title: catKey, icon: TbCode, color: "text-slate-300" };
              const CatIcon = catInfo.icon;

              return (
                <div
                  key={catKey}
                  className="p-6 rounded-2xl bg-dark-900/80 border border-slate-800 text-left shadow-lg"
                >
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                    <CatIcon className={`text-xl ${catInfo.color}`} />
                    <h4 className="text-base font-bold text-white font-display uppercase tracking-tight">
                      {catInfo.title}
                    </h4>
                  </div>

                  <div className="space-y-2.5">
                    {skills.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between p-2 rounded-lg bg-dark-850/80 border border-slate-800/80 text-xs font-mono"
                      >
                        <span className="font-semibold text-slate-200">{s.name}</span>
                        <span className="text-[10px] text-slate-400 truncate max-w-[140px]">
                          {s.whereUsed}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

      </div>
    </section>
  );
}