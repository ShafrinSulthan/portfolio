import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <Reveal className={align === 'center' ? 'text-center mx-auto' : ''}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-sub ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
