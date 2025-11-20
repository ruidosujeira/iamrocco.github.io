import { motion } from "motion/react";

const metrics = [
  { label: "latency", value: "12ms", color: "bg-green-500" },
  { label: "builds", value: "847", color: "bg-blue-500" },
  { label: "checks", value: "99.8%", color: "bg-purple-500" },
];

export function MetricsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 w-56"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800">
        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
          metrics
        </span>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-green-500"
        />
      </div>

      {/* Metrics */}
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="space-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-gray-500 font-mono">
                {metric.label}
              </span>
              <span className="text-xs text-gray-300 font-mono">
                {metric.value}
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${metric.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: 0.7 + index * 0.1,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-800">
        <span className="text-[9px] text-gray-600 font-mono">
          last updated: now
        </span>
      </div>
    </motion.div>
  );
}
