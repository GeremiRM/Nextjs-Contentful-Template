import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.scss";

import { AuthorFields } from "../../../types/types";

interface HeroProps {
  title: string;
  category: string;
  description: string;
  author: AuthorFields;
  image: string;
  readingTime: number;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  category,
  description,
  author,
  image,
  readingTime,
}) => {
  const { avatar, name, slug } = author;

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.content__tag}>{category}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.author}>
          <div className={styles.author__img}>
            <Image
              src={`https://${avatar.fields.file.url}`}
              layout="fill"
              alt={`${name} avatar`}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.info__name}>
              <Link href={`/author/${slug}`}>{name}</Link>
            </p>
            <p>A few hours ago - Approx. {readingTime} min read</p>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <Image
          src={`https://${image}`}
          alt={`${title} featured image`}
          layout="fill"
        />
      </div>
    </div>
  );
};
