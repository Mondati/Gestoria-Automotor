import { useState, useEffect } from 'react';

const sections = [
  { id: 'inicio',          num: '01', label: 'Inicio' },
  { id: 'valores',        num: '02', label: 'Valores' },
  { id: 'servicios',      num: '03', label: 'Servicios' },
  { id: 'proceso',        num: '04', label: 'Proceso' },
  { id: 'asesoramiento',  num: '05', label: 'Asesoramiento' },
  { id: 'cobertura',      num: '06', label: 'Cobertura' },
  { id: 'ubicacion',      num: '07', label: 'Ubicación' },
  { id: 'contacto',       num: '08', label: 'Contacto' },
];

export function Folio() {
  const [section, setSection] = useState({ num: '01', label: 'Inicio' });
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const probeY = window.innerHeight / 2;
      let active = sections[0];
      let dark = false;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY) {
          active = s;
          dark = el.dataset.theme === 'dark';
        }
      }
      setSection(active);
      setOnDark(dark);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className={`folio${onDark ? ' folio--on-dark' : ''}`}>
      <span className="folio-num">{section.num}</span>
      <span className="folio-line"></span>
      <span className="folio-label">{section.label}</span>
    </div>
  );
}
