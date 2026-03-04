import React, { useState } from 'react';

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I need prior experience with drones?',
      a: 'Not at all. DART 2.0 is structured to take you from absolute basics to functioning flight. We provide all the necessary grounding before handling hardware.'
    },
    {
      q: 'What is the duration of the workshop?',
      a: 'The workshop spans across two immersive days, focusing on both theory and intensive practical application.'
    },
    {
      q: 'Will hardware be provided?',
      a: 'Yes, all kits, microcontrollers, and soldering stations are provided for the duration of the practical sessions.'
    },
    {
      q: 'Can 1st year students enroll?',
      a: 'Absolutely. We encourage early exposure to these technologies. Diverse teaming ensures everyone contributes.'
    }
  ];

  return (
    <section id="faqs" className="section">
      <div className="section-header delay-1 animated">
        <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
        <p className="section-subtitle">Addressing any doubts before launch.</p>
      </div>

      <div className="delay-2 animated" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card" style={{ marginBottom: '1rem', cursor: 'pointer', padding: '1.5rem 2rem' }} onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: activeIndex === i ? 'var(--accent-cyan)' : 'var(--text-primary)', transition: 'color 0.3s ease' }}>
                {faq.q}
              </h3>
              <span style={{ fontSize: '1.5rem', transform: `rotate(${activeIndex === i ? '45deg' : '0'})`, transition: 'transform 0.3s ease', color: 'var(--text-secondary)' }}>
                +
              </span>
            </div>
            
            <div style={{ 
              maxHeight: activeIndex === i ? '200px' : '0', 
              overflow: 'hidden', 
              transition: 'max-height 0.4s ease',
              marginTop: activeIndex === i ? '1rem' : '0'
            }}>
              <p className="text-muted" style={{ margin: 0, lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
