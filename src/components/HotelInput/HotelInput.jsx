import React, { useState } from "react";
import styles from "./hotelInput.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const HotelInput = () => {

  return (
    <div className={styles['hotel-input-outer-container']}>
    <div className={styles["hotel-input-container"]}>
     
      <div className={styles['input-container']}>
        <div>
    <input type="text" placeholder="Destination" />
     <p>Adult ,child ,class <RiArrowDropDownLine fontSize={24}/></p>
        </div>
        <div>
     <input type="date" name="" id="" placeholder="checkIn"/>
        <input type="date" name="" id="" placeholder="checkOut"/>
        </div>
       
       
    <Link to="/hotel-search"> <button className={styles["hotel-search-btn"]}>Search</button></Link>  
         </div>
    </div>
    </div>
  );
};

export default HotelInput;
