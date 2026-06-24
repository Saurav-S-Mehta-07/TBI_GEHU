import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/events.css';

const events = [
  {
    date: '28 Jun',
    title: 'Demo Day',
    type: 'Investor Showcase'
  },
  {
    date: '05 Jul',
    title: 'Pitch Workshop',
    type: 'Founder Session'
  },
  {
    date: '12 Jul',
    title: 'Hackathon',
    type: '48-Hour Challenge'
  }
];

function Events() {
  return (
    <section className="events-page events-section">
      <Container>
        <SectionHeading
          eyebrow="Events"
          title="Upcoming sessions and showcases"
          description="Explore the events that support learning, networking, and startup growth."
        />

        <div className="events-grid">
          {events.map((event) => (
            <article key={event.title} className="event-card">
              <div className="event-card__header">
                <p>{event.date}</p>
                <h3>{event.title}</h3>
              </div>
              <div className="event-card__body">
                <p>{event.type}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Events;