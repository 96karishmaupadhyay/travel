import React, { useState ,useEffect} from 'react'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import { AnimatePresence, motion } from "motion/react"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import styles from './heroSlides.module.css'
import HeroNav from '../../components/Heronav/Heronav'
const HeroSlides = () => {
    const heroImages=[img1,img2,img3,img4,img5]
    const [current,setCurrent]=useState(0)
    const handleNext =()=>{
     
      setCurrent(prev=>(prev === heroImages.length - 1 ? 0 : prev + 1))
    }
    const handlePrev=()=>{
      setCurrent(prev=>(prev === 0? heroImages.length-1 : prev - 1))
      console.log(current)
    }

    useEffect(()=>{
      const interval=setInterval(handleNext,3000)
      return ()=>clearInterval(interval)
    })
  return (
    <div className={styles['slide-image-container']} >
         
      <AnimatePresence mode='wait' >
  <motion.img
    key={current}
    src={heroImages[current]}
    initial={{ opacity: 0.8}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.9 }}
    transition={{ duration: 1.4 }}
    className={styles['slide-image']}
  />
</AnimatePresence>
      <button  onClick={handlePrev}><FaAngleLeft className={styles['left-arrow']}/></button>
      <button onClick={handleNext}><FaAngleRight className={styles['right-arrow']} /></button>

     <div>
        <HeroNav/>
     </div>
     
    </div>
  )
}

export default HeroSlides