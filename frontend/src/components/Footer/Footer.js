import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoPlaceHolder from '../../assets/logoPlaceHolder.png';

export const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className={styles.followUs}>
          <img
            src={logoPlaceHolder}
            alt="logo"
            style={{ width: '50px', height: 'auto' }}
          />
        </div>

        <div className={styles.footerInfoContainer}>
          <div className={styles.credits}>
            <Link to="/terms-of-service">
              Terms of Service |{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </Link>
            <p>Copyright &copy; 2024 waypoints | All Rights Reserved </p>
          </div>
          <div className={styles.inquiries}>
            <p>Business Inquiries {'  '}help@waypoints.com</p>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
