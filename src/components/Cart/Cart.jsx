import styles from './Cart.module.css';
import { CartInfo } from '../CartInfo/CartInfo.jsx';
import { CartItem } from '../CartItem/CartItem.jsx';

const Cart = ({ cart, numCartItems, subtotal, hideCart }) => {
  return (
    <aside className={styles.cartOverlay}>
      <div className={styles.cart}>
        <section className={styles.titleHolder}>
          <h2>Cart</h2>
          <button onClick={hideCart} className={styles.hideCartButton}>
            &times;
          </button>
        </section>
        <CartInfo numCartItems={numCartItems} subtotal={subtotal} />
        <section>
          <ul>
            {cart.map(
              (quantity, itemId) =>
                quantity > 0 && (
                  <CartItem key={itemId} itemId={itemId} quantity={quantity} />
                )
            )}
          </ul>
        </section>
      </div>
    </aside>
  );
};

export { Cart };
