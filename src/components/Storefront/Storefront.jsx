import logo from '../../assets/logo.svg';
import styles from './Storefront.module.css';

const Storefront = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
      </header>
    </div>
  );
};

export { Storefront };
