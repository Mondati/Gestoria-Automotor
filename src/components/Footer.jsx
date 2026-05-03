const WA1 = "https://wa.me/542615971624?text=Hola%2C%20consulta%20sobre%20tr%C3%A1mites%20vehiculares";
const WA2 = "https://wa.me/542616573387?text=Hola%2C%20consulta%20sobre%20tr%C3%A1mites%20vehiculares";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <p>Gestoría del Automotor — Tupungato, Mendoza. Trámites vehiculares con atención personalizada y cobertura nacional.</p>
        </div>
        <div className="footer-cols-mobile">
          <div className="footer-col">
            <h4>Navegar</h4>
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#asesoramiento">Asesoramiento</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href={WA1} target="_blank" rel="noreferrer" className="footer-col-contact-wa">261 597-1624</a>
            <a href={WA2} target="_blank" rel="noreferrer" className="footer-col-contact-wa">261 657-3387</a>
            <p>Almirante Brown 584<br/>Tupungato, Mendoza</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© MMXXVI Gestoría del Automotor</p>
        <p>Tupungato · Mendoza · Argentina</p>
      </div>
    </footer>
  );
}