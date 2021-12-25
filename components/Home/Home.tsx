import { Articles } from "../Shared/Articles";
import { MainArticle } from "../Shared/MainArticle";
import { Popular } from "../Shared/Popular";
import { Stories } from "../Shared/Stories";

import styles from "./Home.module.scss";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <MainArticle />
      <Articles />
      <div className={styles.columnToRow}>
        <Stories />
        <Popular />
      </div>
    </div>
  );
};
