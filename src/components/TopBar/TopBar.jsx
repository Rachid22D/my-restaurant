// Import PropTypes and CSS module styles for component styling
import PropTypes from "prop-types";
import styles from "./TopBar.module.css"; 

// TopBar Component: Displays contact and location information
const TopBar = ({ 
  extraClass = "", // Additional class names for customization
  containerClass = "container d-flex flex-wrap justify-content-center justify-content-md-between align-items-center" // Default container styling
}) => {
  return (
    // Main wrapper with extra classes and top bar styling
    <div className={`${extraClass} ${styles.topBar} `}>
      
      {/* Container for contact information items */}
      <div className={containerClass}>
        
        {/* Location Info */}
        <div className={`info-item d-flex align-items-center ${styles.infoItem}`}>
          <ion-icon name="location-outline"></ion-icon>
          <span>123 Main Street, City</span>
        </div>

        {/* Opening Hours Info */}
        <div className={`info-item d-flex align-items-center ${styles.infoItem}`}>
          <ion-icon name="time-outline"></ion-icon>
          <span>Open: 10:00 AM - 11:00 PM</span>
        </div>

        {/* Contact Phone Info */}
        <div className={`info-item d-flex align-items-center ${styles.infoItem}`}>
          <ion-icon name="call-outline"></ion-icon>
          <span>+123 456 789</span>
        </div>

        {/* Email Contact Info */}
        <div className={`info-item d-flex align-items-center ${styles.infoItem}`}>
          <ion-icon name="mail-outline"></ion-icon>
          <span>info@eatmore.com</span>
        </div>

      </div>

      {/* Separator Line for Styling */}
      <div className={`separator ${styles.separator}`}></div>
    </div>
  );
};
TopBar.propTypes = {
  extraClass: PropTypes.string,  
  containerClass: PropTypes.string 
};
export default TopBar;
