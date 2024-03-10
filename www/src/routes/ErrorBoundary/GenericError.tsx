import { Main } from "../../components/Container";

export default function GenericError({ error }: { error: Error }) {
  return (
    <Main>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </Main>
  );
}
