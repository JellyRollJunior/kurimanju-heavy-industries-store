import styles from './CartInfo.module.css';

const CartInfo = ({ numCartItems = 0, subtotal = 0, checkoutCart }) => {
  const formattedSubtotal = subtotal.toLocaleString('en-US').replace(/,/g, ' ');

  return (
    <section>
      <h3 className={styles.subtotal}>Subtotal ({numCartItems} items):</h3>
      <h3 className={styles.subtotal}>$ {formattedSubtotal}</h3>
      <button onClick={checkoutCart} className={styles.checkoutButton}>Checkout</button>
    </section>
  );
};

export { CartInfo };
