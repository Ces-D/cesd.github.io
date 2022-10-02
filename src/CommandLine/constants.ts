type Article = { slug: string; title: string }
export type BlogMeta = Article & {
  publishDate: string, tags: string, description: string, articles?: { next?: () => Article; prev?: () => Article; }
}

class BlogPostsMeta {
  readonly TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS: BlogMeta = {
    title: "Handling TypeScript Return Declarations in Factory Functions",
    slug: "typescript-declarations-and-factory-functions",
    publishDate: "09/08/2021",
    tags: "Typescript,Factory,OOP,JavaScript,Type",
    description: "Showing you how to declare multiple return types in TypeScript from a single function.",
    articles: {
      next: () => ({ title: this.S_IN_SOLID.title, slug: this.S_IN_SOLID.slug }),
    }
  }

  readonly S_IN_SOLID: BlogMeta = {
    title: "Understanding the S in SOLID Principles",
    slug: "s-in-solid",
    publishDate: "09/09/2021",
    tags: "Typescript,SOLID,OOP,JavaScript",
    description: "Explaining the Single-Responsibility of SOLID principles in object-oriented programming.",
    articles: {
      next: () => ({ title: this.O_IN_SOLID.title, slug: this.O_IN_SOLID.slug }),
      prev: () => ({ title: this.TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS.title, slug: this.TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS.slug })
    }
  }

  readonly O_IN_SOLID: BlogMeta = {
    title: "Understanding the O in SOLID Principles",
    slug: "o-in-solid",
    publishDate: "09/12/2021",
    tags: "cSharp,SOLID,OOP",
    description: "Explaining the Open-Closed of SOLID principles in object-oriented programming.",
    articles: {
      next: () => ({ title: this.L_IN_SOLID.title, slug: this.L_IN_SOLID.slug }),
      prev: () => ({ title: this.S_IN_SOLID.title, slug: this.S_IN_SOLID.slug })
    }
  }

  readonly L_IN_SOLID: BlogMeta = {
    title: "Understanding the L in SOLID Principles",
    slug: "l-in-solid",
    publishDate: "09/16/2021",
    tags: "typescript,SOLID,OOP",
    description: "Explaining Liskov-Substitution of SOLID principles in object-oriented programming.",
    articles: {
      prev: () => ({ title: this.O_IN_SOLID.title, slug: this.O_IN_SOLID.slug })
    }
  }
}

const BLOG_POSTS_META = new BlogPostsMeta()
export { BLOG_POSTS_META }
