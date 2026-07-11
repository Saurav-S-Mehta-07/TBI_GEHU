// Resources.jsx
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/resources.css';

const resources = [
  'Startup Playbooks',
  'Investor Pitch Templates',
  'Grant and Funding Guides',
  'Legal & IP Toolkits'
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
      </Container>
    </section>
  );
}

export default Resources;