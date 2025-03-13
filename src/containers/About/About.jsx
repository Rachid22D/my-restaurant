import { Link } from "react-router-dom"; 
import styles from "./About.module.css"; 

const About = () => {
  return (
    <section className={`container my-5 ${styles.aboutSection}`}>
      <div className="row">
        {/* Left column: Contains the story text and a link to learn more */}
        <div className={`col-md-6 margin-bottom-20 ${styles.storyText}`}>
          <h2>Our Story</h2>
          <p>
            Since our opening, EatMORE has been dedicated to crafting delicious
            meals using only the finest ingredients. Our story is one of
            passion, tradition, and culinary excellence.
          </p>
          {/* Navigation link to the About Us page */}
          <Link to="/about-us" className={`btn ${styles.btn}`}>
            More About Us
          </Link>
        </div>

        {/* Right column: Displays an image related to the story */}
        <div className="col-md-6 margin-bottom-20">
          <img
            src="/images/about-banner.jpg"
            className="img-fluid rounded"
            alt="Our Story" // Provides accessibility for screen readers
          />
        </div>
      </div>
    </section>
  );
};

export default About;
