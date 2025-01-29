import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { parse, stringify } from 'smol-toml';
import type { PageServerLoad } from './$types';
import { postMetadataSimpleSchema, type PostMetadataSimple } from '$lib/types';
import { postsDirectory } from '$lib/server/constants';

function interpretMetadata(
  error: NodeJS.ErrnoException | null,
  readFile: string,
  fileName: string
): PostMetadataSimple {
  if (error) {
    throw new ReadPostMetadataError(error.message, fileName);
  }
  if (typeof readFile === 'string') {
    const m = matter(readFile, {
      engines: { toml: { parse, stringify } },
      language: 'toml',
    });
    const parsedMatter = postMetadataSimpleSchema.safeParse(m.data);
    if (parsedMatter.success) {
      return parsedMatter.data;
    } else {
      throw new ReadPostMetadataError(parsedMatter.error.toString(), fileName);
    }
  } else {
    throw new ReadPostMetadataError('File content is not a string', fileName);
  }
}

export const load: PageServerLoad = async () => {
  const postMetaData: Array<PostMetadataSimple> = [];
  const files = fs.readdirSync(postsDirectory, { encoding: 'utf8', withFileTypes: true });

  for (const file of files) {
    if (file.isFile() && file.name.endsWith('.md')) {
      try {
        fs.readFile(
          path.join(postsDirectory, file.name),
          { encoding: 'utf8', flag: 'r' },
          (error, readFile) => {
            const metadata = interpretMetadata(error, readFile, file.name);
            postMetaData.push(metadata);
          }
        );
      } catch (error) {
        if (error instanceof ReadPostMetadataError) {
          console.error(`Error reading metadata from ${error.fileName}: ${error.message}`);
        } else console.error(error);
      }
    }
  }

  return postMetaData;
};
