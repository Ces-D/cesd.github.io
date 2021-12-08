import GrayMatterData from "./GrayMatterData";

export type BlogPost = {
  title: string;
  publishDate: string;
  readingTime: number;
  description: string;
  coverImage: string;
  content: string;
  tags: string[];
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
      description: this._description,
      coverImage: this._coverImage,
      content: this._content,
      tags: this._tags.split(","),
    };
  }
}