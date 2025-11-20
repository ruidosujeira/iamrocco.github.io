import { motion } from "motion/react";
import { ReactNode } from "react";

interface HandDrawnBoxProps {
  children: ReactNode;
  delay?: number;
}

export function HandDrawnBox({ children, delay = 0 }: HandDrawnBoxProps) {
  return (
    <div className="relative">
      {/* Hand-drawn border */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ overflow: 'visible' }}
      >
        <motion.path
          d="M 5 2 L 98% 3 L 97% 98% L 3 97% Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-white/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay, ease: "easeInOut" }}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
