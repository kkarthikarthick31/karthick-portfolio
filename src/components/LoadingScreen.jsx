import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoTerminalOutline, IoCloseOutline } from 'react-icons/io5';

const BOOT_LOGS = [
  { text: '> [SYSTEM_INIT] Initializing Karthick K — Java Full Stack Developer', delay: 100 },
  { text: '> [KERNEL] Loading runtime: Java 21 | Spring Boot | React | MySQL ... [OK]', delay: 600 },
  { text: '> [ARCHITECTURE] Mounting REST endpoints & relational persistence ... [OK]', delay: 1100 },
  { text: '> [STATUS] Core services online. Interface ready.', delay: 1600 },
];

export default function LoadingScreen({ onComplete }) {
  const [displayedLogs, setDisplayedLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const handleFinish = useCallback(() => {
    setIsDone(true);
    if (onComplete) onComplete();
  }, [onComplete]);

  // Handle ESC key to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  // Terminal boot timer sequence
  useEffect(() => {
    const timers = [];

    // Progressive logs reveal
    BOOT_LOGS.forEach((item, idx) => {
      const t = setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, item.text]);
      }, item.delay);
      timers.push(t);
    });

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 70);

    // Auto complete at ~2.3 seconds
    const endTimer = setTimeout(() => {
      handleFinish();
    }, 2350);

    timers.push(endTimer);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [handleFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="boot-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          onClick={handleFinish}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950/98 backdrop-blur-2xl px-4 cursor-pointer select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute w-[500px] h-[300px] bg-cyber-cyan/[0.07] rounded-full blur-[140px] pointer-events-none" />

          {/* Top Skip Notice */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleFinish();
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-800 bg-dark-900/80 hover:border-cyber-cyan/40 text-slate-400 hover:text-cyber-cyan text-xs font-mono transition-all flex items-center gap-1.5 backdrop-blur-md"
            >
              <span>SKIP</span>
              <span className="text-[10px] px-1 py-0.5 rounded bg-dark-850 text-slate-500 font-mono">ESC</span>
            </button>
          </div>

          {/* Terminal Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl rounded-2xl border border-slate-800 bg-dark-900/90 shadow-2xl shadow-cyan-950/20 overflow-hidden relative"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-dark-950/80 border-b border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-400 flex items-center gap-1.5 text-[11px]">
                  <IoTerminalOutline className="text-cyber-cyan" />
                  karthick-system // boot.sh
                </span>
              </div>
              <div className="text-[10px] text-cyber-cyan font-mono font-semibold tracking-wider">
                {progress}%
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs sm:text-sm space-y-2.5 min-h-[160px] text-left">
              {displayedLogs.map((log, i) => (
                <div
                  key={i}
                  className={
                    log.includes('[STATUS]')
                      ? 'text-emerald-400 font-bold'
                      : log.includes('Java Full Stack')
                      ? 'text-cyber-cyan font-semibold'
                      : 'text-slate-300'
                  }
                >
                  {log}
                </div>
              ))}

              {/* Blinking Terminal Cursor */}
              <div className="inline-flex items-center text-cyber-cyan font-bold">
                <span className="animate-pulse">_</span>
              </div>
            </div>

            {/* Progress Bar at Bottom */}
            <div className="h-1 w-full bg-dark-950 overflow-hidden border-t border-slate-800/60">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>

          {/* Subtext Prompt */}
          <div className="mt-4 text-[11px] font-mono text-slate-500">
            Click anywhere or press ESC to skip
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
