type Article = { slug: string; title: string }
export type BlogMeta = Article & {
  publishDate: string, tags: string, description: string, articles?: { next?: () => Article; prev?: () => Article; }
}

const pickArticle = (meta: BlogMeta): Article => ({ title: meta.title, slug: meta.slug })

export const BLOG_POSTS_META: Record<string, BlogMeta> = {
  TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS: {
    title: "Handling TypeScript Return Declarations in Factory Functions",
    slug: "typescript-declarations-and-factory-functions",
    publishDate: "09/08/2021",
    tags: "Typescript,Factory,OOP,JavaScript,Type",
    description: "Showing you how to declare multiple return types in TypeScript from a single function.",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.S_IN_SOLID),
    }
  },

  S_IN_SOLID: {
    title: "Understanding the S in SOLID Principles",
    slug: "s-in-solid",
    publishDate: "09/09/2021",
    tags: "Typescript,SOLID,OOP,JavaScript",
    description: "Explaining the Single-Responsibility of SOLID principles in object-oriented programming.",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.O_IN_SOLID),
      prev: () => pickArticle(BLOG_POSTS_META.TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS)
    }
  },

  O_IN_SOLID: {
    title: "Understanding the O in SOLID Principles",
    slug: "o-in-solid",
    publishDate: "09/12/2021",
    tags: "cSharp,SOLID,OOP",
    description: "Explaining the Open-Closed of SOLID principles in object-oriented programming.",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.L_IN_SOLID),
      prev: () => pickArticle(BLOG_POSTS_META.S_IN_SOLID)
    }
  },

  L_IN_SOLID: {
    title: "Understanding the L in SOLID Principles",
    slug: "l-in-solid",
    publishDate: "09/16/2021",
    tags: "typescript,SOLID,OOP",
    description: "Explaining Liskov-Substitution of SOLID principles in object-oriented programming.",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_1),
      prev: () => pickArticle(BLOG_POSTS_META.O_IN_SOLID),
    }
  },

  LEARNING_RUST_DAY_1: {
    title: "Learning Rust: Day 1",
    slug: "learning-rust-day-1",
    publishDate: "10/13/2022",
    tags: "rust,learning",
    description: "Can I make it through 30 days of rust?",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_2),
      prev: () => pickArticle(BLOG_POSTS_META.L_IN_SOLID)
    }
  },

  LEARNING_RUST_DAY_2: {
    title: "Learning Rust: Day 2",
    slug: "learning-rust-day-2",
    publishDate: "10/14/2022",
    tags: "rust,learning",
    description: "Building a hello world program with rust",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_3),
      prev: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_1)
    }
  },

  LEARNING_RUST_DAY_3: {
    title: "Learning Rust: Day 3",
    slug: "learning-rust-day-3",
    publishDate: "10/5/2022",
    tags: "rust,learning",
    description: "Rust data types",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_4),
      prev: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_2)
    }
  },

  LEARNING_RUST_DAY_4: {
    title: "Learning Rust: Day 4",
    slug: "learning-rust-day-4",
    publishDate: "10/5/2022",
    tags: "rust,learning",
    description: "More data types in rust",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_5),
      prev: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_3)
    }
  },

  LEARNING_RUST_DAY_5: {
    title: "Learning Rust: Day 5",
    slug: "learning-rust-day-5",
    publishDate: "10/6/2022",
    tags: "rust,learning",
    description: "Loops, clone, scopes, and ownership in rust",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_6),
      prev: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_4)
    }
  },

  LEARNING_RUST_DAY_6: {
    title: "Learning Rust: Day 6",
    slug: "learning-rust-day-6",
    publishDate: "10/7/2022",
    tags: "rust, learning",
    description: "Concept of reference and borrowing in rust",
    articles: {
      next: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_7),
      prev: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_5)
    }
  },

  LEARNING_RUST_DAY_7: {
    title: "Learning Rust: Day 7",
    slug: "learning-rust-day-7",
    publishDate: "10/8/2022",
    tags: "rust, learning",
    description: "Packages and crates in rust",
    articles: {
      prev: () => pickArticle(BLOG_POSTS_META.LEARNING_RUST_DAY_6)
    }
  },
}
