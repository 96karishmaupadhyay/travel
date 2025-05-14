import React, { useState } from "react";
import train1 from "../../assets/train1.jpeg";
import train2 from "../../assets/train2.jpeg";
import train3 from "../../assets/train3.jpeg";
import train4 from "../../assets/train4.jpeg";
import styles from './trainSection.module.css';
const TrainSection = () => {
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
      { image: train1, name: "TGV Duplex", price: "$60" },
      { image:train2, name: "Eurostar", price: "$75" },
      { image: train3, name: "Thalys", price: "$70" },
      { image: train4, name: "Ouigo", price: "$50" }
    ],
    2: [
      { image: train1, name: "Amtrak Acela", price: "$120" },
      { image: train3, name: "Metro-North", price: "$40" },
      { image: train1, name: "Amtrak Empire Service", price: "$100" }
    ],
    3: [
      { image: train2, name: "Shinkansen N700", price: "$110" },
      { image: train3, name: "JR East E5", price: "$95" },
      { image: train4, name: "Tokaido Line", price: "$85" },
      { image: train1, name: "Tokaido Line", price: "$85" }
    ],
    4: [
      { image: train1, name: "Dubai Metro Red Line", price: "$10" },
      { image: train3, name: "Dubai Metro Green Line", price: "$8" },
      { image: train4, name: "Dubai Tram", price: "$6" }
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

export default TrainSection;
