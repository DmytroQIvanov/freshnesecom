import React from "react";
import styles from "../../styles/header.module.scss";
import SearchInput from "../searchInput/SearchInput";
import user from "/public/user.svg";
import basket from "/public/basket.svg";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import { t } from "i18next";

const Header = () => {
  const { t, i18n } = useTranslation("header");
  // const { t } = useTranslation("header", {
  // keyPrefix: "very.deeply.nested",
  // });
  const text = t("header.chatWithUs"); // "here"

  const router = useRouter();

  const { locale, locales, defaultLocale } = router;

  return (
    <header className={styles.header}>
      <div className={styles.header_nav}>
        <div className={styles.header_navLeft}>
          {/*<Trans i18nKey="header">header</Trans>*/}
          {t("chatWithUs")}
          {t("title")}
          <span className={styles.header_navGreen}></span>
          <span>+420 300 772 323</span>
          <span>info@freshnesecom.com</span>
        </div>

        <div className={styles.header_navRight}>
          <span>{locale}</span>
          <span>Blog</span>
          <span>About us</span>
          <span>Careers</span>
        </div>
      </div>
      <div className={styles.header_main}>
        <div className={styles.header_mainTitle}>Freshnesecom</div>
        <SearchInput />
        <div className={styles.header_mainRight}>
          <div>
            <Image src={user} />
          </div>
          <div>
            <Image src={basket} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
