import styles from './Gallery.module.css';

// Array containing the gallery image information
const galleryImages = [
  { src: "images/gallery-1.jpg", alt: "Gallery Image 1" },
  { src: "images/gallery-2.jpg", alt: "Gallery Image 2" },
  { src: "images/gallery-3.jpg", alt: "Gallery Image 3" },
  { src: "images/gallery-4.jpg", alt: "Gallery Image 4" },
  { src: "images/gallery-5.jpg", alt: "Gallery Image 5" },
  { src: "images/gallery-6.jpg", alt: "Gallery Image 6" },
];

const Gallery = () => {
  return (
    // Gallery section with CSS classes for styling
    <section className={`section1 gallery-section py-5 ${styles.gallerySection}`}>
      <div className="container">
        {/* Gallery title */}
        <h1 className="text-center mb-5">Our Gallery</h1>
        <div className="row">
          {/* Loop through gallery images to display them */}
          {galleryImages.map((img, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className={styles.galleryItem}>
                {/* Gallery image */}
                <img src={img.src} alt={img.alt} className="img-fluid rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
