import { Accessor, For, Switch, Match, observable, createSignal } from "solid-js";
import { from } from "rxjs";
import Fuse from "fuse.js";

import articleMetadata from "../articles/articlesMetadata.json";
import styles from "./SearchResults.module.scss";
import { route } from "../routes/constants";

export type TSearchResultProps = {
  searchAccessor: Accessor<string>;
};

export const SearchResults = ({ searchAccessor }: TSearchResultProps) => {
  const obsv$ = from(observable(searchAccessor));
  const [results, setResults] = createSignal<Array<{ title: string; slug: string }>>(
    [],
  );
  const fuse = new Fuse(articleMetadata, {
    keys: [
      { name: "title", weight: 0.6 },
      { name: "description", weight: 0.4 },
    ],
  });

  obsv$.subscribe((searchValue) => {
    const r = fuse.search(searchValue);
    setResults(r.map((r) => ({ title: r.item.title, slug: r.item.slug })));
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
