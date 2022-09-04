type BlogMeta = { title: string, coverImage: string, publishDate: string, tags: string, description: string }

export const BLOG_POSTS_META: Record<string, BlogMeta> = {
  L_IN_SOLID: {
    title: "Understanding the L in SOLID Principles",
    coverImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    publishDate: "09/16/2021",
    tags: "typescript,SOLID,OOP",
    description: "Explaining Liskov-Substitution of SOLID principles in object-oriented programming.",
  },
  O_IN_SOLID: {
    title: "Understanding the O in SOLID Principles",
    coverImage: "https://images.unsplash.com/photo-1524989899036-b1c54afba1c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    publishDate: "09/12/2021",
    tags: "cSharp,SOLID,OOP",
    description: "Explaining the Open-Closed of SOLID principles in object-oriented programming.",
  },
  S_IN_SOLID: {
    title: "Understanding the S in SOLID Principles",
    coverImage: "https://images.unsplash.com/photo-1494861895304-fb272971c078?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    publishDate: "09/09/2021",
    tags: "Typescript,SOLID,OOP,JavaScript",
    description: "Explaining the Single-Responsibility of SOLID principles in object-oriented programming.",
  },
  TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS: {
    title: "Handling TypeScript Return Declarations in Factory Functions",
    coverImage: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    publishDate: "09/08/2021",
    tags: "Typescript,Factory,OOP,JavaScript,Type",
    description: "Showing you how to declare multiple return types in TypeScript from a single function.",
  }
}
