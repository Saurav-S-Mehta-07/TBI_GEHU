import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/resources.css';

const resources = [
  'Startup Playbooks',
  'Investor Pitch Templates',
  'Grant and Funding Guides',
  'Legal & IP Toolkits'
];

const featureCards = [
  { title: "Funding Support", desc: "Apply for seed funding opportunities and early-stage capital support via TBI-GEU.", btn: "Get Fund" },
  { title: "Business Mentoring", desc: "Connect with mentors and industry experts to refine your startup strategy.", btn: "Connect" },
  { title: "Pitch Deck Templates", desc: "Use curated pitch deck formats tailored for investors and incubators.", btn: "Get Deck" },
  { title: "Guides & Docs", desc: "Download guides, checklists, legal docs, business model canvas and more.", btn: "Explore" }
];

const libraryDocs = [
  { name: "EIR Application Form", desc: "Official entry application form for the Entrepreneurs-in-Residence program." },
  { name: "Investor Handbook", desc: "The Investor's Handbook is a guide designed for individuals and institutions looking to engage with the Technology Business Incubator." },
  { name: "TBI-GEU Co-Working Policy", desc: "The TBI-GEU Co-Working Policy outlines essential guidelines, facility access rules, and community etiquette." },
  { name: "Investment Handbook", desc: "An overview of the investment mechanisms and funding pathways offered through TBI-GEU." }
];

function Resources() {
  return (
    <section className="resources-page resources-section">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Knowledge that accelerates execution"
          description="Access practical resources to support your journey from first idea to market-ready launch."
        />

        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource} className="resource-item">
              <span>{resource}</span>
              <span>Download</span>
            </div>
          ))}
        </div>

        <h2 className="section-title-line">Resources</h2>

        <div className="library-feature-grid">
          {featureCards.map((card, idx) => (
            <div key={idx} className="library-feature-card">
              <div className="feature-card-icon">📄</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <button className="feature-card-btn">{card.btn}</button>
            </div>
          ))}
        </div>

        <div className="founders-library-container">
          <div className="library-header-row">
            <h2>Founder's Library</h2>
            <div className="library-search-box">
              <input type="text" placeholder="Search documents..." />
            </div>
          </div>

          <div className="library-list-wrapper">
            <div className="library-list-header">
              <div>DOCUMENT NAME</div>
              <div>DESCRIPTION</div>
              <div className="text-right">ACTION</div>
            </div>

            {libraryDocs.map((doc, idx) => (
              <div key={idx} className="library-list-row">
                <div className="doc-name-col">
                  <span className="red-doc-icon">📄</span>
                  <strong>{doc.name}</strong>
                </div>
                <div className="doc-desc-col">
                  <p>{doc.desc}</p>
                </div>
                <div className="doc-action-col text-right">
                  <button className="row-download-btn">Download</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}

export default Resources;