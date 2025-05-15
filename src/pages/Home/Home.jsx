import React from 'react'
import styles from './home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroSlides from '../../sections/HeroSlides/HeroSlides'
import FlightInput from '../../components/FlightInput/FlightInput'
import OfferSection from '../../sections/OfferSection/OfferSection'
import TopPackages from '../../sections/TopPackages/TopPackages'
import ImageGrid from '../../sections/ImageGrid/ImageGrid'
import FlightSection from '../../sections/FlightSection/FlightSection'
import GetInSection from '../../sections/GetInSection/GetInSection'
import HotelSection from '../../sections/HotelSection/HotelSection'
import TrainSection from '../../sections/TrainSection/TrainSection'
import ExpirenceSection from '../../sections/ExperienceSection/ExperienceSection'
import CruiseSection from '../../sections/CruiseSection/CruiseSection'
import Footer from '../../sections/Footer/Footer'
import CarSection from '../../sections/CarSection/CarSection'
import { style } from 'motion/react-client'
import Topnav from '../../components/Topnav/Topnav'
import HeroNav from '../../components/Heronav/Heronav'
const Home = () => {
  return (
    <div >
      <Topnav/>
      {/* <Navbar/> */}
      {/* <HeroSlides/> */}
      <HeroNav/>
      <FlightInput/>
      <OfferSection/>
      <TopPackages/>
      <ImageGrid/>
      <FlightSection/>
      <GetInSection/>
      <HotelSection/>
      <TrainSection/>
      <ExpirenceSection/>
      <CruiseSection/>
      <ImageGrid/>
      <CarSection/>
      <Footer/>
    </div>
  )
}

export default Home
