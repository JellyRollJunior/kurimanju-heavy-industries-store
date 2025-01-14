import logo from '../../assets/logo.svg';
import styles from './Storefront.module.css';
import { productData } from '../../data/productData.js';
import { Card } from '../Card/Card.jsx';

const Storefront = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
      </header>
      <main className={styles.shop}>
        {productData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          ></Card>
        ))}
      </main>
    </div>
  );
};

export { Storefront };
