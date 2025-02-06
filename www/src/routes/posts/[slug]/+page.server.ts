import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { parse, stringify } from 'smol-toml';
import type { PageServerLoad } from './$types';
import { postMetadataSchema } from '$lib/types';
import { postsDirectory } from '$lib/server/constants';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { renderer } from '$lib/components/Renderer';

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
  } catch (e) {
    error(404, { message: `${request.params.slug} not found` });
  }
};
