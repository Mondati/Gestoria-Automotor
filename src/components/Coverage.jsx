export function Coverage() {
  return (
    <section className="coverage" id="cobertura">
      <div className="container">
        <div className="coverage-eyebrow eyebrow reveal">
          <span className="eyebrow-num">06</span>
          <span className="eyebrow-rule"></span>
          <span>Alcance nacional</span>
        </div>
        <h2 className="reveal reveal-d1">
          Trabajamos en <em>todo el país</em>—<br/>
          no importa <em>dónde</em> estés.
        </h2>

        <div className="coverage-stats">
          {[
            { val: '24',     label: 'provincias' },
            { val: '10',     label: 'años de oficio', sup: '+' },
            { val: '100',    label: 'trámites en regla', sup: '%' },
            { val: 'Gratis', label: 'primera consulta' },
          ].map((s, i) => (
            <div key={i} className={`coverage-stat reveal reveal-d${i + 1}`}>
              <strong>{s.val}{s.sup && <em>{s.sup}</em>}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}