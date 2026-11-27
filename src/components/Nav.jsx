import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/" style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em' }}>
          Keenan Bernard
        </Link>

        <div className="nav-links">
          <Link to="/#work" className="nav-link" style={{ color: '#424245' }}>Work</Link>
          <Link to="/#services" className="nav-link" style={{ color: '#424245' }}>Services</Link>
          <Link to="/#skills" className="nav-link" style={{ color: '#424245' }}>Skills</Link>
          <Link to="/#experience" className="nav-link" style={{ color: '#424245' }}>Experience</Link>
          <Link to="/#contact" className="btn-press" style={{
            background: '#000', color: '#fff',
            padding: '8px 16px', borderRadius: 980, fontWeight: 500,
          }}>
            Get in touch
          </Link>
        </div>

        <button
          className="nav-hamburger btn-press"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <svg key="close" className="icon-in" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5l12 12M17 5L5 17" stroke="#000" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg key="open" className="icon-in" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="#000" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/#work" onClick={closeMenu}>Work</Link>
          <Link to="/#services" onClick={closeMenu}>Services</Link>
          <Link to="/#skills" onClick={closeMenu}>Skills</Link>
          <Link to="/#experience" onClick={closeMenu}>Experience</Link>
          <Link to="/#contact" onClick={closeMenu}>Get in touch</Link>
        </div>
      )}
    </nav>
  );
}
