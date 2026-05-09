import { useState, useEffect } from 'react';

const links = [
  { l: 'Servicios',     h: '#servicios' },
  { l: 'Proceso',       h: '#proceso' },
  { l: 'Asesoramiento', h: '#asesoramiento' },
  { l: 'Contacto',      h: '#contacto' },
];

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
      <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
      <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
      <line x1="17" y1="5" x2="5"  y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    </svg>
  );
}

export function Nav({ wa }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('drawer-open', open);
    return () => document.documentElement.classList.remove('drawer-open');
  }, [open]);

  return (
    <>
      <header>
        <nav className={scrolled ? 'scrolled' : ''}>
          <ul className="nav-links">
            {links.map(x => <li key={x.l}><a href={x.h}>{x.l}</a></li>)}
            <li><a href={wa} target="_blank" rel="noreferrer" className="nav-cta"><span>WhatsApp</span></a></li>
          </ul>
          <button
            className="nav-burger"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="side-drawer"
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      <div
        className={`side-drawer${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
          <CloseIcon />
        </button>
        <div className="side-drawer-inner">
          {links.map(x => (
            <a key={x.l} href={x.h} className="drawer-link" onClick={() => setOpen(false)}>
              {x.l}
            </a>
          ))}
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="drawer-cta"
            onClick={() => setOpen(false)}
          >
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
