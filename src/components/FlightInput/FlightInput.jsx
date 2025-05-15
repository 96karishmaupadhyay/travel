import React, { useState } from "react";
import styles from "./flightInput.module.css";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
const FlightInput = () => {
  const [tripType, setTripType] = useState("oneway");
  return (
    <div className={styles['flight-input-outer-container']}>
    <div className={styles["flight-input-container"]}>
      <div className={styles['radio-btn-section']}>
        <label htmlFor="">
          <input
            type="radio"
            name="tripType"
            id="oneway"
            checked={tripType === "oneway"}
            value="oneway"
            onChange={() => setTripType("oneway")}
          />
          One Way
        </label>
         <label htmlFor="">
          <input
            type="radio"
            name="tripType"
            id="twoway"
            checked={tripType === "twoway"}
            value="twoway"
            onChange={() => setTripType("twoway")}
          />
          Two Way
        </label>
      </div>
      <div className={styles['input-container']}>
        <div>
          <input type="text" placeholder="Start" />
        <input type="text" placeholder="End" />
        </div>
        <div>
         <input type="date" name="" id="" />
        <p>Adult ,child ,class <RiArrowDropDownLine fontSize={24}/></p>
        </div>
        {/* <input type="text" placeholder="Start" />
        <input type="text" placeholder="End" /> */}
        {/* <input type="date" name="" id="" />
        <p>Adult ,child ,class <RiArrowDropDownLine fontSize={24}/></p> */}
        {tripType==="twoway"&&
        (<>
        <div>
           <input type="text" placeholder="from " />
            <input type="text" placeholder="'To" />
        </div>
           
            <input type="date" name="" id="" />
           
            </>
        )
        }
    
          <Link to='/flight-search'><button className={styles['flight-search-btn']}>Search</button></Link> 
    
     
         </div>
    </div>
    </div>
  );
};

export default FlightInput;
