import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../../assets/logo.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      {/* <div className={styles["email-footer"]}>
        <img src={logo} alt="" className={styles["footer-logo"]} />
        <p className={styles["footer-description"]}>
          Experience of many to many of its customer. The experience of booking your flight.
        </p>
        <div className={styles["email-input-wrapper"]}>
          <input
            type="email"
            placeholder="Write your email"
            className={styles["email-input"]}
          />
          <button className={styles["submit-button"]}>Submit</button>
        </div>
      </div> */}

      <div className={styles["footer-links-section"]}>
        <div>
          <h1 className={styles["footer-head"]}>Product Offering</h1>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">International Hotels</Link></li>
            <li><Link to="/">Domestic Flights</Link></li>
            <li><Link to="/">International Flights</Link></li>
            <li><Link to="/">Bus Booking</Link></li>
            <li><Link to="/">Cab Booking</Link></li>
            <li><Link to="/">Train Ticket Booking</Link></li>
            <li><Link to="/">Route Planner</Link></li>
            <li><Link to="/">Destination Planner</Link></li>
          </ul>
        </div>

        <div>
          <h1 className={styles["footer-head"]}>Company</h1>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">User Agreement</Link></li>
            <li><Link to="/">Career</Link></li>
          </ul>
        </div>

        <div>
          <h1 className={styles["footer-head"]}>Travel Resources</h1>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">International Hotels</Link></li>
            <li><Link to="/">Domestic Flights</Link></li>
            <li><Link to="/">International Flights</Link></li>
            <li><Link to="/">Bus Booking</Link></li>
            <li><Link to="/">Cab Booking</Link></li>
            <li><Link to="/">Train Ticket Booking</Link></li>
            <li><Link to="/">Route Planner</Link></li>
            <li><Link to="/">Destination Planner</Link></li>
          </ul>
        </div>

        <div>
          <h1 className={styles["footer-head"]}>More Links</h1>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">International Hotels</Link></li>
            <li><Link to="/">Domestic Flights</Link></li>
            <li><Link to="/">International Flights</Link></li>
          </ul>
        </div>

        <div>
          <h1 className={styles["footer-head"]}>Our Products</h1>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">International Hotels</Link></li>
            <li><Link to="/">Domestic Flights</Link></li>
            <li><Link to="/">International Flights</Link></li>
            <li><Link to="/">Bus Booking</Link></li>
            <li><Link to="/">Cab Booking</Link></li>
            <li><Link to="/">Train Ticket Booking</Link></li>
            <li><Link to="/">Route Planner</Link></li>
            <li><Link to="/">Destination Planner</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <ul className={styles["footer-bottom-links"]}>
          <li>About</li>
          <li>Popular Destination</li>
          <li>Top Flights</li>
          <li>Popular Bus</li>
          <li>Tranks</li>
          <li>Info</li>
        </ul>
        <ul className={styles["footer-social-icons"]}>
          <li className={styles["social-icon"]}><Link to="/"><FaFacebookF /></Link></li>
          <li className={styles["social-icon"]}><Link to="/"><FaSquareInstagram /></Link></li>
          <li className={styles["social-icon"]}><Link to="/"><BsTwitterX /></Link></li>
          <li className={styles["social-icon"]}><Link to="/"><FaLinkedinIn /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
