import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/contact.css';

function Contact() {
  return (
    <section className="contact-page contact-section">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with TBI GEHU"
          description="Share your idea, ask about programs, or connect with the incubator team."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-info-label">Reach us</p>
            <ul className="contact-info-list">
              <li>Email: tbi@gehu.ac.in</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Graphic Era Hill University</li>
            </ul>
          </div>
          <div className="contact-form">
            <form className="contact-form-fields">
              <div>
                <label>Name</label>
                <input />
              </div>
              <div>
                <label>Email</label>
                <input />
              </div>
              <div>
                <label>Message</label>
                <textarea />
              </div>
              <button className="contact-submit">Send Message</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;