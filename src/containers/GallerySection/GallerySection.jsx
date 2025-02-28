
import styles from "./GallerySection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "images/service-1.jpg",
  "images/service-2.jpg",
  "images/service-3.jpg",
];

const GallerySection = () => {
  return (
    <section className={`gallery_section bg-dark text-white py-5 text-center ${styles.gallerySection}`}>
      <h2>Gallery</h2>
      <div className="container">
        <div className={`row ${styles.galleryRow}`}>
          {images.map((src, index) => (
            <div key={index} className="col-md-4">
              <img src={src} className={`img-fluid ${styles.galleryImage}`} alt="Gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
