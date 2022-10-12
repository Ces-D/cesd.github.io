import Link from "next/link"
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";
import Layout from "./Layout"
import type { BlogMeta } from "@/CommandLine/constants";

const components: MDXComponents = {
}

type Props = { children: React.ReactNode } & Pick<BlogMeta, "articles" | "publishDate" | "description" | "title">

const ArticleNavigation = ({ articles }: { articles: Props["articles"] }) => {
  if (!!articles) {
    const next = !!articles.next && articles.next()
    const prev = !!articles.prev && articles.prev()

    return (
      <div className="flex justify-between gap-5 w-full max-w-5xl py-4 m-auto">
        {!!prev && (
          <button className="text-amber-200 p-2 border rounded border-amber-200">
            <Link href={prev.slug}>{prev.title}</Link>
          </button>
        )}
        {!!next && (
          <button className="text-amber-200 p-2 border rounded border-amber-200">
            <Link href={next.slug}>{next.title}</Link>
          </button>
        )}
      </div>
    )
  }
  return null
}

const BlogLayout = (
  { children, title, description, publishDate, articles }: Props
) => {
  return (
    <Layout title={title} description={description} date={publishDate}>
      <MDXProvider components={components}>
        <h1 className="text-amber-200 text-4xl max-w-5xl py-4 text-center">{title}</h1>
        <article className="article">
          {children}
        </article>
        <ArticleNavigation articles={articles} />
      </MDXProvider>
    </Layout>
  )
}

export default BlogLayout
