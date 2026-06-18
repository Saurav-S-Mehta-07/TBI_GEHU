import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/programs.css';

const programs = [
  {
    title: 'Spark Bootcamp',
    tag: 'Ideation',
    duration: '4 Weeks',
    description:
      'A fast-track launchpad for turning early-stage ideas into validated MVPs.'
  },
  {
    title: 'LaunchPad',
    tag: 'Pre-Incubation',
    duration: '3 Months',
    description:
      'Hands-on workshops for product thinking, customer discovery, and business model clarity.'
  },
  {
    title: 'TechNest Core',
    tag: 'Incubation',
    duration: '12 Months',
    description:
      'Full-spectrum incubation with mentorship, infrastructure, and investor access.'
  },
  {
    title: 'Founder Fellowship',
    tag: 'Fellowship',
    duration: '6 Months',
    description:
      'A dedicated path for founders who want to build full-time with guided support.'
  }
];

function Programs() {
  return (
    <section className="programs-page programs-section">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="A path for every stage"
          description="Choose the right support track for your idea, product, and growth stage."
        />

        <div className="programs-grid">
          {programs.map((program) => (
            <article key={program.title} className="program-card">
              <span className="program-card__tag">{program.tag}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="program-card__footer">
                <span className="program-card__duration">{program.duration}</span>
                <span className="program-card__link">Apply →</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Programs;
