import { Link } from 'react-router-dom';
import { mono } from '../constants';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
      <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.08em', color: '#6e6e73', marginBottom: 24 }}>
        404 · PAGE NOT FOUND
      </div>
      <h1 style={{ margin: 0, fontSize: 'clamp(72px,15vw,180px)', fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.9, color: '#fff' }}>
        Oops.
      </h1>
      <p style={{ margin: '32px 0 0', fontSize: 19, lineHeight: 1.5, color: '#6e6e73', maxWidth: 420 }}>
        That page doesn't exist. It may have moved or never been here.
      </p>
      <Link
        to="/"
        style={{ display: 'inline-block', marginTop: 40, background: '#fff', color: '#000', padding: '14px 28px', borderRadius: 980, fontSize: 17, fontWeight: 500 }}
      >
        Back to home
      </Link>
    </div>
  );
}
