import { Article, Main } from "../../components/Container";
import { Masthead } from "../../components/Masthead";
import { ArticleNotFoundError } from "../../errors";

export default function NotFoundArticle({ error }: { error: ArticleNotFoundError }) {
  return (
    <>
      <Masthead></Masthead>
      <Main>
        <Article>
          <h1>Article not found</h1>
          <p>Sorry, we couldn't find the article you were looking for.</p>
          <p>{error._slug}</p>

          <div>Here are some suggestions</div>
        </Article>
      </Main>
    </>
  );
}
