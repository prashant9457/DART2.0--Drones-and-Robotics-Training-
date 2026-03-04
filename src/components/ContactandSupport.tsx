import React from 'react';

const ContactandSupport: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
      <div className="grid grid-2 text-center" style={{ gap: '4rem', alignItems: 'center' }}>
        
        <div style={{ textAlign: 'left' }} className="delay-1 animated">
          <h2 className="section-title">Engage With <span className="text-gradient">Us</span></h2>
          <p className="section-subtitle" style={{ margin: '0 0 2rem 0', maxWidth: 'none' }}>
            Secure your spot in the next era of robotics training. Limited seats available to ensure hands-on focus.
          </p>

          <a href="#" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', padding: '1.2rem 3rem', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Initiate Registration Form
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <p><strong>Email:</strong> comms@dart2.event</p>
            <p><strong>Location:</strong> Main Engineering Block, Lab 4</p>
          </div>
        </div>

        <div className="glass-card text-center delay-2 animated" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Need Technical Support?</h3>
           <p className="text-muted" style={{ marginBottom: '2rem' }}>
             Reach out directly to our logistics team for any queries regarding scheduling, kit accommodation, or specific accessibility requests.
           </p>
           <button className="btn btn-outline" style={{ width: '100%', padding: '1rem 0' }}>Contact Logistics</button>
        </div>

      </div>

      <footer style={{ marginTop: '6rem', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '5px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem' }}>
         <div className="nav-brand" style={{ justifyContent: 'center', marginBottom: '1rem', filter: 'grayscale(100%)', opacity: 0.5 }}>
           DART <span className="text-gradient">2.0</span>
         </div>
      </footer>
    </section>
  );
};

export default ContactandSupport;
