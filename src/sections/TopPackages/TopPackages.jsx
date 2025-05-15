import React, { useState } from "react";
import parisTrain from "../../assets/paris.png";
import newyorkTrain from "../../assets/newyork.png";
import tokyo1 from "../../assets/tokyo1.jpeg";
import tokyo2 from "../../assets/tokyo2.jpeg";
import tokyo3 from "../../assets/tokyo3.jpeg";
import dubai1 from "../../assets/dubai1.jpeg";
import dubai2 from "../../assets/dubai2.jpeg";
import dubai3 from "../../assets/dubai3.jpeg";
import dubai4 from "../../assets/dubai4.jpeg";
import paris1 from "../../assets/paris1.jpeg";
import paris2 from "../../assets/paris2.jpeg";
import paris3 from "../../assets/paris3.jpeg";
import paris4 from "../../assets/paris4.jpeg";
import newyork1 from "../../assets/newyork1.jpeg";
import newyork2 from "../../assets/newyork2.jpeg";
import newyork3 from "../../assets/newyork3.jpeg";
import newyork4 from "../../assets/newyork4.jpeg";
import styles from "./topPackages.module.css";
import { Link } from "react-router-dom";
const TopPackages = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [visibleCard, setVisibleCard] = useState(4);

  const tabs = [
    { id: 1, label: "Paris" },
    { id: 2, label: "New York" },
    { id: 3, label: "Tokyo" },
    { id: 4, label: "Dubai" },
  ];

  const tabContent = {
    1: [
      { image: paris1, name: "Romantic Paris Getaway", price: "$299" },
      { image: paris2, name: "Luxury Eurostar Package", price: "$349" },
      { image: paris3, name: "Thalys Scenic Tour", price: "$329" },
      { image: paris4, name: "Budget Paris Weekend", price: "$199" },
    ],
    2: [
      { image: newyork1, name: "NYC Express Experience", price: "$450" },
      { image: newyork2, name: "Historic Rail Journey", price: "$320" },
      { image: newyork3, name: "Hudson River Explorer", price: "$180" },
      { image: newyork4, name: "Empire Deluxe Ride", price: "$390" },
    ],
    3: [
      { image: tokyo1, name: "Shinkansen Premium Pass", price: "$410" },
      { image: tokyo2, name: "Bullet Train Adventure", price: "$370" },
      { image: tokyo3, name: "Cultural Tokyo Day Trip", price: "$290" },
    ],
    4: [
      { image: dubai1, name: "Modern Dubai Rail Tour", price: "$60" },
      { image: dubai2, name: "Green Line City Explorer", price: "$50" },
      { image: dubai3, name: "Desert Rail Journey", price: "$120" },
      { image: dubai4, name: "Dubai Tram & Beach Combo", price: "$40" },
      { image: dubai1, name: "Downtown Dubai Special", price: "$55" },
    ],
  };
  const displayCard = tabContent[activeTab].slice(0, visibleCard);

  return (
    <div className={styles["tab-container"]}>
      <h1 className={styles["package-heading"]}>Explore Our Top Packages</h1>
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
   <Link to="/categories">   
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
          </Link>
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

export default TopPackages;
