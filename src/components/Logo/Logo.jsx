import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.companyName}>Kurimanju</h1>
      <h1 className={styles.companyTitle}>Heavy Industries</h1>
    </div>
  );
};

export { Logo };
