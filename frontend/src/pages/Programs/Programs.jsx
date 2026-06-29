// Programs.jsx

import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import "../../styles/programs.css";
import Reveal from "../../components/common/Reveal";
import { images } from "../../assets";

function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/programs"
        );

        setPrograms(data.programs || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section className="programs-page programs-section">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="A path for every stage"
          description="Choose the right support track for your idea, product, and growth stage."
        />

        <Reveal delay={150}>
          <div className="programs-grid">
            {programs.map((program) => (
              <article
                key={program._id}
                className="program-card"
              >
                <span className="program-card__tag">
                  {program.category}
                </span>

                <div className="program-img">
                  <img
                    src={
                      program.image?.trim()
                        ? program.image
                        : images.image3
                    }
                    alt={program.title}
                  />
                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <div className="program-card__footer">
                  <span className="program-card__duration">
                    {program.duration}
                  </span>

                  {program.applicationLink ? (
                    <a
                      href={program.applicationLink}
                      target="_blank"
                      rel="noreferrer"
                      className="program-card__link"
                    >
                      Apply →
                    </a>
                  ) : (
                    <span className="program-card__link">
                      Apply →
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Programs;