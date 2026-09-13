import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { IoMailOutline, IoArrowUpOutline } from 'react-icons/io5';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-dark-950 border-t border-slate-900 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Left: KK Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center font-display font-black text-white text-xs">
              KK
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white font-display">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] text-slate-500">
                {PERSONAL_INFO.role}
              </div>
            </div>
          </div>

          {/* Center: Social & Email Links */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <SiGithub className="text-sm" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors flex items-center gap-1.5"
            >
               <FaLinkedin className="text-sm" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <IoMailOutline className="text-sm" />
              <span>Email</span>
            </a>
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-slate-500">© 2026 Karthick K</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 hover:border-cyber-cyan text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <IoArrowUpOutline className="text-sm" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}