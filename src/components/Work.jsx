import { mono } from '../constants';

export default function Work() {
  return (
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {['React', 'JavaScript', 'REST'].map(tag => (
                <span key={tag} style={{ background: '#e8e8ed', borderRadius: 980, padding: '6px 14px', fontSize: 14 }}>{tag}</span>
              ))}
            </div>
            <a href="https://frommyoven.vercel.app" target="_blank" rel="noreferrer"
              className="btn-press"
              style={{ display: 'inline-block', marginTop: 20, fontSize: 17, fontWeight: 500, color: '#000' }}>
              Visit site ›
            </a>
          </div>
          <div style={{ margin: '36px 0 0 clamp(28px,4vw,48px)', flex: 1, minHeight: 300, borderRadius: '16px 0 0 0', overflow: 'hidden', background: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.06), 0 20px 50px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 32, display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', borderBottom: '1px solid #e8e8ed' }}>
              {[0, 1, 2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: '#d2d2d7' }} />)}
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {['React', 'JavaScript', 'REST'].map(tag => (
                <span key={tag} style={{ background: '#e8e8ed', borderRadius: 980, padding: '6px 14px', fontSize: 14 }}>{tag}</span>
              ))}
            </div>
            <a href="https://bernardselectrical.vercel.app" target="_blank" rel="noreferrer"
              className="btn-press"
              style={{ display: 'inline-block', marginTop: 20, fontSize: 17, fontWeight: 500, color: '#000' }}>
              Visit site ›
            </a>
          </div>
          <div style={{ margin: '36px 0 0 clamp(28px,4vw,48px)', flex: 1, minHeight: 300, borderRadius: '16px 0 0 0', overflow: 'hidden', background: '#fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.06), 0 20px 50px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 32, display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', borderBottom: '1px solid #e8e8ed' }}>
              {[0, 1, 2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: '#d2d2d7' }} />)}
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
  );
}
