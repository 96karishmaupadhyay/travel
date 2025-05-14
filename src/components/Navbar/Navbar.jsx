import React from 'react'
import styles from './navbar.module.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className={styles['navbar']}>
      <div>
        <img src={logo} alt="" className="logo"/>
      </div>
      <div className={styles['right-nav']}>
        <p>EN</p>
        <p>US</p>
        <button className="btn">Sign up</button>
        <button className="btn">Login</button>
      </div>
    </div>
  )
}

export default Navbar
