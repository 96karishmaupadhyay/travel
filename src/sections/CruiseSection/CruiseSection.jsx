import React, { useState } from "react";
import styles from "./cruiseSection.module.css";
import cruise1 from "../../assets/cruise.png"
import cruise2 from "../../assets/cruise1.png"
import cruise3 from "../../assets/cruise2.png"
import cruise4 from "../../assets/cruise.png"
const CruiseSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [visibleCard, setVisibleCard] = useState(4);

const tabs = [
  { id: 1, label: "Luxury Cruises" },
  { id: 2, label: "Day Cruises" },
  { id: 3, label: "Adventure Cruises" },
];

const tabContent = {
  1: [
    { image: cruise1, name: "Royal Caribbean", type: "Ocean Cruise", price: "$1200/week", capacity: 3000, amenities: "Pool, Spa, Casino" },
    { image: cruise2, name: "Celebrity Eclipse", type: "Ocean Cruise", price: "$1100/week", capacity: 2800, amenities: "Fine Dining, Theatre" },
    { image: cruise3, name: "MSC Seaside", type: "Luxury Cruise", price: "$1250/week", capacity: 3200, amenities: "Water Park, Gym" },
    { image: cruise1, name: "Norwegian Bliss", type: "Ocean Cruise", price: "$1300/week", capacity: 3100, amenities: "Spa, Casino, Lounge" },
  ],
  2: [
    { image: cruise4, name: "Goa Day Cruise", type: "Day Cruise", price: "$70/day", capacity: 150, amenities: "Live Music, Food" },
    { image: cruise3, name: "Kochi Backwater Cruise", type: "Day Cruise", price: "$65/day", capacity: 120, amenities: "Lunch, Guide" },
    { image: cruise2, name: "Mumbai Sunset Cruise", type: "Evening Cruise", price: "$80/day", capacity: 100, amenities: "Snacks, DJ" },
    { image: cruise1, name: "Mandovi River Cruise", type: "River Cruise", price: "$60/day", capacity: 140, amenities: "Dance Show, Drinks" },
  ],
  3: [
    { image: cruise3, name: "Alaskan Adventure", type: "Expedition Cruise", price: "$1600/trip", capacity: 500, amenities: "Glacier View, Excursions" },
    { image: cruise2, name: "Andaman Explorer", type: "Island Cruise", price: "$1400/trip", capacity: 600, amenities: "Scuba Diving, Sightseeing" },
    { image: cruise4, name: "Lakshadweep Voyage", type: "Ocean Cruise", price: "$1500/trip", capacity: 550, amenities: "Snorkeling, Onboard Activities" },
    { image: cruise1, name: "Norwegian Bliss", type: "Adventure Cruise", price: "$1300/trip", capacity: 3100, amenities: "Hiking Tours, Night Shows" },
  ]
};

  const displayCard = tabContent[activeTab].slice(0, visibleCard);

  return (
    <div className={styles["tab-container"]}>
      <h1 className={styles["package-heading"]}>Explore Our Cruise Services</h1>
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
              <p className={styles["tab-item-name"]}>{item.name}</p>
              <p className={styles["tab-item-price"]}>{item.price}</p>
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

export default CruiseSection;
