import React, { useState } from "react";
import flight1 from "../../assets/flight1.jpeg"
import flight2 from "../../assets/flight2.jpeg"
import flight3 from "../../assets/flight3.jpeg"
import flight4 from "../../assets/flight4.jpeg"
import flight5 from "../../assets/flight5.jpeg"
import styles from "./flightSection.module.css";
const FlightSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [visibleCard, setVisibleCard] = useState(4);


  const tabs = [
    { id: 1, label: "Paris Flights" },
    { id: 2, label: "New York Flights" },
    { id: 3, label: "Tokyo Flights" },
    { id: 4, label: "Dubai Flights" }
  ];

  const tabContent = {
    1: [
      { image: flight1, name: "Air France", price: "$550", time: "8h 45m", from: "Delhi", to: "Paris" },
      { image: flight5, name: "Emirates", price: "$620", time: "9h 10m", from: "Mumbai", to: "Paris" },
      { image: flight3, name: "Lufthansa", price: "$590", time: "8h 30m", from: "Bangalore", to: "Paris" }
    ],
    2: [
      { image: flight4, name: "Delta names", price: "$780", time: "15h 20m", from: "Delhi", to: "New York" },
      { image: flight3, name: "Air India", price: "$720", time: "14h 50m", from: "Mumbai", to: "New York" },
      { image: flight1, name: "United names", price: "$790", time: "15h 10m", from: "Hyderabad", to: "New York" }
    ],
    3: [
      { image: flight2, name: "Japan names", price: "$620", time: "7h 55m", from: "Delhi", to: "Tokyo" },
      { image: flight3, name: "ANA", price: "$640", time: "8h 10m", from: "Bangalore", to: "Tokyo" },
      { image: flight5, name: "Singapore names", price: "$680", time: "9h", from: "Chennai", to: "Tokyo" }
    ],
    4: [
      { image: flight5, name: "Emirates", price: "$400", time: "3h 30m", from: "Delhi", to: "Dubai" },
      { image: flight3, name: "IndiGo", price: "$320", time: "3h 45m", from: "Mumbai", to: "Dubai" },
      { image: flight2, name: "Air India Express", price: "$350", time: "4h", from: "Kochi", to: "Dubai" }
    ]
  };


  const displayCard = tabContent[activeTab].slice(0, visibleCard);

  return (
    <div className={styles["tab-container"]}>
      <h1 className={styles["package-heading"]}>Explore Our Flights</h1>
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
             <div className={styles["item-content"]}>
              <p className={styles["tab-item-name"]}>{item.from} to {item.to}</p>
              <p className={styles["tab-item-price"]}>{item.time}</p>
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

export default FlightSection;
