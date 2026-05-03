import { ArrowRight } from './Icons';

export function Location() {
  const mapsUrl = "https://maps.google.com/?q=Almirante+Brown+587,+Tupungato,+Mendoza";
  const embedUrl = "https://www.google.com/maps?q=Almirante+Brown+587,+Tupungato,+Mendoza&output=embed";

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
            <h2 className="reveal reveal-d1">Visitanos en<br/><em>Tupungato</em></h2>
            <p className="location-address reveal reveal-d2">Almirante Brown 587<br/>Tupungato, Mendoza</p>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              Ver en Google Maps <ArrowRight />
            </a>
          </div>

          <div className="location-map reveal reveal-d2">
            <iframe
              src={embedUrl}
              title="Mapa - Almirante Brown 587, Tupungato"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
