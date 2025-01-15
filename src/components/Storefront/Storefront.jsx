import { useState } from 'react';
import logo from '../../assets/logo.svg';
import styles from './Storefront.module.css';
import { productData } from '../../data/productData.js';
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
      <header className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
      </header>
      <main className={styles.shop}>
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
      </main>
    </div>
  );
};

export { Storefront };
