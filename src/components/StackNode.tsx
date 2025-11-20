import { motion } from "motion/react";
import { useState } from "react";

interface StackNodeProps {
  name: string;
  description: string;
  index: number;
}

export function StackNode({ name, description, index }: StackNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Connection line to center (appears on hover) */}
      {isHovered && (
        <motion.svg
          className="absolute top-1/2 left-1/2 w-32 h-32 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.line
            x1="50%"
            y1="50%"
            x2="50%"
            y2="0%"
            stroke="rgb(100, 116, 139)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="3"
            fill="rgb(100, 116, 139)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        </motion.svg>
      )}

      {/* Node */}
      <div className="relative bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2.5 hover:border-gray-600 hover:bg-black/80 transition-all cursor-default">
        <span className="text-sm text-gray-300 font-mono group-hover:text-white transition-colors">
          {name}
        </span>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"
          initial={false}
        />

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 backdrop-blur-sm border border-gray-700 rounded px-2.5 py-1.5 pointer-events-none"
        >
          <span className="text-[10px] text-gray-400 font-mono">
            {description}
          </span>
        </motion.div>

        {/* Active indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
