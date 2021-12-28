import { useState } from "react";
import Link from "next/link";

import { CATEGORIES } from "../../../contentful/contentful";

import styles from "./NavbarMobile.module.scss";

import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarMobile: React.FC<{}> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderLinks = () => {
    return CATEGORIES.map((category, idx) => (
      <div className={styles.link} key={idx} onClick={handleClick}>
        <Link href={`/category/${category}`}>{category}</Link>
      </div>
    ));
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.btn} onClick={handleClick}>
        <GiHamburgerMenu />
      </div>
      <div
        className={`${styles.navLinks} ${
          open ? styles.navLinks__open : styles.navLinks__closed
        }`}
      >
        {" "}
        <div className={styles.link} onClick={handleClick}>
          <Link href={`/`}>Home</Link>
        </div>
        {renderLinks()}
      </div>
    </nav>
  );
};
