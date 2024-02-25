import { Main } from "../components/Container";
import { MetaData } from "../components/MetaData";

export default function HomeRoute() {
  return (
    <>
      <MetaData title="Welcome" description="Live and learn" />
      <Main>
        <nav>
          <h3>Cesar Diaz</h3>
          <p>Articles</p>
        </nav>
        <section>Words that tell good things about me.</section>
        <section>
          <label>
            <p>This is the label for the Searchbar</p>
            <input />
          </label>
        </section>
      </Main>
    </>
  );
}
