function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'section-header section-header--center' : 'section-header';

  return (
    <div className={alignment}>
      {eyebrow && <p className="section-label">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-subtitle">{description}</p>}
    </div>
  );
}

export default SectionHeading;