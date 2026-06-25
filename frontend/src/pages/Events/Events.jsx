//Event.jsx
import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../../components/common/Container";
import Reveal from "../../components/common/Reveal";
import SectionHeading from "../../components/common/SectionHeading";
import "../../styles/events.css";
import { images } from "../../assets";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/events"
        );

        setEvents(data.events || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="events-page events-section">
      <Container>
        <SectionHeading
          eyebrow="Events"
          title="Upcoming sessions and showcases"
          description="Explore the events that support learning, networking, and startup growth."
        />

        <Reveal delay={100}>
          <div className="events-grid">
            {events.map((event) => (
              <article
                key={event._id}
                className="event-card"
              >
                <div className="event-card__header">
                  <p>
                    {event.date? event.date: "upcoming soon"}
                  </p>

                  <h3>{event.title}</h3>
                </div>

                <div className="event-card__body">
                  <p>{event.type}</p>

                  {event.description && (
                    <p>{event.description}</p>
                  )}

                  {event.venue && (
                    <p>Venue : {event.venue}</p>
                  )}

                  {event.speaker && (
                    <p>Speaker : {event.speaker}</p>
                  )}
                </div>

                <div className="event-img">
                  <img
                    src={
                      event.image?.trim()
                        ? event.image
                        : images.image1
                    }
                    alt={event.title}
                  />
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Events;