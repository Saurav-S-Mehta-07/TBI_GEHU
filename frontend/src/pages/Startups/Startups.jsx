import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/startups.css';
import Reveal from "../../components/common/Reveal";
import { images } from '../../assets';



const startups = [
  {
    name: 'AgriSense AI',
    sector: 'Agritech'
  },
  {
    name: 'MediQuick',
    sector: 'HealthTech'
  },
  {
    name: 'CarbonZero',
    sector: 'ClimateTech'
  },
  {
    name: 'SkillBridge',
    sector: 'EdTech'
  },
  {
    name: 'SkillBridge',
    sector: 'EdTech'
  }
];

function Startups() {
  return (
    <section className="startups-page startups-section">
      <Container>
        <SectionHeading
          eyebrow="Startup Ecosystem"
          title="Founders building with impact"
          description="A dynamic community of ventures shaping the future of technology and industry."
        />
        <Reveal delay={100}>

        <div className="startups-grid">
          {startups.map((startup) => (
            <article key={startup.name} className="startup-card">
              <div className="startup-logo">
                <img src={images.image1} alt="" />
              </div>
              <h3>{startup.name}</h3>
              <p>{startup.sector}</p>
            </article>
          ))}
        </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Startups;
