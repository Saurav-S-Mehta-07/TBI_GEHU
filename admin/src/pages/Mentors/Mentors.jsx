import { useEffect, useState } from "react";
import axios from "axios";
import "./mentors.css";

function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    designation: "",
    organization: "",
    bio: "",
    image: "",
  });

  const token = localStorage.getItem("token");

  const fetchMentors = async () => {
    try {
      const { data } = await axios.get(
        "https://tbi-gehu.onrender.com/api/mentors"
      );

      setMentors(data.mentors);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      designation: "",
      organization: "",
      bio: "",
      image: "",
    });

    setEditId(null);
  };

  const addMentor = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://tbi-gehu.onrender.com/api/mentors",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchMentors();
    } catch (err) {
      console.log(err);
    }
  };

  const updateMentor = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://tbi-gehu.onrender.com/api/mentors/${editId}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchMentors();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMentor = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this mentor?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://tbi-gehu.onrender.com/api/mentors/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchMentors();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (mentor) => {
    setEditId(mentor._id);

    setForm({
      name: mentor.name || "",
      designation: mentor.designation || "",
      organization: mentor.organization || "",
      bio: mentor.bio || "",
      image: mentor.image || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mentors-container">
      <form
        onSubmit={editId ? updateMentor : addMentor}
        className="mentor-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={form.designation}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="organization"
          placeholder="Organization"
          value={form.organization}
          onChange={handleChange}
        />

        <input
          type="text"
          name="bio"
          placeholder="Bio"
          value={form.bio}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update Mentor" : "Add Mentor"}
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

      <div className="mentor-list">
        {mentors.map((mentor) => (
          <div
            key={mentor._id}
            className="mentor-card"
          >
            {mentor.image && (
              <img
                src={mentor.image}
                alt={mentor.name}
                className="mentor-image"
              />
            )}

            <h3>{mentor.name}</h3>

            <p>{mentor.designation}</p>

            <p>{mentor.organization}</p>

            <p>{mentor.bio}</p>

            <div className="mentor-actions">
              <button
                className="edit-btn"
                onClick={() => handleEdit(mentor)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteMentor(mentor._id)
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

export default Mentors;