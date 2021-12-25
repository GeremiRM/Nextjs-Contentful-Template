interface MainArticleProps {}

import styles from "./MainArticle.module.scss";

export const MainArticle: React.FC<MainArticleProps> = ({}) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2 className={styles.info__title}>
          Mundana is an HTML Bootstrap Template for Professional Blogging
        </h2>
        <p className={styles.info__desc}>
          Beautifully crafted with the latest technologies, SASS & Bootstrap
          4.1.3, Mundana is the perfect design for your professional blog.
          Homepage, post article and category layouts available.
        </p>
        <button className={styles.info__btn}>Read More</button>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};
