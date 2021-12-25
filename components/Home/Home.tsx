import { Articles } from "../Shared/Articles";
import { MainArticle } from "../Shared/MainArticle";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <MainArticle />
      <Articles />
    </div>
  );
};
