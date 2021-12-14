import GrayMatterData from "./GrayMatterData";

export type BlogExcerpt = {
  title: string;
  slug: string;
  readingTime: number;
  publishDate: string;
  coverImage: string;
};

export default class ExcerptData extends GrayMatterData {
  constructor(fileName: string) {
    super(fileName);
  }

  toJson(): BlogExcerpt {
    return {
      title: this._title,
      slug: this._slug,
      readingTime: this._readingTime,
      coverImage: this._coverImage,
      publishDate: this._publishDate,
    };
  }
}