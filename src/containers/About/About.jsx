import { Link } from "react-router-dom";
import styles from "./About.module.css";


const About = () => {
  return (
    <section className={`container my-5 ${styles.aboutSection}`}>
      <div className="row">
        <div className={`col-md-6 ${styles.storyText}`}>
          <h2>Our Story</h2>
          <p>
            Since our opening, EatMORE has been dedicated to crafting delicious
            meals using only the finest ingredients. Our story is one of
            passion, tradition, and culinary excellence.
          </p>
          <Link to="/about-us" className={styles.btn}>
            More About Us
          </Link>
        </div>
        <div className="col-md-6">
          <img
            src="/images/about-banner.jpg"
            className="img-fluid rounded"
            alt="Our Story"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
