import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoPlaceHolder from '../../assets/logoPlaceHolder.png';

export default function Footer() {
  return (
    <div className="container">
      <footer>
        <div>
          <img src={logoPlaceHolder} alt="logo" />
        </div>
        <div className={styles.footerInfoContainer}>
          <div>
            <Link
              to="/terms-of-service"
              className={styles.footerText}
              id={styles.tos}
            >
              Terms of Service
            </Link>
            <span className={styles.verticalBar}>|</span>
            <span>
              <Link
                to="/privacy-policy"
                className={styles.footerText}
                id={styles.pp}
              >
                Privacy Policy
              </Link>
            </span>
            <p className={styles.footerText}>
              Copyright &copy; 2024 WayPoints | All Rights Reserved
            </p>
          </div>
          <div>
            <Link
              to="/contact-us"
              className={styles.footerText}
              id={styles.contact}
            >
              Contact Us
            </Link>
            <p className={styles.footerText}>
              Business Inquiries | help@waypoints.me
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
