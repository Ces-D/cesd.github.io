import { z } from 'zod';

// Be sure that this is synced with data-theme in app.css
export const theme = z.enum(['light', 'dark', 'orange']).describe('A supported theme for the app.');
export type Theme = z.infer<typeof theme>;

export const analyticsMetadataSchema = z
  .object({
    created_at: z.coerce.date(),
    length_in_words: z.number(),
    reading_time_in_minutes: z.number(),
  })
  .describe("A schema for a post's analytics metadata.");
export type AnalyticsMetadata = z.infer<typeof analyticsMetadataSchema>;

export const interestMetadataSchema = z
  .object({
    keywords: z.array(z.string()),
    genre: z.string(),
    related_articles: z.array(z.string()),
  })
  .describe("A schema for a post's interest metadata.");
export type InterestMetadata = z.infer<typeof interestMetadataSchema>;

export const postMetadataSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    slug: z.string().min(1),
    author: z.string().min(1),
    analytics: analyticsMetadataSchema,
    interest: interestMetadataSchema,
  })
  .describe('A schema for a posts metadata.');

export type PostMetadata = z.infer<typeof postMetadataSchema>;

export const postMetadataFileSchema = z.object({
  updated: z.coerce.date(),
  metadata: z.record(z.string(), postMetadataSchema).transform((c) => new Map(Object.entries(c))),
});

export type PostMetadataFile = z.infer<typeof postMetadataFileSchema>;
