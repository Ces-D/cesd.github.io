import GrayMatterData from "./GrayMatterData";

export type BlogPost = {
  title: string;
  publishDate: string;
  readingTime: number;
  tags: string[];
  description: string;
  coverImage: string;
  content: string;
};

export default class PostData extends GrayMatterData {
  constructor(fileName: string) {
    super(fileName);
  }

  toJson(): BlogPost {
    return {
      title: this._title,
      publishDate: this._publishDate,
      readingTime: this._readingTime,
      tags: this._tags.split(","),
      description: this._description,
      coverImage: this._coverImage,
      content: this._content,
    };
  }
}
