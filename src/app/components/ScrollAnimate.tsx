"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface ScrollStaggerProps {
  children: ReactNode[];
  delayStep?: number; // how much to stagger between items
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  easing?: number[];
}

export default function ScrollStagger({
  children,
  delayStep = 0.2,
  direction = "up",
  distance = 50,
  duration = 0.8,
  easing = [0.25, 0.1, 0.25, 1],
}: ScrollStaggerProps) {
  return (
    <>
      {React.Children.map(children, (child, i) => (
        <motion.div
          initial={{
            opacity: 0,
            y:
              direction === "up"
                ? distance
                : direction === "down"
                ? -distance
                : 0,
            x:
              direction === "left"
                ? distance
                : direction === "right"
                ? -distance
                : 0,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration,
            ease: easing,
            delay: i * delayStep, // stagger based on index
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
