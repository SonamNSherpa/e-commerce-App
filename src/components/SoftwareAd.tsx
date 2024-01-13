import React from "react";
import styles from "../styling/Dashboard.module.css";
import laptop1 from "./laptop1.jpg";

const SoftwareAd: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        FROM LEARNING TO GAMING. ELITE TECH HAS IT!!!
      </h2>
      <div className={styles.imageContainer}>
        <img src={laptop1} className={styles.productAd} />
        <img src={laptop1} className={styles.productAd} />
        <img src={laptop1} className={styles.productAd} />
      </div>
      <h2>ELITE TECH </h2>
      <h2>
        EDUCATIONAL GAMES AND VIDEOS FOR YOUR KIDS. PROFESSIONAL SOFTWARE FOR
        YOUR OFFICE. GAMING FOR EVERYBODY. YES, EVERYBODY IS AN ELITE HERE.
      </h2>
    </div>
  );
};

export default SoftwareAd;
