import React from 'react';
import flight from '../../assets/flight.jpg';
import styles from './experienceSection.module.css';

const ExpirenceSection = () => {
  return (
    <div className={styles["experience-container"]}>
      <div className={styles["image-wrapper"]}>
        <img src={flight} alt="Flight" className={styles["experience-image"]} />
      </div>
      <div className={styles["experience-content"]}>
        <h1 className={styles["experience-heading"]}>
          Experience <br />
          <span className={styles["highlight-blue"]}>Flight's and Hotel Booking</span>
          <br /> with <span className={styles["highlight-red"]}>LetgetGo</span>
        </h1>
        <button className={styles["experience-button"]}>Get More Info</button>
      </div>
    </div>
  );
};

export default ExpirenceSection;
