import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { PROJECTS_DATA } from '../data/portfolioData';

import SectionHeading from './UI/SectionHeading';

import SupplyChain3D from './SupplyChain3D';

import MagneticButton from './UI/MagneticButton';

import {
  IoCheckmarkCircleOutline,
  IoSparklesOutline,
  IoCloseOutline,
  IoLayersOutline,
  IoArrowDownOutline,
  IoPulseOutline,
  IoCodeSlashOutline,
  IoShieldCheckmarkOutline,
  IoTerminalOutline,
  IoGitBranchOutline,
} from 'react-icons/io5';

import {
  SiGithub,
  SiReact,
  SiSpringboot,
  SiMysql,
} from 'react-icons/si';

import {
  TbApi,
  TbDatabase,
  TbServer2,
} from 'react-icons/tb';


// ============================================================
// PREMIUM INTERACTIVE ARCHITECTURE VISUALIZER
// ReactJS → REST APIs → Spring Boot → JPA/Hibernate → MySQL
// ============================================================

function ArchitectureVisualizer({ architecture }) {
  const [activeStep, setActiveStep] = useState(1);

  const layerIcons = {
    react: SiReact,
    api: TbApi,
    spring: SiSpringboot,
    database: TbDatabase,
    mysql: SiMysql,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Outer Glow */}
      <div className="absolute -inset-1 rounded-[1.4rem] bg-gradient-to-r from-cyber-cyan/20 via-cyber-blue/10 to-cyber-purple/20 blur-xl opacity-70 pointer-events-none" />

      <div className="relative rounded-[1.4rem] p-5 sm:p-6 bg-dark-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl overflow-hidden">

        {/* Moving Light */}
        <motion.div
          className="absolute top-0 left-0 w-40 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-80"
          animate={{
            x: ['-100%', '700%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 mb-5 border-b border-slate-800/80">
          <span className="flex items-center gap-2 text-xs font-mono text-cyber-cyan font-bold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan" />
            </span>

            <IoLayersOutline className="text-base" />

            INTERACTIVE ARCHITECTURE
          </span>

          <span className="text-[10px] font-mono text-slate-500 tracking-wider">
            CLICK LAYER TO TRACE
          </span>
        </div>

        {/* Layer Stack */}
        <div className="space-y-2 relative">
          {architecture.map((item, index) => {
            const Icon = layerIcons[item.icon] || TbServer2;
            const isSelected = activeStep === item.step;

            return (
              <div key={item.step} className="relative">

                <motion.div
                  onClick={() => setActiveStep(item.step)}
                  whileHover={{
                    scale: 1.015,
                    x: 3,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  className={`
                    group relative overflow-hidden
                    p-4 rounded-xl
                    border
                    transition-all duration-300
                    cursor-pointer
                    flex items-center justify-between
                    ${
                      isSelected
                        ? 'bg-cyber-cyan/[0.08] border-cyber-cyan/70 text-white shadow-glow-cyan'
                        : 'bg-dark-850/70 border-slate-800/80 text-slate-300 hover:border-cyber-blue/40'
                    }
                  `}
                >

                  {/* Selected Moving Glow */}
                  {isSelected && (
                    <motion.div
                      className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyber-cyan/10 to-transparent"
                      animate={{
                        x: ['-150%', '500%'],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  )}

                  <div className="relative flex items-center gap-3.5">

                    <div
                      className={`
                        w-10 h-10 rounded-xl
                        flex items-center justify-center
                        text-lg
                        transition-all duration-300
                        ${
                          isSelected
                            ? 'bg-cyber-cyan text-dark-950 shadow-lg shadow-cyan-500/20'
                            : 'bg-dark-900 text-cyber-blue border border-slate-700 group-hover:border-cyber-blue/50'
                        }
                      `}
                    >
                      <Icon />
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider">
                        0{item.step} // {item.layer}
                      </div>

                      <div className="text-sm font-bold text-white font-display">
                        {item.name}
                      </div>
                    </div>
                  </div>

                  <div className="text-right hidden sm:block relative">
                    <span
                      className={`
                        text-[10px]
                        font-mono
                        px-2.5
                        py-1
                        rounded-md
                        border
                        ${
                          isSelected
                            ? 'text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/5'
                            : 'text-slate-500 border-slate-800 bg-dark-900'
                        }
                      `}
                    >
                      {item.highlight}
                    </span>
                  </div>
                </motion.div>

                {/* Connection */}
                {index < architecture.length - 1 && (
                  <div className="flex justify-center h-5 relative">
                    <motion.div
                      animate={
                        isSelected
                          ? {
                              opacity: [0.3, 1, 0.3],
                            }
                          : {
                              opacity: 0.3,
                            }
                      }
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                      }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-px h-3 bg-slate-700" />

                      <IoArrowDownOutline
                        className={`text-xs ${
                          isSelected
                            ? 'text-cyber-cyan'
                            : 'text-slate-700'
                        }`}
                      />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Layer Inspector */}
        {(() => {
          const current =
            architecture.find(
              (a) => a.step === activeStep
            ) || architecture[0];

          return (
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-5 p-4 rounded-xl bg-dark-950/90 border border-cyber-cyan/20 text-left font-mono relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-cyber-cyan shadow-glow-cyan" />

                <div className="flex items-center justify-between gap-3 text-[10px] sm:text-xs text-cyber-cyan mb-2 font-bold">
                  <span>
                    // ACTIVE LAYER: {current.layer}
                  </span>

                  <span className="text-slate-500 font-normal">
                    {current.highlight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {current.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          );
        })()}
      </div>
    </motion.div>
  );
}


// ============================================================
// PREMIUM PROJECT STATUS CHIP
// ============================================================

function StatusChip({ type = 'active' }) {
  const blockchain = type === 'blockchain';

  return (
    <div
      className={`
        inline-flex items-center gap-2
        px-3 py-1.5
        rounded-full
        border
        backdrop-blur-md
        ${
          blockchain
            ? 'border-cyber-purple/30 bg-cyber-purple/5 text-purple-300'
            : 'border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan'
        }
      `}
    >
      <span className="relative flex h-1.5 w-1.5">

        <span
          className={`
            animate-ping
            absolute
            inline-flex
            h-full
            w-full
            rounded-full
            opacity-75
            ${
              blockchain
                ? 'bg-cyber-purple'
                : 'bg-cyber-cyan'
            }
          `}
        />

        <span
          className={`
            relative
            inline-flex
            rounded-full
            h-1.5
            w-1.5
            ${
              blockchain
                ? 'bg-cyber-purple'
                : 'bg-cyber-cyan'
            }
          `}
        />
      </span>

      <span className="text-[9px] font-mono font-bold tracking-widest">
        {blockchain ? 'BLOCKCHAIN VERIFIED' : 'SYSTEM ACTIVE'}
      </span>
    </div>
  );
}


// ============================================================
// PREMIUM PROJECT CARD HEADER
// ============================================================

function ProjectHeader({
  number,
  eyebrow,
  status,
  purple = false,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">

      <div className="flex items-center gap-3">

        <span
          className={`
            text-[10px]
            font-mono
            font-bold
            tracking-[0.25em]
            ${
              purple
                ? 'text-cyber-purple'
                : 'text-cyber-cyan'
            }
          `}
        >
          PROJECT {number}
        </span>

        <span className="h-px w-8 bg-slate-700" />

        <span
          className={`
            text-[10px]
            font-mono
            uppercase
            tracking-widest
            ${
              purple
                ? 'text-purple-400'
                : 'text-cyber-blue'
            }
          `}
        >
          {eyebrow}
        </span>
      </div>

      {status}
    </div>
  );
}


// ============================================================
// MAIN PROJECTS SECTION
// ============================================================

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const inventoryProject = PROJECTS_DATA[0];
  const traceabilityProject = PROJECTS_DATA[1];

  return (
    <section
      id="projects"
      className="
        relative
        py-24 sm:py-32
        bg-dark-950
        border-t border-slate-800/60
        overflow-hidden
      "
    >

      {/* ================================================== */}
      {/* CINEMATIC BACKGROUND */}
      {/* ================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.04, 0.07, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            top-[10%]
            left-[10%]
            w-[500px]
            h-[500px]
            bg-cyber-blue
            rounded-full
            blur-[160px]
          "
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.04, 0.07, 0.04],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            bottom-[10%]
            right-[5%]
            w-[500px]
            h-[500px]
            bg-cyber-purple
            rounded-full
            blur-[160px]
          "
        />
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================================================== */}
        {/* SECTION HEADING */}
        {/* ================================================== */}

        <SectionHeading
          eyebrow="// PRODUCTION-GRADE SYSTEMS"
          title="PROJECTS THAT SOLVE REAL PROBLEMS"
          subtitle="Engineered end to end with Java, Spring Boot, ReactJS, and MySQL. Interactive production architecture diagrams and blockchain supply-chain mechanics."
        />


        {/* ================================================== */}
        {/* PROJECT 01 */}
        {/* ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            group
            mt-16
            relative
            rounded-[2rem]
            p-[1px]
            overflow-hidden
          "
        >

          {/* Animated Border */}
          <motion.div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-cyber-cyan
              via-cyber-blue
              to-cyber-cyan
              opacity-30
            "
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Card Glow */}
          <div
            className="
              absolute
              -inset-3
              rounded-[2rem]
              bg-cyber-cyan/10
              blur-3xl
              opacity-40
              group-hover:opacity-70
              transition-opacity
              duration-700
            "
          />

          {/* Main Card */}
          <div
            className="
              relative
              rounded-[2rem]
              p-6 sm:p-10
              bg-gradient-to-br
              from-dark-900
              via-dark-900/95
              to-dark-950
              border
              border-slate-800/90
              shadow-2xl
              overflow-hidden
            "
          >

            {/* Corner Light */}
            <div
              className="
                absolute
                top-0
                right-0
                w-80
                h-80
                bg-cyber-cyan/5
                rounded-full
                blur-3xl
                pointer-events-none
              "
            />

            {/* Project Header */}
            <ProjectHeader
              number="01"
              eyebrow="INVENTORY MANAGEMENT"
              status={<StatusChip />}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* LEFT */}
              <div className="lg:col-span-6 flex flex-col justify-center text-left">

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >

                  <div className="flex items-center gap-2 mb-3">

                    <IoTerminalOutline className="text-cyber-cyan" />

                    <span className="text-[10px] font-mono text-slate-500 tracking-widest">
                      JAVA FULL STACK / SYSTEM 01
                    </span>

                  </div>

                  <h3
                    className="
                      text-3xl
                      sm:text-5xl
                      font-extrabold
                      text-white
                      font-display
                      uppercase
                      tracking-tight
                      mb-3
                    "
                  >
                    {inventoryProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-cyber-blue mb-5">
                    {inventoryProject.subtitle}
                  </p>

                </motion.div>


                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans max-w-xl">
                  {inventoryProject.description}
                </p>


                {/* Tech Stack */}
                <div className="mb-6">

                  <div className="text-[10px] font-mono text-slate-500 tracking-widest mb-3">
                    // TECHNOLOGY STACK
                  </div>

                  <div className="flex flex-wrap gap-2">

                    {inventoryProject.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{
                          y: -2,
                          borderColor: 'rgba(56,189,248,0.5)',
                        }}
                        className="
                          px-3
                          py-1.5
                          rounded-lg
                          bg-dark-850/80
                          border border-slate-700
                          text-xs
                          font-mono
                          text-slate-200
                          transition-colors
                        "
                      >
                        {tech}
                      </motion.span>
                    ))}

                  </div>
                </div>


                {/* Features */}
                <div className="space-y-2.5 mb-8">

                  {inventoryProject.features
                    .slice(0, 4)
                    .map((feature, idx) => (

                      <motion.div
                        key={idx}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: idx * 0.08,
                        }}
                        className="
                          flex
                          items-start
                          gap-2.5
                          text-xs
                          sm:text-sm
                          text-slate-300
                        "
                      >

                        <IoCheckmarkCircleOutline
                          className="
                            text-cyber-cyan
                            text-base
                            shrink-0
                            mt-0.5
                          "
                        />

                        <span>{feature}</span>

                      </motion.div>

                    ))}

                </div>


                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3">

                  <MagneticButton
                    variant="primary"
                    onClick={() =>
                      setSelectedProject(inventoryProject)
                    }
                    className="
                      px-5
                      py-3
                      text-xs
                      font-semibold
                      shadow-glow-cyan
                    "
                  >

                    <span>VIEW PROJECT DETAILS</span>

                    <IoSparklesOutline className="text-dark-950" />

                  </MagneticButton>


                  <a
                    href={inventoryProject.githubProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/github
                      px-5
                      py-3
                      rounded-xl
                      border
                      border-slate-700
                      bg-dark-850/80
                      hover:border-cyber-cyan
                      hover:bg-cyber-cyan/5
                      hover:text-white
                      text-slate-300
                      text-xs
                      font-mono
                      transition-all
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <SiGithub
                      className="
                        text-sm
                        group-hover/github:text-cyber-cyan
                      "
                    />

                    <span>VIEW GITHUB</span>

                  </a>

                </div>

              </div>


              {/* RIGHT ARCHITECTURE */}
              <div className="lg:col-span-6">

                <ArchitectureVisualizer
                  architecture={inventoryProject.architecture}
                />

              </div>

            </div>


            {/* Bottom System Bar */}
            <div
              className="
                mt-8
                pt-4
                border-t
                border-slate-800/70
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
                text-[9px]
                font-mono
                text-slate-500
              "
            >

              <span className="flex items-center gap-2">

                <IoPulseOutline className="text-cyber-cyan" />

                BACKEND / FRONTEND / DATABASE CONNECTED

              </span>

              <span>
                STATUS:{' '}
                <span className="text-cyber-cyan">
                  OPERATIONAL
                </span>
              </span>

            </div>

          </div>

        </motion.div>


        {/* ================================================== */}
        {/* PROJECT 02 */}
        {/* ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            group
            mt-14
            relative
            rounded-[2rem]
            p-[1px]
            overflow-hidden
          "
        >

          {/* Purple Border */}
          <motion.div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-cyber-purple
              via-purple-500
              to-cyber-purple
              opacity-30
            "
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Glow */}
          <div
            className="
              absolute
              -inset-3
              rounded-[2rem]
              bg-cyber-purple/10
              blur-3xl
              opacity-40
              group-hover:opacity-70
              transition-opacity
              duration-700
            "
          />

          {/* Main Card */}
          <div
            className="
              relative
              rounded-[2rem]
              p-6 sm:p-10
              bg-gradient-to-br
              from-dark-900
              via-dark-900/95
              to-dark-950
              border
              border-slate-800/90
              shadow-2xl
              overflow-hidden
            "
          >

            {/* Purple Atmosphere */}
            <div
              className="
                absolute
                top-0
                right-0
                w-96
                h-96
                bg-cyber-purple/5
                rounded-full
                blur-3xl
                pointer-events-none
              "
            />


            <ProjectHeader
              number="02"
              eyebrow="BLOCKCHAIN SUPPLY CHAIN"
              purple
              status={
                <StatusChip type="blockchain" />
              }
            />


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* LEFT */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left">

                <div className="flex items-center gap-2 mb-3">

                  <IoGitBranchOutline className="text-cyber-purple" />

                  <span className="text-[10px] font-mono text-slate-500 tracking-widest">
                    BLOCKCHAIN / SYSTEM 02
                  </span>

                </div>


                <h3
                  className="
                    text-3xl
                    sm:text-5xl
                    font-extrabold
                    text-white
                    font-display
                    uppercase
                    tracking-tight
                    mb-3
                  "
                >
                  {traceabilityProject.title}
                </h3>


                <p
                  className="
                    text-xs
                    sm:text-sm
                    font-mono
                    text-purple-400
                    mb-5
                  "
                >
                  {traceabilityProject.subtitle}
                </p>


                <p
                  className="
                    text-slate-300
                    text-sm
                    sm:text-base
                    leading-relaxed
                    mb-6
                    font-sans
                  "
                >
                  {traceabilityProject.description}
                </p>


                {/* Tech Stack */}
                <div className="mb-6">

                  <div
                    className="
                      text-[10px]
                      font-mono
                      text-slate-500
                      tracking-widest
                      mb-3
                    "
                  >
                    // TECHNOLOGY STACK
                  </div>


                  <div className="flex flex-wrap gap-2">

                    {traceabilityProject.techStack.map(
                      (tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{
                            y: -2,
                          }}
                          className="
                            px-3
                            py-1.5
                            rounded-lg
                            bg-dark-850/80
                            border
                            border-slate-700
                            hover:border-cyber-purple/50
                            text-xs
                            font-mono
                            text-slate-200
                            transition-colors
                          "
                        >
                          {tech}
                        </motion.span>
                      )
                    )}

                  </div>

                </div>


                {/* Features */}
                <div className="space-y-2.5 mb-8">

                  {traceabilityProject.features
                    .slice(0, 4)
                    .map((feature, idx) => (

                      <motion.div
                        key={idx}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: idx * 0.08,
                        }}
                        className="
                          flex
                          items-start
                          gap-2.5
                          text-xs
                          sm:text-sm
                          text-slate-300
                        "
                      >

                        <IoCheckmarkCircleOutline
                          className="
                            text-cyber-purple
                            text-base
                            shrink-0
                            mt-0.5
                          "
                        />

                        <span>{feature}</span>

                      </motion.div>

                    ))}

                </div>


                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3">

                  <MagneticButton
                    variant="primary"
                    onClick={() =>
                      setSelectedProject(
                        traceabilityProject
                      )
                    }
                    className="
                      px-5
                      py-3
                      text-xs
                      font-semibold
                    "
                  >

                    <span>VIEW PROJECT DETAILS</span>

                    <IoSparklesOutline className="text-dark-950" />

                  </MagneticButton>


                  <a
                    href={
                      traceabilityProject.githubProfileUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5
                      py-3
                      rounded-xl
                      border
                      border-slate-700
                      bg-dark-850/80
                      hover:border-cyber-purple
                      hover:bg-cyber-purple/5
                      hover:text-white
                      text-slate-300
                      text-xs
                      font-mono
                      transition-all
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <SiGithub className="text-sm" />

                    <span>VIEW GITHUB</span>

                  </a>

                </div>

              </div>


              {/* RIGHT BLOCKCHAIN */}
              <div className="lg:col-span-7">

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="
                    relative
                    rounded-2xl
                    p-5 sm:p-6
                    bg-dark-900/90
                    border
                    border-slate-800
                    shadow-xl
                    overflow-hidden
                  "
                >

                  {/* Blockchain Glow */}
                  <div
                    className="
                      absolute
                      -inset-10
                      bg-cyber-purple/5
                      blur-3xl
                      pointer-events-none
                    "
                  />


                  {/* Blockchain Header */}
                  <div
                    className="
                      relative
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-2
                      pb-4
                      mb-2
                      border-b
                      border-slate-800/80
                    "
                  >

                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        text-cyber-purple
                        text-xs
                        font-mono
                        font-bold
                      "
                    >
                      <IoShieldCheckmarkOutline className="text-base" />

                      IMMUTABLE SUPPLY CHAIN
                    </span>


                    <span
                      className="
                        text-[10px]
                        text-slate-500
                        font-mono
                      "
                    >
                      06 VERIFIED NODES
                    </span>

                  </div>


                  {/* Node Indicator Bar */}
                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-between
                      py-3
                      px-2
                    "
                  >

                    {[1, 2, 3, 4, 5, 6].map(
                      (node) => (
                        <React.Fragment key={node}>

                          <motion.div
                            animate={{
                              boxShadow: [
                                '0 0 0px rgba(168,85,247,0)',
                                '0 0 14px rgba(168,85,247,0.6)',
                                '0 0 0px rgba(168,85,247,0)',
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: node * 0.25,
                            }}
                            className="
                              relative
                              w-2.5
                              h-2.5
                              rounded-full
                              bg-cyber-purple
                              shrink-0
                            "
                          />

                          {node < 6 && (
                            <div
                              className="
                                h-px
                                flex-1
                                mx-1
                                bg-gradient-to-r
                                from-cyber-purple/40
                                via-purple-400/20
                                to-cyber-purple/40
                              "
                            />
                          )}

                        </React.Fragment>
                      )
                    )}

                  </div>


                  <div className="relative">
                    <SupplyChain3D />
                  </div>


                  {/* Bottom Blockchain Status */}
                  <div
                    className="
                      relative
                      mt-3
                      pt-3
                      border-t
                      border-slate-800
                      flex
                      items-center
                      justify-between
                      text-[9px]
                      font-mono
                    "
                  >

                    <span className="text-slate-500">
                      HASH VALIDATION
                    </span>


                    <span className="text-emerald-400 flex items-center gap-1">

                      <IoCheckmarkCircleOutline />

                      VERIFIED

                    </span>

                  </div>

                </motion.div>

              </div>

            </div>


            {/* Bottom Status */}
            <div
              className="
                mt-8
                pt-4
                border-t
                border-slate-800/70
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
                text-[9px]
                font-mono
                text-slate-500
              "
            >

              <span>
                TRANSACTION FLOW: FARMER → SUPPLIER → BUYER → CONSUMER
              </span>

              <span>
                STATUS:
                <span className="text-cyber-purple ml-1">
                  VERIFIED
                </span>
              </span>

            </div>

          </div>

        </motion.div>

      </div>


      {/* ================================================== */}
      {/* PREMIUM PROJECT DETAILS MODAL */}
      {/* ================================================== */}

      <AnimatePresence>

        {selectedProject && (

          <div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              p-4
              sm:p-6
              overflow-y-auto
              bg-dark-950/85
              backdrop-blur-2xl
            "
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >

            {/* Modal Glow */}
            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                bg-cyber-cyan/5
                blur-[120px]
                pointer-events-none
              "
            />


            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                relative
                w-full
                max-w-4xl
                rounded-[2rem]
                p-6
                sm:p-8
                bg-gradient-to-br
                from-dark-900
                via-dark-900
                to-dark-950
                border
                border-slate-700
                shadow-2xl
                max-h-[90vh]
                overflow-y-auto
                text-left
              "
            >

              {/* Top Gradient */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyber-cyan
                  to-transparent
                "
              />


              {/* Close */}
              <button
                onClick={() =>
                  setSelectedProject(null)
                }
                className="
                  absolute
                  top-5
                  right-5
                  w-10
                  h-10
                  rounded-xl
                  bg-dark-850
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  hover:text-white
                  hover:border-cyber-cyan/50
                  hover:bg-cyber-cyan/5
                  transition-all
                "
              >
                <IoCloseOutline className="text-xl" />
              </button>


              {/* Modal Header */}
              <div className="pr-12">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-cyber-cyan
                    text-[10px]
                    font-mono
                    font-bold
                    tracking-widest
                    mb-2
                  "
                >
                  <IoCodeSlashOutline />

                  PROJECT EXPERIENCE / DETAILS
                </div>


                <span
                  className="
                    text-xs
                    font-mono
                    text-cyber-cyan
                    font-semibold
                    uppercase
                    tracking-wider
                  "
                >
                  {selectedProject.eyebrow}
                </span>


                <h3
                  className="
                    text-2xl
                    sm:text-4xl
                    font-bold
                    text-white
                    font-display
                    uppercase
                    tracking-tight
                    mt-1
                    mb-3
                  "
                >
                  {selectedProject.title}
                </h3>

              </div>


              {/* Role + Technologies */}
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  mb-7
                "
              >

                <span
                  className="
                    px-3
                    py-1.5
                    rounded-lg
                    bg-cyber-cyan/5
                    border
                    border-cyber-cyan/20
                    text-xs
                    font-mono
                    text-cyber-blue
                  "
                >
                  ROLE: {selectedProject.role}
                </span>


                {selectedProject.techStack.map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5
                        py-1.5
                        rounded-lg
                        bg-dark-850
                        border
                        border-slate-700
                        text-xs
                        font-mono
                        text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>


              {/* Problem / Solution */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-4
                  mb-7
                "
              >

                {/* Problem */}
                <div
                  className="
                    p-5
                    rounded-xl
                    bg-dark-950
                    border
                    border-slate-800
                    relative
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-px
                      bg-red-400/70
                    "
                  />

                  <div
                    className="
                      text-xs
                      font-mono
                      text-red-400
                      font-bold
                      uppercase
                      mb-2
                    "
                  >
                    // THE PROBLEM
                  </div>

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      text-slate-300
                      leading-relaxed
                      font-sans
                    "
                  >
                    {selectedProject.problem}
                  </p>

                </div>


                {/* Solution */}
                <div
                  className="
                    p-5
                    rounded-xl
                    bg-dark-950
                    border
                    border-slate-800
                    relative
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-px
                      bg-emerald-400/70
                    "
                  />

                  <div
                    className="
                      text-xs
                      font-mono
                      text-emerald-400
                      font-bold
                      uppercase
                      mb-2
                    "
                  >
                    // ENGINEERING SOLUTION
                  </div>

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      text-slate-300
                      leading-relaxed
                      font-sans
                    "
                  >
                    {selectedProject.solution}
                  </p>

                </div>

              </div>


              {/* Features */}
              <div className="mb-7">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-mono
                    text-slate-400
                    uppercase
                    tracking-wider
                    mb-4
                  "
                >

                  <IoCheckmarkCircleOutline className="text-cyber-cyan" />

                  CORE IMPLEMENTED FEATURES

                </div>


                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-2
                  "
                >

                  {selectedProject.features.map(
                    (feat, i) => (

                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          x: -8,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: i * 0.04,
                        }}
                        className="
                          flex
                          items-start
                          gap-2.5
                          p-3
                          rounded-lg
                          bg-dark-950/70
                          border
                          border-slate-800
                          text-xs
                          sm:text-sm
                          text-slate-300
                          font-sans
                        "
                      >

                        <IoCheckmarkCircleOutline
                          className="
                            text-cyber-cyan
                            text-base
                            shrink-0
                            mt-0.5
                          "
                        />

                        <span>{feat}</span>

                      </motion.div>

                    )
                  )}

                </div>

              </div>


              {/* Footer */}
              <div
                className="
                  pt-6
                  border-t
                  border-slate-800
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-4
                "
              >

                <a
                  href={
                    selectedProject.githubProfileUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    sm:w-auto
                    px-5
                    py-3
                    rounded-xl
                    bg-cyber-cyan
                    text-dark-950
                    text-xs
                    font-bold
                    font-mono
                    tracking-wide
                    hover:bg-cyber-blue
                    transition-colors
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >

                  <SiGithub className="text-sm" />

                  <span>
                    EXPLORE ON GITHUB
                  </span>

                </a>


                <button
                  onClick={() =>
                    setSelectedProject(null)
                  }
                  className="
                    text-xs
                    font-mono
                    text-slate-400
                    hover:text-white
                    transition-colors
                  "
                >
                  CLOSE WINDOW
                </button>

              </div>

            </motion.div>

          </div>

        )}

      </AnimatePresence>

    </section>
  );
}