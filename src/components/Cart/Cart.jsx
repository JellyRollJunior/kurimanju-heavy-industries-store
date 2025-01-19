import styles from './Cart.module.css'
import { CartItem } from '../CartItem/CartItem.jsx';

const Cart = ({cart, numCartItems, subtotal, hideCart}) => {
  return (
    <aside className={styles.cartOverlay}>
      <div className={styles.cart}>
        <section className={styles.titleHolder}>
          <h2>Cart</h2>
          <button onClick={hideCart} className={styles.hideCartButton}>
            &times;
          </button>
        </section>
        <section>
          <h3>Subtotal ({numCartItems} items):</h3>
          <h3>$ {subtotal.toLocaleString().replace(/,/g, ' ')}</h3>
          <ul>
            {cart.map((quantity, itemId) => {
              return quantity > 0 && <CartItem key={itemId} itemId={itemId} quantity={quantity} />;
            })}
          </ul>
        </section>
      </div>
    </aside>
  );
};

export { Cart }