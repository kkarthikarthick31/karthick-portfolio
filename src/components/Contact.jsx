import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

// --------------------------------------------------
// FLOATING LABEL INPUT
// --------------------------------------------------

function FloatingField({ as = "input", label, name, value, onChange, type = "text", rows, required = true }) {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;
  const Tag = as;

  return (
    <div className="relative">
      <Tag
        type={as === "input" ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={as === "textarea" ? rows : undefined}
        placeholder=""
        className={`peer w-full ${
          as === "textarea" ? "resize-none" : ""
        } rounded-xl border border-white/10 bg-black/20 px-4 pt-6 pb-2.5 text-white outline-none transition-all focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10`}
      />

      <motion.label
        htmlFor={name}
        animate={{
          top: isFloating ? "10px" : as === "textarea" ? "22px" : "50%",
          y: isFloating ? "0%" : as === "textarea" ? "0%" : "-50%",
          fontSize: isFloating ? "11px" : "14px",
          color: isFocused ? "rgb(34 211 238 / 0.9)" : "rgb(107 114 128)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="pointer-events-none absolute left-4 font-mono tracking-wide"
      >
        {label}
      </motion.label>
    </div>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    window.location.href = `mailto:kkarthikarthick31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/kkarthikarthick31" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/kkarthi2004" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-cyan-400">
            // 09. LET'S CONNECT
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project, opportunity, or idea? Feel free to reach out.
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
        </motion.div>

        {/* CTA + Contact */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/30 sm:p-10"
          >
            {/* Top accent line — matches Articles card treatment */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-cyber-cyan via-cyber-purple to-transparent opacity-70"
            />

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <span className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 font-mono text-xs text-cyan-300">
                AVAILABLE FOR OPPORTUNITIES
              </span>

              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Let's turn your idea into a{" "}
                <span className="text-cyan-400">real application.</span>
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                I enjoy building full-stack applications using Java,
                Spring Boot, ReactJS, and relational databases. If you have
                an opportunity or project in mind, let's connect.
              </p>

              {/* Email */}
              
               <a href="mailto:kkarthikarthick31@gmail.com"
                className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-gray-200 sm:text-base">
                    kkarthikarthick31@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-colors duration-300 hover:border-purple-400/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
                  <HiOutlineLocationMarker size={22} />
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500">
                    Location
                  </p>
                  <p className="mt-1 text-gray-200">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-gray-500">
                  Find me online
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                      >
                        <Icon />
                        {social.name}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-colors duration-500 hover:border-purple-400/30 sm:p-10"
          >
            {/* Top accent line — matches Articles card treatment */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-cyber-purple via-cyber-cyan to-transparent opacity-70"
            />

            <div className="mb-8">
              <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
                SEND A MESSAGE
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Start a Conversation
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <FloatingField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
              <FloatingField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              <FloatingField as="textarea" label="Message" name="message" rows={6} value={formData.message} onChange={handleChange} />

              {/* Submit — with success state */}
              <motion.button
                type="submit"
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
                disabled={submitted}
                className={`group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold text-white shadow-lg transition-all ${
                  submitted
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-emerald-500/20 cursor-default"
                    : "bg-gradient-to-r from-cyan-500 to-purple-600 shadow-cyan-500/10 hover:shadow-cyan-500/20"
                }`}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <motion.span
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.05 }}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
                      >
                        <FaCheck className="text-[10px]" />
                      </motion.span>
                      Message Ready — Opening Email
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3"
                    >
                      Send Message
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <FaArrowRight />
                      </motion.span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Tech Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 backdrop-blur-md"
        >
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Full Stack Developer
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2 font-mono text-[10px] text-gray-600">
              <span>JAVA</span>
              <span>•</span>
              <span>SPRING BOOT</span>
              <span>•</span>
              <span>REACTJS</span>
              <span>•</span>
              <span>MYSQL</span>
            </div>

            <span className="font-mono text-[10px] text-cyan-400/60">
              READY_TO_BUILD
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;