import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import './WhatIsDart.css';

// --- Types & Defaults ---
const DEFAULT_PARTICLE_COUNT = 20;
const DEFAULT_GLOW_COLOR = '255, 30, 30'; // Red theme

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  icon?: string;
}

// --- Helper Components ---
const createParticleElement = (x: number, y: number, color: string): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'bento-particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
}> = ({
  children,
  className = '',
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => particle.remove()
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true
        });
      }, index * 100);
      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
      gsap.to(element, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3 });
    };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (enableTilt) {
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
        gsap.to(element, { rotateX, rotateY, duration: 0.1, transformPerspective: 1000 });
      }

      const relativeX = (x / rect.width) * 100;
      const relativeY = (y / rect.height) * 100;
      element.style.setProperty('--glow-x', `${relativeX}%`);
      element.style.setProperty('--glow-y', `${relativeY}%`);
      element.style.setProperty('--glow-intensity', '1');
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, enableTilt]);

  return (
    <div ref={cardRef} className={`${className} bento-card-root`}>
      {children}
    </div>
  );
};

// --- Main Component ---
const WhatIsDart: React.FC = () => {
  const cards = useMemo(() => [
    {
      title: 'Practical Exposure',
      description: 'Move beyond textbooks. Build real drones — hardware and software working in harmony for actual controlled flight.',
      label: 'Workshop',
      className: 'bento-item-1'
    },
    {
      title: 'Embedded Systems',
      description: 'Write code that talks directly to sensors, actuators, and microcontrollers. The foundation of every robotic system.',
      label: 'Core',
      className: 'bento-item-2'
    },
    {
      title: 'Flight Mechanics',
      description: 'Explore propulsion, telemetry, and stabilization algorithms. Understand the physics that keeps a drone airborne.',
      label: 'Physics',
      className: 'bento-item-3'
    },
    {
      title: 'Industry Tools',
      description: 'From CAD design to firmware programming — the exact tools used by professionals in Aerospace and Mechatronics.',
      label: 'Toolkit',
      className: 'bento-item-4'
    },
    {
      title: 'Autonomous Flight',
      description: 'GPS waypoint navigation, obstacle avoidance, and mission planning deployed on real hardware you build yourself.',
      label: 'Advanced',
      className: 'bento-item-5'
    },
    {
      title: 'Live Competition at the End of Workshop',
      description: 'Judged by industry mentors.',
      label: 'Finale',
      className: 'bento-item-6'
    },
  ], []);

  return (
    <section id="what-is-dart" className="what-is-dart-bento">
      <div className="bento-container-wrapper">
        <div className="bento-grid-layout">
          {/* Card 1 */}
          <ParticleCard className="bento-card bento-item-1" glowColor={DEFAULT_GLOW_COLOR} enableTilt={true}>
            <div className="card-top"><span className="card-label">{cards[0].label}</span></div>
            <div className="card-bottom"><h3 className="card-title-main">{cards[0].title}</h3><p className="card-desc-main">{cards[0].description}</p></div>
          </ParticleCard>

          {/* Card 2 */}
          <ParticleCard className="bento-card bento-item-2" glowColor={DEFAULT_GLOW_COLOR} enableTilt={true}>
            <div className="card-top"><span className="card-label">{cards[1].label}</span></div>
            <div className="card-bottom"><h3 className="card-title-main">{cards[1].title}</h3><p className="card-desc-main">{cards[1].description}</p></div>
          </ParticleCard>

          {/* CENTRAL PIECE */}
          <div className="bento-center-piece">
            <span className="bento-eyebrow">AEROSPACE & ROBOTICS</span>
            <h2 className="bento-main-heading">What is<br /><em>DART 2.0?</em></h2>
            <p className="bento-main-desc">
              Not just a lecture — a deep-dive into flight mechanics and autonomous robotics.
            </p>
          </div>

          {/* Card 3 */}
          <ParticleCard className="bento-card bento-item-3" glowColor={DEFAULT_GLOW_COLOR} enableTilt={true}>
            <div className="card-top"><span className="card-label">{cards[2].label}</span></div>
            <div className="card-bottom"><h3 className="card-title-main">{cards[2].title}</h3><p className="card-desc-main">{cards[2].description}</p></div>
          </ParticleCard>

          {/* Card 4 */}
          <ParticleCard className="bento-card bento-item-4" glowColor={DEFAULT_GLOW_COLOR} enableTilt={true}>
            <div className="card-top"><span className="card-label">{cards[3].label}</span></div>
            <div className="card-bottom"><h3 className="card-title-main">{cards[3].title}</h3><p className="card-desc-main">{cards[3].description}</p></div>
          </ParticleCard>

          {/* Card 5 */}
          <ParticleCard className="bento-card bento-item-5" glowColor={DEFAULT_GLOW_COLOR} enableTilt={true}>
            <div className="card-top"><span className="card-label">{cards[4].label}</span></div>
            <div className="card-bottom"><h3 className="card-title-main">{cards[4].title}</h3><p className="card-desc-main">{cards[4].description}</p></div>
          </ParticleCard>

          {/* Card 6 */}
          <ParticleCard className="bento-card bento-item-6" glowColor={DEFAULT_GLOW_COLOR} enableTilt={true}>
            <div className="card-top"><span className="card-label">{cards[5].label}</span></div>
            <div className="card-bottom"><h3 className="card-title-main">{cards[5].title}</h3><p className="card-desc-main">{cards[5].description}</p></div>
          </ParticleCard>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDart;