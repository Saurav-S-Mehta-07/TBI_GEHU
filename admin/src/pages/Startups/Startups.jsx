import { useEffect, useState } from "react";
import axios from "axios";
import "./startups.css";

function Startups() {
  const [startups, setStartups] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    founder: "",
    sector: "",
    description: "",
    image: "",
    website: "",
    status: "Active",
    fundingRaised: "",
    foundedYear: "",
  });

  const token = localStorage.getItem("token");

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      founder: "",
      sector: "",
      description: "",
      image: "",
      website: "",
      status: "Active",
      fundingRaised: "",
      foundedYear: "",
    });

    setEditId(null);
  };

  const addStartup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/startups",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchStartups();
    } catch (err) {
      console.log(err);
    }
  };

  const updateStartup = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/startups/${editId}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchStartups();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteStartup = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this startup?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/startups/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchStartups();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (startup) => {
    setEditId(startup._id);

    setForm({
      name: startup.name || "",
      founder: startup.founder || "",
      sector: startup.sector || "",
      description: startup.description || "",
      image: startup.image || "",
      website: startup.website || "",
      status: startup.status || "Active",
      fundingRaised: startup.fundingRaised || "",
      foundedYear: startup.foundedYear || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="startups-container">
      <form
        onSubmit={editId ? updateStartup : addStartup}
        className="startup-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Startup Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="founder"
          placeholder="Founder"
          value={form.founder}
          onChange={handleChange}
        />

        <input
          type="text"
          name="sector"
          placeholder="Sector"
          value={form.sector}
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
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Graduated">Graduated</option>
          <option value="Inactive">Inactive</option>
        </select>

        <input
          type="number"
          name="fundingRaised"
          placeholder="Funding Raised"
          value={form.fundingRaised}
          onChange={handleChange}
        />

        <input
          type="number"
          name="foundedYear"
          placeholder="Founded Year"
          value={form.foundedYear}
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update Startup" : "Add Startup"}
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

      <div className="startup-list">
        {startups.map((startup) => (
          <div
            key={startup._id}
            className="startup-card"
          >
            {startup.image && (
              <img
                src={startup.image}
                alt={startup.name}
                className="startup-image"
              />
            )}

            <h3>{startup.name}</h3>

            <p>{startup.founder}</p>

            <p>{startup.sector}</p>

            <p>{startup.description}</p>

            <p>{startup.status}</p>

            <p>Funding: {startup.fundingRaised}</p>

            <p>Founded: {startup.foundedYear}</p>

            {startup.website && (
              <a
                href={startup.website}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            )}

            <div className="startup-actions">
              <button
                className="edit-btn"
                onClick={() => handleEdit(startup)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteStartup(startup._id)
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

export default Startups;