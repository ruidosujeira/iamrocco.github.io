import { motion } from "motion/react";

interface HandDrawnArrowProps {
  className?: string;
  direction?: 'right' | 'left' | 'down' | 'up';
  delay?: number;
}

export function HandDrawnArrow({ className = "", direction = 'right', delay = 0 }: HandDrawnArrowProps) {
  const paths = {
    right: "M 5 20 Q 25 18, 45 20 L 50 20 M 50 20 L 43 15 M 50 20 L 43 25",
    left: "M 55 20 Q 35 22, 15 20 L 10 20 M 10 20 L 17 15 M 10 20 L 17 25",
    down: "M 20 5 Q 22 25, 20 45 L 20 50 M 20 50 L 15 43 M 20 50 L 25 43",
    up: "M 20 55 Q 18 35, 20 15 L 20 10 M 20 10 L 15 17 M 20 10 L 25 17"
  };

  return (
    <svg 
      className={`${className}`} 
      width="60" 
      height="60" 
      viewBox="0 0 60 60" 
      fill="none"
    >
      <motion.path
        d={paths[direction]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.25 }}
        transition={{ duration: 1.2, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
