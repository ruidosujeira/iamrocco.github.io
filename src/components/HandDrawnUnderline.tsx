import { motion } from "motion/react";

interface HandDrawnUnderlineProps {
  className?: string;
  delay?: number;
}

export function HandDrawnUnderline({ className = "", delay = 0 }: HandDrawnUnderlineProps) {
  return (
    <svg 
      className={`absolute ${className}`} 
      width="100%" 
      height="12" 
      viewBox="0 0 300 12" 
      preserveAspectRatio="none" 
      fill="none"
    >
      <motion.path
        d="M 2 8 Q 30 6, 60 8 T 120 7 T 180 9 T 240 7 T 298 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      />
      <motion.path
        d="M 3 9 Q 32 7, 62 9 T 122 8 T 182 10 T 242 8 T 297 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.25 }}
        transition={{ duration: 1.6, delay: delay + 0.1, ease: "easeInOut" }}
      />
    </svg>
  );
}
