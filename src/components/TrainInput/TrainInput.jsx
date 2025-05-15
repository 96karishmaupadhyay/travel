import React, { useState } from "react";
import styles from "./trainInput.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const TrainInput = () => {

  return (
    <div className={styles['train-input-outer-container']}>
    <div className={styles["train-input-container"]}>
     
      <div className={styles['input-container']}>
        <div>
       <input type="text" placeholder="Start" />
        <input type="text" placeholder="End" />
        </div>
        <div>
<input type="date" name="" id="" />
        <p>Adult ,child ,class <RiArrowDropDownLine fontSize={24}/></p>
        </div>
        
      <Link to='/train-search'> <button className={styles["train-search-btn"]}>Search</button>
      </Link> 
         </div>
    </div>
    </div>
  );
};

export default TrainInput;
