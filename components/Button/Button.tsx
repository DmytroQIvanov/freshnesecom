import React from "react";
import styles from "../../styles/Button.module.scss";

type buttonProps = {
  text: string;
};
const Button: React.FC<buttonProps> = ({ text }) => {
  return <button className={styles.greenBtn}>{text}</button>;
};

export default Button;
