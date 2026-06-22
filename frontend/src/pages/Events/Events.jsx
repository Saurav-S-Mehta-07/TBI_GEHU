import { useState } from 'react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/events.css';

const events = [
  {
    date: '28 Jun',
    title: 'Demo Day',
    type: 'Investor Showcase',
    status: 'upcoming',
    location: 'TBI Seminar Hall, Dehradun'
  },
  {
    date: '05 Jul',
    title: 'Pitch Workshop',
    type: 'Founder Session',
    status: 'upcoming',
    location: 'Online via Zoom'
  },
  {
    date: '12 Jul',
    title: 'Hackathon',
    type: '48-Hour Challenge',
    status: 'upcoming',
    location: 'Innovation Lab'
  },
  {
    date: '20 Apr 2026',
    title: 'Hackathon',
    type: 'Hackathon Challenge',
    status: 'past',
    location: 'Seminar Hall, GEHU Haldwani'
  }
];

const categories = ['All', 'Competition', 'Workshop', 'Webinar', 'Other'];

function Events() {
  const [activeTab, setActiveTab] = useState('All');

  const upcomingEvents = events.filter(evt => evt.status === 'upcoming');
  const pastEvents = events.filter(evt => evt.status === 'past');

  return (
    <section className="events-page events-section">
      <Container>
        <SectionHeading
          eyebrow="Events"
          title="Upcoming sessions and showcases"
          description="Explore the events that support learning, networking, and startup growth."
        />

        <div className="events-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="events-timeline-block">
          <h2 className="timeline-title-line">
            <span>📅</span> Upcoming Events
          </h2>
          
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <article key={event.title} className="event-card">
                <div className="event-card__header">
                  <p>{event.date}</p>
                  <h3>{event.title}</h3>
                </div>
                <div className="event-card__body">
                  <span className="event-type-tag">{event.type}</span>
                  <p className="event-location-text">📍 {event.location}</p>
                  <button className="event-status-btn-live">Register Now</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="events-timeline-block separator-top">
          <h2 className="timeline-title-line">
            <span>⏳</span> Past Events
          </h2>
          
          <div className="events-grid">
            {pastEvents.map((event) => (
              <article key={event.title} className="event-card past-modifier">
                <div className="event-card__header">
                  <p>{event.date}</p>
                  <h3>{event.title}</h3>
                </div>
                <div className="event-card__body">
                  <span className="event-type-tag">{event.type}</span>
                  <p className="event-location-text">📍 {event.location}</p>
                  <button className="event-status-btn-ended" disabled>Event Ended</button>
                </div>
              </article>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}

export default Events;