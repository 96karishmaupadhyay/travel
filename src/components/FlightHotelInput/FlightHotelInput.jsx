import React, { useState } from "react";
import styles from "./flightHotel.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const FlightHotelInput = () => {

  return (
    <div className={styles['flight-hotel-input-outer-container']}>
    <div className={styles["flight-hotel-input-container"]}>
     
      <div className={styles['input-container']}>
        <input type="text" placeholder="Start" />
        <input type="text" placeholder="End" />
        <input type="date" name="" id="" />
        <p>Adult ,child ,class <RiArrowDropDownLine fontSize={24}/></p>
        <button className="btn">Search</button>
         </div>
    </div>
    </div>
  );
};

export default FlightHotelInput;
