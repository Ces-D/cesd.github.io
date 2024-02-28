import { Main } from "../../components/Container";
import { MetaData } from "../../components/MetaData";
import { Masthead } from "../../components/Masthead";
import { SearchInput } from "../../components/SearchBar";
import styles from "./route.module.scss";

// TODO: finish the Search Bar
export default function HomeRoute() {
  return (
    <>
      <MetaData title="Welcome" description="Live and learn" />
      <Masthead />
      <Main>
        <h6 class={styles.inspiration}>
          Words that tell good things about me.
        </h6>
        <div class={styles.search_container}>
          <SearchInput />
        </div>
      </Main>
    </>
  );
}
