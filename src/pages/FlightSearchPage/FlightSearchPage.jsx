import React from 'react'
import Topnav from '../../components/Topnav/Topnav'
import HeroSlides from '../../sections/HeroSlides/HeroSlides'
import FlightInput from '../../components/FlightInput/FlightInput'
import FlightCard from '../../components/FlightCard/FlightCard'
import FlightFilter from '../../components/FlightFilter/FlightFilter'
import styles from './flightSearchPage.module.css'
import ExpirenceSection from '../../sections/ExperienceSection/ExperienceSection'
import Footer from '../../sections/Footer/Footer'
const FlightSearchPage = () => {
  return (
    <div>
      <Topnav/>
      <HeroSlides/>
      <FlightInput/>
      <div className={styles["flight-search-container"]}>
        <div>
          <FlightFilter/>
        </div>
        <div className={styles["searched-flight-container"]}>
          <FlightCard/>
          <FlightCard/>
          <FlightCard/>
          <FlightCard/>
        </div>      
      </div>
      <ExpirenceSection/>
      <Footer/>
    </div>
  )
}

export default FlightSearchPage
