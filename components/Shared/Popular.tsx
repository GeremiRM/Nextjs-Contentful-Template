import Link from "next/link";

import { IPost } from "../../types/types";
import styles from "./Popular.module.scss";

interface PopularProps {
  posts: IPost[];
  title?: string;
}

export const Popular: React.FC<PopularProps> = ({ posts, title }) => {
  const renderArticles = () => {
    return posts.map((post, idx) => (
      <div className={styles.article} key={idx}>
        <div className={styles.idx}>
          <h3>0{idx + 1}</h3>
        </div>
        <div className={styles.info}>
          <p>
            <Link href={`/post/${post.fields.slug}`}>{post.fields.title}</Link>
          </p>
          <div className={styles.author}>
            <p>
              <Link href={`/author/${post.fields.author.fields.slug}`}>
                {post.fields.author.fields.name}
              </Link>{" "}
              in {post.fields.category}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title ?? "Popular"}</p>
      <div className={styles.popular}>{renderArticles()}</div>
    </div>
  );
};
