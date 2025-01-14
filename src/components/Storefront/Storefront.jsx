import logo from '../../assets/logo.svg';
import x4_base from '../../assets/x4_base.png';
import styles from './Storefront.module.css';

const Storefront = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
      </header>
      <main className={styles.shop}>
        <div className={styles.card}>
          <img src={x4_base} alt="" />
          <h3>X-4 Base</h3>
          <h4>90 000 000</h4>
          <form>
            <input type="number" />
            <button>Add to Cart</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Storefront };
