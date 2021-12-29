import Link from "next/link";

import styles from "./NavbarDesktop.module.scss";

import { CATEGORIES } from "../../../contentful/contentful";

export const NavbarDesktop: React.FC<{}> = ({}) => {
  const renderLinks = () => {
    return CATEGORIES.map((category, idx) => (
      <div className={styles.link} key={idx}>
        <Link href={`/category/${category}`}>{category}</Link>
      </div>
    ));
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.link}>
        <Link href="/">Home</Link>
      </div>
      {renderLinks()}
    </nav>
  );
};
