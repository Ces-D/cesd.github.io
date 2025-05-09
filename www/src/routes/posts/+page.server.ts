import type { PageServerLoad } from './$types';
import { type PostMetadata } from '$lib/types';
import { readCompleteMetadata } from '$lib/server/readCompleteMetadata';

async function getCompleteMetadata(): Promise<Array<PostMetadata>> {
  const completeMetadataFile = await readCompleteMetadata();
  return Array.from(completeMetadataFile.metadata.values());
}

export const load: PageServerLoad = async () => {
  return { metadata: await getCompleteMetadata() };
};

export const prerender = true;
