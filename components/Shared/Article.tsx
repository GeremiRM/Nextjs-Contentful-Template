import Link from "next/link";
import Image from "next/image";

import { AuthorFields } from "../../types/types";

import styles from "./Article.module.scss";
import { getReadingTime } from "../../utils/utils";

interface ArticleProps {
  image: string;
  title: string;
  author: AuthorFields;
  category: string;
  readingTime: number;
  slug: string;
}

export const Article: React.FC<ArticleProps> = ({
  title,
  image,
  author,
  category,
  readingTime,
  slug,
}) => {
  return (
    <div className={styles.article}>
      <div className={styles.img}>
        <Link href={`/post/${slug}`}>
          <a>
            <Image src={`https://${image}`} layout="fill" alt={title} />
          </a>
        </Link>
      </div>
      <div className={styles.info}>
        <Link href={`/post/${slug}`}>
          <a>
            <p>{title}</p>
          </a>
        </Link>
        <div className={styles.author}>
          <p>
            <Link href={`/author/${author.slug}`}>{author.name}</Link> in{" "}
            {category}
          </p>
          <p>Dec 12 - {readingTime} min read</p>
        </div>
      </div>
    </div>
  );
};
