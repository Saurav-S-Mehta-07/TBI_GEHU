import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import "../../styles/mentors.css";
import Reveal from "../../components/common/Reveal";
import { images } from "../../assets";

function Mentors() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/mentors"
        );

        setMentors(data.mentors || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <section className="mentors-page mentors-section">
      <Container>
        <SectionHeading
          eyebrow="Mentors"
          title="Advisors who have built and scaled"
          description="Learn from leaders across venture capital, product, and entrepreneurship."
        />

        <Reveal delay={100}>
          <div className="mentors-grid">
            {mentors.map((mentor) => (
              <article
                key={mentor._id}
                className="mentor-card"
              >
                <div className="mentor-avatar">
                  <img
                    src={
                      mentor.image?.trim()
                        ? mentor.image
                        : images.mentor1
                    }
                    alt={mentor.name}
                  />
                </div>

                <h3>{mentor.name}</h3>

                <p className="mentor-role">
                  {mentor.designation}
                </p>

                <p className="mentor-org">
                  {mentor.organization}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Mentors;