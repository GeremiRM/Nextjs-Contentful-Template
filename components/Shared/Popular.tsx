import styles from "./Popular.module.scss";

interface PopularProps {}

export const Popular: React.FC<PopularProps> = ({}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Popular</p>
      <div className={styles.popular}>
        <div className={styles.article}>
          <div className={styles.article__index}>
            <h3>01</h3>
          </div>
          <div className={styles.article__info}>
            <p>Did Supernovae Kill Off Large Ocean Animals?</p>
            <div className={styles.article__info__author}>
              <p>Jake Bittle in SCIENCE</p>
            </div>
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.article__index}>
            <h3>02</h3>
          </div>
          <div className={styles.article__info}>
            <p>Humans Reversing Climate Clock: 50 Million Years</p>
            <div className={styles.article__info__author}>
              <p>Jake Bittle in SCIENCE</p>
            </div>
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.article__index}>
            <h3>03</h3>
          </div>
          <div className={styles.article__info}>
            <p>Unprecedented Views of the Birth of Planets</p>
            <div className={styles.article__info__author}>
              <p>Jake Bittle in SCIENCE</p>
            </div>
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.article__index}>
            <h3>04</h3>
          </div>
          <div className={styles.article__info}>
            <p>
              Effective New Target for Mood-Boosting Brain Stimulation Found
            </p>
            <div className={styles.article__info__author}>
              <p>Jake Bittle in SCIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
