import { motion } from "motion/react";
import { useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  label?: string;
  size: number;
}

export function NetworkBackground() {
  const [nodes] = useState<Node[]>([
    { id: 1, x: 15, y: 20, label: "CLI", size: 6 },
    { id: 2, x: 85, y: 25, label: "Build", size: 5 },
    { id: 3, x: 30, y: 60, label: "Lint", size: 4 },
    { id: 4, x: 70, y: 55, label: "Deploy", size: 6 },
    { id: 5, x: 50, y: 35, size: 4 },
    { id: 6, x: 45, y: 70, label: "Metrics", size: 5 },
    { id: 7, x: 20, y: 85, size: 3 },
    { id: 8, x: 80, y: 80, label: "Test", size: 4 },
    { id: 9, x: 60, y: 15, size: 3 },
    { id: 10, x: 40, y: 45, size: 3 },
  ]);

  const connections = [
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 6],
    [6, 7],
    [6, 8],
    [2, 9],
    [3, 10],
    [10, 6],
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(100, 100, 120)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(120, 120, 140)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(100, 100, 120)" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map(([start, end], index) => {
          const startNode = nodes.find((n) => n.id === start);
          const endNode = nodes.find((n) => n.id === end);
          if (!startNode || !endNode) return null;

          return (
            <motion.line
              key={`connection-${index}`}
              x1={`${startNode.x}%`}
              y1={`${startNode.y}%`}
              x2={`${endNode.x}%`}
              y2={`${endNode.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.6, 0.6, 0]
              }}
              transition={{
                duration: 8,
                delay: index * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut" as const
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            {/* Node circle */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="rgb(120, 120, 140)"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1.2, 1],
                opacity: [0, 0.8, 0.8, 0.8]
              }}
              transition={{
                duration: 2,
                delay: index * 0.15,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4
              }}
            />

            {/* Pulse effect */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="none"
              stroke="rgb(140, 140, 160)"
              strokeWidth="1"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{
                scale: [1, 2.5, 2.5],
                opacity: [0.6, 0, 0]
              }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
          </g>
        ))}
      </svg>

      {/* Node labels */}
      {nodes.map((node) =>
        node.label ? (
          <motion.div
            key={`label-${node.id}`}
            className="absolute text-[10px] text-gray-400 font-mono tracking-wider"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -200%)'
            }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 1, delay: node.id * 0.15 }}
          >
            {node.label}
          </motion.div>
        ) : null
      )}
    </div>
  );
}
