import { Link } from 'react-router-dom';
import styles from './LandingPageNavBar.module.css';

export default function LandingPageNavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/login'} className={styles['nav-link']}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
