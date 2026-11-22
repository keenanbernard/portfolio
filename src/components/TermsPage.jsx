import { Link } from 'react-router-dom';
import { mono } from '../constants';
import Footer from './Footer';

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ margin: '0 0 16px', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</h2>
      <div style={{ fontSize: 17, lineHeight: 1.65, color: '#424245' }}>{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.78)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <Link to="/" style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em' }}>Keenan Bernard</Link>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#424245' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>
        </div>
      </nav>

      <header style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px 48px' }}>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.04em', color: '#6e6e73', marginBottom: 20 }}>
          LEGAL · LAST UPDATED NOVEMBER 2026
        </div>
        <h1 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1, letterSpacing: '-0.04em' }}>
          Terms of Use
        </h1>
        <p style={{ margin: '20px 0 0', fontSize: 18, lineHeight: 1.55, color: '#6e6e73' }}>
          By using this website you agree to the following terms.
        </p>
      </header>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px 100px' }}>

        <Section title="About this site">
          <p style={{ margin: 0 }}>
            This is the personal portfolio website of Keenan Bernard, a software engineer based in Belmopan, Belize. It is provided for informational purposes and to allow potential clients to make contact.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p style={{ margin: 0 }}>
            You may browse this site for personal and professional purposes. You may not use it to transmit spam, malicious content, or anything unlawful. The contact form is provided for genuine project enquiries only.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p style={{ margin: 0 }}>
            All content on this site (text, design, code) is the property of Keenan Bernard unless stated otherwise. You may not reproduce or distribute it without permission.
          </p>
          <p style={{ margin: '16px 0 0' }}>
            Third-party trademarks (App Store, Google Play, etc.) belong to their respective owners and are referenced for identification purposes only.
          </p>
        </Section>

        <Section title="No warranties">
          <p style={{ margin: 0 }}>
            This site is provided as-is. While every effort is made to keep information accurate, no guarantees are made regarding completeness or availability. Project examples shown represent past client work and results may differ.
          </p>
        </Section>

        <Section title="External links">
          <p style={{ margin: 0 }}>
            Links to third-party websites (app stores, Vercel-hosted projects, YouTube, etc.) are provided for convenience. I have no control over their content and accept no liability for them.
          </p>
        </Section>

        <Section title="Changes">
          <p style={{ margin: 0 }}>
            These terms may be updated at any time. The date at the top of this page reflects the most recent revision. Continued use of the site after a change constitutes acceptance.
          </p>
        </Section>

        <Section title="Contact">
          <p style={{ margin: 0 }}>
            Questions? <a href="mailto:keenanbernard@outlook.com" style={{ color: '#000', fontWeight: 500 }}>keenanbernard@outlook.com</a>
          </p>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
