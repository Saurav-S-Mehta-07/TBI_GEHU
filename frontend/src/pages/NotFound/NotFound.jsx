import { Link } from 'react-router-dom';

import Container from '../../components/common/Container';
import '../../styles/not-found.css';

function NotFound() {
  return (
    <section className="not-found-page">
      <Container>
        <div className="not-found-card">
          <p className="not-found-eyebrow">404</p>
          <h1>Page not found</h1>
          <p>
            The page you are looking for doesn’t exist or has moved.
          </p>
          <Link to="/" className="not-found-link">
            Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default NotFound;
