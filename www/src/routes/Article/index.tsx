import { useParams } from "@solidjs/router";
import { lazy, onCleanup, onMount, Suspense } from "solid-js";

import { Article, Dialog, Main } from "../../components/Container";
import { MetaData } from "../../components/MetaData";
import { Masthead } from "../../components/Masthead";
import { SearchInput } from "../../components/SearchBar";

import articleMetadata from "../../articles/articlesMetadata.json";

const DynamicArticleContent = lazy(() => import("./DynamicArticleContent"));

import styles from "./route.module.scss";

type TArticleParams = {
  slug: string;
};

export default function ArticleRoute() {
  let readonlySearchInput: HTMLInputElement;
  let modalRef: HTMLDialogElement;

  const params = useParams<TArticleParams>();
  const targetArticle = articleMetadata.find(
    (article) => article.slug === params.slug,
  );

  if (targetArticle === undefined) {
    throw new Error("Article not found");
  }

  const onSearchInputButtonClick = (e: MouseEvent) => {
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
    readonlySearchInput.addEventListener("click", onSearchInputButtonClick);
    modalRef.addEventListener("click", closeModalOnClick);
    onCleanup(() => {
      readonlySearchInput.removeEventListener(
        "click",
        onSearchInputButtonClick,
      );
      modalRef.removeEventListener("click", closeModalOnClick);
    });
  });

  return (
    <>
      <MetaData
        title={targetArticle.title}
        description={targetArticle.description}
      />
      <Masthead>
        <SearchInput readonly ref={readonlySearchInput!} />
      </Masthead>
      <Dialog ref={modalRef!}>
        <form class={styles.dialog_search}>
          <p class={styles.dialog_search_label}>
            Find an interesting article or whatever!
          </p>
          <SearchInput autofocus />
        </form>
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
