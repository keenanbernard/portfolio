import { mono } from '../constants';

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@KeenanBernard' },
  { label: 'Instagram', href: 'https://www.instagram.com/k.a.bernard/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kabernard_' },
];

export default function OffTheClock() {
  return (
    <section id="youtube" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 100px' }}>
      <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>
          Off the clock.
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {socialLinks.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="btn-press"
              style={{ border: '1px solid #d2d2d7', borderRadius: 980, padding: '8px 16px', fontSize: 15, fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="reveal card-lift" style={{ '--reveal-delay': '60ms',
        background: '#f5f5f7', borderRadius: 32, overflow: 'hidden',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
        alignItems: 'stretch',
      }}>
        <div style={{ padding: 'clamp(32px,5vw,64px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#6e6e73' }}>YOUTUBE</div>
          <div style={{ marginTop: 20, fontSize: 'clamp(88px,11vw,144px)', fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.88, color: '#000' }}>58K+</div>
          <div style={{ marginTop: 10, fontSize: 21, color: '#6e6e73' }}>subscribers</div>
          <p style={{ margin: '28px 0 0', fontSize: 18, lineHeight: 1.55, color: '#424245', maxWidth: 440 }}>
            On my channel I share what I love outside of work: gaming, anime edits and tech.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
            {['Gaming', 'Anime edits', 'Tech'].map(tag => (
              <span key={tag} style={{ background: '#fff', borderRadius: 980, padding: '6px 14px', fontSize: 14 }}>{tag}</span>
            ))}
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 36 }}>
            <a href="https://www.youtube.com/@KeenanBernard" target="_blank" rel="noreferrer"
              className="btn-press"
              style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '14px 26px', borderRadius: 980, fontSize: 17, fontWeight: 500 }}>
              Watch on YouTube
            </a>
          </div>
        </div>
        <div style={{ minHeight: 420, background: '#0f0f0f', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '48px 32px', textAlign: 'center' }}>
          <div style={{ width: 220, height: 220, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 0 0 6px #1d1d1f, 0 0 0 7px #3a3a3c' }}>
            <img src="/yt-avatar-hd.webp" alt="Keenan Bernard YouTube channel" width="800" height="800" loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em' }}>Keenan Bernard</div>
            <div style={{ marginTop: 8, fontSize: 16, color: '#a1a1a6' }}>@KeenanBernard · 58.9K subscribers · 334 videos</div>
          </div>
        </div>
      </div>

      <div className="reveal card-lift" style={{ '--reveal-delay': '120ms',
        marginTop: 24, background: '#000', color: '#fff', borderRadius: 32,
        padding: 'clamp(32px,5vw,64px)',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
        gap: '32px 64px', alignItems: 'end',
      }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#a1a1a6' }}>ONLINE FITNESS PROGRAMS</div>
          <h3 style={{ margin: '18px 0 0', fontSize: 'clamp(44px,5.5vw,72px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>
            Train with me.
          </h3>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: '#d2d2d7', maxWidth: 460 }}>
            Structured online programs you can follow from anywhere, plus merch, all in my shop.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
            <a href="https://kabernard-shop.fourthwall.com" target="_blank" rel="noreferrer"
              className="btn-press"
              style={{ background: '#fff', color: '#000', padding: '14px 26px', borderRadius: 980, fontSize: 17, fontWeight: 500 }}>
              Browse programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
