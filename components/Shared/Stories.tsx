import Image from "next/image";
import Link from "next/link";

import { Entry } from "contentful";
import { PostFields } from "../../types/types";
import styles from "./Stories.module.scss";
import { getArticleWordCount, getReadingTime } from "../../utils/utils";

interface StoriesProps {
  posts: Entry<PostFields>[];
}

export const Stories: React.FC<StoriesProps> = ({ posts }) => {
  const renderStories = () => {
    return posts.map((post, idx) => (
      <div className={styles.story} key={idx}>
        <div className={styles.info}>
          <h3>
            <Link href={`/post/${post.fields.slug}`}>{post.fields.title}</Link>
          </h3>
          <p>{post.fields.description}</p>
          <div className={styles.author}>
            <p>
              {post.fields.author.fields.name} in {post.fields.category}
            </p>
            <p>
              Dec 12 -{" "}
              {getReadingTime(getArticleWordCount(post.fields.content))} min
              read
            </p>
          </div>
        </div>
        <div className={styles.img}>
          <Image
            src={`https://${post.fields.featuredImage.fields.file.url}`}
            alt={post.fields.title}
            layout="fill"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Around the World</p>
      <div className={styles.stories}>{renderStories()}</div>
    </div>
  );
};
