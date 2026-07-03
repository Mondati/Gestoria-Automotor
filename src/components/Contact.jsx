import { WASvg } from "./Icons";

const WA1 =
  "https://wa.me/542615971624?text=Hola%2C%20consulta%20sobre%20tr%C3%A1mites%20vehiculares";
const WA2 =
  "https://wa.me/542616573387?text=Hola%2C%20consulta%20sobre%20tr%C3%A1mites%20vehiculares";

export function Closing() {
  return (
    <section className="closing" id="contacto" data-theme="dark">
      <div className="closing-road" aria-hidden="true"></div>

      <div className="closing-content">
        <div className="closing-eyebrow eyebrow reveal">
          <span className="eyebrow-num">08</span>
          <span className="eyebrow-rule"></span>
          <span>Contacto directo</span>
        </div>
        <h2 className="reveal reveal-d1">
          Hablemos<em>.</em>
        </h2>
        <p className="closing-sub reveal reveal-d2">
          Tu auto, tu trámite, tu tiempo.{" "}
          <strong>Nosotros nos encargamos del resto.</strong>
        </p>
        <div className="closing-phones reveal reveal-d3">
          <a href={WA1} target="_blank" rel="noreferrer" className="btn-primary btn-wa">
            <WASvg /> 261 597-1624
          </a>
          <a href={WA2} target="_blank" rel="noreferrer" className="btn-primary btn-wa">
            <WASvg /> 261 657-3387
          </a>
        </div>
      </div>

      <footer className="closing-footer">
        <div className="closing-footer-bar">
          <nav className="closing-footer-nav">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#asesoramiento">Asesoramiento</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>
          <address className="closing-footer-nap">
            Almirante Brown 584, Tupungato, Mendoza
          </address>
        </div>
      </footer>
    </section>
  );
}
