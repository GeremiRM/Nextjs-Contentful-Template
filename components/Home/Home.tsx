import { Entry } from "contentful";
import { PostFields } from "../../types/types";
import { Articles } from "../Shared/Articles";
import { MainArticle } from "../Shared/MainArticle";
import { Popular } from "../Shared/Popular";
import { Stories } from "../Shared/Stories";

import styles from "./Home.module.scss";

interface HomeProps {
  posts: Entry<PostFields>[];
}

export const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <MainArticle post={posts[0].fields} />
      <Articles posts={posts.slice(1, 5)} />
      <div className={styles.columnToRow}>
        <Stories posts={posts.slice(5, 8)} />
        <Popular posts={posts.slice(8)} />
      </div>
    </div>
  );
};
