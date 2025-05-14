import React from 'react';
import { FaPlaneDeparture, FaFilter, FaSuitcase, FaCheck } from 'react-icons/fa';
import styles from './flightFilter.module.css';

const FlightFilter = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <FaFilter className={styles.headingIcon} /> Filter Flights
      </h2>

      <div className={styles.section}>
        <h3 className={styles.subheading}>
          <FaCheck className={styles.subheadingIcon} /> Recommended Filters
        </h3>
        <div className={styles.options}>
          <label className={styles.option}>
            <input type="checkbox" className={styles.checkbox} /> Direct Flight
          </label>
          <label className={styles.option}>
            <input type="checkbox" className={styles.checkbox} /> Checked Baggage Included
          </label>
          <label className={styles.option}>
            <input type="checkbox" className={styles.checkbox} /> High Budget Airline
          </label>
          <label className={styles.option}>
            <input type="checkbox" className={styles.checkbox} /> Carry-on Baggage Included
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subheading}>
          <FaPlaneDeparture className={styles.subheadingIcon} /> Recommended Airlines
        </h3>
        <div className={styles.options}>
          {['IndiGo', 'Air India', 'SpiceJet', 'Vistara', 'Go First'].map((airline, index) => (
            <label key={index} className={styles.option}>
              <input type="checkbox" className={styles.checkbox} /> {airline}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;
