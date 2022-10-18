type Article = { slug: string; title: string }
export type BlogMeta = Article & {
  publishDate: string, tags: string, description: string, articles?: { next?: () => Article; prev?: () => Article; }
}

export const BLOG_POSTS_META: Record<string, BlogMeta> = {
  TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS: {
    title: "Handling TypeScript Return Declarations in Factory Functions",
    slug: "typescript-declarations-and-factory-functions",
    publishDate: "09/08/2021",
    tags: "Typescript,Factory,OOP,JavaScript,Type",
    description: "Showing you how to declare multiple return types in TypeScript from a single function.",
    articles: {
      next: () => ({ title: BLOG_POSTS_META.S_IN_SOLID.title, slug: BLOG_POSTS_META.S_IN_SOLID.slug }),
    }
  },

  S_IN_SOLID: {
    title: "Understanding the S in SOLID Principles",
    slug: "s-in-solid",
    publishDate: "09/09/2021",
    tags: "Typescript,SOLID,OOP,JavaScript",
    description: "Explaining the Single-Responsibility of SOLID principles in object-oriented programming.",
    articles: {
      next: () => ({ title: BLOG_POSTS_META.O_IN_SOLID.title, slug: BLOG_POSTS_META.O_IN_SOLID.slug }),
      prev: () => ({
        title: BLOG_POSTS_META.TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS.title,
        slug: BLOG_POSTS_META.TYPESCRIPT_DECLARATIONS_AND_FACTORY_FUNCTIONS.slug
      })
    }
  },

  O_IN_SOLID: {
    title: "Understanding the O in SOLID Principles",
    slug: "o-in-solid",
    publishDate: "09/12/2021",
    tags: "cSharp,SOLID,OOP",
    description: "Explaining the Open-Closed of SOLID principles in object-oriented programming.",
    articles: {
      next: () => ({ title: BLOG_POSTS_META.L_IN_SOLID.title, slug: BLOG_POSTS_META.L_IN_SOLID.slug }),
      prev: () => ({ title: BLOG_POSTS_META.S_IN_SOLID.title, slug: BLOG_POSTS_META.S_IN_SOLID.slug })
    }
  },

  L_IN_SOLID: {
    title: "Understanding the L in SOLID Principles",
    slug: "l-in-solid",
    publishDate: "09/16/2021",
    tags: "typescript,SOLID,OOP",
    description: "Explaining Liskov-Substitution of SOLID principles in object-oriented programming.",
    articles: {
      next: () => ({ title: BLOG_POSTS_META.LEARNING_RUST_DAY_1.title, slug: BLOG_POSTS_META.LEARNING_RUST_DAY_1.slug }),
      prev: () => ({ title: BLOG_POSTS_META.O_IN_SOLID.title, slug: BLOG_POSTS_META.O_IN_SOLID.slug }),
    }
  },

  LEARNING_RUST_DAY_1: {
    title: "Learning Rust: Day 1",
    slug: "learning-rust-day-1",
    publishDate: "10/13/2022",
    tags: "rust,learning",
    description: "Can I make it through 30 days of rust?",
    articles: {
      next: () => ({ title: BLOG_POSTS_META.LEARNING_RUST_DAY_2.title, slug: BLOG_POSTS_META.LEARNING_RUST_DAY_2.slug }),
      prev: () => ({ title: BLOG_POSTS_META.L_IN_SOLID.title, slug: BLOG_POSTS_META.L_IN_SOLID.slug })
    }
  },

  LEARNING_RUST_DAY_2: {
    title: "Learning Rust: Day 2",
    slug: "learning-rust-day-2",
    publishDate: "10/14/2022",
    tags: "rust,learning",
    description: "Building a hello world program with rust",
    articles: {
      next: () => ({ title: BLOG_POSTS_META.LEARNING_RUST_DAY_3.title, slug: BLOG_POSTS_META.LEARNING_RUST_DAY_3.slug }),
      prev: () => ({ title: BLOG_POSTS_META.LEARNING_RUST_DAY_1.title, slug: BLOG_POSTS_META.LEARNING_RUST_DAY_1.slug })
    }
  },

  LEARNING_RUST_DAY_3: {
    title: "Learning Rust: Day 3",
    slug: "learning-rust-day-3",
    publishDate: "10/5/2022",
    tags: "rust,learning",
    description: "Rust data types",
    articles: {
      next: () => ({ title: BLOG_POSTS_META.LEARNING_RUST_DAY_4.title, slug: BLOG_POSTS_META.LEARNING_RUST_DAY_4.slug }),
      prev: () => ({ title: BLOG_POSTS_META.LEARNING_RUST_DAY_2.title, slug: BLOG_POSTS_META.LEARNING_RUST_DAY_2.slug })
    }
  },

  LEARNING_RUST_DAY_4: {
    title: "Learning Rust: Day 4",
    slug: "learning-rust-day-4",
    publishDate: "10/5/2022",
    tags: "rust,learning",
    description: "More data types in rust",
    articles: {
      prev: () => ({ title: BLOG_POSTS_META.LEARNING_RUST_DAY_3.title, slug: BLOG_POSTS_META.LEARNING_RUST_DAY_3.slug })
    }
  }
}
