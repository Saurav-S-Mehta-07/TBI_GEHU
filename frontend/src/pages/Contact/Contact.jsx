import { useState, useEffect } from 'react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import '../../styles/contact.css';

const API_BASE = import.meta.env.VITE_API_URL || 'https://tbi-gehu.onrender.com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
        if (status === 'success') {
          setFormData({ name: '', email: '', message: '' });
        }
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

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
            <form className="contact-form-fields" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="contact-form-status contact-form-success">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-form-status contact-form-error">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;