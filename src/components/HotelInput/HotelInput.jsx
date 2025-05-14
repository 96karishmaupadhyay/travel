import React, { useState } from "react";
import styles from "./hotelInput.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const HotelInput = () => {

  return (
    <div className={styles['hotel-input-outer-container']}>
    <div className={styles["hotel-input-container"]}>
     
      <div className={styles['input-container']}>
        <input type="text" placeholder="Destination" />
        <input type="date" name="" id="" placeholder="checkIn"/>
        <input type="date" name="" id="" placeholder="checkOut"/>
        <p>Adult ,child ,class <RiArrowDropDownLine fontSize={24}/></p>
        <button className="btn">Search</button>
         </div>
    </div>
    </div>
  );
};

export default HotelInput;
