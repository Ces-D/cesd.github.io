import { useParams } from "@solidjs/router";
import {
  lazy,
  onCleanup,
  onMount,
  Suspense,
  createSignal,
  createDeferred,
} from "solid-js";
import { Icon } from "solid-heroicons";
import { magnifyingGlass } from "solid-heroicons/solid";

import { Article, Dialog, Main } from "../../components/Container";
import { MetaData } from "../../components/MetaData";
import { Masthead } from "../../components/Masthead";
import { SearchInput } from "../../components/SearchBar";
import { SearchResults } from "../../components/SearchResults";

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
    throw new Error("Article not found");
  }

  const [searchQuery, setSearchQuery] = createSignal("");
  const deferredSearchValue = createDeferred(() => searchQuery(), {
    timeoutMs: 750,
  });

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
        <button onClick={onSearchButtonClick}>
          <Icon path={magnifyingGlass} />
        </button>
      </Masthead>
      <Dialog ref={modalRef!}>
        <form class={styles.dialog_search}>
          <p class={styles.dialog_search_label}>
            Find an interesting article or whatever!
          </p>
          <SearchInput onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
        <SearchResults searchQuery={deferredSearchValue()} />
      </Dialog>
      <Main>
        <Article>
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicArticleContent slug={params.slug} />
          </Suspense>
        </Article>
      </Main>
    </>
  );
}
