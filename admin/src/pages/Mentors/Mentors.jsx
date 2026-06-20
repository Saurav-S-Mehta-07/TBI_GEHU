import { useEffect, useState } from "react";
import axios from "axios";
import "./mentors.css";

function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    organization: "",
    bio: "",
    image: ""
  });

  const token = localStorage.getItem("token");

  // Fetch mentors
  const fetchMentors = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/mentors"
      );
      setMentors(data.mentors);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add mentor
  const addMentor = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/mentors",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setForm({
        name: "",
        designation: "",
        organization: "",
        bio: "",
        image: ""
      });

      fetchMentors();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete mentor
  const deleteMentor = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/mentors/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchMentors();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mentors-container">

      {/* Form */}
      <form onSubmit={addMentor} className="mentor-form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="designation"
          placeholder="Designation"
          value={form.designation}
          onChange={handleChange}
        />

        <input
          name="organization"
          placeholder="Organization"
          value={form.organization}
          onChange={handleChange}
        />

        <input
          name="bio"
          placeholder="Bio"
          value={form.bio}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit">Add Mentor</button>
      </form>

      {/* List */}
      <div className="mentor-list">
        {mentors.map((m) => (
          <div key={m._id} className="mentor-card">
            <h3>{m.name}</h3>
            <p>{m.designation}</p>
            <p>{m.organization}</p>

            <button onClick={() => deleteMentor(m._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentors;