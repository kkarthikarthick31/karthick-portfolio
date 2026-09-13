import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './UI/SectionHeading';
import {
  TECHNICAL_SKILLS,
  ECOSYSTEM_NODES,
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
import { TbApi, TbDatabase, TbLock, TbNetwork } from 'react-icons/tb';

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

export default function TechEcosystem() {
  const [activeNode, setActiveNode] = useState('java');
  const [activeTab, setActiveTab] = useState('ecosystem');

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

        <SectionHeading
          eyebrow="// SYSTEM ARCHITECTURE"
          title="INTERACTIVE TECH ECOSYSTEM"
          subtitle="Explore the interconnected full-stack Java architecture. Hover over any node to inspect data flow, connected frameworks, and production application context."
        />

        {/* Top View Toggle */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-dark-900 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('ecosystem')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === 'ecosystem'
                  ? 'bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 border border-cyber-cyan/40 text-cyber-cyan shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Graph (Java Core)
            </button>
            <button
              onClick={() => setActiveTab('categorized')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === 'categorized'
                  ? 'bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 border border-cyber-cyan/40 text-cyber-cyan shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Categorized Stack
            </button>
          </div>
        </div>

        {activeTab === 'ecosystem' ? (
          /* ==================================================== */
          /* INTERACTIVE GRAPH VIEW                               */
          /* ==================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">

            {/* Visual Node Cloud */}
            <div className="lg:col-span-8 relative rounded-3xl p-8 bg-dark-900/60 border border-slate-800 backdrop-blur-md min-h-[460px] flex flex-col justify-between overflow-hidden shadow-2xl">

              {/* Data Flow Banner at top */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <TbNetwork className="text-cyber-cyan text-base" />
                  ARCHITECTURAL FLOW:
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
                      className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                        activeNode === node.id
                          ? 'bg-cyber-cyan/15 border-cyber-cyan text-white shadow-glow-cyan scale-105'
                          : connected
                          ? 'bg-dark-850/90 border-cyber-blue/40 text-slate-200 shadow-sm'
                          : 'bg-dark-950/70 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <Icon style={{ color: iconObj.color }} className="text-base shrink-0" />
                      <div className="text-left truncate">
                        <div className="text-xs font-bold truncate">{node.name}</div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">{node.role}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Legend */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>HOVER ANY NODE TO TRACE CONNECTIONS</span>
                <span className="text-cyber-cyan">ACTIVE: {selectedNodeData.name}</span>
              </div>
            </div>

            {/* DETAIL INSPECTION PANEL */}
            <div className="lg:col-span-4 rounded-3xl p-7 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-950 border border-slate-800 shadow-xl flex flex-col justify-between min-h-[460px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest px-2.5 py-1 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
                    // NODE INSPECTOR
                  </span>
                  <span className="text-xs font-mono text-slate-500 capitalize">
                    {selectedNodeData.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-850 border border-slate-800 flex items-center justify-center shadow-inner">
                    {(() => {
                      const iconObj = NODE_ICONS[selectedNodeData.id] || { icon: TbApi, color: '#38bdf8' };
                      const Icon = iconObj.icon;
                      return <Icon style={{ color: iconObj.color }} className="text-2xl" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight">
                      {selectedNodeData.name}
                    </h3>
                    <div className="text-xs font-mono text-cyber-blue font-medium">
                      {selectedNodeData.role}
                    </div>
                  </div>
                </div>

                {/* Connection List */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                    // Direct Architectural Connections:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNodeData.connectsTo ? (
                      selectedNodeData.connectsTo.map((targetId) => {
                        const targetNode = ECOSYSTEM_NODES.find((n) => n.id === targetId);
                        return (
                          <span
                            key={targetId}
                            onClick={() => setActiveNode(targetId)}
                            className="px-2.5 py-1 rounded bg-dark-850 border border-slate-700 text-xs font-mono text-slate-300 hover:border-cyber-cyan hover:text-white cursor-pointer transition-colors"
                          >
                            → {targetNode ? targetNode.name : targetId}
                          </span>
                        );
                      })
                    ) : (
                      <span className="text-xs font-mono text-slate-500">
                        Central core hub connecting all backend and data layers.
                      </span>
                    )}
                  </div>
                </div>

                {/* Application Context */}
                <div className="p-4 rounded-xl bg-dark-850/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedNodeData.id === 'java' &&
                    'Core object-oriented backend language powering Spring Boot services, enterprise MVC architecture, and blockchain supply chain blocks.'}
                  {selectedNodeData.id === 'springboot' &&
                    'Primary backend framework used to create dependency-injected microservices, configure REST endpoints, and orchestrate Hibernate ORM.'}
                  {selectedNodeData.id === 'restapis' &&
                    'Architected RESTful JSON communication between React frontend and Java backend, validated using Postman across full CRUD cycles.'}
                  {selectedNodeData.id === 'react' &&
                    'Built client-side user interfaces, single-page application views, and dynamic inventory management catalogs with state synchronization.'}
                  {selectedNodeData.id === 'mysql' &&
                    'Modeled relational schemas, defined constraints, handled product/transaction storage, and completed LeetCode Top SQL 50 query practice.'}
                  {!['java', 'springboot', 'restapis', 'react', 'mysql'].includes(selectedNodeData.id) &&
                    `Integrated directly into Karthick's full-stack applications to ensure secure authentication, persistent storage, and reproducible version control.`}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>EXPERIENCE LEVEL</span>
                <span className="text-cyber-cyan font-bold">PRACTICAL PRODUCTION</span>
              </div>
            </div>

          </div>
        ) : (
          /* ==================================================== */
          /* CATEGORIZED FULL STACK VIEW                          */
          /* ==================================================== */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Object.entries(TECHNICAL_SKILLS).map(([categoryKey, list]) => (
              <div
                key={categoryKey}
                className="rounded-2xl p-6 bg-dark-900/80 border border-slate-800 backdrop-blur-md shadow-lg"
              >
                <h3 className="text-sm font-mono font-bold text-cyber-cyan uppercase tracking-wider mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
                  <span>{categoryKey.replace(/([A-Z])/g, ' $1')}</span>
                </h3>

                <div className="space-y-3">
                  {list.map((item) => (
                    <div
                      key={item.name}
                      className="p-2.5 rounded-lg bg-dark-850/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white font-display">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono text-cyber-blue">
                          {item.whereUsed}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 font-sans">
                        {item.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
