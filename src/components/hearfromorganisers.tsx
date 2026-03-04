import React from 'react';

const HearfromOrganisers: React.FC = () => {
  return (
    <section id="organisers" className="section">
      <div className="section-header delay-1 animated">
        <h2 className="section-title">Words from the <span className="text-gradient">Core</span></h2>
        <p className="section-subtitle">Why we are building DART 2.0.</p>
      </div>

      <div className="delay-2 animated glass-card relative" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem', backgroundColor: 'rgba(15, 23, 42, 0.4)' }}>
        {/* Quote graphic */}
        <div style={{ fontSize: '6rem', position: 'absolute', top: '-10px', left: '20px', color: 'rgba(6, 182, 212, 0.15)', lineHeight: 1, fontFamily: 'sans-serif' }}>"</div>
        
        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', fontStyle: 'italic', position: 'relative', zIndex: 1, color: 'var(--text-primary)', marginBottom: '2rem' }}>
          We realized that theoretical knowledge forms the base, but practical implementation is what launches careers. 
          When we built DART 1.0, the goal was simple: get students to build drones. With DART 2.0, our vision has evolved. 
          We want to forge engineers who understand every signal sent through the telemetry arrays, every bit of code driving the ESCs, 
          and the fundamental mechanics of what makes autonomous robotics possible.
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
           <div style={{ width: '50px', height: '50px', background: 'var(--accent-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>C</div>
           <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>The Organizing Committee</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }} className="text-muted">DART Workshop Initiative</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HearfromOrganisers;
