import React from 'react';
import './Home.css';
import RotatingText from './RotatingText';
import FloatingLines from './FloatingLines';
import { motion } from 'motion/react';
import Magnet from './Magnet';

const Home: React.FC = () => {

  return (
    <section id="home" className="home-section">

      <div className="home-bg">
        <FloatingLines
          linesGradient={['#2a1010', '#4d1a1a', '#8a2b2b']}
          enabledWaves={['top', 'middle', 'bottom']}
          animationSpeed={1.5}
        />
      </div>

      <div className="home-content">
        <motion.h1 
          className="massive-brand-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DART <span>2.0</span>
          <br></br>
          <br></br>
        </motion.h1>

        <div className="hero-subline-one-line">
          <span className="hero-subline-text">Learn and Master Future of</span>
          <div className="animation-container">
            <RotatingText
              texts={['DRONES', 'ROBOTICS', 'AUTONOMY', 'MACHINES', 'AI']}
              mainClassName="rotating-tech-text"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.04}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={3000}
            />
          </div>
        </div>

        <div className="hero-actions">
          <Magnet padding={80} magnetStrength={3}>
            <a href="#contact" className="btn-industrial-primary">
              <span className="btn-glitch" />
              RESERVE_SPOT_NOW
            </a>
          </Magnet>
          <a href="#what-is-dart" className="btn-industrial-outline">EXPLORE_Curriculum.exe</a>
        </div>
      </div>

    </section>
  );
};

export default Home;