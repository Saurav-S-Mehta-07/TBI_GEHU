import { useEffect, useState } from "react";
import axios from "axios";
import "./events.css";

function Events() {
  const [events, setEvents] = useState([]);

  const [form, setForm] = useState({
    title: "",
    date: "",
    type: ""
  });

  const token = localStorage.getItem("token");

  // Fetch events
  const fetchEvents = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/events"
      );
      setEvents(data.events);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add event
  const addEvent = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/events",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setForm({
        title: "",
        date: "",
        type: ""
      });

      fetchEvents();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete event
  const deleteEvent = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchEvents();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="events-container">

      {/* FORM */}
      <form onSubmit={addEvent} className="event-form">

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="date"
          placeholder="Date (e.g. 28 Jun)"
          value={form.date}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="Type"
          value={form.type}
          onChange={handleChange}
        />

        <button type="submit">Add Event</button>
      </form>

      {/* LIST */}
      <div className="event-list">
        {events.map((e) => (
          <div key={e._id} className="event-card">

            <h3>{e.title}</h3>
            <p>{e.date}</p>
            <p>{e.type}</p>

            <button onClick={() => deleteEvent(e._id)}>
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;