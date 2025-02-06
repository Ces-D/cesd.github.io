export class ReadPostMetadataError extends Error {
  fileName?: string;
  constructor(message: string, fileName?: string) {
    super(message);
    this.fileName = fileName;
    this.name = 'ReadPostMetadataError';
  }
}
