import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface SketchElementProps {
  type: 'arrow' | 'circle' | 'cross' | 'line' | 'underline';
  className?: string;
  delay?: number;
}

export function SketchElement({ type, className = "", delay = 0 }: SketchElementProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  const variants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 0.15,
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  if (type === 'arrow') {
    return (
      <svg className={`absolute ${className}`} width="60" height="40" viewBox="0 0 60 40" fill="none">
        <motion.path
          d="M 5 20 L 45 20 M 45 20 L 38 13 M 45 20 L 38 27"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        />
      </svg>
    );
  }

  if (type === 'circle') {
    return (
      <svg className={`absolute ${className}`} width="30" height="30" viewBox="0 0 30 30" fill="none">
        <motion.circle
          cx="15"
          cy="15"
          r="12"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 3"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        />
      </svg>
    );
  }

  if (type === 'cross') {
    return (
      <svg className={`absolute ${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
        <motion.path
          d="M 10 5 L 10 15 M 5 10 L 15 10"
          stroke="currentColor"
          strokeWidth="1"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        />
      </svg>
    );
  }

  if (type === 'line') {
    return (
      <svg className={`absolute ${className}`} width="80" height="2" viewBox="0 0 80 2" fill="none">
        <motion.path
          d="M 0 1 L 80 1"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        />
      </svg>
    );
  }

  if (type === 'underline') {
    return (
      <svg className={`absolute ${className}`} width="100%" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none">
        <motion.path
          d="M 2 4 Q 50 3, 100 4 T 198 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        />
      </svg>
    );
  }

  return null;
}
