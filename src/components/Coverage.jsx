import { useEffect, useRef, useState } from 'react';

function StatNumber({ val, sup, duration = 1400 }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const fired = useRef(false);
  const numVal = parseInt(val);
  const isNum = !isNaN(numVal);

  useEffect(() => {
    if (!isNum) { setDisplay(val); return; }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fired.current) {
        fired.current = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(String(Math.round(eased * numVal)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.25 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numVal, isNum, val, duration]);

  return (
    <strong ref={ref}>
      {display}{sup && <em>{sup}</em>}
    </strong>
  );
}

const stats = [
  { val: '24',     sup: '',  label: 'provincias',         duration: 1200 },
  { val: '15',     sup: '+', label: 'años de oficio',     duration: 1500 },
  { val: '100',    sup: '%', label: 'trámites en regla',  duration: 1800 },
  { val: 'Gratis', sup: '',  label: 'primera consulta',   duration: 0    },
];

export function Coverage() {
  return (
    <section className="coverage" id="cobertura">
      <div className="container">
        <div className="coverage-head">
          <div className="coverage-eyebrow eyebrow reveal">
            <span className="eyebrow-num">06</span>
            <span className="eyebrow-rule"></span>
            <span>Alcance nacional</span>
          </div>
          <h2 className="reveal reveal-d1">
            Trabajamos en <em style={{ whiteSpace: 'nowrap' }}>todo el país</em>,<br/>
            no importa <em>dónde</em> estés.
          </h2>
        </div>

        <div className="coverage-stats">
          {stats.map((s, i) => (
            <div key={i} className={`coverage-stat reveal reveal-d${i + 1}`}>
              <StatNumber val={s.val} sup={s.sup} duration={s.duration} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
