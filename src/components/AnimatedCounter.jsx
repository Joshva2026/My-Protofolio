import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter component
 * - Starts at 0
 * - Animates smoothly from 0 to target when trigger is true
 * - Reference-matching cubic easing: 1 - Math.pow(1 - progress, 3)
 * - Fires once and keeps final value visible
 * - Eliminates layout shifts with tabular-nums
 * - High-precision 60fps timer
 */
export default function AnimatedCounter({
  target = 0,
  duration = 1600,
  trigger = false,
  padZero = false,
  className = ''
}) {
  const [current, setCurrent] = useState(0);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!trigger || hasStartedRef.current) return;
    hasStartedRef.current = true;

    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Reference-matched smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(easeOut * target);

      setCurrent(value);

      if (progress >= 1) {
        clearInterval(intervalId);
        setCurrent(target);
      }
    }, 16);

    return () => {
      clearInterval(intervalId);
    };
  }, [trigger, target, duration]);

  const displayValue = padZero && current < 10 ? `0${current}` : `${current}`;

  return (
    <span
      data-trigger={trigger ? "true" : "false"}
      data-target={target}
      className={`inline-block tabular-nums select-none ${className}`}
      aria-label={`${target}`}
    >
      {displayValue}
    </span>
  );
}
