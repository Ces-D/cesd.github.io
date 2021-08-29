import GrayMatterData from "./GrayMatterData";

export type BlogCard = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
};

export default class CardData extends GrayMatterData {
  constructor(fileName: string) {
    super(fileName);
  }

  toJson(): BlogCard {
    return {
      title: this._title,
      date: this._date,
      slug: this._slug,
      tags: this._tags.split(","),
    };
  }
}
