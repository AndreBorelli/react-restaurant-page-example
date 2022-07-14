import styles from './Footer.module.scss';
import  Logo from 'assets/logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt='Logo André Borelli' className={styles.logo}/>
    </footer>
  );
}