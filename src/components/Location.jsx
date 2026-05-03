import { ArrowRight } from './Icons';

export function Location() {
  const mapsUrl = "https://maps.google.com/?q=Almirante+Brown+587,+Tupungato,+Mendoza";
  
  return (
    <section className="location" id="ubicacion">
      <div className="container">
        <div className="location-spread">
          <div>
            <div className="location-eyebrow eyebrow reveal">
              <span className="eyebrow-num">07</span>
              <span className="eyebrow-rule"></span>
              <span>Dónde estamos</span>
            </div>
            <h2 className="reveal reveal-d1">Visitanos<br/>en <em>Tupungato</em></h2>
            <p className="location-address reveal reveal-d2">Almirante Brown 587<br/>Tupungato, Mendoza</p>
            <div className="location-meta reveal reveal-d2">
              <div className="location-meta-item"><span>Provincia</span><span>Mendoza</span></div>
              <div className="location-meta-item"><span>Departamento</span><span>Tupungato</span></div>
              <div className="location-meta-item"><span>Cobertura</span><span>Nacional</span></div>
            </div>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              Ver en Google Maps <ArrowRight />
            </a>
          </div>

          <a href={mapsUrl} target="_blank" rel="noreferrer" className="location-map reveal reveal-d2" style={{textDecoration:'none', display:'block'}}>
            <div className="location-map-coord">
              33° 22' S<br/>69° 8' W
            </div>
            <div className="location-pin">
              <div className="location-pin-label">Almirante Brown 587</div>
              <div className="location-pin-dot"></div>
            </div>
            <div className="location-map-label">Tupungato · Mendoza</div>
          </a>
        </div>
      </div>
    </section>
  );
}