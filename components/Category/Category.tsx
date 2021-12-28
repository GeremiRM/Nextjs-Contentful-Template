import { IPost } from "../../types/types";
import { MainArticle } from "../Shared/MainArticle";
import { Popular } from "../Shared/Popular";
import { Stories } from "../Shared/Stories";

import styles from "./Category.module.scss";

interface CategoryProps {
  posts: IPost[];
  category: string;
}

export const Category: React.FC<CategoryProps> = ({ posts, category }) => {
  return (
    <div>
      <MainArticle post={posts[0].fields} />
      <div className={styles.columnToRow}>
        <Stories posts={posts.slice(1, 5)} title="Latest" />
        <Popular posts={posts.slice(5, 9)} title={`Popular in ${category}`} />
      </div>
    </div>
  );
};
