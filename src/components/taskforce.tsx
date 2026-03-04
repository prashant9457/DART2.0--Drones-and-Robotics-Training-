import React, { useState, useMemo, useEffect } from 'react';
import TiltedCard from './tiltedcard';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { TASKFORCE_MEMBERS } from '../data/taskforcedata';
import './taskforce.css';

const CATEGORIES = ["All", "Faculty", "Tech Team", "Volunteers"];
const ITEMS_PER_PAGE = 6;

const Taskforce: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const filteredMembers = useMemo(() => {
    const filtered = activeTab === "All" 
      ? TASKFORCE_MEMBERS 
      : TASKFORCE_MEMBERS.filter(m => m.category === activeTab);
    return filtered;
  }, [activeTab]);

  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);
  const currentMembers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMembers.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredMembers, currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <section className="taskforce-section" id="team">
      <div className="taskforce-container">
        
        <header className="taskforce-minimal-header">
           <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="clean-title"
           >
             Taskforce
           </motion.h2>
           
           <div className="taskforce-controls">
             <div className="minimal-tabs">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      className={`min-tab cursor-target ${activeTab === cat ? 'active' : ''}`}
                      onClick={() => setActiveTab(cat)}
                    >
                      {cat}
                    </button>
                  ))}
              </div>
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
              {currentMembers.map((member) => (
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
                          <div className="overlay-badge">{member.category}</div>
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



