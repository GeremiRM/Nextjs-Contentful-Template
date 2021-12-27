import Link from "next/link";
import Image from "next/image";

import { Author } from "../../types/types";

import styles from "./Article.module.scss";
import { getReadingTime } from "../../utils/utils";

interface ArticleProps {
  image: string;
  title: string;
  author: Author;
  category: string;
  wordsCount: number;
  slug: string;
}

export const Article: React.FC<ArticleProps> = ({
  title,
  image,
  author,
  category,
  wordsCount,
  slug,
}) => {
  return (
    <div className={styles.article}>
      <div className={styles.img}>
        <Image src={`https://${image}`} layout="fill" alt={title} />
      </div>
      <div className={styles.info}>
        <Link href={`/post/${slug}`}>
          <a>
            <p>{title}</p>
          </a>
        </Link>
        <div className={styles.author}>
          <p>
            {author.name} in {category}
          </p>
          <p>Dec 12 - {getReadingTime(wordsCount)} min read</p>
        </div>
      </div>
    </div>
  );
};
