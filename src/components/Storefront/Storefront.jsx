import logo from '../../assets/logo.svg';
import x4_base from '../../assets/x4_base.png';
import styles from './Storefront.module.css';
import { Card } from '../Card/Card.jsx'

const Storefront = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
      </header>
      <main className={styles.shop}>
        <Card name='X-4 Base' price='90 000 000' img={x4_base}></Card>
      </main>
    </div>
  );
};

export { Storefront };
