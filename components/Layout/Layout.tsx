import { Header } from "../Header/Header";

import styles from "./Layout.module.scss";

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
