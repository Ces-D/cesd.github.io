import { lazy } from "solid-js";
import { ArticleNotFoundError } from "../../errors";

const GenericError = lazy(() => import("./GenericError"));
const NotFoundArticle = lazy(() => import("./NotFoundArticle"));

export default function ErrorBoundaryRoute({ error }: { error: Error }) {
  if (error instanceof ArticleNotFoundError) {
    return <NotFoundArticle error={error} />;
  }
  return <GenericError error={error} />;
}
