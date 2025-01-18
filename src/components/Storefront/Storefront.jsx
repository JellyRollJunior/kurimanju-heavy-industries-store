import { useState } from 'react';
import styles from './Storefront.module.css';
import { productData } from '../../data/productData.js';
import { Header } from '../Header/Header.jsx';
import { Card } from '../Card/Card.jsx';

const Storefront = () => {
  const [cart, setCart] = useState(Array(productData.length).fill(0));

  const addToCart = (id, quantity) => {
    const newCart = [...cart];
    newCart[id] += Number(quantity);
    setCart(newCart);
  };

  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <header className={styles.shopHeader}><h2 className={styles.shopHeaderTitle}>SHOP</h2></header>
        <section className={styles.shop}>
          {productData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              onSubmit={addToCart}
            ></Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export { Storefront };
