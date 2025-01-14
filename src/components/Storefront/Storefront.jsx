import logo from '../../assets/logo.svg';
import x4_base from '../../assets/x4_base.png';
import x4_stealth from '../../assets/x4_stealth.png';
import styles from './Storefront.module.css';
import { Card } from '../Card/Card.jsx';

const productData = [
  {
    id: '1',
    name: 'X-4 Base',
    price: '90 000 000',
    img: x4_base,
  },
  {
    id: '2',
    name: 'X-4 Stealth',
    price: '91 000 000',
    img: x4_stealth,
  },
];

const Storefront = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
      </header>
      <main className={styles.shop}>
        {productData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          ></Card>
        ))}
      </main>
    </div>
  );
};

export { Storefront };
