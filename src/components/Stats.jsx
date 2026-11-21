import CountUp from './CountUp';

export default function Stats() {
  return (
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
  );
}
