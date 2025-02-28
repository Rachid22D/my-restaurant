import { useEffect } from "react";

const ImageHoverEffect = () => {
  useEffect(() => {
    const images = document.querySelectorAll("img"); // Apply to all images
    images.forEach((img) => {
      img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease-in-out";
      });
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("mouseover", () => {});
        img.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return null; // No JSX needed
};

export default ImageHoverEffect;
