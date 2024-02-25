import { useParams } from "@solidjs/router";

type TArticleParams = {
  slug: string;
};

export default function ArticleRoute() {
  const params = useParams<TArticleParams>();

  return (
    <div>
      <div>Article Page: {params.slug}</div>
    </div>
  );
}
