import React from "react";
import styles from "./TopBar.module.css"; 

const TopBar = ({ extraClass = "", containerClass = "container d-flex flex-wrap justify-content-center justify-content-md-between align-items-center"}) => {
  return (
    <div className={`${extraClass} ${styles.topBar} `}>
      <div className={containerClass}>
        <div className={`info-item d-flex align-items-center ${styles.infoItem}`}>
          <ion-icon name="location-outline"></ion-icon>
          <span>123 Main Street, City</span>
        </div>
        <div className={`info-item d-flex align-items-center ${styles.infoItem}`}>
          <ion-icon name="time-outline"></ion-icon>
          <span>Open: 10:00 AM - 11:00 PM</span>
        </div>
        <div className={`info-item d-flex align-items-center ${styles.infoItem}`}>
          <ion-icon name="call-outline"></ion-icon>
          <span>+123 456 789</span>
        </div>
        <div className={`info-item d-flex align-items-center ${styles.infoItem}`}>
          <ion-icon name="mail-outline"></ion-icon>
          <span>info@eatmore.com</span>
        </div>
      </div>
      <div className={`separator ${styles.separator}`}></div>
    </div>
  );
};

export default TopBar;
