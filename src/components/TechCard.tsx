import { motion } from "motion/react";
import { ReactNode } from "react";

interface TechCardProps {
  icon: ReactNode;
  name: string;
  label?: string;
}

export function TechCard({ icon, name, label }: TechCardProps) {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Technical drawing border with corner marks */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ overflow: 'visible' }}
      >
        {/* Main border */}
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-white/20"
        />
        
        {/* Corner marks - typical of technical drawings */}
        <g className="text-white/15">
          {/* Top left */}
          <line x1="0" y1="8" x2="8" y2="8" stroke="currentColor" strokeWidth="1"/>
          <line x1="8" y1="0" x2="8" y2="8" stroke="currentColor" strokeWidth="1"/>
          
          {/* Top right */}
          <line x1="100%" y1="8" x2="calc(100% - 8px)" y2="8" stroke="currentColor" strokeWidth="1"/>
          <line x1="calc(100% - 8px)" y1="0" x2="calc(100% - 8px)" y2="8" stroke="currentColor" strokeWidth="1"/>
          
          {/* Bottom left */}
          <line x1="0" y1="calc(100% - 8px)" x2="8" y2="calc(100% - 8px)" stroke="currentColor" strokeWidth="1"/>
          <line x1="8" y1="100%" x2="8" y2="calc(100% - 8px)" stroke="currentColor" strokeWidth="1"/>
          
          {/* Bottom right */}
          <line x1="100%" y1="calc(100% - 8px)" x2="calc(100% - 8px)" y2="calc(100% - 8px)" stroke="currentColor" strokeWidth="1"/>
          <line x1="calc(100% - 8px)" y1="100%" x2="calc(100% - 8px)" y2="calc(100% - 8px)" stroke="currentColor" strokeWidth="1"/>
        </g>
        
        {/* Hidden line representation (dashed) */}
        <rect
          x="4"
          y="4"
          width="calc(100% - 8px)"
          height="calc(100% - 8px)"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="3 2"
          className="text-white/10"
        />
      </svg>
      
      {/* Background */}
      <div className="relative bg-black/20 backdrop-blur-sm p-6 overflow-hidden">
        {/* Paper texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Technical label with leader line */}
        <div className="absolute top-2 right-2 text-[8px] text-white/25 font-mono tracking-widest border border-white/10 px-1.5 py-0.5 uppercase">
          {label || "ref"}
        </div>
        
        {/* Center mark */}
        <svg className="absolute top-2 left-2 w-4 h-4 text-white/10">
          <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1"/>
          <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1"/>
          <circle cx="8" cy="8" r="1" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
        
        {/* Hatching pattern - typical engineering drawing */}
        <svg className="absolute bottom-1 right-1 w-8 h-8 opacity-5">
          <pattern id={`hatch-${name}`} width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="32" height="32" fill={`url(#hatch-${name})`}/>
        </svg>
        
        {/* Icon with center mark */}
        <motion.div 
          className="relative mb-3 text-white/70 flex items-center justify-center"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
          
          {/* Dimension lines around icon on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 40 40">
              <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="0.5" className="text-white/20"/>
              <line x1="36" y1="4" x2="40" y2="4" stroke="currentColor" strokeWidth="0.5" className="text-white/20"/>
              <line x1="4" y1="0" x2="4" y2="8" stroke="currentColor" strokeWidth="0.5" className="text-white/20"/>
              <line x1="4" y1="36" x2="4" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-white/20"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Name with technical underline */}
        <div className="relative">
          <div className="text-sm text-white/70 tracking-tight font-mono uppercase">
            {name}
          </div>
          {/* Technical drawing style underline */}
          <svg className="absolute -bottom-1 left-0 w-full h-1" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="1" className="text-white/15"/>
            <line x1="0" y1="3" x2="100%" y2="3" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" className="text-white/10"/>
          </svg>
        </div>
        
        {/* Coordinate reference */}
        <div className="absolute bottom-1 left-1 text-[7px] text-white/10 font-mono">
          ±0.1
        </div>
      </div>
      
      {/* Shadow on hover - like lifted drawing */}
      <motion.div 
        className="absolute inset-0 bg-white/5 -z-10 blur-lg"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}