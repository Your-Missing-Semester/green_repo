import { Link } from 'react-router-dom';
import styles from './LandingPageNavBar.module.css';

export default function LandingPageNavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/sign-in'} className={styles.navLink}>
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
}
