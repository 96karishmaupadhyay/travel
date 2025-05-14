import React, { useState } from "react";
import newyork from "../../assets/newyork.png";
import room1 from "../../assets/room1.jpeg"
import room2 from "../../assets/room2.jpeg"
import room3 from "../../assets/room3.jpeg"
import room4 from "../../assets/room4.jpeg"
import room5 from "../../assets/room5.jpeg"
import styles from "./hotelSection.module.css";
const HotelSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [visibleCard, setVisibleCard] = useState(4);

  const tabs = [
    { id: 1, label: "Paris" },
    { id: 2, label: "New York" },
    { id: 3, label: "Tokyo" },
    { id: 4, label: "Dubai" }
  ];

  const tabContent = {
    1: [
      { image: room5, name: "Hotel Le Meurice", price: "$250/night" },
      { image: room1, name: "Hôtel Lutetia", price: "$300/night" },
      { image: room2, name: "Ritz Paris", price: "$400/night" },
      { image: room3, name: "Hotel Plaza Athénée", price: "$350/night" },
      { image: room4, name: "Hotel Le Meurice", price: "$250/night" },
      { image: room5, name: "Hôtel Lutetia", price: "$300/night" },
      { image: newyork, name: "Ritz Paris", price: "$400/night" },
     
    ],
    2: [
      { image: room1, name: "The Plaza", price: "$450/night" },
      { image: room2, name: "The Peninsula", price: "$500/night" },
      { image: room3, name: "Four Seasons NYC", price: "$600/night" },
      { image: room4, name: "Mandarin Oriental", price: "$550/night" }
    ],
    3: [
      { image: newyork, name: "Park Hyatt Tokyo", price: "$300/night" },
      { image: room3, name: "The Ritz-Carlton Tokyo", price: "$350/night" },
      { image: room2, name: "Aman Tokyo", price: "$400/night" }
    ],
    4: [
      { image: room2, name: "Burj Al Arab", price: "$1000/night" },
      { image: room1, name: "Atlantis The Palm", price: "$800/night" },
      { image: room4, name: "Jumeirah Beach Hotel", price: "$600/night" },
      { image: room5, name: "The Ritz-Carlton Dubai", price: "$700/night" }
    ]
  };

  const displayCard = tabContent[activeTab].slice(0, visibleCard);

  return (
    <div className={styles["tab-container"]}>
      <h1 className={styles["package-heading"]}>Explore Our Hotels</h1>
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

export default HotelSection;
