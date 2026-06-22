import "./dashboard.css";
import { useState } from "react";

import Mentors from "../Mentors/Mentors";
import Programs from "../Programs/Programs";
import Events from "../Events/Events";
import Startups from "../Startups/Startups";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("mentors");

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="logo">TBI GEHU</h2>

        <button onClick={() => setActiveTab("mentors")}>Mentors</button>
        <button onClick={() => setActiveTab("programs")}>Programs</button>
        <button onClick={() => setActiveTab("events")}>Events</button>
        <button onClick={() => setActiveTab("startups")}>Startups</button>

        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>

      <div className="main-content">
        <header className="topbar">
          <h3>Admin Dashboard</h3>
        </header>

        <div className="content-area">
          {activeTab === "mentors" && <Mentors />}
          {activeTab === "programs" && <Programs />}
          {activeTab === "events" && <Events />}
          {activeTab === "startups" && <Startups />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;