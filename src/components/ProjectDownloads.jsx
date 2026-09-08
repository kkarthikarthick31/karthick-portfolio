import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DOWNLOADABLE_PROJECTS } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import TiltCard from './UI/TiltCard';
import { IoCloudDownloadOutline, IoLogoGithub } from 'react-icons/io5';
import confetti from 'canvas-confetti';

export default function ProjectDownloads() {
  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleDownload = (proj) => {
    if (proj.downloadUrl && !proj.downloadUrl.startsWith('#')) {
      window.open(proj.downloadUrl, '_blank');
    } else {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      setDownloadNotice(`Direct archive for "${proj.title}" is mapped to PROJECT_DOWNLOAD_URL. You can attach your compiled ZIP or GitHub release tag.`);
      setTimeout(() => setDownloadNotice(null), 7000);
    }
  };

  const handleGithub = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="downloads" className="relative py-24 overflow-hidden bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 05. SOURCE PACKAGES"
          title="Downloadable"
          highlight="Projects"
          subtitle="Access repositories and standalone source archives for offline inspection and local deployment."
        />

        {downloadNotice && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-xs text-slate-200 flex items-center justify-between"
          >
            <span>{downloadNotice}</span>
            <button
              onClick={() => setDownloadNotice(null)}
              className="text-slate-400 hover:text-white ml-3 text-xs"
            >
              ✕
            </button>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOWNLOADABLE_PROJECTS.map((proj, idx) => (
            <TiltCard key={proj.id} maxTilt={10}>
              <div className="glass-card p-8 rounded-2xl border border-slate-800 flex flex-col justify-between h-full hover:border-cyber-cyan/50">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-850 text-cyber-cyan border border-slate-700/60 uppercase">
                      {proj.version}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {proj.fileSize}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyber-blue mb-3">
                    {proj.type}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-dark-850 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleGithub(proj.githubUrl)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <IoLogoGithub className="text-base text-cyber-cyan" />
                    <span>GitHub</span>
                  </button>

                  <button
                    onClick={() => handleDownload(proj)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-950 text-xs font-bold shadow-glow-cyan hover:brightness-110 flex items-center justify-center gap-2 transition-all"
                  >
                    <IoCloudDownloadOutline className="text-base" />
                    <span>Download ZIP</span>
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
