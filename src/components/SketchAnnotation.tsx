import { motion } from "motion/react";

interface SketchAnnotationProps {
  text: string;
  className?: string;
  delay?: number;
}

export function SketchAnnotation({ text, className = "", delay = 0 }: SketchAnnotationProps) {
  return (
    <motion.div
      className={`font-mono text-[11px] text-white/25 tracking-wide ${className}`}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      style={{
        fontFamily: "'Courier New', monospace",
        transform: `rotate(-2deg)`,
      }}
    >
      {text}
    </motion.div>
  );
}
