import "./dashboard.css";
import { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("mentors");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">TBI GEHU</h2>

        <button onClick={() => setActiveTab("mentors")}>
          Mentors
        </button>

        <button onClick={() => setActiveTab("programs")}>
          Programs
        </button>

        <button onClick={() => setActiveTab("events")}>
          Events
        </button>

        <button onClick={() => setActiveTab("startups")}>
          Startups
        </button>

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

      {/* Main Content */}
      <div className="main-content">
        <header className="topbar">
          <h3>Admin Dashboard</h3>
        </header>

        <div className="content-area">
          {activeTab === "mentors" && <h2>Mentors CRUD Coming Next</h2>}
          {activeTab === "programs" && <h2>Programs CRUD Coming Next</h2>}
          {activeTab === "events" && <h2>Events CRUD Coming Next</h2>}
          {activeTab === "startups" && <h2>Startups CRUD Coming Next</h2>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;