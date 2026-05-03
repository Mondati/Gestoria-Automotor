import { SplitReveal } from './SplitReveal';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-bg"></div>
      <div className="hero-top-rule"></div>

      <div className="hero-meta-bar">
        <div>
          <span className="dot"></span>
          <span>Tupungato · Mendoza · Argentina</span>
        </div>
        <div>
          <span>Est. <span className="hero-meta-mono">MMXII</span></span>
          <span style={{opacity:0.4}}>·</span>
          <span>Vol. <span className="hero-meta-mono">I</span></span>
          <span style={{opacity:0.4}}>·</span>
          <span>Gestión <span className="hero-meta-mono">2026</span></span>
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
            <p className="hero-credentials reveal reveal-d4">
              <span>Matriculados</span>
              <span className="hero-credentials-sep">·</span>
              <span>D.N.R.P.A.</span>
              <span className="hero-credentials-sep">·</span>
              <span>Cobertura nacional</span>
            </p>
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
        </div>

        <div className="hero-stats reveal reveal-d4" aria-hidden="true">
          <div className="hero-stat">
            <strong>15<em>+</em></strong>
            <span>años de oficio</span>
          </div>
          <div className="hero-stat">
            <strong>24</strong>
            <span>provincias</span>
          </div>
          <div className="hero-stat">
            <strong>100<em>%</em></strong>
            <span>en regla</span>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero-scroll-line"></span>
        </div>
      </div>
    </section>
  );
}
