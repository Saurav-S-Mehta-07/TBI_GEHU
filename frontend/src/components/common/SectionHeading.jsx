function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="section-header">
      {eyebrow && <p className="section-label">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-subtitle">{description}</p>}
    </header>
  );
}

export default SectionHeading;
