import { useEffect } from "react";

const ImageHoverEffect = () => {
  useEffect(() => {
    const images = document.querySelectorAll("img"); // Select all images
    images.forEach((img) => {
      img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)"; // Scale up on hover
        img.style.transition = "transform 0.3s ease-in-out"; // Smooth transition
      });
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)"; // Scale back to original size
      });
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("mouseover", () => {}); // Clean up event listeners
        img.removeEventListener("mouseleave", () => {}); // Clean up event listeners
      });
    };
  }, []);

  return null; // No JSX needed
};

export default ImageHoverEffect;
