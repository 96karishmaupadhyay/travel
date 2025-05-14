import React from 'react'
import img1 from '../../assets/flight.jpg'
import img2 from '../../assets/flight1.jpeg'
import img3 from '../../assets/flight2.jpeg'
import img4 from '../../assets/flight3.jpeg'
import img5 from '../../assets/flight4.jpeg'
import img6 from '../../assets/flight5.jpeg'
import styles from './getInSection.module.css'
import { div } from 'motion/react-client'

const GetInSection = () => {
    const getInCards = [
  {
    id: 1,
    heading: "Explore Chennai via Multiple Cities",
    start: "Delhi",
    end: "Chennai",
    image: img1,
  },
  {
    id: 2,
    heading: "Mumbai to Dubai Special Offer",
    start: "Mumbai",
    end: "Dubai",
    image: img2,
  },
  {
    id: 3,
    heading: "Fly from Bengaluru to Singapore",
    start: "Bengaluru",
    end: "Singapore",
    image: img3,
  },
  {
    id: 4,
    heading: "Affordable Flight: Hyderabad to London",
    start: "Hyderabad",
    end: "London",
    image: img4,
  },
  {
    id: 5,
    heading: "Non-stop Adventure: Kolkata to Bangkok",
    start: "Kolkata",
    end: "Bangkok",
    image: img5,
  },
   {
    id: 6,
    heading: "Fly from Bengaluru to Singapore",
    start: "Bengaluru",
    end: "Singapore",
    image: img3,
  },
];

  return (
   <div className={styles['container']}>
     <h1 className={styles["package-heading"]}>Explore Our Trips</h1>
  
    <div className={styles['get-in-card-container']}>

      {
       getInCards.map((item,id)=>{
        return(
            <div key={item.id} className={styles['get-in-card']}>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h3>{item.heading}</h3>
                    <p>{item.start}"---"{item.end}</p>
                </div>
            </div>
        )
       }) 
      }
    </div>
     </div> 
  )
}

export default GetInSection
