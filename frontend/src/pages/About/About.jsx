import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/about.css';

function About() {
  return (
    <section className="about-page about-section">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="About TBI GEHU"
          description="We create a supportive environment where student entrepreneurs can explore, build, and grow with confidence."
        />

        <div className="about-grid">
          <div className="about-card">
            <p>
              The Technology Business Incubator at GEHU is committed to helping students move from ideas to ventures through structured mentorship, networking, and entrepreneurial resources.
            </p>
          </div>
          <div className="about-mission-card">
            <p className="about-mission-eyebrow">Mission</p>
            <h3 className="about-mission-title">Enterprise-ready innovation</h3>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;