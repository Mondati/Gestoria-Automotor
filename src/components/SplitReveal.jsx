import React from 'react';

export function SplitReveal({ children, className = "" }) {
  const extractText = (node) => {
    if (node == null || typeof node === 'boolean') return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (React.isValidElement(node)) return extractText(node.props.children);
    return '';
  };
  const text = extractText(children);
  const words = text.split(' ').filter(Boolean);
  return (
    <span className={`word-reveal-stagger ${className}`}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="word-reveal"><span>{w}</span></span>
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </span>
  );
}