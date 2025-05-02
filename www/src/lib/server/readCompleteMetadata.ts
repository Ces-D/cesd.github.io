import fs from 'fs/promises';
import { postMetadataFileSchema, type PostMetadataFile } from '$lib/types';
import { ReadPostMetadataError } from '$lib/errors';
import { completeMetadataFile } from '$lib/server/constants';

export async function readCompleteMetadata(): Promise<PostMetadataFile> {
  const metadataFile = await fs.readFile(completeMetadataFile, {
    encoding: 'utf8',
    flag: 'r',
  });

  const validated = await postMetadataFileSchema.safeParseAsync(JSON.parse(metadataFile));
  if (validated.success) {
    return validated.data;
  } else {
    const error = new ReadPostMetadataError(
      `Failed to parse metadata file: ${validated.error}`,
      completeMetadataFile
    );
    console.error(error);
    throw error;
  }
}
