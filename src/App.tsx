import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'motion/react';
import { Github, Terminal, Cpu, Zap, Code2 } from 'lucide-react';
import './index.css';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring" as const,
        mass: 0.6
      }
    }
  };

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <motion.div
        className="cursor-follower"
        variants={variants}
        animate="default"
      />

      <main className="main-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="hero-section"
        >
          <h1 className="hero-title">
            ruidosujeira
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-subtitle"
          >
            <Terminal size={20} color="#f74c00" />
            <span>Tooling Engineer</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="skills-grid"
        >
          <SkillCard
            icon={<Zap size={32} />}
            title="Rust"
            color="#f74c00"
            desc="Memory safety & performance"
          />
          <SkillCard
            icon={<Cpu size={32} />}
            title="Zig"
            color="#f69a00"
            desc="Robust & optimal"
          />
          <SkillCard
            icon={<Code2 size={32} />}
            title="JS/TS"
            color="#f7df1e"
            desc="Modern web ecosystem"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="social-links"
        >
          <SocialLink href="https://github.com/ruidosujeira" icon={<Github size={24} />} label="GitHub" />
        </motion.div>
      </main>

      {/* Background Elements */}
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />
    </div>
  );
};

const SkillCard = ({ icon, title, color, desc }: { icon: ReactNode, title: string, color: string, desc: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5, borderColor: color }}
      className="skill-card"
    >
      <div className="skill-icon" style={{ color: color }}>
        {icon}
      </div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-desc">{desc}</p>
    </motion.div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string, icon: ReactNode, label: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, color: "#fff" }}
      className="social-link"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
};

export default App;