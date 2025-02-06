export const ROUTE = {
  home: { default: '/', chatAction: '/chat' },
  posts: { default: '/posts', post: (slug: string) => `/posts/${encodeURIComponent(slug)}` },
} as const;

export const PREDEFINED_PROMPT = {
  bleepBloop: 'Bleep-bloop?',
  planned: 'What do you have planned for today?',
  teach: 'Teach me a useful tip on a topic you like?',
  working: "What's a goal you are currently working on?",
};

/** Expected Id for chat bot form */
export const BOT_INPUT_ID = 'prompt';
