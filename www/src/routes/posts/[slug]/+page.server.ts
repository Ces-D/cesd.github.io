import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { parse, stringify } from 'smol-toml';
import type { PageServerLoad } from './$types';
import { postMetadataSchema } from '$lib/types';
import { postsDirectory } from '$lib/server/constants';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async (request) => {
  const filePath = path.join(postsDirectory, request.params.slug + '.md');
  fs.readFile(filePath, { flag: 'r', encoding: 'utf8' }, (e, readFile) => {
    if (e) {
      error(404, { message: `${request.params.slug} not found` });
    }
    const m = matter(readFile, {
      engines: { toml: { parse, stringify } },
      language: 'toml',
    });
    const parsedMatter = postMetadataSchema.safeParse(m.data);
    if (parsedMatter.success) {
      return { metadata: parsedMatter.data, content: m.content as string };
    } else {
      error(404, { message: `${request.params.slug} not found` });
    }
  });
};
