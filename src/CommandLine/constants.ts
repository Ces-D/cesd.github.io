type BlogMeta = { title: string, slug: string; publishDate: string, tags: string, description: string }

export const BLOG_POSTS_META: Record<string, BlogMeta> = {
  L_IN_SOLID: {
    title: "Understanding the L in SOLID Principles",
    slug: "l-in-solid",
    publishDate: "09/16/2021",
    tags: "typescript,SOLID,OOP",
    description: "Explaining Liskov-Substitution of SOLID principles in object-oriented programming.",
  },
  O_IN_SOLID: {
    title: "Understanding the O in SOLID Principles",
    slug: "o-in-solid",
    publishDate: "09/12/2021",
    tags: "cSharp,SOLID,OOP",
    description: "Explaining the Open-Closed of SOLID principles in object-oriented programming.",
  },
  S_IN_SOLID: {
    title: "Understanding the S in SOLID Principles",
    slug: "s-in-solid",
    publishDate: "09/09/2021",
    tags: "Typescript,SOLID,OOP,JavaScript",
    description: "Explaining the Single-Responsibility of SOLID principles in object-oriented programming.",
  },
  TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS: {
    title: "Handling TypeScript Return Declarations in Factory Functions",
    slug: "typescript-declarations-and-factory-functions",
    publishDate: "09/08/2021",
    tags: "Typescript,Factory,OOP,JavaScript,Type",
    description: "Showing you how to declare multiple return types in TypeScript from a single function.",
  }
}
