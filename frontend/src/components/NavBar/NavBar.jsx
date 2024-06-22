import { Link } from 'react-router-dom';
import logoPlaceHolder from '../../assets/logoPlaceHolder.png';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'} className={styles.logo}>
            <img
              src={logoPlaceHolder}
              alt="logo"
              style={{ width: '50px', height: 'auto' }}
            />
          </Link>
        </li>
        <li>
          <Link to={'/about'} className={styles['nav-link']}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
