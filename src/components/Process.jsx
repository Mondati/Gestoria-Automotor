const processSteps = [
  { title: "Consultá",      desc: "Escribinos por WhatsApp o llamá. Te orientamos sin costo y sin compromiso." },
  { title: "Documentación", desc: "Te indicamos exactamente qué papeles necesitamos y cómo prepararlos." },
  { title: "Gestionamos",   desc: "Nos encargamos de cada paso. Vos no perdés tiempo en oficinas." },
  { title: "Entregamos",    desc: "Recibís tu trámite finalizado, con todo en regla y por escrito." },
];

export function Process() {
  const last = processSteps.length - 1;
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
              Cuatro pasos <em>esenciales</em>
            </h2>
          </div>
        </div>

        <div className="process-timeline">
          <div className="process-road" aria-hidden="true"></div>
          {processSteps.map((s, i) => (
            <div key={i} className={`process-step reveal reveal-d${i + 1}`}>
              <div className={`process-marker${i === last ? ' process-marker--goal' : ''}`}>
                <span className="process-marker-km">{i === last ? 'META' : 'KM'}</span>
                <span className="process-marker-num">{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
