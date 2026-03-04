import React from 'react';
import { motion } from 'motion/react';
import './SpeakersTrainers.css';

// Import images
import aviocianImg from '../assets/Speakers/aviocian.png';
import jyotindraImg from '../assets/Speakers/jyotindra.png';
import suhaibImg from '../assets/Speakers/suhaib.png';
import skSahaImg from '../assets/Speakers/sk_saha.png';

interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  label: string;
  stats: { value: string; label: string }[];
}

const speakersData: Speaker[] = [
  {
    id: 2,
    label: "ACADEMICS / ROBOTICS",
    name: "Dr. Jyotindra Narayan",
    title: "Assistant Professor, IIT Patna",
    bio: "Honorary Associate at Imperial College London focusing on rehabilitation robotics and AI in healthcare. Recipient of the S. K. Mitra Memorial Best Research Paper Award (2024).",
    image: jyotindraImg,
    stats: [
      { value: "120+", label: "PUBLICATIONS" },
      { value: "IITP", label: "FACULTY" }
    ]
  },
  {
    id: 4,
    label: "DYNAMICS / AUTONOMY",
    name: "Prof. S.K. Saha",
    title: "Distinguished Professor",
    bio: "Leads the PAR (Programme in Autonomous Robotics) Lab. Specializes in robot dynamics and haptic devices for VR. Principal Investigator for high-value national robotics projects.",
    image: skSahaImg,
    stats: [
      { value: "PAR LAB", label: "DIRECTOR" },
      { value: "PI", label: "INVESTIGATOR" }
    ]
  },
  {
    id: 1,
    label: "MANUFACTURING / R&D",
    name: "Aviocian Technologies",
    title: "DGCA Certified Drone Solutions",
    bio: "Specializing in agriculture, commercial, and defence solutions. Aviocian develops multi-payload systems and promotes innovation through DGCA-approved training programs and Drone Labs across India.",
    image: aviocianImg,
    stats: [
      { value: "EST. 2018", label: "FOUNDED" },
      { value: "DGCA", label: "CERTIFIED" }
    ]
  },
  {
    id: 3,
    label: "MECHANICAL / DESIGN",
    name: "Dr. Mohd. Suhaib",
    title: "Professor, Jamia Millia Islamia",
    bio: "Over 32 years of research expertise in Mechatronics and Automation. Developed four-fingered robotic hands with multi-axis sensing and leads the Robotics & AI curriculum at JMI.",
    image: suhaibImg,
    stats: [
      { value: "32+ YRS", label: "EXPERIENCE" },
      { value: "180+", label: "PAPERS" }
    ]
  }
];

const SpeakersTrainers: React.FC = () => {
  return (
    <section id="speakers" className="speakers-vertical-section py-20 lg:py-40">
      <div className="section-header text-center mb-12 lg:mb-32 px-4 overflow-hidden relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-4xl lg:text-7xl font-black mb-6"
        >
          Instructors & <span className="text-purple-gradient">Engineers</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle text-lg lg:text-xl text-white/50 max-w-2xl mx-auto"
        >
          The architects of DART. Learn from those who define the cutting edge.
        </motion.p>
      </div>

      <div className="speakers-section-decor">
        <div className="decor-glow purple-glow-1"></div>
        <div className="decor-glow purple-glow-2"></div>
      </div>

      <div className="speakers-list-container relative z-10 w-full flex flex-col items-center">
        <div className="speakers-list-inner w-full max-w-[1200px] flex flex-col items-center gap-24 lg:gap-40 px-4">
          {speakersData.map((speaker, index) => (
            <motion.div 
              key={speaker.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`speaker-bento-card group flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="speaker-image-container flex-0 lg:flex-[0_0_45%] h-[400px] lg:h-full relative overflow-hidden">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="image-inner h-full w-full"
                >
                  <img src={speaker.image} alt={speaker.name} className="speaker-image h-full w-full object-cover" />
                  <div className="image-overlay-purple absolute inset-0"></div>
                </motion.div>
              </div>
              
              <div className="speaker-details-panel flex-1 p-8 lg:p-16 relative flex flex-col justify-center overflow-hidden">
                <div className="bento-glass-bg absolute inset-0"></div>
                
                <div className="content-inner relative z-10">
                  <span className="speaker-label-purple">{speaker.label}</span>
                  <h3 className="speaker-name-v2">{speaker.name}</h3>
                  <p className="speaker-role-text">{speaker.title}</p>
                  <p className="speaker-bio-v2">{speaker.bio}</p>
                  
                  <div className="speaker-stats-grid grid grid-cols-2 gap-6 mt-8">
                    {speaker.stats.map((stat, idx) => (
                      <div key={idx} className="stat-box-purple p-6 rounded-3xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                        <h4 className="stat-val text-2xl font-black text-white">{stat.value}</h4>
                        <p className="stat-desc text-xs font-mono text-white/40 uppercase tracking-widest">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-shine absolute inset-0 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersTrainers;

