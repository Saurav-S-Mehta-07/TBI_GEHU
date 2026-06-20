import { useEffect, useState } from "react";
import axios from "axios";
import "./startups.css";

function Startups() {
  const [startups, setStartups] = useState([]);

  const [form, setForm] = useState({
    name: "",
    sector: ""
  });

  const token = localStorage.getItem("token");

  // Fetch startups
  const fetchStartups = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/startups"
      );
      setStartups(data.startups);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStartups();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add startup
  const addStartup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/startups",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setForm({
        name: "",
        sector: ""
      });

      fetchStartups();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete startup
  const deleteStartup = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/startups/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchStartups();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="startups-container">

      {/* FORM */}
      <form onSubmit={addStartup} className="startup-form">

        <input
          name="name"
          placeholder="Startup Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="sector"
          placeholder="Sector"
          value={form.sector}
          onChange={handleChange}
        />

        <button type="submit">Add Startup</button>
      </form>

      {/* LIST */}
      <div className="startup-list">
        {startups.map((s) => (
          <div key={s._id} className="startup-card">

            <h3>{s.name}</h3>
            <p>{s.sector}</p>

            <button onClick={() => deleteStartup(s._id)}>
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Startups;