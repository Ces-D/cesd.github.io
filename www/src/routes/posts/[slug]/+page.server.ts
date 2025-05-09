import path from 'path';
import fs from 'fs/promises';
import type { EntryGenerator, PageServerLoad } from './$types';
import { postsDirectory } from '$lib/server/constants';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { renderer } from '$lib/components/Renderer';
import { readCompleteMetadata } from '$lib/server/readCompleteMetadata';

marked.use({ renderer });

export const load: PageServerLoad = async (request) => {
  try {
    const filePath = path.join(postsDirectory, request.params.slug + '.md');
    const fileContent = await fs.readFile(filePath, { flag: 'r', encoding: 'utf8' });
    const metadataFile = await readCompleteMetadata();

    const htmlContent = await marked.parse(fileContent, { breaks: true });
    const metadata = metadataFile.metadata.get(request.params.slug);
    const otherArticles = Array.from(
      metadataFile.metadata
        .entries()
        .filter(([entryKey]) => entryKey !== request.params.slug)
        .map(([entryKey, entryValue]) => ({ slug: entryKey, title: entryValue.title }))
    );

    if (!metadata) {
      error(404, { message: `${request.params.slug} not found` });
    } else {
      return {
        metadata,
        content: htmlContent,
        otherArticles,
      };
    }
  } catch (_) {
    error(404, { message: `${request.params.slug} not found` });
  }
};

// see - https://svelte.dev/docs/kit/page-options#prerender
export const entries: EntryGenerator = async () => {
  const metadataFile = await readCompleteMetadata();
  const metadata = Object.values(metadataFile.metadata);

  return metadata.map((p) => ({ slug: p.value.slug }));
};

export const prerender = true;
