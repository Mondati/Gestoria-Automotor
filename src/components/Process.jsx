const processSteps = [
  { num: "01", title: "Consultá",      desc: "Escribinos por WhatsApp o llamá. Te orientamos sin costo y sin compromiso." },
  { num: "02", title: "Documentación", desc: "Te indicamos exactamente qué papeles necesitamos y cómo prepararlos." },
  { num: "03", title: "Gestionamos",   desc: "Nos encargamos de cada paso. Vos no perdés tiempo en oficinas." },
  { num: "04", title: "Entregamos",    desc: "Recibís tu trámite finalizado, con todo en regla y por escrito." },
];

export function Process() {
  return (
    <section className="process" id="proceso" data-theme="dark">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="eyebrow reveal">
              <span className="eyebrow-num">04</span>
              <span className="eyebrow-rule"></span>
              <span>Cómo trabajamos</span>
            </div>
            <h2 className="reveal reveal-d1">
              Cuatro pasos<br/><em>esenciales</em>
            </h2>
          </div>
          <div className="section-head-right">
            <p className="reveal reveal-d2">
              Un proceso transparente y predecible. Sabés qué pasa en cada etapa y nunca quedás en la nada.
            </p>
          </div>
        </div>

        <div className="process-timeline">
          {processSteps.map((s, i) => (
            <div key={i} className={`process-step reveal reveal-d${i + 1}`}>
              <div className="process-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}