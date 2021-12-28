import Image from "next/image";
import Link from "next/link";

import styles from "./Post.module.scss";

interface PostProps {
  title: string;
  featuredImage: string;
  description: string;
  slug: string;
  readingTime: number;
}

export const Post: React.FC<PostProps> = ({
  description,
  featuredImage,
  readingTime,
  slug,
  title,
}) => {
  return (
    <div className={styles.post}>
      <p className={styles.post__time}>{readingTime} min read</p>
      <h2 className={styles.info__title}>
        <Link href={`/post/${slug}`}>{title}</Link>
      </h2>
      <div className={styles.img}>
        <Link href={`/post/${slug}`}>
          <a>
            <Image src={`https:${featuredImage}`} alt={title} layout="fill" />
          </a>
        </Link>
      </div>
      <p className={styles.post__description}>{description}</p>
      <div className={styles.btn}>
        <Link href={`/post/${slug}`}>Read More</Link>
      </div>
    </div>
  );
};
