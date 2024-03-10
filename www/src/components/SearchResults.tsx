import { Accessor, For, Switch, Match, observable, createSignal } from "solid-js";
import { from } from "rxjs";

import articleMetadata from "../articles/articlesMetadata.json";
import styles from "./SearchResults.module.scss";
import { route } from "../routes/constants";

const normalize = (txt: string) => txt.trim().toLowerCase();

export type TSearchResultProps = {
  searchAccessor: Accessor<string>;
};

export const SearchResults = ({ searchAccessor }: TSearchResultProps) => {
  const obsv$ = from(observable(searchAccessor));
  const [results, setResults] = createSignal<Array<{ title: string; slug: string }>>(
    [],
  );

  obsv$.subscribe((searchValue) => {
    const r = articleMetadata
      .filter((article) => normalize(article.title).includes(normalize(searchValue)))
      .map((r) => ({ title: r.title, slug: r.slug }));
    setResults(r);
  });

  return (
    <ul class={styles.results}>
      <Switch>
        <Match when={results().length === 0}>
          <li class={styles.results_item}>Nothing Found</li>
        </Match>
        <Match when={results().length > 0}>
          <For each={results()}>
            {(result) => (
              <li class={styles.results_item}>
                <a href={route.Article.dynamic(result.slug)}>{result.title}</a>
              </li>
            )}
          </For>
        </Match>
      </Switch>
    </ul>
  );
};
