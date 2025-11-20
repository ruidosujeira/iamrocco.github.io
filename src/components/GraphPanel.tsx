import { motion } from "motion/react";

const dataPoints = [
  { x: 10, y: 70 },
  { x: 25, y: 50 },
  { x: 40, y: 65 },
  { x: 55, y: 35 },
  { x: 70, y: 45 },
  { x: 85, y: 25 },
];

export function GraphPanel() {
  // Generate path for the line chart
  const pathData = dataPoints
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.7 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 w-64"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800">
        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
          performance
        </span>
        <span className="text-[9px] text-gray-600 font-mono">24h</span>
      </div>

      {/* Graph */}
      <div className="relative h-24">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="rgb(75, 85, 99)"
              strokeWidth="0.5"
              opacity="0.2"
            />
          ))}

          {/* Area under curve */}
          <motion.path
            d={`${pathData} L 85 100 L 10 100 Z`}
            fill="url(#graphGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Line */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
          />

          {/* Data points */}
          {dataPoints.map((point, index) => (
            <motion.circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="2"
              fill="rgb(59, 130, 246)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
            />
          ))}
        </svg>
      </div>

      {/* Stats */}
      <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between">
        <div>
          <div className="text-[9px] text-gray-600 font-mono">avg</div>
          <div className="text-xs text-gray-300 font-mono">42ms</div>
        </div>
        <div>
          <div className="text-[9px] text-gray-600 font-mono">peak</div>
          <div className="text-xs text-gray-300 font-mono">89ms</div>
        </div>
        <div>
          <div className="text-[9px] text-gray-600 font-mono">p95</div>
          <div className="text-xs text-gray-300 font-mono">71ms</div>
        </div>
      </div>
    </motion.div>
  );
}
