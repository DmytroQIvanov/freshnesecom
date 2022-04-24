import React from "react";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "../../styles/AsideLinks.module.scss";

type asideLinks = {
  categoryName: string;
  links: { elem: string; href: string }[];
  button: { text: string; link: string };
};

const AsideLinks: React.FC<asideLinks> = (params) => {
  return (
    <div className={styles.asideLinks}>
      <p className={styles.asideLinks__categoryName}>{params.categoryName}</p>
      <div>
        {params.links.map((link) => (
          <span className={styles.asideLinks__link}>
            <Link href={link.href}>{link.elem}</Link>
          </span>
        ))}
      </div>

      <Button
        className={styles.asideLinks__button}
        type={"grey"}
        text={params.button.text}
      />
    </div>
  );
};

export default AsideLinks;
