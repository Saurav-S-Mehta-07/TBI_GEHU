
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
        <div className="logo">
        <img
          src="/logo.png"
          alt="TBI GEHU Logo"
          className="logo-image"
          />
          <span>TBI GEHU</span>
        </div>

        <button
          className={activeTab === "mentors" ? "active" : ""}
          onClick={() => setActiveTab("mentors")}
        >
          Mentors
        </button>

        <button
          className={activeTab === "programs" ? "active" : ""}
          onClick={() => setActiveTab("programs")}
        >
          Programs
        </button>

        <button
          className={activeTab === "events" ? "active" : ""}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>

        <button
          className={activeTab === "startups" ? "active" : ""}
          onClick={() => setActiveTab("startups")}
        >
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

      <div className="main-content">
        <header className="topbar">
          <h3>
            {activeTab === "mentors" && "Mentors Management"}
            {activeTab === "programs" && "Programs Management"}
            {activeTab === "events" && "Events Management"}
            {activeTab === "startups" && "Startups Management"}
          </h3>
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
