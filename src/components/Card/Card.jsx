import styles from './Card.module.css';

const Card = ({ name, price, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <form>
        <input type="number" />
        <button>Add to Cart</button>
      </form>
    </div>
  );
};

export { Card };
