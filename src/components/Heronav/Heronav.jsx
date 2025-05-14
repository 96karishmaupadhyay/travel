import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineFlight } from "react-icons/md"
import { FaTrainSubway } from "react-icons/fa6"
import { IoCarSport } from "react-icons/io5"
import { MdLocalHotel } from "react-icons/md"
import { SiMentorcruise } from "react-icons/si"
import styles from './heronav.module.css'
const HeroNav = () => {
  return (
    <div >
      <ul className={styles['heronav']}>
  <NavLink to="/" className={({ isActive }) => `${styles['heronav-link']} ${isActive ? styles.active : ''}`}>
    <li className={styles['heronav-list']}><MdOutlineFlight /> Flights</li>
  </NavLink>

  <NavLink to="/train" className={({ isActive }) => `${styles['heronav-link']} ${isActive ? styles.active : ''}`}>
    <li className={styles['heronav-list']}><FaTrainSubway /> Trains</li>
  </NavLink>

  <NavLink to="/hotel" className={({ isActive }) => `${styles['heronav-link']} ${isActive ? styles.active : ''}`}>
    <li className={styles['heronav-list']}><MdLocalHotel /> Hotels</li>
  </NavLink>

  <NavLink to="/car" className={({ isActive }) => `${styles['heronav-link']} ${isActive ? styles.active : ''}`}>
    <li className={styles['heronav-list']}><IoCarSport /> Cars</li>
  </NavLink>

  <NavLink to="/flight-hotel" className={({ isActive }) => `${styles['heronav-link']} ${isActive ? styles.active : ''}`}>
    <li className={styles['heronav-list']}><MdOutlineFlight /><MdLocalHotel /> Flight + Hotel</li>
  </NavLink>

  <NavLink to="/cruise" className={({ isActive }) => `${styles['heronav-link']} ${isActive ? styles.active : ''}`}>
    <li className={styles['heronav-list']}><SiMentorcruise /> Cruise</li>
  </NavLink>
</ul>

    </div>
  )
}

export default HeroNav