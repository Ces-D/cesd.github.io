import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { MetaProvider } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";

import { route } from "./routes/constants";

import "./styles/font.scss";
import "./styles/palette.scss";
import "./styles/spacing.scss";
import "./styles/resets.scss";

const HomeRoute = lazy(() => import("./routes/Home"));
const ArticleRoute = lazy(() => import("./routes/Article"));
const NotFoundRoute = lazy(() => import("./routes/404"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <MetaProvider>
      <Router>
        <Route path={route.Home} component={HomeRoute} />
        <Route path={route.Article.static} component={ArticleRoute} />
        <Route path={route[404]} component={NotFoundRoute} />
      </Router>
    </MetaProvider>
  ),
  root!,
);
