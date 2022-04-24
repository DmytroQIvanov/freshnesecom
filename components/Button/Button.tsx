import React from "react";
import buttonStyles from "../../styles/Button.module.scss";

type buttonProps = {
  text: string;
  className?: string;
  type?: "green" | "grey";
  position?: "left" | "right";
  absolute: boolean;
};
const Button: React.FC<buttonProps> = ({
  text,
  className,
  type = "green",
  position = "left",
}) => {
  const styles = [buttonStyles, className].join(" ");
  return (
    <button
      className={`${className} ${buttonStyles[type]} ${buttonStyles[position]} `}
    >
      {text}
    </button>
  );
};

export default Button;
