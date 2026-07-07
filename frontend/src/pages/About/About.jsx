import { useState } from "react";
import "../../styles/about.css";

const stats = [
  { num: "50+", label: "Startups Incubated" },
  { num: "₹2Cr+", label: "Funding Raised" },
  { num: "200+", label: "Students Mentored" },
  { num: "30+", label: "Industry Partners" },
];

const services = [
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    title: "Incubation Support",
    desc: "Structured incubation with co-working space, mentor access, and milestone-based seed funding support."
  },
  {
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80",
    title: "Funding Assistance",
    desc: "Introductions to angel investors, VCs, and government grant schemes including Startup India Seed Fund."
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80",
    title: "Mentorship Network",
    desc: "Access to domain experts including serial founders, CXOs, investors, and faculty researchers for guidance."
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    title: "Legal & IP Support",
    desc: "Pro-bono legal help for company incorporation, DPIIT registration, patent filing, and trademark registration."
  },
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    title: "Prototyping Lab",
    desc: "3D printers, electronics benches, IoT dev kits, and fabrication tools free for all incubated teams."
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    title: "Market Connect",
    desc: "Facilitated B2B intros with corporate partners for pilot projects, customer discovery, and co-investment."
  },
];

const team = [
  { initials: "AK", name: "Dr. Anil Kumar", role: "Director, TBI", org: "GEHU · Innovation Lead", tags: ["Leadership", "Policy"] },
  { initials: "PS", name: "Prof. Priya Sharma", role: "Program Coordinator", org: "GEHU · Startup Ecosystem", tags: ["Incubation", "Mentorship"] },
  { initials: "RV", name: "Rahul Verma", role: "Startup Advisor", org: "Ex-Founder · Investor", tags: ["FinTech", "Fundraising"] },
  { initials: "NK", name: "Neha Kapoor", role: "Industry Relations", org: "TBI GEHU · Corporate Connect", tags: ["Partnerships", "BD"] },
];

