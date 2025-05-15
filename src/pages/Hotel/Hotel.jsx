import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSlides from '../../sections/HeroSlides/HeroSlides'
import HotelInput from '../../components/HotelInput/HotelInput'
import OfferSection from '../../sections/OfferSection/OfferSection'
import HotelSection from '../../sections/HotelSection/HotelSection'
import ImageGrid from '../../sections/ImageGrid/ImageGrid'
import ExpirenceSection from '../../sections/ExperienceSection/ExperienceSection'
import Footer from '../../sections/Footer/Footer'
import HeroNav from '../../components/Heronav/Heronav'
const Hotel = () => {
  return (
    <div>
      <Navbar/>
      <HeroNav/>
      <HotelInput/>
      <OfferSection/>
      <HotelSection/>
      <ImageGrid/>
      <ExpirenceSection/>
      <Footer/>

    </div>
  )
}

export default Hotel
