import React from "react";
import styles from "../../styles/ProductBlockContainer.module.scss";
import AsideLinks from "../AsideLinks/AsideLinks";
import ProductBlock from "../productBlock/ProductBlock";
import image from "../../public/Bread.jpg";

const ProductBlockContainer = () => {
  return (
    <div className={styles.productBlockContainer}>
      <AsideLinks
        categoryName={"Best selling products"}
        links={[
          { elem: "Kitchen", href: "#" },
          { elem: "Meat and fish", href: "#" },
          { elem: "Special nutrition", href: "#" },
          { elem: "Pharmacy", href: "#" },
          { elem: "Baby", href: "#" },
        ]}
        button={{ text: "More products", link: "#" }}
      />
      <div className={styles.productBlockContainer__products}>
        <div className={styles.productBlockContainer__product}>
          <ProductBlock
            title={"Pizza"}
            smallDescription={"smthsmtj"}
            price={300}
            image={image}
          />
        </div>
        <div className={styles.productBlockContainer__product}>
          <ProductBlock
            title={"Pizza"}
            smallDescription={"smthsmtj"}
            price={300}
            image={image}
          />
        </div>
        <div className={styles.productBlockContainer__product}>
          <ProductBlock
            title={"Pizza"}
            smallDescription={"smthsmtj"}
            price={300}
            image={image}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductBlockContainer;
