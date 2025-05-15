import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSlides from '../../sections/HeroSlides/HeroSlides'
import TrainInput from '../../components/TrainInput/TrainInput'
import OfferSection from '../../sections/OfferSection/OfferSection'
import TrainSection from '../../sections/TrainSection/TrainSection'
import ExpirenceSection from '../../sections/ExperienceSection/ExperienceSection'
import Footer from '../../sections/Footer/Footer'
import Topnav from '../../components/Topnav/Topnav'
import HeroNav from '../../components/Heronav/Heronav'
const Train = () => {
  return (
    <div>
      <Topnav/>
      {/* <Navbar/> */}
      <HeroNav/>
      <TrainInput/>
     <div style={{"margin-top":"100px"}}>
      <OfferSection/>
      </div>
      <TrainSection/>
      <ExpirenceSection/>
      <Footer/>
    </div>
  )
}

export default Train
