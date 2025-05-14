import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSlides from '../../sections/HeroSlides/HeroSlides'
import TrainInput from '../../components/TrainInput/TrainInput'
import OfferSection from '../../sections/OfferSection/OfferSection'
import TrainSection from '../../sections/TrainSection/TrainSection'
import ExpirenceSection from '../../sections/ExperienceSection/ExperienceSection'
import Footer from '../../sections/Footer/Footer'
const Train = () => {
  return (
    <div>
      <Navbar/>
      <HeroSlides/>
      <TrainInput/>
      <OfferSection/>
      <TrainSection/>
      <ExpirenceSection/>
      <Footer/>
    </div>
  )
}

export default Train
