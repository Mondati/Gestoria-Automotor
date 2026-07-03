import { Plate, ArrowRight } from './Icons';

const services = [
  { code: "TR 001", title: "Transferencias",           desc: "Compra-venta y cambios de titularidad de vehículos." },
  { code: "0K 002", title: "Inscripción inicial 0 km",  desc: "Alta de vehículos nuevos directo del concesionario." },
  { code: "PB 003", title: "Patentamientos y bajas",    desc: "Gestión completa de patentamiento y baja registral." },
  { code: "DV 004", title: "Denuncia de venta",         desc: "Protegete legalmente después de vender tu auto." },
  { code: "ID 005", title: "Informes de dominio",       desc: "Deudas, multas, gravámenes y estado registral." },
  { code: "PR 006", title: "Prenda automotor",          desc: "Inscripción y cancelación de prenda sobre vehículos." },
  { code: "CR 007", title: "Cambio de radicación",      desc: "Cambio de jurisdicción del vehículo sin vueltas." },
  { code: "TV 008", title: "Turnos verificadora",       desc: "Turnos en planta verificadora y registro seccional." },
  { code: "FM 009", title: "Formularios",               desc: "Venta de formularios 08, 12, 59 y más." },
  { code: "DP 010", title: "Duplicados",                desc: "Título, cédula verde y patente duplicados." },
];

export function Services({ wa }) {
  return (
    <section className="services" id="servicios" data-theme="dark">
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

        <div className="services-grid">
          {services.map((s, i) => (
            <a key={s.code}
               href={wa}
               target="_blank"
               rel="noreferrer"
               className="service-row reveal"
               style={{ transitionDelay: `${(i % 2) * 0.06}s` }}>
              <Plate code={s.code} variant="service" />
              <div className="service-row-text">
                <div className="service-row-title">{s.title}</div>
                <div className="service-row-desc">{s.desc}</div>
              </div>
              <span className="service-row-arrow"><ArrowRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
