import Link from "next/link";

import styles from "./Header.module.scss";
import { NavbarMobile } from "./NavbarMobile/NavbarMobile";

export const Header: React.FC<{}> = ({}) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <p className={styles.logo}>Mundana</p>
        </a>
      </Link>
      <NavbarMobile />
    </header>
  );
};
