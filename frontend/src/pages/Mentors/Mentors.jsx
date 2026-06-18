import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/mentors.css';

const mentors = [
  {
    initials: 'RK',
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    org: 'FintechX'
  },
  {
    initials: 'PM',
    name: 'Dr. Priya Mehta',
    role: 'Partner',
    org: 'Axilor Ventures'
  },
  {
    initials: 'AN',
    name: 'Prof. Arjun Nair',
    role: 'IP Lead',
    org: 'GEHU'
  },
  {
    initials: 'SR',
    name: 'Sneha Reddy',
    role: 'CTO',
    org: 'AgriSense'
  }
];

function Mentors() {
  return (
    <section className="mentors-page mentors-section">
      <Container>
        <SectionHeading
          eyebrow="Mentors"
          title="Advisors who have built and scaled"
          description="Learn from leaders across venture capital, product, and entrepreneurship."
        />

        <div className="mentors-grid">
          {mentors.map((mentor) => (
            <article key={mentor.name} className="mentor-card">
              <div className="mentor-avatar">{mentor.initials}</div>
              <h3>{mentor.name}</h3>
              <p className="mentor-role">{mentor.role}</p>
              <p className="mentor-org">{mentor.org}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Mentors;
