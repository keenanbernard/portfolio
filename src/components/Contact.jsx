const footerLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@KeenanBernard' },
  { label: 'Instagram', href: 'https://www.instagram.com/k.a.bernard/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kabernard_' },
  { label: 'LinkedIn @kbernard98', href: 'https://www.linkedin.com/in/kbernard98/' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#000', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 64px', textAlign: 'center' }}>
        <h2 className="reveal" style={{ margin: '0 auto', fontSize: 'clamp(48px,7vw,96px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 0.98, maxWidth: 900 }}>
          Have something to build?
        </h2>
        <p className="reveal" style={{ '--reveal-delay': '60ms', margin: '24px auto 0', fontSize: 21, color: '#a1a1a6', maxWidth: 560 }}>
          An app, a website, or an AI assistant for your team. Tell me what you have in mind.
        </p>
        <div className="reveal" style={{ '--reveal-delay': '120ms', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginTop: 40 }}>
          <a href="mailto:keenanbernard98@gmail.com"
            className="btn-press"
            style={{ background: '#fff', color: '#000', padding: '16px 30px', borderRadius: 980, fontSize: 17, fontWeight: 500 }}>
            keenanbernard98@gmail.com
          </a>
          <a href="tel:+5016144297"
            className="btn-press"
            style={{ border: '1px solid #6e6e73', color: '#fff', padding: '16px 30px', borderRadius: 980, fontSize: 17, fontWeight: 500 }}>
            +501 614-4297
          </a>
        </div>
        <div style={{ marginTop: 120, paddingTop: 24, borderTop: '1px solid #2c2c2e', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 13, color: '#86868b' }}>
          <span>© 2026 Keenan Bernard · Belmopan, Belize</span>
          <span style={{ display: 'flex', gap: 24 }}>
            {footerLinks.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{ color: '#86868b' }}>{l.label}</a>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
