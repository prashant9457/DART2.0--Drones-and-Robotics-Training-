import React from 'react';

const KeyInsightsSkills: React.FC = () => {
  return (
    <section id="skills" className="section glass-section">
      <div className="section-header animated delay-1">
        <h2 className="section-title">Key <span className="text-gradient">Insights & Skills</span></h2>
        <p className="section-subtitle">What you will extract from this experience.</p>
      </div>

      <div className="grid grid-2 animated delay-2">
        <ul className="skill-list glass-card">
          <li><strong>System Architecture:</strong> Designing modular software for robotics.</li>
          <li><strong>Embedded C/C++:</strong> Microcontroller programming paradigms.</li>
          <li><strong>Sensors & Telemetry:</strong> IMUs, Barometers, and communication protocols.</li>
          <li><strong>Control Theory:</strong> Real-world implementations of PID controllers.</li>
        </ul>
        <ul className="skill-list glass-card">
          <li><strong>CAD Prototyping:</strong> Designing 3D printable mounts and frames.</li>
          <li><strong>Team Collaboration:</strong> Working as an engineering taskforce.</li>
          <li><strong>Troubleshooting:</strong> Real-time debugging of integrated systems.</li>
          <li><strong>Project Management:</strong> Navigating technical complexities under time limits.</li>
        </ul>
      </div>
    </section>
  );
};

export default KeyInsightsSkills;
