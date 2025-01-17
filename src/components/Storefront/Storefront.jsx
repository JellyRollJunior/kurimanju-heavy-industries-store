import { useState } from 'react';
import logo from '../../assets/logo.svg';
import headerIcon from '../../assets/header-icon.png';
import headerPortrait from '../../assets/header-portrait.png';
import headerHudText from '../../assets/header-hud-text.png';
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
        <img src={headerIcon} alt="" className={styles.headerIcon} />
        <img src={logo} alt="" className={styles.logo} />
        <div className={styles.headerDecoration}>
          <p className={styles.chineseText}>
            機体究更
            <br />
            武裝解除
            <br />
            決定中止
          </p>
          <p className={styles.englishText}>
            F91 EARTH-WIND RISES
            <br />
            LIBERATION X-97
            <br />
            DE- 524 - ITY
          </p>
          <div></div>
          <img src={headerPortrait} alt="" className={styles.portrait} />
        </div>
        <img src={headerHudText} alt="" className={styles.hudText} />
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
      <button onClick={() => console.log('hello')} className={styles.checkout}><span>Checkout</span></button>
    </div>
  );
};

export { Storefront };
