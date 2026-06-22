import { useEffect, useState } from "react";
import axios from "axios";
import "./programs.css";

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    tag: "",
    category: "",
    duration: "",
    description: "",
    image: "",
    eligibility: "",
    applicationLink: "",
    status: "Open",
  });

  const token = localStorage.getItem("token");

  const fetchPrograms = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/programs"
      );

      setPrograms(data.programs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPrograms();
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
      tag: "",
      category: "",
      duration: "",
      description: "",
      image: "",
      eligibility: "",
      applicationLink: "",
      status: "Open",
    });

    setEditId(null);
  };

  const addProgram = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/programs",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchPrograms();
    } catch (err) {
      console.log(err);
    }
  };

  const updateProgram = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/programs/${editId}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchPrograms();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProgram = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this program?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/programs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchPrograms();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (program) => {
    setEditId(program._id);

    setForm({
      title: program.title || "",
      tag: program.tag || "",
      category: program.category || "",
      duration: program.duration || "",
      description: program.description || "",
      image: program.image || "",
      eligibility: program.eligibility || "",
      applicationLink: program.applicationLink || "",
      status: program.status || "Open",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="programs-container">
      <form
        onSubmit={editId ? updateProgram : addProgram}
        className="program-form"
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
          name="tag"
          placeholder="Tag"
          value={form.tag}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={form.duration}
          onChange={handleChange}
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
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="eligibility"
          placeholder="Eligibility"
          value={form.eligibility}
          onChange={handleChange}
        />

        <input
          type="text"
          name="applicationLink"
          placeholder="Application Link"
          value={form.applicationLink}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>

        <button type="submit">
          {editId ? "Update Program" : "Add Program"}
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

      <div className="program-list">
        {programs.map((program) => (
          <div
            key={program._id}
            className="program-card"
          >
            {program.image && (
              <img
                src={program.image}
                alt={program.title}
                className="program-image"
              />
            )}

            <h3>{program.title}</h3>

            <p>{program.tag}</p>

            <p>{program.category}</p>

            <p>{program.duration}</p>

            <p>{program.description}</p>

            <p>{program.eligibility}</p>

            <p>{program.status}</p>

            {program.applicationLink && (
              <a
                href={program.applicationLink}
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </a>
            )}

            <div className="program-actions">
              <button
                className="edit-btn"
                onClick={() => handleEdit(program)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteProgram(program._id)
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

export default Programs;