import type { Dirent } from 'fs';
import path from 'path';

export const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export const isMarkdownFile = (file: Dirent) => file.isFile() && file.name.endsWith('.md');
