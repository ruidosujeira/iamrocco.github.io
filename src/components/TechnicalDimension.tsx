import { motion } from "motion/react";

interface TechnicalDimensionProps {
  value: string;
  className?: string;
  delay?: number;
  orientation?: 'horizontal' | 'vertical';
}

export function TechnicalDimension({ value, className = "", delay = 0, orientation = 'horizontal' }: TechnicalDimensionProps) {
  if (orientation === 'horizontal') {
    return (
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.8 }}
      >
        {/* Dimension line with arrows */}
        <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
          {/* Main dimension line */}
          <motion.line
            x1="5"
            y1="15"
            x2="95"
            y2="15"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white/30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.6 }}
          />
          {/* Left arrow */}
          <motion.path
            d="M 5 15 L 8 13 M 5 15 L 8 17"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
          />
          {/* Right arrow */}
          <motion.path
            d="M 95 15 L 92 13 M 95 15 L 92 17"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
          />
          {/* Extension lines */}
          <line x1="5" y1="10" x2="5" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-white/20"/>
          <line x1="95" y1="10" x2="95" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-white/20"/>
        </svg>
        {/* Dimension value */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-[9px] font-mono text-white/40 bg-[#0a0a0a] px-1">
          {value}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      {/* Vertical dimension line */}
      <svg className="h-full w-8" viewBox="0 0 30 100" preserveAspectRatio="none">
        <motion.line
          x1="15"
          y1="5"
          x2="15"
          y2="95"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.6 }}
        />
        <motion.path
          d="M 15 5 L 13 8 M 15 5 L 17 8"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
        />
        <motion.path
          d="M 15 95 L 13 92 M 15 95 L 17 92"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
        />
        <line x1="10" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="0.5" className="text-white/20"/>
        <line x1="10" y1="95" x2="20" y2="95" stroke="currentColor" strokeWidth="0.5" className="text-white/20"/>
      </svg>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[9px] font-mono text-white/40 bg-[#0a0a0a] px-1 whitespace-nowrap">
        {value}
      </div>
    </motion.div>
  );
}
