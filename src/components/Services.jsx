const services = [
  { num: "I",    title: "Transferencias",        desc: "Compra-venta y cambios de titularidad de vehículos." },
  { num: "II",   title: "Inscripción inicial 0 km", desc: "Alta de vehículos nuevos directo del concesionario." },
  { num: "III",  title: "Patentamientos y bajas", desc: "Gestión completa de patentamiento y baja registral." },
  { num: "IV",   title: "Denuncia de venta",     desc: "Protegete legalmente después de vender tu auto." },
  { num: "V",    title: "Informes de dominio",   desc: "Deudas, multas, gravámenes y estado registral." },
  { num: "VI",   title: "Prenda automotor",      desc: "Inscripción y cancelación de prenda sobre vehículos." },
  { num: "VII",  title: "Cambio de radicación",  desc: "Cambio de jurisdicción del vehículo sin vueltas." },
  { num: "VIII", title: "Turnos verificadora",   desc: "Gestión de turnos en planta verificadora y registro seccional." },
  { num: "IX",   title: "Formularios",           desc: "Venta de formularios 08, 12, 59 y más." },
  { num: "X",    title: "Duplicados",            desc: "Título, cédula verde y patente duplicados." },
];

export function Services({ wa }) {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="eyebrow reveal">
              <span className="eyebrow-num">03</span>
              <span className="eyebrow-rule"></span>
              <span>Servicios</span>
            </div>
            <h2 className="reveal reveal-d1">
              Índice de<br/><em>nuestras gestiones</em>
            </h2>
          </div>
          <div className="section-head-right">
            <p className="reveal reveal-d2">
              Diez gestiones esenciales bajo un mismo techo. Si necesitás algo que no figura, escribinos: probablemente también lo hacemos.
            </p>
          </div>
        </div>

        <div className="services-toc">
          {services.map((s, i) => (
            <a key={i}
               href={wa}
               target="_blank"
               rel="noreferrer"
               className="toc-item reveal"
               style={{ transitionDelay: `${i * 0.04}s` }}>
              <div className="toc-num">{s.num}</div>
              <div className="toc-title">{s.title}</div>
              <div className="toc-desc">{s.desc}</div>
              <div className="toc-arrow">→</div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}