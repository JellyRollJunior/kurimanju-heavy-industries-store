import styles from './Cartinfo.module.css';

const CartInfo = ({ numCartItems, subtotal, checkoutCart }) => {
  const formattedSubtotal = subtotal.toLocaleString().replace(/,/g, ' ');

  return (
    <section>
      <h3 className={styles.subtotal}>Subtotal ({numCartItems} items):</h3>
      <h3 className={styles.subtotal}>$ {formattedSubtotal}</h3>
      <button onClick={checkoutCart} className={styles.checkoutButton}>Checkout</button>
    </section>
  );
};

export { CartInfo };
