// Programs.jsx

import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import "../../styles/programs.css";
import Reveal from "../../components/common/Reveal";
import { images } from "../../assets";

const FALLBACK_PROGRAMS = [
  {
    _id: "fallback-1",
    category: "Ideation",
    title: "Spark Bootcamp",
    description:
      "A 2-week intensive to validate your idea, map your market, and build your very first pitch.",
    duration: "2 Weeks",
    applicationLink: "",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop",
  },
  {
    _id: "fallback-2",
    category: "Pre-Incubation",
    title: "LaunchPad",
    description:
      "Move from prototype to MVP with structured mentorship, workshops, and access to a builder community.",
    duration: "8 Weeks",
    applicationLink: "",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
  },
  {
    _id: "fallback-3",
    category: "Incubation",
    title: "TechNest Core",
    description:
      "Our flagship incubation track — funding pathways, dedicated mentors, and infrastructure to scale your startup.",
    duration: "6 Months",
    applicationLink: "",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop",
  },
  {
    _id: "fallback-4",
    category: "Growth",
    title: "Founder Fellowship",
    description:
      "For post-revenue founders ready to raise capital, expand teams, and enter new markets with expert guidance.",
    duration: "12 Months",
    applicationLink: "",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
  },
];

// Turns "Pre-Incubation" / "pre incubation" / "PRE_INCUBATION" into "pre-incubation"
// so it matches the data-stage selectors in programs.css
const toStageSlug = (category) => {
  if (!category) return "";
  return category
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-");
};

// If category is missing/empty (e.g. bad data from the API), fall back to
// a readable label instead of rendering a blank badge.
const getCategoryLabel = (category) => {
  const trimmed = category?.toString().trim();
  return trimmed ? trimmed : "Program";
};

function Programs() {
  const [programs, setPrograms] = useState(FALLBACK_PROGRAMS);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const { data } = await axios.get(
          "https://tbi-gehu.onrender.com/api/programs"
        );

        if (data.programs && data.programs.length > 0) {
          setPrograms(data.programs);
        }
      } catch (error) {
        console.log(error);
        // keep fallback programs if API is unavailable
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
              <article key={program._id} className="program-card">
                <span
                  className="program-card__tag"
                  data-stage={toStageSlug(program.category)}
                >
                  {getCategoryLabel(program.category)}
                </span>

                <div className="program-img">
                  <img
                    src={
                      program.image?.trim()
                        ? program.image
                        : images.image3
                    }
                    alt={program.title}
                    style={{ filter: "saturate(0.82) brightness(0.96) contrast(1.03)" }}
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
                      href="#"
                      // target="_blank"
                      // rel="noreferrer"
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