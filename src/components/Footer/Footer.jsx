
import styles from "./Footer.module.css"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 EatMORE. All Rights Reserved.</p>
      <p>
        Follow us:{" "}
        <a href="#" className={styles.link}>Facebook</a> |{" "}
        <a href="#" className={styles.link}>Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
