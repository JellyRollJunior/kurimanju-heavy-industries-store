import hero from '../../assets/hero.png';
import logo from '../../assets/logo.svg';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <img src={logo} alt="" className={styles.logo}/>
        <div className={styles.buttonHolder}><button className={styles.button}>TAKE CONTROL</button></div>
      </nav>
      <img src={hero} alt="Mecha schematics" className={styles.hero} />
    </div>
  );
};

export { Homepage };
