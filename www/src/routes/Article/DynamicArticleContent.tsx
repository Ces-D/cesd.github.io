import { SolidMarkdown } from "solid-markdown";
import { createResource } from "solid-js";
import remarkGfm from "remark-gfm";

import styles from "./route.module.scss";

export default function DynamicArticleContent({ slug }: { slug: string }) {
  const [article] = createResource(slug, async (slug: string) => {
    const content = await import(`../../articles/${slug}.md?raw`);
    return content.default;
  });

  return (
    <SolidMarkdown
      remarkPlugins={[remarkGfm]}
      class={styles.article_content}
      children={article()}
    />
  );
}
