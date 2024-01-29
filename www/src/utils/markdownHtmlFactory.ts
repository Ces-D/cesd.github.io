import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'

export const markdownHtmlFactory = async (markdown: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, { defaultLang: 'js' })
    .use(rehypeStringify)
    .process(markdown)

  return file.value
}
