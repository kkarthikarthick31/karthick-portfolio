import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost'
  strength = 25,
  ...props
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set((distanceX / (rect.width / 2)) * strength);
    y.set((distanceY / (rect.height / 2)) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyber-cyan/50 active:scale-95 group";

  const variants = {
    primary: "px-7 py-3.5 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-violet text-dark-950 font-bold shadow-glow-cyan hover:shadow-cyan-500/50 hover:brightness-110",
    secondary: "px-7 py-3.5 bg-dark-800/90 hover:bg-dark-700 text-slate-100 border border-slate-700/60 hover:border-cyber-cyan/50 shadow-lg hover:shadow-glow-blue",
    outline: "px-6 py-3 bg-transparent text-slate-200 border border-slate-700 hover:border-cyber-cyan hover:text-cyber-cyan",
    ghost: "px-4 py-2 bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/40",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {/* Subtle shine highlight */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}
