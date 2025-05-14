import React from 'react';
import flight from "../../assets/flight1.jpeg";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from './flightCard.module.css';

const FlightCard = () => {
  return (
    <div className={styles.card}>
      <div>
        <img src={flight} alt="" className={styles.image} />
      </div>
      <div>
        <h2 className={styles.departureTime}>11:23</h2>
        <p className={styles.airportCode}>CDG T2C</p>
      </div>
      <div className={styles.flightDuration}>
        <IoIosArrowRoundForward className={styles.arrowIcon} />
        <p>4 hours 24 minutes</p>
      </div>
      <div>
        <h2 className={styles.arrivalTime}>03:57</h2>
        <p className={styles.airportCode}>DXB 3</p>
      </div>
      <div className={styles.bookingSection}>
        <h2 className={styles.price}>$321.0</h2>
        <Link to="/booking-page">
          <button className={styles.bookButton}>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FlightCard;
