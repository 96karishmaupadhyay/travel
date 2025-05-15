import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSlides from '../../sections/HeroSlides/HeroSlides'
import CarInput from '../../components/CarInput/CarInput'
import OfferSection from '../../sections/OfferSection/OfferSection'
import CarSection from '../../sections/CarSection/CarSection'
import ExpirenceSection from '../../sections/ExperienceSection/ExperienceSection'
import Footer from '../../sections/Footer/Footer'
import HeroNav from '../../components/Heronav/Heronav'
const Car = () => {
  return (
    <div>
     <Navbar/>
     <HeroNav/>
      <CarInput/>
  
      <OfferSection/>
    
      <CarSection/>
      <ExpirenceSection/>
      <Footer/>
    </div>
  )
}

export default Car
