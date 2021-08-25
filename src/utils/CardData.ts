import GrayMatterData from "./GrayMatterData";

export type BlogCard = {
  title: string;
  coverImage: string;
  slug: string;
  date: string;
  excerpt: string;
};

export default class CardData extends GrayMatterData {
  constructor(fileName: string) {
    super(fileName);
  }

  toJson(): BlogCard {
    return {
      title: this._title,
      coverImage: this._coverImage,
      date: this._date,
      excerpt: this._excerpt,
      slug: this._slug,
    };
  }
}
