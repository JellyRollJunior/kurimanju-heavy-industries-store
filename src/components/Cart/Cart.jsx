import styles from './Cart.module.css';
import { CartItem } from '../CartItem/CartItem.jsx';

const Cart = ({ cart, numCartItems, subtotal, hideCart }) => {
  const formattedSubtotal = subtotal.toLocaleString().replace(/,/g, ' ');

  return (
    <aside className={styles.cartOverlay}>
      <div className={styles.cart}>
        <section>
          <div className={styles.titleHolder}>
            <h2>Cart</h2>
            <button onClick={hideCart} className={styles.hideCartButton}>
              &times;
            </button>
          </div>
          <h3 className={styles.subtotal}>Subtotal ({numCartItems} items):</h3>
          <h3 className={styles.subtotal}>$ {formattedSubtotal}</h3>
          <button className={styles.checkoutButton}>Proceed to Checkout</button>
        </section>
        <section>
          <ul>
            {cart.map((quantity, itemId) => {
              return (
                quantity > 0 && (
                  <CartItem key={itemId} itemId={itemId} quantity={quantity} />
                )
              );
            })}
          </ul>
        </section>
      </div>
    </aside>
  );
};

export { Cart };
