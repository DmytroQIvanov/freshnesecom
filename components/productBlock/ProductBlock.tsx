import React from "react";
import styles from "../../styles/ProductBlock.module.scss";
import Image from "next/image";
import Button from "../Button/Button";

interface ProductBlockI {
  title: string;
  smallDescription: string;
  price: number;
  image?: any;
}
const ProductBlock: React.FC<ProductBlockI> = ({
  price,
  smallDescription,
  image,
  title,
}) => {
  return (
    <article className={styles.productBlock}>
      <div className={styles.productBlock__img}>
        <Image src={image} height={"400px"} />
      </div>
      <header className={styles.productBlock__title}>{title}</header>
      <p className={styles.productBlock__description}>{smallDescription}</p>
      <span className={styles.productBlock__price}>{price} USD</span>
      <Button position={"right"} text={"Buy now"} />
    </article>
  );
};

export default ProductBlock;
