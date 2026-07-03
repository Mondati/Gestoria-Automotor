const advisoryAreas = [
  { num: "I",   title: "Asesoramiento legal",    desc: "Acompañamiento jurídico en compra-venta, inscripciones y regularizaciones." },
  { num: "II",  title: "Gestión notarial",       desc: "Certificaciones, poderes y documentación con escribanos de confianza." },
  { num: "III", title: "Orientación en seguros", desc: "Coberturas, cambios de titularidad y renovaciones de pólizas." },
];

export function Advisory() {
  return (
    <section className="advisory" id="asesoramiento" data-theme="dark">
      <div className="container">
        <div className="advisory-grid">
          <div className="advisory-card reveal">
            <div className="advisory-card-label">05 · Asesoramiento</div>
            <p className="advisory-card-quote">
              "Cada vehículo tiene una historia. Nuestro trabajo es asegurar que esa historia esté <em>en regla</em>."
            </p>
            <div className="advisory-card-attr">— Filosofía de la casa</div>
          </div>

          <div className="advisory-body">
            <h2 className="reveal reveal-d1">Más que <em>trámites</em></h2>
            {advisoryAreas.map((a, i) => (
              <div key={a.num} className={`advisory-item reveal reveal-d${i + 1}`}>
                <div className="advisory-item-icon">{a.num}</div>
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
