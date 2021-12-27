import { Hero } from "./Hero/Hero";
import { Articles } from "../Shared/Articles";
import { NewsletterCard } from "../Shared/NewsletterCard";
import { Share } from "./Share/Share";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "./Post.module.scss";
import { PostFields } from "../../types/types";

import { getArticleWordCount } from "../../utils/utils";

interface PostProps {
  post: PostFields;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const { title, author, category, content, description, featuredImage } = post;

  const wordCount = getArticleWordCount(content);

  return (
    <div className={styles.post}>
      <Hero
        title={title}
        author={author.fields}
        category={category}
        description={description}
        image={featuredImage.fields.file.url}
        wordCount={wordCount}
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

      {/* <Articles /> */}
    </div>
  );
};
