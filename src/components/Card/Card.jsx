import { useState } from 'react';
import PropTypes from 'prop-types';
import hero from '../../assets/hero.png';
import styles from './Card.module.css';

const Card = ({
  id,
  name = 'Unable to retrieve product info',
  price,
  img = hero,
  maxQuantityPerItem,
  onSubmit,
}) => {
  const [quantity, setQuantity] = useState(0);

  const decrementQuantity = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const incrementQuantity = () => {
    setQuantity(Math.min(maxQuantityPerItem, quantity + 1));
  };

  return (
    <div className={styles.card}>
      <img src={img} alt={name} />
      <h3 className={styles.itemName}>{name}</h3>
      <h4 className={styles.price}>{price}</h4>
      <div className={styles.quantityHolder}>
        <button
          onClick={decrementQuantity}
          className={`${styles.quantityButton} ${styles.decrementButton}`}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          required
          disabled
          className={styles.quantity}
        />
        <button
          onClick={incrementQuantity}
          className={`${styles.quantityButton} ${styles.incrementButton}`}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onSubmit(id, quantity)}
        className={styles.submitBtn}
      >
        Add to Cart
      </button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string,
  maxQuantityPerItem: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

export { Card };
