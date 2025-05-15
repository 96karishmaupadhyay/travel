import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSlides from '../../sections/HeroSlides/HeroSlides'
import FlightHotelInput from '../../components/FlightHotelInput/FlightHotelInput'
import OfferSection from '../../sections/OfferSection/OfferSection'
import FlightSection from '../../sections/FlightSection/FlightSection'
import ImageGrid from '../../sections/ImageGrid/ImageGrid'
import HotelSection from '../../sections/HotelSection/HotelSection'
import ExpirenceSection from '../../sections/ExperienceSection/ExperienceSection'
import Footer from '../../sections/Footer/Footer'
import HeroNav from '../../components/Heronav/Heronav'
const FlightHotel = () => {
  return (
    <div>
      <Navbar/>
      <HeroNav/>
     <FlightHotelInput/>
   
      <OfferSection/>
   
     <FlightSection/>
     <ImageGrid/>
     <HotelSection/>
     <ExpirenceSection/>
     <Footer/>
    </div>
  )
}

export default FlightHotel
