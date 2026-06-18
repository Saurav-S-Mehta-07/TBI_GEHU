import Container from '../../components/common/Container';
import '../../styles/home.css';

const stats = [
  { value: '80+', label: 'Startups' },
  { value: '40+', label: 'Mentors' },
  { value: '₹12Cr', label: 'Funding' },
  { value: '95%', label: 'Survival Rate' }
];

const services = [
  {
    icon: '01',
    title: 'Incubation Support',
    description: 'Structured pathways for idea validation, team formation, and milestone-based growth.'
  },
  {
    icon: '02',
    title: 'Funding Assistance',
    description: 'Guidance to connect with investors, grants, and startup ecosystem partners.'
  },
  {
    icon: '03',
    title: 'Mentorship Network',
    description: 'Access to experienced founders, faculty, and industry experts across domains.'
  },
  {
    icon: '04',
    title: 'Legal & IP Support',
    description: 'Support for registrations, compliance, documentation, and intellectual property.'
  },
  {
    icon: '05',
    title: 'Prototyping Lab',
    description: 'Hands-on infrastructure and tools for product testing and early development.'
  },
  {
    icon: '06',
    title: 'Market Connect',
    description: 'B2B introductions, pilot opportunities, and customer discovery support.'
  }
];

const programs = [
  {
    tag: 'Ideation',
    title: 'Spark Bootcamp',
    text: 'A four-week intensive to validate ideas, define market fit, and build early traction.'
  },
  {
    tag: 'Pre-Incubation',
    title: 'LaunchPad',
    text: 'A practical program focused on product planning, startup strategy, and customer discovery.'
  },
  {
    tag: 'Incubation',
    title: 'TechNest Core',
    text: 'Long-term support for startup teams looking to build and scale with mentorship.'
  },
  {
    tag: 'Fellowship',
    title: 'Founder Fellowship',
    text: 'Dedicated support for founders building full-time with growth-focused guidance.'
  }
];

const startupHighlights = [
  'AgriSense AI',
  'MediQuick',
  'CarbonZero',
  'SkillBridge',
  'SupplyLens',
  'DroneKart'
];

const events = [
  {
    date: '28 Jun',
    title: 'Demo Day — Cohort 6',
    type: 'Investor Showcase'
  },
  {
    date: '05 Jul',
    title: 'Pitch Workshop',
    type: 'Storytelling & Fundraising'
  },
  {
    date: '12 Jul',
    title: '48-Hour Hackathon',
    type: 'AI for Good'
  }
];

const mentors = [
  { initials: 'RK', name: 'Rajesh Kumar' },
  { initials: 'PM', name: 'Dr. Priya Mehta' },
  { initials: 'AN', name: 'Prof. Arjun Nair' },
  { initials: 'SR', name: 'Sneha Reddy' }
];

const resources = [
  'Startup Playbooks',
  'Investor Pitch Templates',
  'Grant & Funding Guides',
  'Legal & IP Toolkits'
];

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-overlay" />
        <Container className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="hero-eyebrow">Technology Business Incubator · GEHU</p>
              <h1>Incubating bold ideas into real startups.</h1>
              <p className="hero-description">
                Join TBI GEHU to access expert mentorship, funding pathways, entrepreneurial resources, and a thriving support ecosystem.
              </p>
              <div className="hero-actions">
                <a href="#about" className="btn-primary">Get Started</a>
                <a href="#programs" className="btn-secondary">Learn More</a>
              </div>
            </div>

            <div className="hero-card">
              <p className="hero-card-label">Cohort Highlights</p>
              <div className="hero-stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="hero-stat-card">
                    <p>{stat.value}</p>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-badges">
                {['AI/ML', 'AgriTech', 'HealthTech', 'CleanTech', 'EdTech', 'IoT'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="ticker-section">
        <Container>
          <div className="ticker-row">
            {startupHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="section-block">
        <Container>
          <div className="section-head">
            <p className="section-label">About TBI</p>
            <h2 className="section-title">A launchpad for ambitious founders</h2>
            <p className="section-subtitle">
              We help student innovators validate ideas, build products, and connect with the right mentors, investors, and peers.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-block alt-bg">
        <Container>
          <div className="section-head">
            <p className="section-label">Startup Ecosystem</p>
            <h2 className="section-title">Where innovation meets opportunity</h2>
            <p className="section-subtitle">
              Our ecosystem brings together creators, mentors, and partners who are building the future.
            </p>
          </div>
          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <p className="section-label">What we do</p>
              <p>
                TBI GEHU creates a strong bridge between academic learning and entrepreneurial execution through workshops, collaboration, and support networks.
              </p>
            </div>
            <div className="ecosystem-highlight">
              <p className="section-label light-label">Community</p>
              <p>80+ ventures built with support.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="programs" className="section-block">
        <Container>
          <div className="section-head">
            <p className="section-label">Programs</p>
            <h2 className="section-title">Programs designed for every stage</h2>
            <p className="section-subtitle">
              From first idea to growth, we provide support that matches your startup journey.
            </p>
          </div>
          <div className="programs-grid">
            {programs.map((program) => (
              <article key={program.title} className="program-card">
                <p className="program-tag">{program.tag}</p>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <div className="program-footer">
                  <span>Apply Now</span>
                  <span>→</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="events" className="section-block alt-bg">
        <Container>
          <div className="section-head">
            <p className="section-label">Events</p>
            <h2 className="section-title">Workshops, showcases, and community sessions</h2>
            <p className="section-subtitle">
              Stay connected with demo days, founder talks, and practical learning events.
            </p>
          </div>
          <div className="events-grid">
            {events.map((event) => (
              <article key={event.title} className="event-card">
                <div className="event-card-header">
                  <p>{event.date}</p>
                </div>
                <div className="event-card-body">
                  <h3>{event.title}</h3>
                  <p>{event.type}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="mentors" className="section-block">
        <Container>
          <div className="section-head">
            <p className="section-label">Mentors</p>
            <h2 className="section-title">Guidance from accomplished builders</h2>
            <p className="section-subtitle">
              Our mentors bring experience across startups, academia, and industry leadership.
            </p>
          </div>
          <div className="mentors-grid">
            {mentors.map((mentor) => (
              <article key={mentor.name} className="mentor-card">
                <div className="mentor-avatar">{mentor.initials}</div>
                <h3>{mentor.name}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="resources" className="section-block alt-bg">
        <Container>
          <div className="section-head">
            <p className="section-label">Resources</p>
            <h2 className="section-title">Tools, templates, and knowledge support</h2>
            <p className="section-subtitle">
              A curated set of resources to help teams move faster and make better decisions.
            </p>
          </div>
          <div className="resources-grid">
            {resources.map((item) => (
              <div key={item} className="resource-item">
                <span>{item}</span>
                <span>View</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="section-block">
        <Container>
          <div className="cta-card">
            <p className="section-label light-label">Ready to begin?</p>
            <h2>Turn your idea into a venture.</h2>
            <a href="/contact">Join TBI GEHU</a>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Home;