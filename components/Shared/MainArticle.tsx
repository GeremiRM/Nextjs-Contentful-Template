import Image from "next/image";
import Link from "next/link";
import { PostFields } from "../../types/types";

import styles from "./MainArticle.module.scss";

interface MainArticleProps {
  post: PostFields;
}

export const MainArticle: React.FC<MainArticleProps> = ({ post }) => {
  const { title, description, slug, featuredImage } = post;

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2 className={styles.info__title}>{title}</h2>
        <p className={styles.info__desc}>{description}</p>
        <button className={styles.info__btn}>
          <Link href={`/post/${slug}`}>Read More</Link>
        </button>
      </div>
      <div className={styles.cover}>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt={title}
          layout="fill"
          className={styles.cover__img}
        />
      </div>
    </div>
  );
};
