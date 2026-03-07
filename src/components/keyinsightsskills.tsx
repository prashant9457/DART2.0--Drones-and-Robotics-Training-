import React from 'react';
import { motion } from 'motion/react';
import { Package, Laptop, Cpu, Globe, Rocket, Terminal } from 'lucide-react';

const insights = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Take Home Kits",
    description: "Every participant receives a complete hardware kit to continue their journey beyond the workshop."
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Real Hands-on Learning",
    description: "Zero fluff. Direct assembly, soldering, and flight testing from day one."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Robotics & IOT",
    description: "Master the integration of sensors, microcontrollers, and wireless protocols."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Simulation Software",
    description: "Deep dive into Gazebo and RViz for testing autonomous flight paths."
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "Open Source Tech",
    description: "Learn to navigate the vast ecosystems of ROS2 and Betaflight firmware."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Drones Simulations",
    description: "Advanced physics-based simulations to refine PID tuning and flight stability."
  }
];

const KeyInsightsSkills: React.FC = () => {
  return (
    <section id="skills" className="section relative overflow-hidden py-24">
      <div className="section-header text-center mb-16 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-5xl font-black mb-6"
        >
          Key <span className="text-gradient">Insights & Skills</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle text-xl text-white/50 max-w-2xl mx-auto"
        >
          Architecting the future through precision engineering and autonomous logic.
        </motion.p>
      </div>

      <div className="grid grid-3 gap-8 px-4 relative z-10">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="insight-card glass-card group relative p-8 border border-white/5 hover:border-red-600/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-300 rounded-[16px]"></div>
            
            <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-red-600/40 text-red-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors uppercase tracking-tight">
              {item.title}
            </h3>
            <p className="text-white/60 leading-relaxed font-medium">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity">
        <div className="w-96 h-96 bg-red-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default KeyInsightsSkills;
