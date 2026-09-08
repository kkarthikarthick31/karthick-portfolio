import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { IoDocumentTextOutline } from 'react-icons/io5';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
  { id: 'coding', label: 'Coding' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-dark-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyber-cyan to-cyber-purple p-0.5 shadow-glow-cyan transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center font-display font-extrabold text-white text-sm">
                K
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-base text-white group-hover:text-cyber-cyan transition-colors">
                KARTHICK K
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-tight">
                JAVA FULL STACK
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 border border-cyber-cyan/40 shadow-glow-blue"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyber-cyan/50 rounded-xl transition-all shadow-sm group"
            >
              <IoDocumentTextOutline className="text-sm text-cyber-cyan group-hover:rotate-12 transition-transform" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-xs font-bold text-dark-950 bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:to-cyber-purple rounded-xl shadow-glow-cyan hover:shadow-cyan-500/50 hover:brightness-110 transition-all active:scale-95"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-cyber-cyan bg-slate-900/80 border border-slate-800 rounded-lg text-sm"
              title="Resume"
            >
              <IoDocumentTextOutline />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar — thin glowing line along the bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900/40 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple shadow-[0_0_8px_rgba(0,242,254,0.6)]"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 pt-24 pb-8 px-6 bg-dark-950/95 backdrop-blur-2xl flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest px-2">
                // Navigation
              </span>
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-left font-display text-base font-bold transition-all ${
                      isActive
                        ? 'bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan'
                        : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-slate-900 border border-slate-700 text-slate-200 flex items-center justify-center gap-2"
              >
                <IoDocumentTextOutline className="text-cyber-cyan text-base" />
                <span>Download / Preview Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 text-center text-sm font-bold rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-950 shadow-glow-cyan"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}