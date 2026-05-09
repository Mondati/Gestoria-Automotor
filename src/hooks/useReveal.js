import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll('.reveal, .word-reveal, .reveal-clip').forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    const observed = new WeakSet();

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

    const observe = (root) => {
      const nodes = root.querySelectorAll
        ? root.querySelectorAll('.reveal, .word-reveal, .reveal-clip')
        : [];
      nodes.forEach(el => {
        if (!observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
    };

    observe(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach(n => {
          if (n.nodeType === 1) observe(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
}
