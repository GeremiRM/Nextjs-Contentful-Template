import Image from "next/image";
import Link from "next/link";

import { Article } from "./Article";

import styles from "./Articles.module.scss";

import { getReadingTime } from "../../utils/utils";

import { IPost } from "../../types/types";

interface ArticlesProps {
  posts: IPost[];
}

export const Articles: React.FC<ArticlesProps> = ({ posts }) => {
  const { title, featuredImage, description, author, slug } = posts[0].fields;

  const renderSideArticles = () => {
    return posts
      .slice(1)
      .map((post, idx) => (
        <Article
          title={post.fields.title}
          author={post.fields.author.fields}
          category={post.fields.category}
          image={post.fields.featuredImage.fields.file.url}
          readingTime={getReadingTime(post.fields.content)}
          key={idx}
          slug={post.fields.slug}
        />
      ));
  };

  return (
    <div className={styles.articles}>
      <div className={styles.main}>
        <div className={styles.img}>
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                src={`https://${featuredImage.fields.file.url}`}
                alt={title}
                layout="fill"
              />
            </a>
          </Link>
        </div>
        <div className={styles.info}>
          <h3>
            <Link href={`/post/${slug}`}>{title}</Link>
          </h3>
          <p>{description}</p>
          <div className={styles.author}>
            <Link href={`/author/${author.fields.slug}`}>
              <a>
                <p>{author.fields.name}</p>
              </a>
            </Link>
            <p>Dec 12 - 5 min read</p>
          </div>
        </div>
      </div>

      <div className={styles.side}>{renderSideArticles()}</div>
    </div>
  );
};
