import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes';

export const NotFoundPage = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to={AppRoutes.MAIN}>Return to main page</Link>
  </div>
);
