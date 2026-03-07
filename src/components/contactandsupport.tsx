import React from 'react';

const ContactandSupport: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '2rem 0' }}>
        <div className="glass-card text-center delay-2 animated" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem', maxWidth: '600px', width: '100%' }}>
           <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Need Technical Support?</h3>
           <p className="text-muted" style={{ marginBottom: '1rem' }}>
             Reach out directly to our technical lead for any queries regarding scheduling, kit accommodation, or specific workshop requests.
           </p>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
             <p style={{ margin: 0, fontSize: '0.95rem' }}><strong style={{ color: 'var(--primary-red)' }}>Technical Lead:</strong> Prashant Singh</p>
             <p style={{ margin: 0, fontSize: '0.95rem' }}><strong>Phone:</strong> <a href="tel:+918171890741" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8171890741</a></p>
             <p style={{ margin: 0, fontSize: '0.95rem' }}><strong>Email:</strong> <a href="mailto:dartworkshop.sharda@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>dartworkshop.sharda@gmail.com</a></p>
           </div>
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
