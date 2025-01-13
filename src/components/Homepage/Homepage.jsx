import hero from '../../assets/hero.png';
import { Logo } from '../logo/logo.jsx';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Logo></Logo>
        <button className={styles.button}>TAKE CONTROL</button>
      </nav>
      <img src={hero} alt="Mecha schematics" className={styles.hero} />
    </div>
  );
};

export { Homepage };
