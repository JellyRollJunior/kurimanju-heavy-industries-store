import { useState } from 'react';
import { productData } from '../../data/productData.js';
import { Header } from '../Header/Header.jsx';
import { Card } from '../Card/Card.jsx';
import { Cart } from '../Cart/Cart.jsx';
import styles from './Storefront.module.css';
import cartAnimations from '../Cart/Cart.module.css';

const Storefront = () => {
  // const [cart, setCart] = useState(Array(productData.length).fill(0));
  const [cart, setCart] = useState([1, 1, 1, 1, 1]);
  const MAX_QUANTITY_PER_ITEM = 10;

  const addToCart = (id, quantity) => {
    const newCart = [...cart];
    newCart[id] = Math.min(MAX_QUANTITY_PER_ITEM, newCart[id] + Number(quantity));
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = [...cart];
    newCart[id] = 0;
    setCart(newCart);
  };

  const checkoutCart = () => {
    alert('Checkout successful');
    hideCart();
    setCart(Array(productData.length).fill(0));
  };

  const displayCart = () => {
    const cart = document.querySelector('aside');
    document.body.style.overflow = 'hidden';
    cart.style.display = 'block';
    setTimeout(() => {
      cart.classList.add(`${cartAnimations.slideIn}`);
      cart.classList.remove(`${cartAnimations.slideOut}`);
    }, 0);
  };

  const hideCart = () => {
    const cart = document.querySelector('aside');
    document.body.style.overflow = '';
    cart.classList.add(`${cartAnimations.slideOut}`);
    cart.classList.remove(`${cartAnimations.slideIn}`);
    setTimeout(() => {
      cart.style.display = 'none';
    }, 1000);
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
              maxQuantityPerItem={MAX_QUANTITY_PER_ITEM}
              onSubmit={addToCart}
            ></Card>
          ))}
        </section>
      </main>
      <Cart
        cart={cart}
        hideCart={hideCart}
        checkoutCart={checkoutCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export { Storefront };
