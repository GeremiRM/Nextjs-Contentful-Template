import Link from "next/link";

import styles from "./Header.module.scss";
import { NavbarDesktop } from "./NavbarDesktop/NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile/NavbarMobile";

export const Header: React.FC<{}> = ({}) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <p className={styles.logo}>Mundana</p>
        </a>
      </Link>
      <div className={styles.mobile}>
        <NavbarMobile />
      </div>
      <div className={styles.desktop}>
        <NavbarDesktop />
      </div>
    </header>
  );
};
