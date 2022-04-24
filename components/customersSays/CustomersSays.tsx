import React from "react";
import styles from "../../styles/customersSays.module.scss";
import avatar from "../../public/avatar.jpg";
import Image from "next/image";

const CustomersSaysArray = [
  {
    name: "Name and Surname",
    description:
      "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing text here",
    avatar: avatar,
  },
  {
    name: "Name and Surname",
    description:
      "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing text here",
    avatar: avatar,
  },
  {
    name: "Name and Surname",
    description:
      "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing text here",
    avatar: avatar,
  },
  {
    name: "Name and Surname",
    description:
      "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing text here",
    avatar: avatar,
  },
];

const CustomersSays = () => {
  return (
    <div className={styles.customersSays}>
      <h1 className={styles.customersSays__title}>Our customers says</h1>
      <div className={styles.customersSays__container}>
        {CustomersSaysArray.map((elem) => (
          <div className={styles.customersSays__containerBlock}>
            <div className={styles.customersSays__containerBlockDescription}>
              &quot; {elem.description} &quot;
            </div>
            <h2 className={styles.customersSays__containerBlockName}>
              {elem.name}
            </h2>
            <div className={styles.customersSays__containerBlockAvatar}>
              <Image src={elem.avatar} width={90} height={90} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersSays;
