import hero from '../../assets/hero.png';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.layout}>
      <nav>
        <h1>Mech Industries</h1>
        <button>Go</button>
      </nav>
      <img src={hero} alt="Mecha schematics" className={styles.hero} />
    </div>
  );
};

export { Homepage };
