
import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import "../../styles/startups.css";
import Reveal from "../../components/common/Reveal";
import { images } from "../../assets";

function Startups() {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/startups"
        );

        setStartups(data.startups || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStartups();
  }, []);

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
              <article
                key={startup._id}
                className="startup-card"
              >
                <div className="startup-logo">
                  <img
                    src={
                      startup.logo?.trim()
                        ? startup.logo
                        : images.image1
                    }
                    alt={startup.startupName}
                  />
                </div>

                <h3>{startup.startupName}</h3>

                <p>{startup.sector}</p>

                {startup.founder && (
                  <span className="startup-founder">
                    Founder: {startup.founder}
                  </span>
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Startups;

