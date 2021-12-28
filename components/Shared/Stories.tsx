import Image from "next/image";
import Link from "next/link";

import styles from "./Stories.module.scss";

import { getReadingTime } from "../../utils/utils";

import { IPost } from "../../types/types";

interface StoriesProps {
  posts: IPost[];
  title?: string;
}

export const Stories: React.FC<StoriesProps> = ({ posts, title }) => {
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
              <Link href={`/author/${post.fields.author.fields.slug}`}>
                {post.fields.author.fields.name}
              </Link>{" "}
              in {post.fields.category}
            </p>
            <p>Dec 12 - {getReadingTime(post.fields.content)} min read</p>
          </div>
        </div>
        <div className={styles.img}>
          <Link href={`/post/${post.fields.slug}`}>
            <a>
              <Image
                src={`https:${post.fields.featuredImage.fields.file.url}`}
                alt={post.fields.title}
                layout="fill"
              />
            </a>
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title ?? "More Stories"}</p>
      <div className={styles.stories}>{renderStories()}</div>
    </div>
  );
};
