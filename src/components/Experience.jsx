import { mono } from '../constants';

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

export default function Experience() {
  return (
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
  );
}
