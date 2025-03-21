import { useEffect } from "react";

const ScrollAnimation = () => {
  useEffect(() => {
    // Select all <section> elements on the page
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    // Function to check the scroll position and add 'visible' class when sections are in view
    function checkScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.8) {
          section.classList.add("visible");
        }
      });
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run check on initial load

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return null; // No JSX output needed
};

export default ScrollAnimation;
