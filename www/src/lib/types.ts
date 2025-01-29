import { z } from 'zod';

/** A chat message contains the message and an identifier indicating who the user is */
export type Message = { message: string; user: 'user' | 'bot' };

export const postMetadataSimpleSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    slug: z.string().min(1),
    createdAt: z.date(),
    keywords: z.array(z.string()),
  })
  .describe(
    "A schema for a posts metadata. This is a simplified version fo the data from Brainiac's graymatter. Useful when loading the data from all the posts"
  );

/** Simplified data from Brainiac post graymatter
 *  @see https://github.com/Ces-D/Brainiac-1
 * */
export type PostMetadataSimple = z.infer<typeof postMetadataSimpleSchema>;

export const postMetadataSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    slug: z.string().min(1),
    createdAt: z.date(),
    keywords: z.array(z.string()),
  })
  .describe('A schema for a posts metadata.');

/** Complete data from Brainiac post graymatter
 *  @see https://github.com/Ces-D/Brainiac-1
 * */
export type PostMetadata = z.infer<typeof postMetadataSchema>;
