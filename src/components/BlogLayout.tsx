import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
}

const BlogLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <MDXProvider components={components}>
      <article className="prose max-w-4xl m-auto prose-invert prose-h1:text-yellow-200 prose-p:font-open-sans prose-headings:font-open-sans prose-li:font-open-sans prose-ul:font-open-sans prose-strong:font-open-sans prose-pre:font-code">
        <h1>{title}</h1>
        {children}
      </article>
    </MDXProvider>
  )
}

export default BlogLayout