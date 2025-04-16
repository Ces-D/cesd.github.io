import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { parse, stringify } from 'smol-toml';
import type { EntryGenerator, PageServerLoad } from './$types';
import { postMetadataSchema, type PostMetadata } from '$lib/types';
import { isMarkdownFile, postsDirectory } from '$lib/server/constants';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { renderer } from '$lib/components/Renderer';
import { ReadPostMetadataError } from '$lib/errors';

marked.use({ renderer });

export const load: PageServerLoad = async (request) => {
  try {
    const filePath = path.join(postsDirectory, request.params.slug + '.md');
    const fileContent = await fs.readFile(filePath, { flag: 'r', encoding: 'utf8' });
    const m = matter(fileContent, {
      engines: { toml: { parse, stringify } },
      language: 'toml',
    });
    const parsedMatter = postMetadataSchema.safeParse(m.data);
    if (parsedMatter.success) {
      const htmlContent = marked.parse(m.content, { breaks: true });
      return { metadata: parsedMatter.data, content: htmlContent };
    } else {
      error(404, { message: `${request.params.slug} not found` });
    }
  } catch (_) {
    error(404, { message: `${request.params.slug} not found` });
  }
};

// see - https://svelte.dev/docs/kit/page-options#prerender
export const entries: EntryGenerator = async () => {
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

  const postMetadata = await Promise.allSettled(completeMetadata);
  return postMetadata.filter((p) => p.status === 'fulfilled').map((p) => ({ slug: p.value.slug }));
};

export const prerender = true;
