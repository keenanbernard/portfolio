const skills = [
  { title: 'AI & Machine Learning', items: ['LLM Integration', 'RAG Pipelines', 'OpenAI API', 'LangChain', 'Pinecone', 'Vector Search', 'Embeddings', 'M365 Copilot'] },
  { title: 'Languages & Frameworks', items: ['TypeScript', 'JavaScript', 'Python', 'SQL / PL/SQL', 'React', 'React Native (Expo)', 'Next.js', 'Node.js / Express', 'Flask'] },
  { title: 'Cloud & DevOps', items: ['Oracle Cloud (OCI)', 'Docker', 'GitHub Actions CI/CD', 'Git', 'Postman'] },
  { title: 'Data', items: ['Oracle 23ai / 12c', 'MySQL', 'MongoDB'] },
  { title: 'APIs & Security', items: ['REST', 'SOAP', 'Azure AD / MSAL', 'OAuth', 'RBAC'] },
  { title: 'Integrations & Practice', items: ['NetSuite', 'MIND Billing', 'Agile / Scrum', 'Jira', 'Confluence'] },
];

export default function Skills() {
  return (
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
  );
}
