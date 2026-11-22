import { Link } from 'react-router-dom';
import { mono } from '../constants';

export default function Hero() {
  return (
    <header id="top" style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px 40px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: 56, alignItems: 'end',
      }}>
        <div className="hero-col">
          <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.04em', color: '#6e6e73', marginBottom: 24 }}>
            SOFTWARE ENGINEER · BELMOPAN, BELIZE
          </div>
          <h1 style={{
            margin: 0, fontWeight: 700,
            fontSize: 'clamp(44px, 6.4vw, 84px)',
            lineHeight: 1.0, letterSpacing: '-0.045em', color: '#000',
          }}>
            Apps, websites and AI. Built end to end.
          </h1>
          <p style={{ margin: '28px 0 0', fontSize: 21, lineHeight: 1.45, color: '#6e6e73', maxWidth: 520 }}>
            I design and ship mobile apps for iOS and Android, websites for growing businesses, AI tools that save teams real hours.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
            <a href="#work" className="btn-press" style={{
              background: '#000', color: '#fff',
              padding: '14px 26px', borderRadius: 980, fontSize: 17, fontWeight: 500,
            }}>
              See my work
            </a>
            <Link to="/contact" className="btn-press" style={{
              border: '1px solid #d2d2d7', color: '#000',
              padding: '14px 26px', borderRadius: 980, fontSize: 17, fontWeight: 500,
            }}>
              Start a project
            </Link>
          </div>
        </div>
        <div className="hero-portrait" style={{
          position: 'relative', aspectRatio: '4/5', maxHeight: 620,
          width: '100%', borderRadius: 28, overflow: 'hidden', background: '#f5f5f7',
        }}>
          <img
            src="/hero-portrait.webp"
            alt="Keenan Bernard"
            width="768" height="1024"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </header>
  );
}
