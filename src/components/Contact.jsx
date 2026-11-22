import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#000', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
        <h2 className="reveal" style={{ margin: '0 auto', fontSize: 'clamp(48px,7vw,96px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 0.98, maxWidth: 900 }}>
          Have something to build?
        </h2>
        <p className="reveal" style={{ '--reveal-delay': '60ms', margin: '24px auto 0', fontSize: 21, color: '#a1a1a6', maxWidth: 560 }}>
          An app, a website, or an AI assistant for your team. Tell me what you have in mind.
        </p>
        <div className="reveal" style={{ '--reveal-delay': '120ms', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <Link to="/contact"
            className="btn-press"
            style={{ background: '#fff', color: '#000', padding: '16px 30px', borderRadius: 980, fontSize: 17, fontWeight: 500 }}>
            Tell me about your project
          </Link>
        </div>
      </div>
    </section>
  );
}
