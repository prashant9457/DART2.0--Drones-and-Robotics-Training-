import React from 'react';
import './Timeline.css';

const EventTimeline: React.FC = () => {
  const events = [
    { time: 'Day 1 - 09:00 AM', title: 'Registration & Onboarding', desc: 'Welcome briefing and team allocations.' },
    { time: 'Day 1 - 10:30 AM', title: 'Intro to Drone Systems', desc: 'Understanding components: ESCs, BLDCs, Flight Controllers.' },
    { time: 'Day 1 - 02:00 PM', title: 'Hands-on: Circuitry', desc: 'Soldering and assembling the core drone framework.' },
    { time: 'Day 2 - 09:30 AM', title: 'Firmware & Calibration', desc: 'Flashing Betaflight/Ardupilot and checking sensor data.' },
    { time: 'Day 2 - 01:00 PM', title: 'Test Flights & Debugging', desc: 'Initial hover tests, PID tuning, and crash mitigations.' },
    { time: 'Day 2 - 04:00 PM', title: 'Closing & Awards', desc: 'Showcasing successful stable flights.' }
  ];

  return (
    <section id="timeline" className="section">
      <div className="section-header delay-1 animated">
        <h2 className="section-title">Event <span className="text-gradient">Timeline</span></h2>
        <p className="section-subtitle">A highly structured pacing for maximum output.</p>
      </div>

      <div className="timeline-container delay-2 animated">
        {events.map((evt, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="text-gradient timeline-time">{evt.time}</span>
              <h3>{evt.title}</h3>
              <p className="text-muted">{evt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventTimeline;
