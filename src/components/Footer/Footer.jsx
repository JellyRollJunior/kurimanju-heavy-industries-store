import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Created by <a className={styles.link} href="https://github.com/JellyRollJunior">JellyRollJunior</a>
      <br />
      Assets from <a className={styles.link} href="https://www.kogado.com/">Power Dolls Kogado Studios</a> and <a className={styles.link} href="https://www.theleagueofmoveabletype.com/orbitron?style=light">Matt Mcinerney</a>
    </footer>
  );
};

export { Footer };
