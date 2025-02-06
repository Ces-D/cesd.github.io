import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { parse, stringify } from 'smol-toml';
import type { PageServerLoad } from './$types';
import { postMetadataSchema, type PostMetadata } from '$lib/types';
import { ReadPostMetadataError } from '$lib/errors';
import { isMarkdownFile, postsDirectory } from '$lib/server/constants';

async function getCompleteMetadata() {
  const files = await fs.readdir(postsDirectory, { encoding: 'utf8', withFileTypes: true });
  const completeMetadata: Array<Promise<PostMetadata>> = files.map(async (f) => {
    if (isMarkdownFile(f)) {
      const filePath = path.join(postsDirectory, f.name);
      const content = await fs.readFile(filePath, { encoding: 'utf8', flag: 'r' });
      const m = matter(content, {
        engines: { toml: { parse, stringify } },
        language: 'toml',
      });
      const parsedMatter = postMetadataSchema.safeParse(m.data);
      if (parsedMatter.success) {
        return parsedMatter.data;
      } else {
        throw new ReadPostMetadataError(parsedMatter.error.toString(), f.name);
      }
    } else {
      throw new ReadPostMetadataError('File is not a markdown file', f.name);
    }
  });

  return Promise.allSettled(completeMetadata);
}

export const load: PageServerLoad = async () => {
  return { metadata: await getCompleteMetadata() };
};

export const prerender = true;
