import React, { useState } from 'react';
import './WhyIsDart.css';
import ElectricBorder from './ElectricBorder';
import LaserFlow from './LaserFlow';
import { motion } from 'motion/react';
import { Zap, Shield, Target } from 'lucide-react';

const WhyIsDart: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 0,
      title: 'Drones',
      category: 'AERONAUTICS',
      desc: 'Master aerodyanmics and autonomous flight logic. Build the future of aerial tech.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2070',
      icon: <Zap size={24} />,
      height: '550px',
      depth: -1
    },
    {
      id: 1,
      title: 'Robotics',
      category: 'MECHATRONICS',
      desc: 'Precision engineering meets AI. Create intelligent machines that interact with Earth.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070',
      icon: <Shield size={24} />,
      height: '650px',
      depth: 1
    },
    {
      id: 2,
      title: 'Simulations',
      category: 'DIGITAL_TWINS',
      desc: 'High-fidelity virtual environments to validate hardware before deployment.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070',
      icon: <Target size={24} />,
      height: '520px',
      depth: -2
    }
  ];

  return (
    <section id="why-attend" className="dart-banners-section">
      <div className="section-background">
        <LaserFlow 
          color="#ff1e1e" 
          wispDensity={0.3} 
          fogIntensity={0.1} 
          className="laser-fx"
        />
        <div className="grid-overlay" />
      </div>

      <div className="banners-container">
        <header className="banners-header">
          <motion.div 
            className="header-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            SYSTEM_SPECS
          </motion.div>
          <h2 className="banners-title">WHY ATTEND <span>DART 2.0?</span></h2>
        </header>

        <div className="banners-flex">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`banner-item-wrap banner-${index}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                zIndex: hoveredCard === index ? 100 : 10 + card.depth,
                height: card.height
              }}
              animate={{
                scale: hoveredCard === index ? 1.05 : 1,
                translateY: hoveredCard === index ? -20 : 0
              }}
            >
              <ElectricBorder
                color={hoveredCard === index ? "#ff1e1e" : "#333"}
                speed={hoveredCard === index ? 1.5 : 0.5}
                chaos={hoveredCard === index ? 0.2 : 0}
                borderRadius={20}
                className="h-full w-full"
              >
                <div className="banner-card-new">
                  <div 
                    className="banner-card-img" 
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="banner-card-overlay" />
                  
                  <div className="banner-card-content">
                    <div className="content-top">
                      <div className="icon-box">{card.icon}</div>
                      <span className="category-label">{card.category}</span>
                    </div>

                    <div className="content-bottom">
                      <h3 className="card-title-new">{card.title}</h3>
                      <div className="divider-new" />
                      <p className="card-desc-new">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIsDart;