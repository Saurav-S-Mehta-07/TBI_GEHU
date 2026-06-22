import { useEffect, useState } from "react";
import axios from "axios";
import "./programs.css";

function Programs() {
  const [programs, setPrograms] = useState([]);

  const [form, setForm] = useState({
    title: "",
    tag: "",
    category: "",
    duration: "",
    description: ""
  });

  const token = localStorage.getItem("token");

  // Fetch programs
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

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add program
  const addProgram = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/programs",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setForm({
        title: "",
        tag: "",
        category: "",
        duration: "",
        description: ""
      });

      fetchPrograms();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete program
  const deleteProgram = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/programs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchPrograms();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="programs-container">

      {/* FORM */}
      <form onSubmit={addProgram} className="program-form">

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="tag"
          placeholder="Tag"
          value={form.tag}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          name="duration"
          placeholder="Duration"
          value={form.duration}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Add Program</button>
      </form>

      {/* LIST */}
      <div className="program-list">
        {programs.map((p) => (
          <div key={p._id} className="program-card">

            <h3>{p.title}</h3>
            <p>{p.tag}</p>
            <p>{p.category}</p>
            <p>{p.duration}</p>

            <button onClick={() => deleteProgram(p._id)}>
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;