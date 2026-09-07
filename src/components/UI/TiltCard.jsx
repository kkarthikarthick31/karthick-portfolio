import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  glowColor = 'rgba(56, 189, 248, 0.25)',
  ...props
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    rotateX.set(tiltX);
    rotateY.set(tiltY);

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative tilt-card rounded-2xl glass-card transition-shadow duration-300 ${className}`}
        {...props}
      >
        {/* Subtle dynamic border glow on hover */}
        {isHovered && (
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none transition-opacity duration-300 opacity-100 -z-10"
            style={{
              background: `radial-gradient(400px circle at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor}, transparent 60%)`,
            }}
          />
        )}

        {/* Glare effect */}
        {glare && isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.08) 0%, transparent 65%)`,
            }}
          />
        )}

        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
