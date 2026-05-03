const advisoryAreas = [
  { num: "I",   title: "Asesoramiento legal",     desc: "Acompañamiento jurídico en operaciones de compra-venta, inscripciones y regularizaciones." },
  { num: "II",  title: "Gestión notarial",        desc: "Certificaciones, poderes y documentación notarial coordinada con escribanos de confianza." },
  { num: "III", title: "Orientación en seguros",  desc: "Te guiamos sobre coberturas, cambios de titularidad y renovaciones de pólizas." },
];

export function Advisory() {
  return (
    <section className="advisory" id="asesoramiento">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="eyebrow reveal">
              <span className="eyebrow-num">05</span>
              <span className="eyebrow-rule"></span>
              <span>Asesoramiento</span>
            </div>
            <h2 className="reveal reveal-d1">
              Más que<br/><em>trámites</em>
            </h2>
          </div>
          <div className="section-head-right">
            <p className="reveal reveal-d2">
              Te acompañamos durante todo el proceso con asesoramiento legal, notarial y de seguros. Gratuito y sin compromiso.
            </p>
          </div>
        </div>

        <div className="advisory-spread">
          <div className="advisory-quote">
            <div className="advisory-quote-mark reveal">"</div>
            <p className="advisory-quote-text reveal reveal-d1">
              Cada vehículo tiene una historia. Nuestro trabajo es <em>asegurar</em> que esa historia esté <em>en regla</em>.
            </p>
            <div className="advisory-quote-rule reveal reveal-d2"></div>
            <p className="advisory-quote-attr reveal reveal-d2">— Filosofía de la casa</p>
          </div>

          <div className="advisory-list">
            {advisoryAreas.map((a, i) => (
              <div key={i} className={`advisory-item reveal reveal-d${i + 1}`}>
                <div className="advisory-item-num">— {a.num}</div>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}