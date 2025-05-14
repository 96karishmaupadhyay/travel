import React, { useState } from "react";
import car1 from "../../assets/car1.jpeg"
import car2 from "../../assets/car2.jpeg"
import car3 from "../../assets/car3.jpeg"
import car4 from "../../assets/car4.jpeg"
import styles from './carSection.module.css';
const CarSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [visibleCard, setVisibleCard] = useState(4);

  const tabs = [
    { id: 1, label: "Rental" },
    { id: 2, label: "Hourly" },
    { id: 3, label: "Trip Booking" },
    
  ];

  const tabContent = {
    1: [ 
      { image: car1, carName: "Toyota Fortuner", type: "SUV", price: "$80/day", seats: 7, fuelType: "Diesel" },
      { image: car2, carName: "Hyundai Verna", type: "Sedan", price: "$55/day", seats: 5, fuelType: "Petrol" },
      { image: car3, carName: "Maruti Swift", type: "Hatchback", price: "$40/day", seats: 5, fuelType: "Petrol" },
      { image: car1, carName: "Mahindra Thar", type: "SUV", price: "$20/hour", seats: 4, fuelType: "Diesel" }
    ],
    2: [ 
      { image: car4, carName: "Honda City", type: "Sedan", price: "$12/hour", seats: 5, fuelType: "Petrol" },
      { image: car3, carName: "Renault Triber", type: "MPV", price: "$15/hour", seats: 7, fuelType: "Petrol" },
      { image: car2, carName: "Tata Nexon", type: "Compact SUV", price: "$14/hour", seats: 5, fuelType: "Petrol" },
      { image: car1, carName: "Mahindra Thar", type: "SUV", price: "$20/hour", seats: 4, fuelType: "Diesel" }
    ],
    3: [ 
      { image: car3, carName: "Innova Crysta", type: "MPV", price: "$150/trip", seats: 7, fuelType: "Diesel" },
      { image: car2, carName: "Dzire Tour", type: "Sedan", price: "$110/trip", seats: 4, fuelType: "Petrol" },
      { image: car4, carName: "Ertiga", type: "MPV", price: "$130/trip", seats: 6, fuelType: "Petrol" },
      { image: car1, carName: "Mahindra Thar", type: "SUV", price: "$20/hour", seats: 4, fuelType: "Diesel" }
    ]
  };
  const displayCard = tabContent[activeTab].slice(0, visibleCard);

  return (
    <div className={styles["tab-container"]}>
      <h1 className={styles["package-heading"]}>Explore Our Trains</h1>
      <div className={styles["tab-btn-container"]}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
           onClick={() => {setActiveTab(tab.id); setVisibleCard(4);}}
            className={
              activeTab === tab.id
                ? styles["active-tab-btn"]
                : styles["inactive-tab-btn"]
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles["tab-content-container"]}>
        {displayCard.map((item, index) => (
          <div key={index} className={styles["tab-item"]}>
            <img
              src={item.image}
              alt={item.name}
              className={styles["tab-item-image"]}
            />
            <div className={styles["item-content"]}>
              <p className={styles["tab-item-name"]}>{item.carName}</p>
              <p className={styles["tab-item-price"]}>{item.price}</p>
            </div>
            <div className={styles["item-content"]}>
              <p className={styles["tab-item-name"]}>{item.type}</p>
              <p className={styles["tab-item-price"]}>Seats {item.seats}</p>
            </div>
          </div>
        ))}

      </div>
       {tabContent[activeTab].length > 4 && (
        <div className={styles["btn-toggle-wrapper"]}>
          {visibleCard < tabContent[activeTab].length ? (
            <button
              onClick={() => setVisibleCard((prev) => prev + 4)}
              className={styles["view-more-btn"]}
            >
              View More
            </button>
          ) : (
            <button
              onClick={() => setVisibleCard(4)}
              className={styles["view-less-btn"]}
            >
              View Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CarSection;
