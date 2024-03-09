import { Show, createSignal } from "solid-js";

import { Main } from "../../components/Container";
import { MetaData } from "../../components/MetaData";
import { Masthead } from "../../components/Masthead";
import { SearchInput } from "../../components/SearchBar";
import { SearchResults } from "../../components/SearchResults";

import styles from "./route.module.scss";

export default function HomeRoute() {
  const [searchQuery, setSearchQuery] = createSignal("");

  return (
    <>
      <MetaData title="Welcome" description="Live and learn" />
      <Masthead />
      <Main>
        <h6 class={styles.inspiration}>Words that tell good things about me.</h6>
        <div class={styles.search_container}>
          <SearchInput autofocus oninput={(e) => setSearchQuery(e.target.value)} />
          <Show when={searchQuery().length > 0}>
            <SearchResults searchAccessor={searchQuery} />
          </Show>
        </div>
      </Main>
    </>
  );
}
