import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import styles from "./Share.module.scss";

export const Share: React.FC<{}> = ({}) => {
  return (
    <div className={styles.share}>
      <p className={styles.share__title}>Share this</p>
      <div className={styles.icons}>
        <div className={`${styles.icon} ${styles.facebook}`}>
          <FaFacebookF />
        </div>
        <div className={`${styles.icon} ${styles.twitter}`}>
          <FaTwitter />
        </div>
        <div className={`${styles.icon} ${styles.instagram}`}>
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};
