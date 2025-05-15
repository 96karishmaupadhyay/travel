import React, { useState } from "react";
import styles from "./cruiseInput.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const CruiseInput = () => {
  return (
    <div className={styles["cruise-input-outer-container"]}>
      <div className={styles["cruise-input-container"]}>
        <div className={styles["input-container"]}>
          <div>
            <input type="text" placeholder="Start" />
            <input type="text" placeholder="End" />
          </div>
          <div>
            <input type="date" name="" id="" />
            <p>
              Adult ,child ,class <RiArrowDropDownLine fontSize={24} />
            </p>
          </div>

          <button className={styles['cruise-search-btn']}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default CruiseInput;
