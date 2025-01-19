import { useState } from 'react';
import styles from './Storefront.module.css';
import { productData } from '../../data/productData.js';
import { Header } from '../Header/Header.jsx';
import { Card } from '../Card/Card.jsx';
import { Cart } from '../Cart/Cart.jsx';

const Storefront = () => {
  // const [cart, setCart] = useState(Array(productData.length).fill(0));
  const [cart, setCart] = useState([1, 1, 1, 1, 1]);
  const [showCart, setShowCart] = useState(true);
  const numCartItems = cart.reduce((total, quantity) => (total += quantity), 0);
  const subtotal = cart.reduce((accumulator, quantity, index) => {
    const itemPrice = Number(
      productData
        .find((product) => product.id == index)
        .price.replace(/\s+/g, '')
    );
    accumulator += itemPrice * quantity;
    return accumulator;
  }, 0);

  const addToCart = (id, quantity) => {
    const newCart = [...cart];
    newCart[id] += Number(quantity);
    setCart(newCart);
  };

  const displayCart = () => {
    document.body.style.overflow = "hidden";
    setShowCart(true);
  };

  const hideCart = () => {
    document.body.style.overflow = "";
    setShowCart(false);
  };

  return (
    <div className={styles.layout}>
      <Header onClickViewCart={displayCart} />
      <main>
        <header className={styles.shopHeader}>
          <h2 className={styles.shopHeaderTitle}>SHOP</h2>
        </header>
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
        <Cart
          cart={cart}
          numCartItems={numCartItems}
          subtotal={subtotal}
          hideCart={hideCart}
        />
      )}
    </div>
  );
};

export { Storefront };
