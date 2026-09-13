import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import Contact3DScene from './Contact3DScene';
import SectionHeading from './UI/SectionHeading';
import MagneticButton from './UI/MagneticButton';
import {
  IoMailOutline,
  IoDocumentTextOutline,
  IoCopyOutline,
  IoCheckmarkOutline,
  IoSendOutline,
} from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Opportunity / Inquiry for Karthick K (Full Stack Developer)`);
    const body = encodeURIComponent(
      `Hi Karthick,\n\nMy name is ${formData.name} (${formData.email}).\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-dark-950 border-t border-slate-800/60 overflow-hidden"
    >
      {/* 3D Digital Network Core in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none -z-0">
        <Contact3DScene />
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyber-blue/[0.05] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          eyebrow="// START A CONVERSATION"
          title="LET’S BUILD SOMETHING GREAT."
          subtitle="Open to entry-level Java Full Stack Developer opportunities. Direct recruiter inquiry or email communication."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-14">

          {/* ==================================================== */}
          {/* LEFT: DIRECT CONTACT CARDS & ACTIONS                 */}
          {/* ==================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="text-xs font-mono text-cyber-cyan uppercase tracking-widest block mb-2 font-semibold">
              // RECRUITER CONTACT
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight mb-3">
              Direct Communication
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-8">
              Whether you have an entry-level Java Full Stack Developer position, internship opportunity, or want to discuss my projects in detail, my inbox is always open.
            </p>

            {/* Email Direct Copy Box */}
            <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-800 backdrop-blur-md shadow-lg mb-6">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>PRIMARY EMAIL ADDRESS</span>
                <span className="text-emerald-400">FAST RESPONSE</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyber-cyan transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-700 hover:border-cyber-cyan text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <IoCheckmarkOutline className="text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <IoCopyOutline className="text-cyber-cyan" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-cyber-cyan hover:text-white text-slate-300 text-xs font-mono transition-all flex items-center gap-2.5 group"
              >
                <SiGithub className="text-base text-slate-400 group-hover:text-cyber-cyan" />
                <span className="truncate">GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-cyber-blue hover:text-white text-slate-300 text-xs font-mono transition-all flex items-center gap-2.5 group"
              >
                <FaLinkedin className="text-base text-slate-400 group-hover:text-cyber-blue" />
                <span className="truncate">LinkedIn Profile</span>
              </a>
            </div>

            {/* Secondary CTA: DOWNLOAD RESUME */}
            <div>
              <MagneticButton
                variant="secondary"
                onClick={onOpenResume}
                className="px-6 py-3 text-xs"
              >
                <IoDocumentTextOutline className="text-cyber-cyan text-base" />
                <span>DOWNLOAD ATS RESUME (PDF)</span>
              </MagneticButton>
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT: INTERACTIVE FORM (START A CONVERSATION)       */}
          {/* ==================================================== */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-dark-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl text-left">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-cyber-cyan">
                  <IoMailOutline className="text-base" />
                  START A CONVERSATION
                </span>
                <span className="text-slate-500">// DIRECT FORM</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins (Recruiting)"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. s.jenkins@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or what you'd like to discuss."
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-950 font-bold font-mono text-xs tracking-wider uppercase hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-glow-cyan"
                >
                  <IoSendOutline className="text-base" />
                  <span>START A CONVERSATION</span>
                </button>

                {sent && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center">
                    ✓ Opening mail client with your prefilled details...
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}