import headerIcon from '../../assets/header-icon.png';
import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.png';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <nav className={styles.nav}>
          <img src={headerIcon} alt="" className={styles.headerIcon} />
          <img src={logo} alt="" className={styles.logo} />
          <div className={styles.buttonHolder}>
            <Link to="storefront" className={styles.navButton}>
              TAKE CONTROL
            </Link>
          </div>
        </nav>
        <img src={hero} alt="Mecha schematics" className={styles.hero} />
      </div>
    </div>
  );
};

export { Homepage };
