import styles from "./Footer.module.css"; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <footer className={styles.footer}>
      <p>© {currentYear} EatMORE. All Rights Reserved.</p>
      <p>
        Follow us:{" "}
        <a href="#" className={styles.link}>Facebook</a> |{" "}
        <a href="#" className={styles.link}>Instagram</a>
      </p>
    </footer>
  );
};

// Export the Footer component to be used in other parts of the application
export default Footer;
