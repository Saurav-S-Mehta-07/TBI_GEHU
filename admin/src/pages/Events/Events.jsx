import { useEffect, useState } from "react";
import axios from "axios";
import "./events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "",
    date: "",
    venue: "",
    speaker: "",
    image: "",
    registrationLink: "",
  });

  const token = localStorage.getItem("token");

  const fetchEvents = async () => {
    try {
      const { data } = await axios.get(
        "https://tbi-gehu.onrender.com/api/events"
      );

      setEvents(data.events);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      type: "",
      date: "",
      venue: "",
      speaker: "",
      image: "",
      registrationLink: "",
    });

    setEditId(null);
  };

  const addEvent = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://tbi-gehu.onrender.com/api/events",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchEvents();
    } catch (err) {
      console.log(err);
    }
  };

  const updateEvent = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://tbi-gehu.onrender.com/api/events/${editId}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchEvents();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEvent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://tbi-gehu.onrender.com/api/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchEvents();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (event) => {
    setEditId(event._id);

    setForm({
      title: event.title || "",
      description: event.description || "",
      type: event.type || "",
      date: event.date || "",
      venue: event.venue || "",
      speaker: event.speaker || "",
      image: event.image || "",
      registrationLink: event.registrationLink || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="events-container">
      <form
        onSubmit={editId ? updateEvent : addEvent}
        className="event-form"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="type"
          placeholder="Type"
          value={form.type}
          onChange={handleChange}
        />

        <input
          type="text"
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={form.venue}
          onChange={handleChange}
        />

        <input
          type="text"
          name="speaker"
          placeholder="Speaker"
          value={form.speaker}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="registrationLink"
          placeholder="Registration Link"
          value={form.registrationLink}
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update Event" : "Add Event"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={resetForm}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="event-list">
        {events.map((event) => (
          <div
            key={event._id}
            className="event-card"
          >
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            )}

            <h3>{event.title}</h3>

            <p>{event.description}</p>

            <p>{event.type}</p>

            <p>{event.date}</p>

            <p>{event.venue}</p>

            <p>{event.speaker}</p>

            <a
              href={event.registrationLink}
              target="_blank"
              rel="noreferrer"
            >
              Registration Link
            </a>

            <div className="event-actions">
              <button
                className="edit-btn"
                onClick={() => handleEdit(event)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteEvent(event._id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;