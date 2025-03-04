import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

// Slides data for the carousel
const slides = [
  {
    image: "images/148834.jpg",
    title: "Experience Unforgettable Flavors!",
    text: "Enjoy the finest dishes made with premium ingredients and perfected by our expert chefs.",
    buttonText: "View Menu",
    buttonLink: "/menu",
  },
  {
    image: "images/148839.jpg",
    title: "The Perfect Setting for a Memorable Evening",
    text: "Whether you're planning a romantic dinner or a family gathering, we offer the ideal ambiance for a relaxing and enjoyable time.",
    buttonText: "Reserve Your Table",
    buttonLink: "/reservation",
  },
  {
    image: "images/148841.jpg",
    title: "Bringing Your Favorite Flavors to Your Doorstep!",
    text: "Enjoy your favorite meals at home with our fast and free delivery service within the city.",
    buttonText: "Order Now",
    buttonLink: "/order",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;
  const heroRef = useRef(null);
  const touchStartX = useRef(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  // Handle swipe gestures for touch devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      // Swipe left: go to next slide
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    } else if (touchStartX.current - touchEndX < -50) {
      // Swipe right: go to previous slide
      setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    }
  };

  // Inline style to update background image based on the current slide
  const heroStyle = {
    backgroundImage: `url(${slides[currentSlide].image})`
  };

  return (
    
    <section
      className={`${styles.hero} hero`}
      style={heroStyle}
      ref={heroRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      <div className={styles["hero-content"]}>
        <h1 id="hero-title">{slides[currentSlide].title}</h1>
        <p id="hero-text">{slides[currentSlide].text}</p>
        {/* Using React Router's Link for navigation */}
        <Link id="hero-btn" to={slides[currentSlide].buttonLink} className={`btn btn-warning ${styles.btn}`}>
          {slides[currentSlide].buttonText}
        </Link>
      </div>
      {/* Navigation buttons */}
      <button
        id="prev"
        className={`${styles["slider-btn"]} ${styles.left}`}
        aria-label="Previous Slide"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)}
      >
        ❮
      </button>
      <button
        id="next"
        className={`${styles["slider-btn"]} ${styles.right}`}
        aria-label="Next Slide"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slideCount)}
      >
        ❯
      </button>
      {/* Carousel indicators */}
      <div className={styles["carousel-indicators"]} id="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
