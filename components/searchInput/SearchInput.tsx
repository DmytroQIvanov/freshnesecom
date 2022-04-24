import React, { useState } from "react";
import styles from "../../styles/searchInput.module.scss";
import searchArrow from "/public/Vector.svg";
import searchIcon from "/public/search.svg";
import Image from "next/image";

const searchCategories = [
  "All Categories",
  "Bakery",
  "Fruit and Vegetables",
  "Meat and Fish",
];

const SearchInput = () => {
  const [chosenCategory, setChosenCategory] = useState(0);
  const [hidden, setHidden] = useState(true);

  const changeVisibility = (visibly?: boolean) => {
    setHidden(visibly || !hidden);
  };
  const changeCategory = (index: number) => {
    setChosenCategory(index);
  };
  const searchCategoriesItems = searchCategories.map((elem, index) => (
    <li onClick={() => changeCategory(index)} key={index.toString()}>
      {elem}
    </li>
  ));
  return (
    <div className={styles.searchInput}>
      <div className={styles.searchInputContainer}>
        <span
          className={`${styles.searchInputContainer_selectedCategory} ${
            !hidden && styles.searchInputContainer_selectedCategory_active
          }`}
          onClick={() => changeVisibility()}
        >
          {searchCategories[chosenCategory]}
          <div className={styles.searchInputContainer_selectedCategory_img}>
            <Image src={searchArrow} />
          </div>
        </span>
        <input placeholder={"Search Products, categories..."} />
        <div className={styles.searchInputContainer_searchIcon}>
          <Image src={searchIcon} width={"20px"} height={"20px"} />
        </div>
      </div>
      <div className={styles.searchInput_list}>
        <ul className={`${hidden && styles.searchInput_listHidden}`}>
          {searchCategoriesItems}
        </ul>
      </div>
    </div>
  );
};

export default SearchInput;
