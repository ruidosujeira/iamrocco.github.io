import { motion } from "motion/react";

interface FloatingSketchProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  xOffset?: number;
  yOffset?: number;
}

export function FloatingSketch({ children, delay = 0, duration = 20, xOffset = 20, yOffset = 15 }: FloatingSketchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0.6, 1],
        x: [0, xOffset, -xOffset/2, xOffset/2, 0],
        y: [0, yOffset, -yOffset, yOffset/2, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
