const trustValues = [
  { num: "01", title: "Atención personalizada",    text: "Te atendemos con tiempo, claridad y dedicación. Cada cliente es único." },
  { num: "02", title: "Trámites rápidos y seguros", text: "Agilidad sin descuidar la precisión. Cada gestión, bien hecha." },
  { num: "03", title: "Sin vueltas ni sorpresas",   text: "Costos claros desde el principio. Te explicamos cada paso del camino." },
  { num: "04", title: "Comunicación directa",       text: "Hablás siempre con quien gestiona tu trámite. Sin intermediarios." },
];

export function Trust() {
  return (
    <section className="trust" id="valores">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="eyebrow reveal">
              <span className="eyebrow-num">02</span>
              <span className="eyebrow-rule"></span>
              <span>Valores</span>
            </div>
            <h2 className="reveal reveal-d1">
              Profesionalismo<br/><em>y confianza</em>
            </h2>
          </div>
          <div className="section-head-right">
            <p className="reveal reveal-d2">
              Trabajamos con responsabilidad y experiencia para que cada gestión sea simple, clara y sin demoras. La diferencia se nota en los detalles.
            </p>
          </div>
        </div>

        <div className="trust-grid">
          {trustValues.map((v, i) => (
            <div key={i} className={`trust-cell${i === 0 ? ' trust-cell--feature' : ''} reveal reveal-d${(i % 4) + 1}`}>
              <div className="trust-cell-num">— {v.num}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}