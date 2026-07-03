import { ArrowRight, MapPin } from './Icons';

export function Location() {
  const mapsUrl = "https://maps.google.com/?q=Almirante+Brown+584,+Tupungato,+Mendoza";
  const embedUrl = "https://www.google.com/maps?q=Almirante+Brown+584,+Tupungato,+Mendoza&output=embed";

  return (
    <section className="location" id="ubicacion" data-theme="dark">
      <div className="container">
        <div className="location-spread">
          <div className="location-info">
            <div className="location-eyebrow eyebrow reveal">
              <span className="eyebrow-num">07</span>
              <span className="eyebrow-rule"></span>
              <span>Dónde estamos</span>
            </div>
            <h2 className="reveal reveal-d1">Visitanos en<br/><em>Tupungato</em></h2>
            <div className="location-chip reveal reveal-d2">
              <MapPin /> Almirante Brown 584 · Tupungato · Mendoza
            </div>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary reveal reveal-d2">
              Ver en Google Maps <ArrowRight />
            </a>
          </div>

          <div className="location-map reveal reveal-d2">
            <iframe
              src={embedUrl}
              title="Mapa - Almirante Brown 584, Tupungato"
              loading="lazy"
              width="100%"
              height="100%"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
