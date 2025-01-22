import styles from './Cart.module.css';
import { productData } from '../../data/productData.js';
import { CartInfo } from '../CartInfo/CartInfo.jsx';
import { CartItem } from '../CartItem/CartItem.jsx';

const Cart = ({
  cart,
  hideCart,
  checkoutCart,
  removeFromCart,
}) => {
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

  return (
    <aside className={styles.cart}>
      <section className={styles.titleHolder}>
        <h2>Cart</h2>
        <button onClick={hideCart} className={styles.hideCartButton}>
          &times;
        </button>
      </section>
      <CartInfo
        numCartItems={numCartItems}
        subtotal={subtotal}
        checkoutCart={checkoutCart}
      />
      <section>
        <ul>
          {cart.map(
            (quantity, itemId) =>
              quantity > 0 && (
                <CartItem
                  key={itemId}
                  itemId={itemId}
                  quantity={quantity}
                  removeFromCart={removeFromCart}
                />
              )
          )}
        </ul>
      </section>
    </aside>
  );
};

export { Cart };
