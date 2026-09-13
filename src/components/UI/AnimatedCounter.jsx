import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * AnimatedCounter component
 * Automatically parses numeric values and animates them up from 0 when scrolled into view.
 * Supports strings like "6 Months", "Top SQL 50", "71%", "80%".
 */
export default function AnimatedCounter({
  value,
  duration = 1.6,
  delay = 0,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Parse prefix, number, and suffix
  const strVal = String(value);
  const match = strVal.match(/^(.*?)(\d+)(.*?)$/);

  const prefix = match ? match[1] : '';
  const targetNum = match ? parseInt(match[2], 10) : null;
  const suffix = match ? match[3] : '';

  const [currentNum, setCurrentNum] = useState(0);

  useEffect(() => {
    if (!isInView || targetNum === null) return;

    const controls = animate(0, targetNum, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // snappy cubic bezier
      onUpdate: (latest) => {
        setCurrentNum(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, targetNum, duration, delay]);

  if (targetNum === null) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? currentNum : 0}
      {suffix}
    </span>
  );
}
