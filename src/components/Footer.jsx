import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { IoArrowUpOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Articles', href: '#articles' },
    { label: 'Coding', href: '#coding' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-800/80 bg-dark-950 pt-16 pb-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            TOP SECTION
        ================================================== */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">

          {/* BRAND INFO */}

          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-purple p-0.5 shadow-glow-cyan">

                <div className="w-full h-full bg-dark-950 rounded-[6px] flex items-center justify-center font-display font-extrabold text-white text-xs">
                  K
                </div>

              </div>

              <span className="text-xl font-extrabold font-display tracking-wider text-white">
                {PERSONAL_INFO.name}
              </span>

            </div>

            <p className="text-xs font-mono text-cyber-cyan">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
            </p>

            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              "{PERSONAL_INFO.headline}"
            </p>

          </div>


          {/* ==================================================
              QUICK NAVIGATION
          ================================================== */}

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">

            {navLinks.map((link) => (

              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyber-cyan transition-colors"
              >
                {link.label}
              </a>

            ))}

          </div>


          {/* ==================================================
              SOCIAL LINKS
          ================================================== */}

          <div className="flex items-center gap-3">

            {/* GITHUB */}

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyber-cyan transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-base" />
            </a>


            {/* LINKEDIN */}

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyber-cyan transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-base text-[#0a66c2]" />
            </a>


            {/* EMAIL */}

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyber-cyan transition-all"
              aria-label="Direct Email"
            >
              <MdEmail className="text-base text-cyber-cyan" />
            </a>

          </div>

        </div>


        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">

          {/* COPYRIGHT */}

          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>


          {/* BACK TO TOP */}

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all group"
          >

            <span>
              Back to Top
            </span>

            <IoArrowUpOutline
              className="text-sm group-hover:-translate-y-0.5 transition-transform"
            />

          </button>

        </div>

      </div>

    </footer>
  );
}