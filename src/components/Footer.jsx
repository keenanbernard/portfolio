export default function Footer() {
  return (
    <footer style={{ background: '#000', color: '#86868b' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 13 }}>
        <span>© 2026 Keenan Bernard · Belmopan, Belize</span>
        <span style={{ display: 'flex', gap: 24 }}>
          <a href="mailto:keenanbernard@outlook.com" style={{ color: '#86868b' }}>keenanbernard@outlook.com</a>
          <a href="tel:+5016144297" style={{ color: '#86868b' }}>+501 614-4297</a>
          <a href="https://www.linkedin.com/in/kbernard98/" target="_blank" rel="noreferrer" style={{ color: '#86868b' }}>LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}
