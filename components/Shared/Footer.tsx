import styles from "./Footer.module.scss";

export const Footer: React.FC<{}> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <h4>Mundana</h4>
        <p>Copyright &copy; 2021. All rights reserved.</p>
      </div>
      <div className={styles.author}>
        <p>Made by Geremi Ramos</p>
      </div>
    </footer>
  );
};
