import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.78)',
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 60, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 24,
      }}>
        <a href="#top" style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em' }}>
          Keenan Bernard
        </a>

        <div className="nav-links">
          <a href="#work" className="nav-link" style={{ color: '#424245' }}>Work</a>
          <a href="#services" className="nav-link" style={{ color: '#424245' }}>Services</a>
          <a href="#skills" className="nav-link" style={{ color: '#424245' }}>Skills</a>
          <a href="#experience" className="nav-link" style={{ color: '#424245' }}>Experience</a>
          <a href="#contact" className="btn-press" style={{
            background: '#000', color: '#fff',
            padding: '8px 16px', borderRadius: 980, fontWeight: 500,
          }}>
            Get in touch
          </a>
        </div>

        <button
          className="nav-hamburger btn-press"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5l12 12M17 5L5 17" stroke="#000" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="#000" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Get in touch</a>
        </div>
      )}
    </nav>
  );
}
