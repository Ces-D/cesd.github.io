import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";


const components: MDXComponents = {
}


const BlogLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <MDXProvider components={components}>
      <article
        className="article">
        <h1>{title}</h1>
        {children}
      </article>
    </MDXProvider>
  )
}

export default BlogLayout