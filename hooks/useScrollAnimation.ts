// hooks/useScrollAnimation.ts
"use client";

import { useRef, useEffect, useState, CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface Options extends IntersectionObserverInit {
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  easing?: string;
  once?: boolean;
}

export function useScrollAnimation({
  direction = "up",
  distance = 40,
  duration = 0.6,
  delay = 0,
  easing = "ease-out",
  once = true,
  threshold = 0.1,
  ...options
}: Options = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, ...options }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [once, threshold, options]);

  // starting transform based on direction
  const getTransform = (): string => {
    if (isVisible) return "none";
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      default:
        return "none";
    }
  };

  return {
    ref,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: getTransform(),
      transition: `all ${duration}s ${easing} ${delay}s`,
    } as CSSProperties,
  };
}
