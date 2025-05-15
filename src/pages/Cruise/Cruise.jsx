import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSlides from '../../sections/HeroSlides/HeroSlides'
import CruiseInput from '../../components/CruiseInput/CruiseInput'
import OfferSection from '../../sections/OfferSection/OfferSection'
import CruiseSection from '../../sections/CruiseSection/CruiseSection'
import ExpirenceSection from '../../sections/ExperienceSection/ExperienceSection'
import ImageGrid from '../../sections/ImageGrid/ImageGrid'
import Footer from '../../sections/Footer/Footer'
import HeroNav from '../../components/Heronav/Heronav'
const Cruise = () => {
  return (
    <div>
      <Navbar/>
      <HeroNav/>
      <CruiseInput/>     
      <OfferSection/>
      <CruiseSection/>
      <ImageGrid/>
      <ExpirenceSection/>
      <Footer/>
    </div>
  )
}

export default Cruise
