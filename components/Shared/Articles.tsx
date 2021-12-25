import styles from "./Articles.module.scss";

interface ArticlesProps {}

export const Articles: React.FC<ArticlesProps> = ({}) => {
  return (
    <div className={styles.articles}>
      <div className={styles.main}>
        <div className={styles.main__img}></div>
        <div className={styles.main__info}>
          <h3>Brain Stimulation Relieves Depression Symptoms</h3>
          <p>
            Researchers have found an effective target in the brain for
            electrical stimulation to improve mood in people suffering from
            depression.
          </p>
          <div className={styles.main__info__author}>
            <p>Favid Rick</p>
            <p>Dec 12 - 5 min read</p>
          </div>
        </div>
      </div>

      <div className={styles.side}>
        <div className={styles.side__article}>
          <div className={styles.side__article__img}></div>
          <div className={styles.side__article__info}>
            <p>Nasas IceSat space laser makes height maps of Earth</p>
            <div className={styles.side__article__info__author}>
              <p>Jake Bittle in LOVE/HATE</p>
              <p>Dec 12 - 5 min read</p>
            </div>
          </div>
        </div>
        <div className={styles.side__article}>
          <div className={styles.side__article__img}></div>
          <div className={styles.side__article__info}>
            <p>Nasas IceSat space laser makes height maps of Earth</p>
            <div className={styles.side__article__info__author}>
              <p>Jake Bittle in LOVE/HATE</p>
              <p>Dec 12 - 5 min read</p>
            </div>
          </div>
        </div>
        <div className={styles.side__article}>
          <div className={styles.side__article__img}></div>
          <div className={styles.side__article__info}>
            <p>Nasas IceSat space laser makes height maps of Earth</p>
            <div className={styles.side__article__info__author}>
              <p>Jake Bittle in LOVE/HATE</p>
              <p>Dec 12 - 5 min read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
