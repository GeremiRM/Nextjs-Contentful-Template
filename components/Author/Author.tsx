import Image from "next/image";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Author.module.scss";

import { IAuthor, IPost } from "../../types/types";
import { Post } from "./Post";
import { getReadingTime } from "../../utils/utils";

interface AuthorProps {
  author: IAuthor;
  posts: IPost[];
}

export const Author: React.FC<AuthorProps> = ({ author, posts }) => {
  const { avatar, name, bio } = author.fields;

  const renderPosts = () => {
    return posts.map((post, idx) => (
      <Post
        title={post.fields.title}
        description={post.fields.description}
        slug={post.fields.slug}
        featuredImage={post.fields.featuredImage.fields.file.url}
        readingTime={getReadingTime(post.fields.content)}
        key={idx}
      />
    ));
  };

  return (
    <div className={styles.author}>
      <div className={styles.title}>
        <h2>{name} posts</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.posts}>{renderPosts()}</div>
        <div className={styles.info}>
          <div className={styles.img}>
            <Image
              src={`https:${avatar.fields.file.url}`}
              layout="fill"
              alt={name}
            />
          </div>
          <p className={styles.info__name}>{name}</p>
          <p className={styles.info__bio}>{bio}</p>
          <div className={styles.icons}>
            <div className={`${styles.icon} ${styles.facebook}`}>
              <FaFacebookF />
            </div>
            <div className={`${styles.icon} ${styles.twitter}`}>
              <FaTwitter />
            </div>
            <div className={`${styles.icon} ${styles.instagram}`}>
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
