import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const commands = [
  "$ clarity run",
  "$ perf-linter check",
  "$ build --optimize",
  "$ deploy --production",
  "$ test --coverage",
];

export function TerminalPanel() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const command = commands[currentCommand];
    
    if (isTyping) {
      if (displayText.length < command.length) {
        const timeout = setTimeout(() => {
          setDisplayText(command.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentCommand((prev) => (prev + 1) % commands.length);
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, currentCommand]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 w-72"
    >
      {/* Panel header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[10px] text-gray-500 font-mono ml-2">terminal</span>
      </div>

      {/* Terminal content */}
      <div className="font-mono text-xs text-gray-400 h-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCommand}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1.5 h-3.5 bg-gray-400 ml-0.5"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Status indicator */}
      <div className="mt-3 pt-2 border-t border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-500"
          />
          <span className="text-[9px] text-gray-600 font-mono">ACTIVE</span>
        </div>
        <span className="text-[9px] text-gray-600 font-mono">bash</span>
      </div>
    </motion.div>
  );
}
