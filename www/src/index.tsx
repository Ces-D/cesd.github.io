import { ErrorBoundary, lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { MetaProvider } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";

import { route } from "./routes/constants";
import Loading from "./routes/Loading";

import "./styles/font.scss";
import "./styles/palette.scss";
import "./styles/spacing.scss";
import "./styles/resets.scss";

const HomeRoute = lazy(() => import("./routes/Home"));
const ArticleRoute = lazy(() => import("./routes/Article"));
const NotFoundRoute = lazy(() => import("./routes/404"));
const ErrorBoundaryRoute = lazy(() => import("./routes/ErrorBoundary"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <MetaProvider>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={(error) => <ErrorBoundaryRoute error={error} />}>
          <Router>
            <Route path={route.Home} component={HomeRoute} />
            <Route path={route.Article.static} component={ArticleRoute} />
            <Route path={route[404]} component={NotFoundRoute} />
          </Router>
        </ErrorBoundary>
      </Suspense>
    </MetaProvider>
  ),
  root!,
);
