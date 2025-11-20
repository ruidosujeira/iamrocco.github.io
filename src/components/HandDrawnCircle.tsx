import { motion } from "motion/react";

interface HandDrawnCircleProps {
  className?: string;
  size?: number;
  delay?: number;
  dashed?: boolean;
}

export function HandDrawnCircle({ className = "", size = 40, delay = 0, dashed = true }: HandDrawnCircleProps) {
  // Create a more organic, hand-drawn circle path
  const createHandDrawnCircle = (r: number) => {
    const points = 36;
    const angleStep = (Math.PI * 2) / points;
    let path = `M ${r + r * Math.cos(0)} ${r + r * Math.sin(0)}`;
    
    for (let i = 1; i <= points; i++) {
      const angle = angleStep * i;
      const randomness = (Math.random() - 0.5) * 0.8;
      const x = r + (r + randomness) * Math.cos(angle);
      const y = r + (r + randomness) * Math.sin(angle);
      path += ` L ${x} ${y}`;
    }
    path += ' Z';
    return path;
  };

  return (
    <svg 
      className={`${className}`} 
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`} 
      fill="none"
    >
      <motion.path
        d={createHandDrawnCircle(size / 2 - 2)}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={dashed ? "3 4" : undefined}
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
