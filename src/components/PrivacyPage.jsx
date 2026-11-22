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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ margin: '20px 0 0', fontSize: 18, lineHeight: 1.55, color: '#6e6e73' }}>
          This site is a personal portfolio for Keenan Bernard. Here's exactly what happens with your data.
        </p>
      </header>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px 100px' }}>

        <Section title="What data is collected">
          <p style={{ margin: 0 }}>
            When you submit the contact form, the following information is collected: your name, email address, the message you write. The optional fields (project type, budget, timeline) are collected only if you fill them in.
          </p>
          <p style={{ margin: '16px 0 0' }}>
            No other personal data is collected. This site does not use cookies or persistent tracking of any kind.
          </p>
        </Section>

        <Section title="How it's used">
          <p style={{ margin: 0 }}>
            Your name and email are used solely to reply to your enquiry. Your details are never sold, rented, or shared with third parties for marketing purposes.
          </p>
        </Section>

        <Section title="Third-party services">
          <p style={{ margin: 0 }}>Form submissions are processed by <strong>Web3Forms</strong> (web3forms.com), which delivers them to my inbox. Web3Forms stores submitted data temporarily to deliver it and may retain it for a short period for anti-spam purposes. See their privacy policy at web3forms.com.</p>
          <p style={{ margin: '16px 0 0' }}>This site uses <strong>Vercel Analytics</strong>, a privacy-first analytics tool that does not use cookies or store personally identifiable information. It measures aggregate traffic using a daily-rotating hash of your IP address and user agent. See vercel.com/legal/privacy-policy.</p>
          <p style={{ margin: '16px 0 0' }}>Fonts are served by <strong>Google Fonts</strong>. When your browser loads a font, Google may log your IP address per their standard privacy practices. See policies.google.com/privacy.</p>
        </Section>

        <Section title="Data retention">
          <p style={{ margin: 0 }}>
            Emails received through the contact form are kept only as long as the correspondence is relevant, then deleted. No database of contact records is maintained.
          </p>
        </Section>

        <Section title="Your rights">
          <p style={{ margin: 0 }}>
            You can request that any personal data you've submitted be deleted. Email <a href="mailto:keenanbernard@outlook.com" style={{ color: '#000', fontWeight: 500 }}>keenanbernard@outlook.com</a> and I'll handle it within 30 days.
          </p>
        </Section>

        <Section title="Contact">
          <p style={{ margin: 0 }}>
            Questions about this policy? <a href="mailto:keenanbernard@outlook.com" style={{ color: '#000', fontWeight: 500 }}>keenanbernard@outlook.com</a>
          </p>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
