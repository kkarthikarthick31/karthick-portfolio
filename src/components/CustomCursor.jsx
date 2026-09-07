import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'button', 'card', 'text'

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.2 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.2 });

  // Tighter springs for central dot
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 800, mass: 0.05 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 800, mass: 0.05 });

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (target?.closest('a, button, [role="button"], input, textarea')) {
        setCursorType('button');
      } else if (target?.closest('.tilt-card, .glass-card')) {
        setCursorType('card');
      } else if (target?.closest('h1, h2, h3, p')) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  const ringVariants = {
    default: {
      width: 32,
      height: 32,
      borderColor: 'rgba(56, 189, 248, 0.4)',
      backgroundColor: 'rgba(56, 189, 248, 0.03)',
      scale: 1,
    },
    button: {
      width: 48,
      height: 48,
      borderColor: 'rgba(0, 242, 254, 0.9)',
      backgroundColor: 'rgba(0, 242, 254, 0.12)',
      scale: 1.25,
    },
    card: {
      width: 56,
      height: 56,
      borderColor: 'rgba(168, 85, 247, 0.7)',
      backgroundColor: 'rgba(168, 85, 247, 0.08)',
      scale: 1.4,
    },
    text: {
      width: 24,
      height: 24,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      backgroundColor: 'transparent',
      scale: 0.8,
    },
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyber-cyan/50 pointer-events-none backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={ringVariants[cursorType]}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />

      {/* Central Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyber-cyan shadow-glow-cyan pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'button' ? 1.5 : cursorType === 'card' ? 0.5 : 1,
          backgroundColor: cursorType === 'card' ? '#a855f7' : '#00f2fe',
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
