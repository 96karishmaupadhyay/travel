import React, { useRef } from 'react';
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";
import offer4 from "../../assets/offer4.png";
import offer5 from "../../assets/offer5.png";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styles from './offerSection.module.css';

const OfferSection = () => {
  const offerImages = [offer1, offer2, offer3, offer4, offer5];
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows:false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles['offer-section-container']}>
      <h1 className={styles['offer-heading']}>Check Out Your Offers</h1>
      <div className={styles['slider-wrapper']}>
        <Slider {...settings} ref={sliderRef}>
          {offerImages.map((img, index) => (
            <div key={index} className={styles['slide-item']}>
              <img src={img} alt={`Offer ${index + 1}`} className={styles['offer-image']} />
            </div>
          ))}
        </Slider>

        <div className={styles['slider-buttons']}>
          <button onClick={handlePrev}>
            <FaAngleLeft className={styles['left-arrow']} />
          </button>
          <button onClick={handleNext}>
            <FaAngleRight className={styles['right-arrow']} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
