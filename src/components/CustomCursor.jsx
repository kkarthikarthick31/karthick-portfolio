import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'button', 'card', 'text'

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer trailing ring
  const ringX = useSpring(mouseX, { damping: 24, stiffness: 260, mass: 0.2 });
  const ringY = useSpring(mouseY, { damping: 24, stiffness: 260, mass: 0.2 });

  // Ambient soft glow follower (slightly lazier spring for subtle trail)
  const glowX = useSpring(mouseX, { damping: 32, stiffness: 150, mass: 0.4 });
  const glowY = useSpring(mouseY, { damping: 32, stiffness: 150, mass: 0.4 });

  // Central dot with fast snap
  const dotX = useSpring(mouseX, { damping: 45, stiffness: 850, mass: 0.04 });
  const dotY = useSpring(mouseY, { damping: 45, stiffness: 850, mass: 0.04 });

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
      } else if (target?.closest('.group, [data-card], .cursor-pointer')) {
        setCursorType('card');
      } else if (target?.closest('h1, h2, h3, p')) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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
      borderColor: 'rgba(0, 242, 254, 0.45)',
      backgroundColor: 'rgba(0, 242, 254, 0.02)',
      scale: 1,
    },
    button: {
      width: 52,
      height: 52,
      borderColor: 'rgba(0, 242, 254, 0.9)',
      backgroundColor: 'rgba(0, 242, 254, 0.12)',
      scale: 1.2,
    },
    card: {
      width: 60,
      height: 60,
      borderColor: 'rgba(168, 85, 247, 0.75)',
      backgroundColor: 'rgba(168, 85, 247, 0.08)',
      scale: 1.35,
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
      {/* Ambient Glow Trail */}
      <motion.div
        className="fixed top-0 left-0 w-28 h-28 rounded-full pointer-events-none blur-2xl opacity-40 mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            cursorType === 'card'
              ? 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0,242,254,0.3) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)',
        }}
      />

      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none backdrop-blur-[0.5px]"
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
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'button' ? 1.5 : cursorType === 'card' ? 0.6 : 1,
          backgroundColor: cursorType === 'card' ? '#a855f7' : '#00f2fe',
          boxShadow:
            cursorType === 'card'
              ? '0 0 10px rgba(168,85,247,0.8)'
              : '0 0 10px rgba(0,242,254,0.8)',
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
