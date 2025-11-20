import { motion } from "motion/react";

interface CenterMarkProps {
  className?: string;
  size?: number;
  delay?: number;
}

export function CenterMark({ className = "", size = 20, delay = 0 }: CenterMarkProps) {
  return (
    <svg 
      className={`${className}`}
      width={size} 
      height={size} 
      viewBox="0 0 20 20"
      fill="none"
    >
      {/* Center cross mark used in technical drawings */}
      <motion.line
        x1="10"
        y1="0"
        x2="10"
        y2="20"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="3 2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 0.8, delay }}
      />
      <motion.line
        x1="0"
        y1="10"
        x2="20"
        y2="10"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="3 2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 0.8, delay: delay + 0.1 }}
      />
      {/* Small circle at center */}
      <motion.circle
        cx="10"
        cy="10"
        r="2"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      />
    </svg>
  );
}
