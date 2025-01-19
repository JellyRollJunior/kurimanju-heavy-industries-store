import styles from './Cart.module.css'

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
            {cart.map((quantity, index) => {
              return quantity > 0 && <li key={index}></li>;
            })}
          </ul>
        </section>
      </div>
    </aside>
  );
};

export { Cart }