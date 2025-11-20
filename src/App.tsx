import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { NetworkBackground } from "./components/NetworkBackground";
import { TerminalPanel } from "./components/TerminalPanel";
import { MetricsPanel } from "./components/MetricsPanel";
import { GraphPanel } from "./components/GraphPanel";
import { PhilosophyPanel } from "./components/PhilosophyPanel";
import { StackNode } from "./components/StackNode";

const stackItems = [
  { name: "TypeScript", description: "type-safe systems" },
  { name: "Node.js", description: "runtime foundation" },
  { name: "React", description: "interface layer" },
  { name: "Next.js", description: "production framework" },
  { name: "GitHub", description: "version control" },
  { name: "Figma", description: "design systems" },
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.7]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      {/* Network background */}
      <NetworkBackground />

      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/60" />

      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24">
          <motion.div
            className="max-w-5xl mx-auto text-center relative z-10"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            {/* Main title */}
            <motion.h1
              className="text-8xl md:text-9xl tracking-tight mb-8 font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Rocco
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              className="space-y-3 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="text-xl md:text-2xl text-gray-400">
                DevTools Engineer · Product Engineer · Creative Technologist
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Orchestrating tools, systems and experiences with clarity.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-lg text-white hover:text-gray-300 transition-colors duration-200"
              >
                <span className="relative">
                  GitHub
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-400 ease-out" />
                </span>
                <ArrowRight
                  size={18}
                  className="transform group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </motion.div>

            {/* Signature comment */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="mt-20 text-sm text-gray-600 font-mono"
            >
              // clarity, performance, intention
            </motion.p>
          </motion.div>

          {/* Floating panels around hero */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative max-w-7xl mx-auto h-full">
              {/* Terminal panel - left side */}
              <motion.div
                className="absolute top-1/4 left-8 pointer-events-auto"
                style={{
                  y: useTransform(scrollYProgress, [0, 0.5], [0, 50]),
                }}
              >
                <TerminalPanel />
              </motion.div>

              {/* Metrics panel - right side */}
              <motion.div
                className="absolute top-1/3 right-8 pointer-events-auto hidden lg:block"
                style={{
                  y: useTransform(scrollYProgress, [0, 0.5], [0, -40]),
                }}
              >
                <MetricsPanel />
              </motion.div>

              {/* Graph panel - bottom left */}
              <motion.div
                className="absolute bottom-32 left-12 pointer-events-auto hidden xl:block"
                style={{
                  y: useTransform(scrollYProgress, [0, 0.5], [0, 30]),
                }}
              >
                <GraphPanel />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-32 px-6 md:px-12">
          <PhilosophyPanel />
        </section>

        {/* Stack Visualization */}
        <section className="relative py-32 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-3">
                System Stack
              </h2>
              <p className="text-gray-600 text-sm font-mono">
                // tools orchestrated daily
              </p>
            </motion.div>

            {/* Stack nodes in a flexible grid */}
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {stackItems.map((item, index) => (
                <StackNode
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 px-6 md:px-12 border-t border-gray-900">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-600 font-mono"
            >
              Built by Rocco.
            </motion.p>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-400 transition-colors font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              GitHub
            </motion.a>
          </div>
        </footer>
      </div>
    </div>
  );
}