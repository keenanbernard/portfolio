import { mono } from '../constants';

const services = [
  { n: '01', title: 'Mobile apps', body: 'One codebase, both stores. React Native and Expo apps with real auth, live data and the polish users expect.' },
  { n: '02', title: 'Business websites', body: 'Fast, responsive sites that make a local business look as good online as it does in person.' },
  { n: '03', title: 'AI solutions', body: 'Copilot agents and RAG chatbots grounded in your own documents, secured to the right people.' },
];

export default function Services() {
  return (
    <section id="services" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
      <h2 className="reveal" style={{ margin: 0, fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1, maxWidth: 760 }}>
        Three things I do well.
      </h2>
      <p className="reveal" style={{ '--reveal-delay': '60ms', margin: '20px 0 48px', fontSize: 19, lineHeight: 1.55, color: '#6e6e73', maxWidth: 600 }}>
        I care about software that holds up — reliable, properly built, and worth the investment. Most of all I love helping small businesses get online for the first time and seeing what a solid web presence does for them.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 0, borderTop: '1px solid #000' }}>
        {services.map((s, i) => (
          <div key={s.n} className="stagger-item" style={{ '--i': i, padding: '32px 32px 32px 0' }}>
            <div style={{ fontFamily: mono, fontSize: 13, color: '#6e6e73' }}>{s.n}</div>
            <h3 style={{ margin: '20px 0 12px', fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em' }}>{s.title}</h3>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#424245' }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
