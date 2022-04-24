import React from "react";
import styles from "../../styles/ProductBlock.module.scss";
import Image from "next/image";
import Button from "../Button/Button";

interface ProductBlockI {
  title: string;
  smallDescription: string;
  price: number;
  image?: string;
}
const ProductBlock: React.FC<ProductBlockI> = ({
  price,
  smallDescription,
  image,
  title,
}) => {
  return (
    <article className={styles.productBlock}>
      {/*<Image src={image} />*/}
      <header className={styles.productBlock__title}>{title}</header>
      <p>{smallDescription}</p>
      <span>{price} USD</span>
      <Button text={"Buy now"} />
    </article>
  );
};

export default ProductBlock;
