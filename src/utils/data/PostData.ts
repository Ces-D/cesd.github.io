import GrayMatterData from "./GrayMatterData";

export type BlogPost = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
};

export default class PostData extends GrayMatterData {
  constructor(fileName: string) {
    super(fileName);
  }

  toJson(): BlogPost {
    return {
      title: this._title,
      coverImage: this._coverImage,
      content: this._content,
      date: this._date,
      description: this._description,
      tags: this._tags.split(","),
    };
  }
}
