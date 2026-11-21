import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from './useScrollReveal';

const mono = "'Geist Mono', monospace";

const skills = [
  { title: 'AI & Machine Learning', items: ['LLM Integration', 'RAG Pipelines', 'OpenAI API', 'LangChain', 'Pinecone', 'Vector Search', 'Embeddings', 'M365 Copilot'] },
  { title: 'Languages & Frameworks', items: ['TypeScript', 'JavaScript', 'Python', 'SQL / PL/SQL', 'React', 'React Native (Expo)', 'Next.js', 'Node.js / Express', 'Flask'] },
  { title: 'Cloud & DevOps', items: ['Oracle Cloud (OCI)', 'Docker', 'GitHub Actions CI/CD', 'Git', 'Postman'] },
  { title: 'Data', items: ['Oracle 23ai / 12c', 'MySQL', 'MongoDB'] },
  { title: 'APIs & Security', items: ['REST', 'SOAP', 'Azure AD / MSAL', 'OAuth', 'RBAC'] },
  { title: 'Integrations & Practice', items: ['NetSuite', 'MIND Billing', 'Agile / Scrum', 'Jira', 'Confluence'] },
];

const jobs = [
  {
    dates: '2020 PRESENT',
    role: 'Senior Software Developer',
    summary: 'Lead end-to-end delivery of mobile, web and AI products: DigiGo, a production RAG knowledge base, a Copilot screening agent, integrations across Oracle billing, NetSuite and Azure AD. Set up CI/CD across repos.',
  },
  {
    dates: '2019 2020',
    role: 'Junior IT Application Specialist',
    summary: 'Configured and maintained enterprise platforms including MIND BSS, Comarch, Click, SMSC and CRM, supported testing and release cycles with QA, developers and foreign teams.',
  },
  {
    dates: '2018 2019',
    role: 'End User Support Technician',
    summary: 'Supported the Convergent Billing Project with Agile sprint coordination, ran Jira as lead administrator with dashboards and workflows.',
  },
];

const certs = [
  { name: 'Columbia University AI Cybersecurity & Governance', year: '2026' },
  { name: 'Oracle AI Vector Search Professional', year: '2025' },
  { name: 'OCI Foundations Associate', year: '2024' },
  { name: 'OCI AI Foundations Associate', year: '2024' },
  { name: 'Meta Front-End Developer', year: '2023' },
];

