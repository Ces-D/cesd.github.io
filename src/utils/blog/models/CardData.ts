import GrayMatterData from "./GrayMatterData";

export type BlogCard = {
  title: string;
  slug: string;
  publishDate: string;
  readingTime: number;
  coverImage: string;
  excerpt: string;
};

export default class CardData extends GrayMatterData {
  constructor(fileName: string) {
    super(fileName);
  }

  toJson(): BlogCard {
    return {
      title: this._title,
      slug: this._slug,
      publishDate: this._publishDate,
      readingTime: this._readingTime,
      coverImage: this._coverImage,
      excerpt: this._excerpt,
    };
  }
}