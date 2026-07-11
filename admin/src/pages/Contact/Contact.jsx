import { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [contacts, setContacts] = useState([]);

  const token = localStorage.getItem("token");

  const fetchContacts = async () => {
    try {
      const { data } = await axios.get(
        "https://tbi-gehu.onrender.com/api/contact",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContacts(data.contacts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://tbi-gehu.onrender.com/api/contact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchContacts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Messages</h2>

      {contacts.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <div className="contact-list">
          {contacts.map((contact) => (
            <div
              className="contact-card"
              key={contact._id}
            >
              <h3>{contact.name}</h3>

              <p>
                <strong>Email:</strong> {contact.email}
              </p>

              <p>
                <strong>Message:</strong> {contact.message}
              </p>


              <p>
                <strong>Received:</strong>{" "}
                {new Date(contact.createdAt).toLocaleString()}
              </p>

              <div className="contact-actions">
                <a href={`mailto:${contact.email}`} className="reply-btn"> Reply </a>

                <button className="delete-btn" onClick={() => deleteContact(contact._id)}> Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Contact;