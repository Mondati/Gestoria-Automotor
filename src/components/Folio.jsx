import { useState, useEffect } from 'react';

const sections = [
  { id: 'inicio',          num: '01', label: 'Inicio' },
  { id: 'valores',        num: '02', label: 'Valores' },
  { id: 'servicios',      num: '03', label: 'Servicios' },
  { id: 'proceso',        num: '04', label: 'Proceso' },
  { id: 'asesoramiento',  num: '05', label: 'Asesoramiento' },
  { id: 'cobertura',      num: '06', label: 'Cobertura' },
  { id: 'ubicacion',      num: '07', label: 'Ubicación' },
  { id: 'contacto',      num: '08', label: 'Contacto' },
];

export function Folio() {
  const [section, setSection] = useState({ num: '01', label: 'Inicio' });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let active = sections[0];
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) active = s;
      }
      setSection(active);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="folio">
      <span className="folio-num">{section.num}</span>
      <span className="folio-line"></span>
      <span className="folio-label">{section.label}</span>
    </div>
  );
}