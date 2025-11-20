import { motion } from "motion/react";

interface SectionCutProps {
  label?: string;
  className?: string;
  delay?: number;
}

export function SectionCut({ label = "A", className = "", delay = 0 }: SectionCutProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Section cut line */}
      <svg className="w-full h-16" viewBox="0 0 200 60" preserveAspectRatio="none">
        {/* Main cut line */}
        <motion.line
          x1="0"
          y1="30"
          x2="200"
          y2="30"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white/20"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay }}
        />
        
        {/* Left arrow */}
        <motion.path
          d="M 15 20 L 0 30 L 15 40"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
        />
        
        {/* Right arrow */}
        <motion.path
          d="M 185 20 L 200 30 L 185 40"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
        />
      </svg>
      
      {/* Section labels */}
      <motion.div
        className="absolute left-2 top-0 text-xs font-mono text-white/30 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.7 }}
      >
        {label}
      </motion.div>
      <motion.div
        className="absolute right-2 top-0 text-xs font-mono text-white/30 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.7 }}
      >
        {label}
      </motion.div>
    </div>
  );
}
