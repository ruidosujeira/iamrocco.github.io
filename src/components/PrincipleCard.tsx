import { motion } from "motion/react";
import { ReactNode } from "react";

interface PrincipleCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export function PrincipleCard({ number, title, description, icon }: PrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
      className="relative group"
    >
      {/* Hand-drawn bracket/accent on left */}
      <svg className="absolute left-0 top-0 w-6 h-20 text-white/20 group-hover:text-white/30 transition-colors" viewBox="0 0 24 80">
        <motion.path
          d="M 18 5 Q 8 8, 6 15 L 6 65 Q 8 72, 18 75"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: number * 0.2 }}
        />
      </svg>
      
      {/* Small hand-written annotation above */}
      <motion.div 
        className="absolute -top-6 left-8 text-[10px] text-white/20 font-mono tracking-wider transform -rotate-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: number * 0.2 + 0.5 }}
      >
        {`// idea ${number}`}
      </motion.div>
      
      {/* Hand-drawn highlight box behind title */}
      <svg className="absolute left-10 top-5 w-40 h-10 pointer-events-none" style={{ zIndex: -1 }}>
        <motion.rect
          x="2"
          y="2"
          width="150"
          height="32"
          rx="2"
          fill="currentColor"
          className="text-white/[0.04]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: number * 0.2 + 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </svg>
      
      <div className="pl-10">
        {/* Icon with hand-drawn circle around it */}
        <div className="relative inline-block mb-4">
          <div className="relative z-10 text-white/70">
            {icon}
          </div>
          <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none" style={{ top: '-8px', left: '-8px' }}>
            <motion.circle
              cx="50%"
              cy="50%"
              r="18"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3 2"
              className="text-white/10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: number * 0.2 + 0.6 }}
            />
          </svg>
        </div>
        
        {/* Title with multiple hand-drawn underlines */}
        <h3 className="relative mb-3 text-white/90 inline-block">
          {title}
          <svg className="absolute -bottom-1 left-0 w-full h-2 opacity-25" preserveAspectRatio="none">
            <path d="M 0 1 Q 25 2, 50 1 T 100 1" stroke="currentColor" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M 0 3 Q 25 4, 50 3 T 100 3" stroke="currentColor" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>
        </h3>
        
        {/* Description */}
        <p className="text-white/50 leading-relaxed relative">
          {description}
        </p>
        
        {/* Small doodle connection line */}
        <svg className="absolute -left-2 top-12 w-4 h-8 text-white/10">
          <path d="M 12 0 Q 8 10, 12 20" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2 2"/>
        </svg>
      </div>
      
      {/* Random sketch marks */}
      <div className="absolute -right-4 top-8 text-white/[0.05] transform rotate-12">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="3" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <line x1="10" y1="3" x2="10" y2="7" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>
    </motion.div>
  );
}