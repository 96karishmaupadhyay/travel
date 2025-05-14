import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdOutlineFlight } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { MdLocalHotel } from "react-icons/md";
import { SiMentorcruise } from "react-icons/si";
import logo from "../../assets/logo.png";
import styles from './topnav.module.css';

const Topnav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.menuIcon}>
        {isOpen ? (
          <ImCross onClick={() => setOpen(false)} className={styles.icon} />
        ) : (
          <GiHamburgerMenu onClick={() => setOpen(true)} className={styles.icon} />
        )}
      </div>

      <ul className={styles.navLinksDesktop}>
        <li className={styles.navItem}><MdOutlineFlight /><Link to="/">Flights</Link></li>
        <li className={styles.navItem}><FaTrainSubway /><Link to="/trains">Trains</Link></li>
        <li className={styles.navItem}><MdLocalHotel /><Link to="/hotel">Hotels</Link></li>
        <li className={styles.navItem}><IoCarSport /><Link to="/cars">Cars</Link></li>
        <li className={styles.navItem}><MdOutlineFlight/><MdLocalHotel/><Link to="/flight-hotel">Flight + Hotel</Link></li>
        <li className={styles.navItem}><SiMentorcruise /><Link to="/cruise">Cruise</Link></li>
      </ul>

      {isOpen && (
        <ul className={styles.navLinksMobile}>
          <li className={styles.navItem}><MdOutlineFlight /><Link to="/">Flights</Link></li>
          <li className={styles.navItem}><FaTrainSubway /><Link to="/trains">Trains</Link></li>
          <li className={styles.navItem}><MdLocalHotel /><Link to="/hotel">Hotels</Link></li>
          <li className={styles.navItem}><IoCarSport /><Link to="/cars">Cars</Link></li>
          <li className={styles.navItem}><MdOutlineFlight/><MdLocalHotel/><Link to="/flight-hotel">Flight + Hotel</Link></li>
          <li className={styles.navItem}><SiMentorcruise /><Link to="/cruise">Cruise</Link></li>
        </ul>
      )}

      <div className={styles.authButtons}>
        <li className={styles.navText}>Us</li>
        <li className={styles.navText}>EN</li>
        <li className={styles.signup}><Link to="/signup"><button>Sign up</button></Link></li>
        <li className={styles.login}><Link to="/login"><button>Login</button></Link></li>
      </div>
    </div>
  );
};

export default Topnav;
