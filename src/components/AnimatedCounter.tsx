"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number; // duration in seconds
  delay?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2.0,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo for slow end
      });
      return () => controls.stop();
    }
  }, [isInView, count, value, duration, delay]);

  // Set the text content on rounded change to avoid React re-rendering overhead
  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });
  }, [rounded]);

  return (
    <span className="font-heading font-bold tabular-nums">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}