const facilities = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    name: "Co-Working Space",
    desc: "Dedicated workspace with high-speed Wi-Fi and access for incubated teams."
  },
  {
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
    name: "Prototyping Lab",
    desc: "3D printers, electronics workbenches, and hardware dev boards free for all teams."
  },
  {
    img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&q=80",
    name: "Meeting Rooms",
    desc: "AV-equipped rooms with projectors and video-conferencing for investor calls."
  },
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    name: "Cloud Credits",
    desc: "AWS and Google for Startups credits available for incubated startup teams."
  },
  {
    
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
    name: "Legal Cell",
    desc: "Pro-bono support for incorporation, DPIIT registration, and patent filing."
  },
  {
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
    name: "Research Library",
    desc: "Access to research databases to validate your technology and market size."
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-text">
            <div className="about-eyebrow"> Technology Business Incubator — GEHU</div>
            <h1>Empowering the Next <span className="about-highlight">Generation of Innovators</span></h1>
            <p className="about-hero-desc">
              TBI GEHU is a DPIIT-recognized incubator fostering entrepreneurship and startup culture at Graphic Era Hill University.
            </p>
            <div className="about-hero-btns">
              <a href="#services" className="btn-primary">Our Services →</a>
              <a href="#team" className="btn-outline">Meet the Team</a>
            </div>
          </div>
          <div className="about-hero-card">
            <div className="about-hero-card-title"> TBI Highlights</div>
            <div className="about-stat-grid">
              {stats.map((s) => (
                <div key={s.label} className="about-stat">
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="about-tabs-section">
        <div className="about-container">
          <div className="section-label-red">Who We Are</div>
          <h2 className="section-title-dark">Built to Build Builders</h2>
          <div className="about-tabs">
            {["mission", "vision", "values"].map((tab) => (
              <button
                key={tab}
                className={"about-tab-btn" + (activeTab === tab ? " active" : "")}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="about-tab-content">
            {activeTab === "mission" && (
              <div className="tab-panel">
                <div className="tab-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>To nurture and accelerate student and faculty-led startups by providing access to mentorship, funding networks, and infrastructure — transforming innovative ideas into impactful ventures.</p>
              </div>
            )}
            {activeTab === "vision" && (
              <div className="tab-panel">
                <div className="tab-icon">🔭</div>
                <h3>Our Vision</h3>
                <p>To be the leading university-based incubator in Uttarakhand, recognized nationally for producing high-impact startups across HealthTech, AgriTech, EdTech, and Clean Energy.</p>
              </div>
            )}
            {activeTab === "values" && (
              <div className="tab-panel">
                <div className="tab-icon">💡</div>
                <h3>Our Values</h3>
                <ul className="values-list">
                  <li><strong>Innovation First</strong> — Bold thinking and unconventional solutions.</li>
                  <li><strong>Inclusion</strong> — Every student has a seat at the table.</li>
                  <li><strong>Integrity</strong> — Transparency and trust at every step.</li>
                  <li><strong>Impact</strong> — Success measured by real-world difference.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about-services" id="services">
        <div className="about-container">
          <div className="section-label-red">What We Offer</div>
          <h2 className="section-title-dark">Our Services</h2>
          <p className="section-sub">End-to-end support for every stage of your entrepreneurial journey.</p>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <img src={s.img} alt={s.title} className="service-img" />
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-story">
        <div className="about-container">
          <div className="section-label-red">Our Journey</div>
          <h2 className="section-title-dark">The TBI GEHU Story</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2018</div>
                <h4>Foundation</h4>
                <p>TBI GEHU was established to create an entrepreneurial ecosystem within the university campus.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2020</div>
                <h4>DPIIT Recognition</h4>
                <p>Received official recognition from the Department for Promotion of Industry and Internal Trade.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2022</div>
                <h4>50+ Startups Milestone</h4>
                <p>Crossed 50 incubated startups spanning HealthTech, EdTech, AgriTech, and Clean Energy.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2024</div>
                <h4>₹2Cr+ Funding Raised</h4>
                <p>Portfolio startups collectively raised over ₹2 Crore through angel investors and government grants.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2026</div>
                <h4>Expanding Horizons</h4>
                <p>Strengthened industry partnerships and scaled mentorship programs, taking TBI GEHU's startup ecosystem to new heights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
<section className="about-team" id="team">
  <div className="about-container">
    <div className="section-label-red">The People</div>
    <h2 className="section-title-dark">Our Leadership Team</h2>
  </div>
  <div className="team-scroll-wrapper">
    <div className="team-scroll-track">
      {[...team, ...team].map((member, i) => (
        <div key={i} className="team-card">
          <div
            className="team-avatar"
            style={{ background: i % 2 === 0 ? "linear-gradient(135deg,#EC1C24,#ff6b6b)" : "linear-gradient(135deg,#1a1a1a,#444)" }}
          >
            {member.initials}
          </div>
          <div className="team-name">{member.name}</div>
          <div className="team-role">{member.role}</div>
          <div className="team-org">{member.org}</div>
          <div className="team-tags">
            {member.tags.map((tag) => <span key={tag} className="team-tag">{tag}</span>)}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FACILITIES */}
      <section className="about-facilities">
        <div className="about-container">
          <div className="section-label-red">Infrastructure</div>
          <h2 className="section-title-dark">Everything Under One Roof</h2>
          <div className="facilities-grid">
            {facilities.map((f) => (
  <div key={f.name} className="fac-card">
    <img src={f.img} alt={f.name} className="fac-img" />
    <div className="fac-body">
      <div className="fac-icon">{f.icon}</div>
      <div>
        <div className="fac-name">{f.name}</div>
        <div className="fac-desc">{f.desc}</div>
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container about-cta-inner">
          <h2>Ready to Build Your Startup?</h2>
          <p>Join TBI GEHU and get access to mentorship, funding, infrastructure, and a community that helps you grow.</p>
          <div className="about-cta-btns">
            <a href="/programs" className="btn-primary">Apply for Incubation →</a>
            <a href="/contact" className="btn-outline-white">Contact Us</a>
          </div>
        </div>
      </section>

    </div>
  );
}