function CountUp({ end, suffix = '', duration = 1400 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fired.current) {
        fired.current = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - (1 - p) ** 3;
          setVal(Math.round(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function App() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>

      {/* ── Nav ── */}
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

          {/* Desktop links — hidden below 680px via CSS */}
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

          {/* Hamburger — shown below 680px via CSS */}
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

        {/* Mobile dropdown */}
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

      {/* ── Hero ── */}
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
              <a href="#contact" className="btn-press" style={{
                border: '1px solid #d2d2d7', color: '#000',
                padding: '14px 26px', borderRadius: 980, fontSize: 17, fontWeight: 500,
              }}>
                Start a project
              </a>
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

      {/* ── Stats ── */}
      <section className="reveal" style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 1, background: '#e8e8ed',
          borderTop: '1px solid #e8e8ed', borderBottom: '1px solid #e8e8ed',
        }}>
          <div style={{ background: '#fff', padding: '32px 24px 32px 0' }}>
            <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
              <CountUp end={8} suffix=" yrs" />
            </div>
            <div style={{ marginTop: 10, color: '#6e6e73', fontSize: 15 }}>
              in IT, <CountUp end={6} /> building production apps
            </div>
          </div>
          <div style={{ background: '#fff', padding: '32px 24px' }}>
            <div style={{ fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>iOS + Android</div>
            <div style={{ marginTop: 10, color: '#6e6e73', fontSize: 15 }}>DigiGo, shipped to both stores</div>
          </div>
          <div style={{ background: '#fff', padding: '32px 24px' }}>
            <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
              <CountUp end={9} suffix=" hrs" />
            </div>
            <div style={{ marginTop: 10, color: '#6e6e73', fontSize: 15 }}>saved per HR hiring round with a Copilot agent</div>
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 40px' }}>
        <div className="reveal" style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16, marginBottom: 40,
        }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>
            Selected work.
          </h2>
          <div style={{ color: '#6e6e73', fontSize: 17 }}>Mobile · Web · AI</div>
        </div>

        {/* DigiGo */}
        <article className="reveal card-lift" style={{
          background: '#000', color: '#fff', borderRadius: 32, overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          alignItems: 'center',
        }}>
          <div style={{ padding: 'clamp(32px,5vw,72px)' }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#a1a1a6' }}>
              MOBILE APP · iOS & ANDROID
            </div>
            <h3 style={{ margin: '16px 0 0', fontSize: 'clamp(44px,5.5vw,72px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>
              DigiGo
            </h3>
            <div style={{ marginTop: 8, fontSize: 21, color: '#a1a1a6' }}>Self-service for Digi customers.</div>
            <p style={{ margin: '24px 0 0', fontSize: 18, lineHeight: 1.55, color: '#d2d2d7', maxWidth: 480 }}>
              I led delivery of DigiGo for prepaid and postpaid customers: secure sign-in, real-time billing and usage, activity logs, help content and a store locator built on Google Places.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
              {['React Native (Expo)', 'TypeScript', 'Google Places API'].map(tag => (
                <span key={tag} style={{ border: '1px solid #424245', borderRadius: 980, padding: '6px 14px', fontSize: 14, color: '#f5f5f7' }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
              <a href="https://apps.apple.com/bz/app/my-digigo/id1326301109" target="_blank" rel="noreferrer"
                className="btn-press"
                style={{ background: '#fff', color: '#000', padding: '12px 22px', borderRadius: 980, fontSize: 16, fontWeight: 500 }}>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.belizetelemedia.mydigigo&hl=en" target="_blank" rel="noreferrer"
                className="btn-press"
                style={{ border: '1px solid #6e6e73', color: '#fff', padding: '12px 22px', borderRadius: 980, fontSize: 16, fontWeight: 500 }}>
                Google Play
              </a>
            </div>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
            gap: 20, padding: '56px 32px 0', background: '#1d1d1f',
            height: '100%', minHeight: 'clamp(300px, 80vw, 520px)',
          }}>
            <div style={{ width: 'calc(50% - 10px)', maxWidth: 230, aspectRatio: '230 / 470', borderRadius: 'clamp(24px, 10vw, 44px)', background: '#000', padding: 10, boxShadow: '0 0 0 1px #3a3a3c', transform: 'translateY(-30px)', flexShrink: 0 }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'clamp(16px, 7vw, 34px)', overflow: 'hidden', background: '#2c2c2e' }}>
                <img src="/digigo-1.webp" alt="DigiGo home screen" width="1320" height="2868" loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <div style={{ width: 'calc(50% - 10px)', maxWidth: 230, aspectRatio: '230 / 470', borderRadius: 'clamp(24px, 10vw, 44px)', background: '#000', padding: 10, boxShadow: '0 0 0 1px #3a3a3c', transform: 'translateY(10px)', flexShrink: 0 }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'clamp(16px, 7vw, 34px)', overflow: 'hidden', background: '#2c2c2e' }}>
                <img src="/digigo-2.webp" alt="DigiGo usage screen" width="1320" height="2868" loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </article>

        {/* From My Oven + Bernard's Electrical */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 24, marginTop: 24 }}>
          <article className="reveal card-lift" style={{ background: '#f5f5f7', borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 'clamp(28px,4vw,48px) clamp(28px,4vw,48px) 0' }}>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#6e6e73' }}>WEBSITE · FOOD · BELMOPAN</div>
              <h3 style={{ margin: '14px 0 0', fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05 }}>From My Oven</h3>
              <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.55, color: '#424245' }}>
                Pizza Friday in Belmopan. Four pizzas made from scratch, a menu, catering and gallery, an order-by-noon flow for Friday pick-up.
              </p>
              <a href="https://frommyoven.vercel.app" target="_blank" rel="noreferrer"
                className="btn-press"
                style={{ display: 'inline-block', marginTop: 20, fontSize: 17, fontWeight: 500, color: '#000' }}>
                Visit site ›
              </a>
            </div>
            <div style={{ margin: '36px 0 0 clamp(28px,4vw,48px)', flex: 1, minHeight: 300, borderRadius: '16px 0 0 0', overflow: 'hidden', background: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.06), 0 20px 50px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 32, display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', borderBottom: '1px solid #e8e8ed' }}>
                {[0,1,2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: '#d2d2d7' }} />)}
              </div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img src="/frommyoven.webp" alt="From My Oven website screenshot" width="3014" height="1588" loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </article>

          <article className="reveal card-lift" style={{ '--reveal-delay': '60ms', background: '#f5f5f7', borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 'clamp(28px,4vw,48px) clamp(28px,4vw,48px) 0' }}>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#6e6e73' }}>WEBSITE · ELECTRICAL CONTRACTOR</div>
              <h3 style={{ margin: '14px 0 0', fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05 }}>Bernard's Electrical Solutions</h3>
              <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.55, color: '#424245' }}>
                Consultation, installation and repair for homes and businesses across Belize. Services, process and past work, with a one-tap call to book.
              </p>
              <a href="https://bernardselectrical.vercel.app" target="_blank" rel="noreferrer"
                className="btn-press"
                style={{ display: 'inline-block', marginTop: 20, fontSize: 17, fontWeight: 500, color: '#000' }}>
                Visit site ›
              </a>
            </div>
            <div style={{ margin: '36px 0 0 clamp(28px,4vw,48px)', flex: 1, minHeight: 300, borderRadius: '16px 0 0 0', overflow: 'hidden', background: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.06), 0 20px 50px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 32, display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', borderBottom: '1px solid #e8e8ed' }}>
                {[0,1,2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: '#d2d2d7' }} />)}
              </div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img src="/bernards-electrical.webp" alt="Bernard's Electrical Solutions website screenshot" width="3014" height="1588" loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </article>
        </div>

        {/* RAG + Copilot */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 24, marginTop: 24 }}>
          <article className="reveal card-lift" style={{ background: '#000', color: '#fff', borderRadius: 32, padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 20, minHeight: 420 }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#a1a1a6' }}>AI · RAG CHATBOT</div>
            <h3 style={{ margin: 0, fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05 }}>Ask the company anything.</h3>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#d2d2d7' }}>
              A production RAG knowledge base that lets staff query policies in plain language. Document ingestion with OCR fallback, semantic chunking, role-based access through Microsoft sign-in.
            </p>
            <div style={{ marginTop: 'auto', borderRadius: 18, background: '#1d1d1f', padding: 20, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
              <div style={{ alignSelf: 'flex-end', background: '#fff', color: '#000', padding: '10px 14px', borderRadius: '16px 16px 4px 16px', maxWidth: '80%' }}>
                How much paid sick leave am I entitled to?
              </div>
              <div style={{ alignSelf: 'flex-start', background: '#2c2c2e', color: '#f5f5f7', padding: '12px 14px', borderRadius: '16px 16px 16px 4px', maxWidth: '88%', lineHeight: 1.45 }}>
                Up to <strong>16 working days</strong> with pay in any 12 months, once you've worked for the same employer at least 60 days in the past year. Your employer can ask for a medical certificate within 48 hours.
                <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Labour Act, Cap. 297 · s.131(1)', 's.131(2)'].map(tag => (
                    <span key={tag} style={{ fontFamily: mono, fontSize: 11, color: '#d2d2d7', border: '1px solid #48484a', borderRadius: 6, padding: '3px 8px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['GPT-4o', 'LangChain', 'Pinecone', 'Docker on OCI'].map(tag => (
                <span key={tag} style={{ border: '1px solid #424245', borderRadius: 980, padding: '6px 14px', fontSize: 13 }}>{tag}</span>
              ))}
            </div>
          </article>

          <article className="reveal card-lift" style={{ '--reveal-delay': '60ms', background: '#f5f5f7', borderRadius: 32, padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 20, minHeight: 420 }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#6e6e73' }}>AI · MICROSOFT 365 COPILOT AGENT</div>
            <h3 style={{ margin: 0, fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05 }}>Shortlists, not stacks.</h3>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#424245' }}>
              A Copilot screening agent that scores candidates and hands HR a ranked shortlist, instead of a pile of CVs.
            </p>
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: 'clamp(88px,10vw,128px)', fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.9 }}>9 hrs</div>
              <div style={{ color: '#6e6e73', fontSize: 17, marginTop: 8 }}>saved every hiring round</div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
        <h2 className="reveal" style={{ margin: '0 0 48px', fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1, maxWidth: 760 }}>
          Three things I do well.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 0, borderTop: '1px solid #000' }}>
          {[
            { n: '01', title: 'Mobile apps', body: 'One codebase, both stores. React Native and Expo apps with real auth, live data and the polish users expect.' },
            { n: '02', title: 'Business websites', body: 'Fast, responsive sites that make a local business look as good online as it does in person.' },
            { n: '03', title: 'AI solutions', body: 'Copilot agents and RAG chatbots grounded in your own documents, secured to the right people.' },
          ].map((s, i) => (
            <div key={s.n} className="stagger-item" style={{ '--i': i, padding: '32px 32px 32px 0' }}>
              <div style={{ fontFamily: mono, fontSize: 13, color: '#6e6e73' }}>{s.n}</div>
              <h3 style={{ margin: '20px 0 12px', fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em' }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#424245' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" style={{ background: '#f5f5f7' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
          <h2 className="reveal" style={{ margin: '0 0 12px', fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>
            The toolkit.
          </h2>
          <p className="reveal" style={{ '--reveal-delay': '60ms', margin: '0 0 48px', fontSize: 21, color: '#6e6e73' }}>
            From requirements and architecture through CI/CD and production support.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 16 }}>
            {skills.map((g, i) => (
              <div key={g.title} className="stagger-item" style={{ '--i': i, background: '#fff', borderRadius: 24, padding: 28 }}>
                <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 16 }}>{g.title}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {g.items.map(s => (
                    <span key={s} style={{ background: '#f5f5f7', borderRadius: 980, padding: '6px 12px', fontSize: 14, color: '#1d1d1f' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
        <h2 className="reveal" style={{ margin: '0 0 48px', fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>
          Experience.
        </h2>
        {jobs.map((j, i) => (
          <div key={j.role} className="stagger-item" style={{ '--i': i,
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '16px 48px', padding: '32px 0', borderTop: '1px solid #d2d2d7',
          }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 13, color: '#6e6e73' }}>{j.dates}</div>
              <div style={{ marginTop: 8, fontSize: 15, color: '#6e6e73' }}>Belize Telemedia Limited</div>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <h3 style={{ margin: '0 0 10px', fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em' }}>{j.role}</h3>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#424245', maxWidth: 640 }}>{j.summary}</p>
            </div>
          </div>
        ))}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 24, marginTop: 64 }}>
          <div className="reveal" style={{ border: '1px solid #d2d2d7', borderRadius: 24, padding: 32 }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#6e6e73', marginBottom: 20 }}>EDUCATION</div>
            <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em' }}>BSc Computing, Distinction</div>
            <div style={{ color: '#6e6e73', fontSize: 15, marginTop: 4 }}>Edinburgh Napier University, UK · 2022</div>
            <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 24 }}>AS Computer Networking</div>
            <div style={{ color: '#6e6e73', fontSize: 15, marginTop: 4 }}>St. John's College, Belize · 2017</div>
          </div>
          <div className="reveal" style={{ '--reveal-delay': '60ms', border: '1px solid #d2d2d7', borderRadius: 24, padding: 32 }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#6e6e73', marginBottom: 20 }}>CERTIFICATIONS</div>
            {certs.map((c, i) => (
              <div key={c.name} className="stagger-item" style={{ '--i': i,
                display: 'flex', justifyContent: 'space-between', gap: 16,
                padding: '10px 0', borderBottom: '1px solid #e8e8ed', fontSize: 15,
              }}>
                <span style={{ fontWeight: 500 }}>{c.name}</span>
                <span style={{ color: '#6e6e73', whiteSpace: 'nowrap' }}>{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Off the clock ── */}
      <section id="youtube" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 100px' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>
            Off the clock.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              { label: 'YouTube', href: 'https://www.youtube.com/@KeenanBernard' },
              { label: 'Instagram', href: 'https://www.instagram.com/k.a.bernard/' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@kabernard_' },
            ].map(l => (
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

      {/* ── Contact ── */}
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
              {[
                { label: 'YouTube', href: 'https://www.youtube.com/@KeenanBernard' },
                { label: 'Instagram', href: 'https://www.instagram.com/k.a.bernard/' },
                { label: 'TikTok', href: 'https://www.tiktok.com/@kabernard_' },
                { label: 'LinkedIn @kbernard98', href: 'https://www.linkedin.com/in/kbernard98/' },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{ color: '#86868b' }}>{l.label}</a>
              ))}
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
