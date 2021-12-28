import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Hero } from "./Hero/Hero";
import { NewsletterCard } from "../Shared/NewsletterCard";
import { Share } from "./Share/Share";

import styles from "./Post.module.scss";

import { getReadingTime } from "../../utils/utils";

import { PostFields } from "../../types/types";

interface PostProps {
  post: PostFields;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const { title, author, category, content, description, featuredImage } = post;

  return (
    <div className={styles.post}>
      <Hero
        title={title}
        author={author.fields}
        category={category}
        description={description}
        image={featuredImage.fields.file.url}
        readingTime={getReadingTime(content)}
      />

      <div className={styles.body}>
        <div>
          <Share />
        </div>
        <div className={styles.content}>
          {/* @ts-expect-error -> problems with type definitions of contentful */}
          {documentToReactComponents(content)}
          <NewsletterCard />
        </div>
      </div>
    </div>
  );
};
