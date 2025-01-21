import headerIcon from '../../assets/header-icon.png';
import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.png';
import probe from '../../assets/probe.png';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <img src={headerIcon} alt="" className={styles.headerIcon} />
        <img src={logo} alt="" className={styles.logo} />
        <Link to="storefront" className={styles.navButton}>
          TAKE CONTROL
        </Link>
      </nav>
      <img src={hero} alt="Mecha schematics" className={styles.hero} />
      <img src={probe} alt="Space probe" className={styles.probe} />
    </div>
  );
};

export { Homepage };
