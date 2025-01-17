import logo from '../../assets/logo.svg';
import headerIcon from '../../assets/header-icon.png';
import headerPortrait from '../../assets/header-portrait.png';
import headerHudText from '../../assets/header-hud-text.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={headerIcon} alt="" className={styles.headerIcon} />
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.headerDecoration}>
        <p className={styles.chineseText}>
          機体究更
          <br />
          武裝解除
          <br />
          決定中止
        </p>
        <p className={styles.englishText}>
          F91 EARTH-WIND RISES
          <br />
          LIBERATION X-97
          <br />
          DE- 524 - ITY
        </p>
        <div></div>
        <img src={headerPortrait} alt="" className={styles.portrait} />
      </div>
      <img src={headerHudText} alt="" className={styles.hudText} />
    </header>
  );
};

export { Header };
