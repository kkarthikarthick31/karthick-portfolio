import React from "react";
import { motion } from "framer-motion";

import {
  SiOpenjdk,
  SiJavascript,
  SiMysql,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiJsonwebtokens,
  SiReact,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiApachemaven,
} from "react-icons/si";

import {
  TbCode,
  TbTerminal2,
  TbServer2,
  TbBrowser,
  TbDatabase,
  TbTools,
  TbBraces,
} from "react-icons/tb";

// --------------------------------------------------
// ICON MAP
// --------------------------------------------------

const ICON_MAP = {
  SiOpenjdk,
  SiJavascript,
  SiMysql,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiJsonwebtokens,
  SiReact,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiApachemaven,
};

// --------------------------------------------------
// CATEGORY COLOR + ICON SYSTEM
// (mirrors the palette used in Achievements.jsx)
// --------------------------------------------------

const CATEGORY_STYLE = [
  {
    icon: TbTerminal2,
    accent: "text-cyber-cyan",
    border: "border-cyber-cyan/30",
    bg: "bg-cyber-cyan/10",
    ring: "hover:shadow-[0_0_35px_rgba(0,242,254,0.12)]",
    line: "from-cyber-cyan to-transparent",
  },
  {
    icon: TbServer2,
    accent: "text-cyber-purple",
    border: "border-cyber-purple/30",
    bg: "bg-cyber-purple/10",
    ring: "hover:shadow-[0_0_35px_rgba(168,85,247,0.12)]",
    line: "from-cyber-purple to-transparent",
  },
  {
    icon: TbBrowser,
    accent: "text-cyber-blue",
    border: "border-cyber-blue/30",
    bg: "bg-cyber-blue/10",
    ring: "hover:shadow-[0_0_35px_rgba(56,189,248,0.12)]",
    line: "from-cyber-blue to-transparent",
  },
  {
    icon: TbDatabase,
    accent: "text-cyber-emerald",
    border: "border-cyber-emerald/30",
    bg: "bg-cyber-emerald/10",
    ring: "hover:shadow-[0_0_35px_rgba(16,185,129,0.12)]",
    line: "from-cyber-emerald to-transparent",
  },
  {
    icon: TbTools,
    accent: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    ring: "hover:shadow-[0_0_35px_rgba(245,158,11,0.12)]",
    line: "from-amber-400 to-transparent",
  },
  {
    icon: TbBraces,
    accent: "text-pink-400",
    border: "border-pink-500/30",
    bg: "bg-pink-500/10",
    ring: "hover:shadow-[0_0_35px_rgba(244,114,182,0.12)]",
    line: "from-pink-400 to-transparent",
  },
];

// --------------------------------------------------
// SKILLS DATA
// --------------------------------------------------

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: "SiOpenjdk" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "SQL", icon: "TbCode" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Spring Boot", icon: "SiSpringboot" },
      { name: "Spring MVC", icon: "SiSpring" },
      { name: "Spring Security", icon: "TbCode" },
      { name: "Spring Data JPA", icon: "TbCode" },
      { name: "Hibernate", icon: "SiHibernate" },
      { name: "REST APIs", icon: "TbCode" },
      { name: "JWT", icon: "SiJsonwebtokens" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "ReactJS", icon: "SiReact" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "JDBC", icon: "TbCode" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Maven", icon: "SiApachemaven" },
      { name: "VS Code", icon: "TbCode" },
      { name: "Eclipse", icon: "TbCode" },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { name: "OOP", icon: "TbCode" },
      { name: "Data Structures", icon: "TbCode" },
      { name: "Collections", icon: "TbCode" },
      { name: "MVC Architecture", icon: "TbCode" },
      { name: "Exception Handling", icon: "TbCode" },
      { name: "Authentication & Authorization", icon: "TbCode" },
    ],
  },
];

// --------------------------------------------------
// ANIMATION VARIANTS
// --------------------------------------------------

const categoryVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const skillItemsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const categoriesContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// --------------------------------------------------
// SKILLS COMPONENT
// --------------------------------------------------

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* SECTION HEADER */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-label">MY EXPERTISE</span>
          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>
          <p className="section-description">
            Technologies and tools I use to build reliable,
            scalable and modern applications.
          </p>
        </motion.div>

        {/* SKILL CATEGORIES */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={categoriesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {skills.map((group, groupIndex) => {
            const style =
              CATEGORY_STYLE[groupIndex % CATEGORY_STYLE.length];
            const CategoryIcon = style.icon;

            return (
              <motion.div
                key={group.category}
                variants={categoryVariants}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border border-slate-800/90 bg-slate-950/40
                  backdrop-blur-xl p-6 sm:p-7
                  transition-all duration-300
                  ${style.ring}
                `}
              >
                {/* Gradient top accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: groupIndex * 0.1 + 0.15 }}
                  className={`absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r ${style.line} opacity-70`}
                />

                {/* Background watermark number */}
                <div className="absolute right-5 top-4 text-6xl font-black font-mono text-white/[0.025] select-none pointer-events-none">
                  0{groupIndex + 1}
                </div>

                {/* CATEGORY TITLE */}
                <div className="relative z-10 flex items-center gap-3.5 mb-6">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      border text-xl transition-all duration-300
                      ${style.border} ${style.bg} ${style.accent}
                    `}
                  >
                    <CategoryIcon />
                  </motion.div>

                  <div>
                    <div
                      className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-0.5 ${style.accent} opacity-80`}
                    >
                      Category 0{groupIndex + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-tight">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {/* SKILL ITEMS */}
                <motion.div
                  className="relative z-10 grid grid-cols-2 gap-3"
                  variants={skillItemsVariants}
                >
                  {group.items.map((skill) => {
                    const Icon = ICON_MAP[skill.icon] || TbCode;

                    return (
                      <motion.div
                        key={`${group.category}-${skill.name}`}
                        variants={skillVariants}
                        whileHover={{ y: -6, scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`
                          flex items-center gap-3 min-h-[64px] p-3.5
                          rounded-xl border border-slate-800/80
                          bg-slate-900/50 backdrop-blur-sm
                          transition-all duration-250
                          hover:border-current hover:bg-slate-800/60
                          ${style.accent}
                        `}
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
                          transition={{ duration: 0.35 }}
                          className={`
                            w-9 h-9 shrink-0 rounded-lg flex items-center justify-center
                            border ${style.border} ${style.bg} ${style.accent}
                          `}
                        >
                          <Icon size={18} />
                        </motion.div>

                        <span className="text-[13px] sm:text-sm font-semibold text-slate-200 leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;