import { SplitReveal } from './SplitReveal';
import { WASvg, ArrowRight } from './Icons';

const WA = "https://wa.me/542615971624?text=Hola%2C%20consulta%20sobre%20tr%C3%A1mites%20vehiculares";

const exits = [
  { name: 'Transferencia',      dist: '500 m' },
  { name: 'Patentamiento',      dist: '1 km' },
  { name: 'Informe de dominio', dist: '2 km' },
];

const stats = [
  { val: '15+',  label: 'años de oficio' },
  { val: '24',   label: 'provincias' },
  { val: '100%', label: 'en regla' },
];

const chips = ['Matriculados', 'D.N.R.P.A.', 'Cobertura nacional'];

export function Hero() {
  return (
    <section className="hero" id="inicio" data-theme="dark">
      <div className="hero-road" aria-hidden="true"></div>

      <div className="hero-grid container">
        <div className="hero-left">
          <h1 className="hero-title">
            <SplitReveal>Gestoría</SplitReveal><br/>
            del <em><SplitReveal>Automotor</SplitReveal></em>
          </h1>
          <p className="hero-lede reveal reveal-d2">
            Trámites ágiles, asesoramiento integral y atención personalizada.
            Para que no pierdas tiempo ni te compliques.
          </p>
          <div className="hero-actions reveal reveal-d3">
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">
              <WASvg /> Consultar por WhatsApp
            </a>
            <a href="#servicios" className="btn-secondary">Ver servicios</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card reveal reveal-d2">
            <div className="hero-card-title">Próximas salidas</div>
            <div className="hero-card-rows">
              {exits.map(e => (
                <div key={e.name} className="hero-card-row">
                  <span className="hero-card-row-name">{e.name}</span>
                  <span className="hero-card-row-dist">{e.dist} <ArrowRight /></span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-stats reveal reveal-d3">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <strong>{s.val}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-chips reveal reveal-d4">
            {chips.map(c => <span key={c} className="hero-chip">{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
