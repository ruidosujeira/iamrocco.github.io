import { motion } from "motion/react";

interface TechnicalAnnotationProps {
  text: string;
  leader?: boolean;
  className?: string;
  delay?: number;
}

export function TechnicalAnnotation({ text, leader = true, className = "", delay = 0 }: TechnicalAnnotationProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Leader line if enabled */}
      {leader && (
        <svg className="absolute -left-8 top-1/2 w-8 h-1" viewBox="0 0 30 2">
          <motion.line
            x1="0"
            y1="1"
            x2="28"
            y2="1"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white/25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
          />
          <motion.circle
            cx="0"
            cy="1"
            r="1"
            fill="currentColor"
            className="text-white/25"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.4 }}
          />
        </svg>
      )}
      
      {/* Text with technical styling */}
      <div className="text-[10px] font-mono text-white/30 tracking-wider uppercase bg-[#0a0a0a] px-2 py-0.5 border border-white/10">
        {text}
      </div>
    </motion.div>
  );
}
