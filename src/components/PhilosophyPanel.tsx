import { motion } from "motion/react";
import { Check } from "lucide-react";

const principles = [
  "Simplicity is power.",
  "Flow over friction.",
  "Clarity is a feature.",
];

export function PhilosophyPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-6 max-w-2xl mx-auto"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-800">
        <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">
          System Preferences
        </span>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-500"
          />
          <span className="text-[10px] text-gray-600 font-mono">ENABLED</span>
        </div>
      </div>

      {/* Principles as config items */}
      <div className="space-y-4">
        {principles.map((principle, index) => (
          <motion.div
            key={principle}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex items-start gap-4 p-3 rounded-md hover:bg-white/5 transition-colors cursor-default"
          >
            {/* Checkbox */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.15,
                type: "spring",
                stiffness: 200,
              }}
              className="flex-shrink-0 w-5 h-5 rounded border-2 border-gray-600 bg-gray-800 flex items-center justify-center group-hover:border-gray-500 transition-colors"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 + index * 0.15,
                }}
              >
                <Check size={14} className="text-green-500" strokeWidth={3} />
              </motion.div>
            </motion.div>

            {/* Principle text */}
            <div className="flex-1">
              <p className="text-lg text-gray-200 group-hover:text-white transition-colors">
                {principle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 pt-4 border-t border-gray-800"
      >
        <p className="text-[10px] text-gray-600 font-mono">
          // core engineering principles — always enabled
        </p>
      </motion.div>
    </motion.div>
  );
}
