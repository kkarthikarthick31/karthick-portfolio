import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { IoDocumentTextOutline, IoFlashOutline } from 'react-icons/io5';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, onOpenResume, onOpenHRView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Scroll Depth Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-dark-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo / Monogram: KK */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyber-cyan to-cyber-purple p-0.5 shadow-glow-cyan transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center font-display font-black text-white text-sm tracking-wider">
                KK
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold tracking-wider text-sm sm:text-base text-white group-hover:text-cyber-cyan transition-colors">
                KARTHICK K
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-tight">
                JAVA FULL STACK
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (7 Ordered Sections) */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/90 shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyber-cyan/15 border border-cyber-cyan/40 shadow-glow-cyan"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right CTAs: Status Indicator + HR Quick View + Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            {/* Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* HR Quick View Trigger */}
            <button
              onClick={onOpenHRView}
              className="px-3.5 py-1.5 rounded-full bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <IoFlashOutline className="text-sm" />
              <span>HR QUICK VIEW</span>
            </button>

            {/* Download Resume Button */}
            <button
              onClick={onOpenResume}
              className="px-4 py-1.5 rounded-full bg-white text-dark-950 hover:bg-slate-200 text-xs font-mono font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <IoDocumentTextOutline className="text-sm" />
              <span>VIEW RESUME</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>

        </div>
      </header>

      {/* Mobile Sliding Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 bg-dark-950/95 border-b border-slate-800 backdrop-blur-2xl p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl font-mono text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30'
                      : 'text-slate-300 hover:text-white hover:bg-dark-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHRView();
                  }}
                  className="w-full py-2.5 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono font-semibold text-center"
                >
                  HR QUICK VIEW
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 rounded-xl bg-white text-dark-950 text-xs font-mono font-bold text-center"
                >
                  VIEW RESUME (PDF)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}