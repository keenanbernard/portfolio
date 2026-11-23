import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mono } from '../constants';
import Footer from './Footer';

const TYPES     = ['Mobile app', 'Website', 'AI tool', 'Something else'];
const BUDGETS   = ['Under $1K', '$1K to $5K', '$5K+', 'Not sure yet'];
const TIMELINES = ['ASAP', 'This month', 'Next few months', 'Flexible'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strip null bytes and non-printable control characters (keep tab, newline, CR)
function sanitize(str) {
  // eslint-disable-next-line no-control-regex
  return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
}

function ChipGroup({ options, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map(label => {
        const on = value === label;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(on ? null : label)}
            className="btn-press"
            aria-pressed={on}
            style={{
              height: 44, padding: '0 20px', borderRadius: 980,
              fontSize: 15, fontWeight: 500, cursor: 'pointer',
              border: `1px solid ${on ? '#000' : '#d2d2d7'}`,
              background: on ? '#000' : '#fff',
              color: on ? '#fff' : '#1d1d1f',
              transition: 'background 150ms, border-color 150ms, color 150ms',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

const sidebarLinks = [
  { label: 'Email',     value: 'keenanbernard@outlook.com', href: 'mailto:keenanbernard@outlook.com', external: false },
  { label: 'Phone',     value: '+501 614 4297',              href: 'tel:+5016144297',                  external: false },
  { label: 'Instagram', value: '@k.a.bernard',               href: 'https://www.instagram.com/k.a.bernard/', external: true },
  { label: 'YouTube',   value: '@KeenanBernard',             href: 'https://www.youtube.com/@KeenanBernard', external: true },
];


export default function ContactPage() {
  const [name,      setName]     = useState('');
  const [email,     setEmail]    = useState('');
  const [msg,       setMsg]      = useState('');
  const [type,      setType]     = useState(null);
  const [budget,    setBudget]   = useState(null);
  const [timeline,  setTimeline] = useState(null);
  const [honeypot,  setHoneypot] = useState('');
  const [sent,      setSent]     = useState(false);
  const [loading,   setLoading]  = useState(false);
  const [error,     setError]    = useState(false);

  const firstName = name.trim().split(/\s+/)[0] || 'friend';

  async function handleSubmit(e) {
    e.preventDefault();

    const cleanName  = sanitize(name.trim());
    const cleanEmail = sanitize(email.trim());
    const cleanMsg   = sanitize(msg.trim());

    if (!cleanName || !cleanEmail || !cleanMsg) return;
    if (!EMAIL_RE.test(cleanEmail)) return;
    if (honeypot) return;

    const safeType     = TYPES.includes(type)        ? type     : null;
    const safeBudget   = BUDGETS.includes(budget)     ? budget   : null;
    const safeTimeline = TIMELINES.includes(timeline) ? timeline : null;

    setLoading(true);
    setError(false);

    const formData = new FormData();
    formData.append('access_key', '07bb4d7f-a0b9-4a45-af10-422f872bb92e');
    formData.append('name',    cleanName);
    formData.append('email',   cleanEmail);
    formData.append('message', cleanMsg);
    if (safeType)     formData.append('Project type', safeType);
    if (safeBudget)   formData.append('Budget',       safeBudget);
    if (safeTimeline) formData.append('Timeline',     safeTimeline);

    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      data.success ? setSent(true) : setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

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
            Back to work
          </Link>
        </div>
      </nav>

      <header style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px 56px' }}>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.04em', color: '#6e6e73', marginBottom: 24 }}>
          CONTACT · BELMOPAN, BELIZE · UTC−6
        </div>
        <h1 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.98, letterSpacing: '-0.05em', color: '#000', maxWidth: 900, textWrap: 'balance' }}>
          Start with a message.
        </h1>
        <p style={{ margin: '28px 0 0', fontSize: 21, lineHeight: 1.45, color: '#6e6e73', maxWidth: 560 }}>
          A rough idea is plenty. Share what you have and I'll come back with questions, a plan and a price, usually the same day.
        </p>
      </header>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 120px' }} className="contact-layout">

        <div style={{ background: '#f5f5f7', borderRadius: 28, padding: 'clamp(28px,4vw,48px)' }}>
          {!sent ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>

              {/* honeypot — bots fill this, humans never see it */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 16 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#1d1d1f' }}>Name</span>
                  <input
                    value={name} onChange={e => setName(sanitize(e.target.value))}
                    required maxLength={100} placeholder="Who's writing?"
                    className="form-input"
                    style={{ height: 52, borderRadius: 14, padding: '0 16px', fontSize: 17, color: '#000', background: '#fff' }}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#1d1d1f' }}>Email</span>
                  <input
                    type="email" value={email} onChange={e => setEmail(sanitize(e.target.value))}
                    required maxLength={200} placeholder="Where I should reply"
                    className="form-input"
                    style={{ height: 52, borderRadius: 14, padding: '0 16px', fontSize: 17, color: '#000', background: '#fff' }}
                  />
                </label>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>What are we building?</span>
                <ChipGroup options={TYPES} value={type} onChange={setType} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>Rough budget <span style={{ fontWeight: 400, color: '#6e6e73' }}>(BZD)</span></span>
                <ChipGroup options={BUDGETS} value={budget} onChange={setBudget} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>When do you need it?</span>
                <ChipGroup options={TIMELINES} value={timeline} onChange={setTimeline} />
              </div>

              <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>The idea</span>
                <textarea
                  value={msg} onChange={e => setMsg(sanitize(e.target.value))}
                  required maxLength={2000} rows={6}
                  placeholder="What should it do, who is it for? What does a win look like?"
                  className="form-textarea"
                  style={{ borderRadius: 14, padding: '14px 16px', fontSize: 17, lineHeight: 1.45, color: '#000', background: '#fff', resize: 'vertical' }}
                />
              </label>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <span style={{ fontSize: 14, color: '#6e6e73' }}>Websites from BZ$400. Includes up to 5 pages, mobile-responsive design, 30 days of revisions. Apps and AI tools are quoted per project.</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                  {error && (
                    <span style={{ fontSize: 14, color: '#ff3b30' }}>Something went wrong. Please try again.</span>
                  )}
                  <button type="submit" disabled={loading} className="btn-press" style={{ background: '#000', color: '#fff', border: 'none', height: 52, padding: '0 30px', borderRadius: 980, fontSize: 17, fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}>
                    {loading ? 'Sending…' : 'Send message'}
                  </button>
                </div>
              </div>

            </form>
          ) : (
            <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, animation: 'fadeUp 400ms ease-out both' }}>
              <div className="check-pulse" style={{ width: 56, height: 56, borderRadius: '50%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 11.5l4 4 8-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{ margin: 0, fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
                Thanks, {firstName}.
              </h2>
              <p style={{ margin: 0, fontSize: 19, lineHeight: 1.45, color: '#6e6e73', maxWidth: 440 }}>
                Message received. I'll get back to you at {email}, usually the same day.
              </p>
              <button
                onClick={() => { setSent(false); setMsg(''); setError(false); }}
                style={{ alignSelf: 'flex-start', background: 'none', border: '1px solid #d2d2d7', height: 44, padding: '0 20px', borderRadius: 980, fontSize: 15, fontWeight: 500, cursor: 'pointer', color: '#000' }}
              >
                Write another
              </button>
            </div>
          )}
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.04em', color: '#6e6e73', paddingBottom: 16, borderBottom: '1px solid #d2d2d7' }}>
            OR REACH ME DIRECTLY
          </div>
          {sidebarLinks.map(item => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="contact-direct-link"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '24px 0', borderBottom: '1px solid #d2d2d7' }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, color: '#6e6e73' }}>{item.label}</div>
                <div style={{ marginTop: 6, fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em', overflowWrap: 'anywhere' }}>{item.value}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <path d="M5 11l6-6M6 5h5v5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#6e6e73' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#30d158', flexShrink: 0 }} />
            Small projects can also have a big impact
          </div>
        </aside>

      </section>

      <Footer />

    </div>
  );
}
