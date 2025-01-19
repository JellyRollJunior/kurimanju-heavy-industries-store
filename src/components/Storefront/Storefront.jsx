import { useState } from 'react';
import styles from './Storefront.module.css';
import { productData } from '../../data/productData.js';
import { Header } from '../Header/Header.jsx';
import { Card } from '../Card/Card.jsx';

const Storefront = () => {
  const [cart, setCart] = useState(Array(productData.length).fill(0));
  const [showCart, setShowCart] = useState(true);

  const addToCart = (id, quantity) => {
    const newCart = [...cart];
    newCart[id] += Number(quantity);
    setCart(newCart);
  };

  const displayCart = () => {
    setShowCart(true);
  }

  const hideCart = () => {
    setShowCart(false);
  }

  return (
    <div className={styles.layout}>
      <Header onClickViewCart={displayCart} />
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
      {showCart && (
        <aside className={styles.cartOverlay}>
          <div className={styles.cart}>
            <section className={styles.titleHolder}>
              <h2>Cart</h2>
              <button onClick={hideCart} className={styles.hideCart}>&times;</button>
            </section>
          </div>
        </aside>
      )}
    </div>
  );
};

export { Storefront };
