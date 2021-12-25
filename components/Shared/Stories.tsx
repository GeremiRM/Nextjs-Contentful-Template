import styles from "./Stories.module.scss";

interface StoriesProps {}

export const Stories: React.FC<StoriesProps> = ({}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>All Stories</p>
      <div className={styles.stories}>
        <div className={styles.story}>
          <div className={styles.story__info}>
            <h3>
              Nearly 200 Great Barrier Reef coral species also live in the deep
              sea
            </h3>
            <p>
              There are more coral species lurking in the deep ocean that
              previously thought.
            </p>
            <div className={styles.story__info__author}>
              <p>Jake Bittle in SCIENCE</p>
              <p>Dec 12 - 5 min read</p>
            </div>
          </div>
          <div className={styles.story__img}></div>
        </div>
        <div className={styles.story}>
          <div className={styles.story__info}>
            <h3>
              Nearly 200 Great Barrier Reef coral species also live in the deep
              sea
            </h3>
            <p>
              There are more coral species lurking in the deep ocean that
              previously thought.
            </p>
            <div className={styles.story__info__author}>
              <p>Jake Bittle in SCIENCE</p>
              <p>Dec 12 - 5 min read</p>
            </div>
          </div>
          <div className={styles.story__img}></div>
        </div>
        <div className={styles.story}>
          <div className={styles.story__info}>
            <h3>
              Nearly 200 Great Barrier Reef coral species also live in the deep
              sea
            </h3>
            <p>
              There are more coral species lurking in the deep ocean that
              previously thought.
            </p>
            <div className={styles.story__info__author}>
              <p>Jake Bittle in SCIENCE</p>
              <p>Dec 12 - 5 min read</p>
            </div>
          </div>
          <div className={styles.story__img}></div>
        </div>
      </div>
    </div>
  );
};
