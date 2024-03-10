import { useParams } from "@solidjs/router";
import { lazy, onCleanup, onMount, Suspense, createSignal, Show } from "solid-js";
import { Icon } from "solid-heroicons";
import { magnifyingGlass } from "solid-heroicons/solid";

import { Article, Dialog, Main } from "../../components/Container";
import { MetaData } from "../../components/MetaData";
import { Masthead } from "../../components/Masthead";
import { SearchInput } from "../../components/SearchBar";
import { SearchResults } from "../../components/SearchResults";
import { ArticleNotFoundError } from "../../errors";
import Loading from "../Loading";

import articleMetadata from "../../articles/articlesMetadata.json";

const DynamicArticleContent = lazy(() => import("./DynamicArticleContent"));

import styles from "./route.module.scss";

type TArticleParams = {
  slug: string;
};

export default function ArticleRoute() {
  let modalRef: HTMLDialogElement;

  const params = useParams<TArticleParams>();
  const targetArticle = articleMetadata.find((article) => article.slug === params.slug);

  if (targetArticle === undefined) {
    throw new ArticleNotFoundError(params.slug);
  }

  const [searchQuery, setSearchQuery] = createSignal("");

  const onSearchButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    modalRef.showModal();
  };
  const closeModalOnClick = (e: MouseEvent) => {
    if (e.target === modalRef) {
      e.stopPropagation();
      modalRef.close();
    }
  };

  onMount(() => {
    modalRef.addEventListener("click", closeModalOnClick);
    onCleanup(() => {
      modalRef.removeEventListener("click", closeModalOnClick);
    });
  });

  return (
    <>
      <MetaData title={targetArticle.title} description={targetArticle.description} />
      <Masthead>
        <button class={styles.masthead_btn} onClick={onSearchButtonClick}>
          <Icon path={magnifyingGlass} />
        </button>
      </Masthead>
      <Dialog ref={modalRef!}>
        <form class={styles.dialog_search}>
          <p class={styles.dialog_search_label}>
            Find an interesting article or whatever!
          </p>
          <SearchInput autofocus oninput={(e) => setSearchQuery(e.target.value)} />
          <Show when={searchQuery().length > 0}>
            <SearchResults searchAccessor={searchQuery} />
          </Show>
        </form>
      </Dialog>
      <Main>
        <Article>
          <h1 class={styles.article_heading}>{targetArticle.title}</h1>
          <ul class={styles.article_heading_analytics}>
            <li>
              Published:
              <span>
                {new Date(targetArticle.analytics.published_on).toDateString()}
              </span>
            </li>
            <li>
              Length:<span>{targetArticle.analytics.length_in_words}</span>
            </li>
            <li>
              Reading Time:
              <span>{targetArticle.analytics.reading_time_in_minutes}mins</span>
            </li>
          </ul>
          <Suspense fallback={<Loading />}>
            <DynamicArticleContent slug={params.slug} />
          </Suspense>
        </Article>
      </Main>
    </>
  );
}
