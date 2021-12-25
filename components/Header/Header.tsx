import Link from "next/link";

import styles from "./Header.module.scss";

export const Header: React.FC<{}> = ({}) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <p className={styles.logo}>Mundana</p>
        </a>
      </Link>
    </header>
  );
};
