import { generateHelpCommandResponse } from "../utils/generateHelpCommandResponse";
import type { Command, HelpHandlerResponse, TextHandlerResponse } from "../definitions";
import { BLOG_POSTS_META } from "../constants";

export type BlogCommand = Command<HelpHandlerResponse | TextHandlerResponse[]>

const BlogCommand: BlogCommand = {
  name: "blog",
  description: "Read some of the insights that I have gained working in this field!",
  optionDefinitions: [
    {
      name: "num", description: "how many", defaultValue: 4, isRequired: false, validate: (value?: string) => {
        if (!value) return undefined
        try {
          return parseInt(value)
        } catch (error) { return undefined }
      }
    }, {
      name: 'help', description: 'find out how', isRequired: false, defaultValue: true, validate: (value) => {
        return undefined
      }
    }
  ],
  handle: (params) => {
    const optionNames = params.options.map(opt => opt.name)
    const blogPostKeys = Object.keys(BLOG_POSTS_META)
    const response: TextHandlerResponse[] = blogPostKeys.map((key) => {
      const blogPostMeta = BLOG_POSTS_META[key]
      return { text: [blogPostMeta.title, blogPostMeta.description, blogPostMeta.publishDate, blogPostMeta.slug] }
    })

    if (optionNames.includes('help')) {
      return generateHelpCommandResponse(BlogCommand)
    }

    if (optionNames.includes('num')) {
      const opt = params.options.find(opt => opt.name === 'num')
      if (opt) {
        return response.slice(0, Number(opt.value))
      }
    }
    return response
  }
}


export default BlogCommand