import { Author } from "../../../types/types";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { getReadingTime } from "../../../utils/utils";

interface HeroProps {
  title: string;
  category: string;
  description: string;
  author: Author;
  image: string;
  wordCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  category,
  description,
  author,
  image,
  wordCount,
}) => {
  const { avatar, name, slug } = author;

  const readingTime = getReadingTime(
    title.length + description.length + wordCount
  );

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
            <p className={styles.info__name}>{name}</p>
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
