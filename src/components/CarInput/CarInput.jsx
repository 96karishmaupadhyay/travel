import React, { useState } from "react";
import styles from "./carInput.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const CarInput = () => {

  return (
    <div className={styles['car-input-outer-container']}>
    <div className={styles["car-input-container"]}>
     
      <div className={styles['input-container']}>
        <input type="text" placeholder="Start" />
        <input type="text" placeholder="End" />
        <input type="date" name="" id="" />
        {/* <p>Adult ,child ,class <RiArrowDropDownLine fontSize={24}/></p> */}
        <button className="btn">Search</button>
         </div>
    </div>
    </div>
  );
};

export default CarInput;
