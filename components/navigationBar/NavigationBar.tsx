import React from "react";
import styles from "/styles/navigationBar.module.scss";
const navigationArray = [
  { name: "Bakery", list: ["Bagels", "Buns", "Rolls"] },
  { name: "Fruit and vegetables", list: ["Bagels", "Buns", "Rolls"] },
  { name: "Meat and fish", list: ["Bagels", "Buns", "Rolls"] },
  { name: "Kitchen ", list: ["Bagels", "Buns", "Rolls"] },
  { name: "Special nutrition ", list: ["Bagels", "Buns", "Rolls"] },
  { name: "Baby ", list: ["Bagels", "Buns", "Rolls"] },
  { name: "Pharmacy", list: ["Bagels", "Buns", "Rolls"] },
];
const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      {navigationArray.map((elem, index) => (
        <div className={styles.navigationBar_elem}>
          {elem.name}
          <ul>
            {elem.list.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
