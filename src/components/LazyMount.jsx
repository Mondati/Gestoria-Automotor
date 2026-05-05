import { useEffect, useRef, useState, Suspense } from 'react';

/**
 * Renders a sized placeholder until it scrolls near the viewport, then renders
 * its children. Used with React.lazy() children so their JS module + render
 * only kick in when the user is about to see them.
 */
export function LazyMount({ children, minHeight, rootMargin = '1000px 0px' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, { rootMargin });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [shown, rootMargin]);

  if (shown) {
    return <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>{children}</Suspense>;
  }
  return <div ref={ref} style={{ minHeight }} aria-hidden="true" />;
}
