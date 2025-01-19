import { productData } from '../../data/productData';
import styles from './CartItem.module.css';

const CartItem = ({ itemId, quantity }) => {
  const { name, img, price } = productData.find((item) => item.id == itemId);

  return (
    <li className={styles.cartItem}>
      <img src={img} alt={name} />
      <div className={styles.data}>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.price}>{price}</h4>
        <h4 className={styles.quantity}>Quantity: {quantity}</h4>
        <button className={styles.removeButton}>Remove item</button>
      </div>
    </li>
  );
};

export { CartItem };
