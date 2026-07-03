import { useState, useEffect } from 'react';
import { Plate } from './Icons';

const links = [
  { l: 'Inicio',        h: '#inicio' },
  { l: 'Servicios',     h: '#servicios' },
  { l: 'Proceso',       h: '#proceso' },
  { l: 'Asesoramiento', h: '#asesoramiento' },
  { l: 'Ubicación',     h: '#ubicacion' },
  { l: 'Contacto',      h: '#contacto' },
];

function MenuIcon() {
  return (
    <span className="nav-burger-bars" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="18" y1="6" x2="6"  y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
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
      <header className={`nav-bar${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav-inner">
          <a href="#inicio" className="nav-brand" aria-label="Gestoría del Automotor — inicio">
            <Plate code="GA 584 TP" variant="nav" />
          </a>

          <ul className="nav-links">
            {links.map(x => <li key={x.l}><a href={x.h}>{x.l}</a></li>)}
          </ul>

          <div className="nav-meta">
            <span className="nav-brand-role">Trámites vehiculares</span>
            <span className="nav-brand-loc">Tupungato · Mendoza</span>
          </div>

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
        id="side-drawer"
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
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
