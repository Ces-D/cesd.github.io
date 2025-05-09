import type { LayoutServerLoad } from './$types';
import { marked } from 'marked';
import { renderer } from '$lib/components/Renderer';
import { readCompleteMetadata } from '$lib/server/readCompleteMetadata';

marked.use({ renderer });

export const load: LayoutServerLoad = async () => {
  const metadataFile = await readCompleteMetadata();

  const articles = Array.from(metadataFile.metadata.values()).map((val) => ({
    slug: val.slug,
    title: val.title,
  }));
  return { articles };
};
