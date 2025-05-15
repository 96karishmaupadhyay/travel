import React, { useState } from "react";
import styles from "./carInput.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const CarInput = () => {

  return (
    <div className={styles['car-input-outer-container']}>
    <div className={styles["car-input-container"]}>
     
      <div className={styles['input-container']}>
        <div>
         <input type="text" placeholder="Start" />
        <input type="text" placeholder="End" />
        </div>
       <div>
<input type="date" name="" id="" />
<Link to="/car-search"> <button className={styles['car-search-btn']}>Search</button></Link>
       </div>
        
        {/* <p>Adult ,child ,class <RiArrowDropDownLine fontSize={24}/></p> */}
       
         </div>
    </div>
    </div>
  );
};

export default CarInput;
