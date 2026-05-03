import { WASvg, ArrowRight } from './Icons';
import { SplitReveal } from './SplitReveal';

export function Hero({ wa }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-bg"></div>
      <div className="hero-top-rule"></div>

      <div className="hero-meta-bar reveal">
        <div>
          <span className="dot"></span>
          <span>Tupungato · Mendoza, Argentina</span>
        </div>
        <div>
          <span>Est. <span className="hero-meta-mono">MMXII</span></span>
          <span style={{opacity:0.4}}>·</span>
          <span>Vol. <span className="hero-meta-mono">I</span></span>
          <span style={{opacity:0.4}}>·</span>
          <span>Edición <span className="hero-meta-mono">2026</span></span>
        </div>
      </div>

      <div className="hero-plaque reveal reveal-d3">
        <div className="hero-plaque-stamp">
          <div>
            <div className="hero-plaque-stamp-text">Gestoría<br/>del<br/>Automotor</div>
          </div>
        </div>
        <div className="hero-plaque-meta">
          Matriculados<br/>D.N.R.P.A.<br/>Cobertura nacional
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <SplitReveal>Gestoría</SplitReveal><br/>
          <em><SplitReveal>del Automotor</SplitReveal></em>
        </h1>
        <p className="hero-mobile-location reveal reveal-d2">Tupungato · Mendoza · Argentina</p>

        <div className="hero-bottom">
          <div className="hero-tagline">
            <p className="hero-tagline-eyebrow reveal reveal-d3">— Nuestro oficio</p>
            <p className="hero-tagline-text reveal reveal-d4">
              Trámites <em>ágiles</em>, asesoramiento <em>integral</em> y atención <em>personalizada</em>.
              Para que no pierdas tiempo ni te compliques.
            </p>
          </div>
          <div className="hero-actions reveal reveal-d4">
            <div className="hero-actions-buttons">
              <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">
                <WASvg /> Consultar
              </a>
              <a href="#servicios" className="btn-secondary">
                Servicios <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}