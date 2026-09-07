import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isHovered: false,
    hoveredType: 'default', // 'link', 'button', 'card'
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = -(e.clientY / innerHeight) * 2 + 1;

      // Check target element
      const target = e.target;
      const isInteractive = target?.closest('a, button, [role="button"], input, textarea, .interactive-element');
      const isCard = target?.closest('.tilt-card, .glass-card');

      let hoverType = 'default';
      if (isCard) hoverType = 'card';
      if (isInteractive) hoverType = 'button';

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: normX,
        normalizedY: normY,
        isHovered: !!isInteractive || !!isCard,
        hoveredType: hoverType,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}
