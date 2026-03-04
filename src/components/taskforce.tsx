import React, { useState, useMemo } from 'react';
import TiltedCard from './tiltedcard';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { TASKFORCE_MEMBERS } from '../data/taskforcedata';
import type { TaskforceMember } from '../data/taskforcedata';
import bannerImg from '../assets/team/banner.png';
import './taskforce.css';

const ITEMS_PER_PAGE = 6;

const Taskforce: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TASKFORCE_MEMBERS.length / ITEMS_PER_PAGE);
  const currentMembers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return TASKFORCE_MEMBERS.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <section className="taskforce-section red-theme" id="team">
      <div className="taskforce-banner-wrap">
        <img src={bannerImg} alt="DART Taskforce Banner" className="taskforce-banner-img" />
        <div className="banner-overlay"></div>
      </div>
      
      <div className="red-theme-decor">
        <div className="red-glow-1"></div>
        <div className="red-glow-2"></div>
      </div>

      <div className="taskforce-container">
        
        <header className="taskforce-minimal-header">
           <div className="title-group">
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="clean-title"
             >
               Taskforce
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="clean-subtitle"
             >
               Team of Professors and Students who made DART Possible
             </motion.p>
           </div>
        </header>

        <div className="taskforce-grid-wrap">
          {totalPages > 1 && (
            <div className="side-pagination">
              <button 
                onClick={handlePrev} 
                disabled={currentPage === 1}
                className="side-pagi-btn prev"
                aria-label="Previous page"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button 
                onClick={handleNext} 
                disabled={currentPage === totalPages}
                className="side-pagi-btn next"
                aria-label="Next page"
              >
                <ChevronRight size={32} />
              </button>
              
              <div className="side-pagi-indicator">
                 {currentPage} / {totalPages}
              </div>
            </div>
          )}

          <motion.div 
            layout
            className="taskforce-grid"
          >
            <AnimatePresence mode='popLayout'>
              {currentMembers.map((member: TaskforceMember) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="taskforce-item"
                >
                  <TiltedCard
                    imageSrc={member.image}
                    altText={member.name}
                    captionText={member.name}
                    containerHeight="480px"
                    containerWidth="100%"
                    imageHeight="480px"
                    imageWidth="350px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="card-linkedin-link-always pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin size={20} />
                          </a>
                        )}
                        <div className="card-overlay-content">
                          <h3 className="overlay-title">{member.name}</h3>
                          <p className="overlay-subtitle">{member.role}</p>
                          <div className="overlay-meta">
                            <span className="overlay-dept">{member.dept}</span>
                            {member.year && (
                              <span className="overlay-year"> | Year {member.year}</span>
                            )}
                          </div>
                        </div>
                      </>
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Taskforce;



