
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`${styles.aboutSection} section1 about-section py-5`}>
      <div className="container">
        <h1 className="text-center mb-5">About Us</h1>
        <div className="row align-items-center">
          {/* Image section */}
          <div className="col-md-6 mb-4">
            <img
              src="/images/about-banner.jpg"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
          {/* Text content */}
          <div className="col-md-6">
            <h2>Our Story</h2>
            <p>
              EatMORE was founded with a passion for creating unforgettable dining experiences. Our journey began with a simple idea: to blend tradition with innovation, using only the freshest ingredients to craft dishes that delight the senses.
            </p>
            <h3>Our Vision</h3>
            <p>
              To become the premier destination for food enthusiasts, delivering culinary excellence and a welcoming atmosphere that inspires memorable moments.
            </p>
            <h3>Our Mission</h3>
            <p>
              To serve delicious, high-quality meals in a warm and inviting environment, ensuring every visit is a delightful experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
