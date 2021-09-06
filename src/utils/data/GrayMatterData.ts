import path from "path";
import process from "process";
import matter from "gray-matter";
import markdownToHtml from "../markdownToHtml";
import date from "date-and-time";
import readingTime from "reading-time";

export const CONTENT_DIRECTORY = path.join(process.cwd(), "content");

export default class GrayMatterData {
  protected _content: string;
  protected _coverImage: any;
  protected _publishDate: string;
  protected _description: any;
  protected _excerpt: string;
  protected _slug: string;
  protected _tags: string;
  protected _title: any;
  protected _readingTime: number;

  constructor(fileName: string) {
    const grayFile = this.GrayMatterRead(path.join(CONTENT_DIRECTORY, fileName));

    this._content = markdownToHtml(grayFile.content) || "";

    this._coverImage =
      grayFile.data.coverImage ||
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";

    this._publishDate = date.format(new Date(grayFile.data.publishDate), "MMMM D. YYYY");

    this._description =
      grayFile.data.description ||
      "Software developer learning and explaining the process of developing";

    this._excerpt = grayFile.content.split(new RegExp("[.?!]")).slice(0, 2).join(". ");

    this._slug = fileName.split(".")[0] || "";

    this._tags = grayFile.data.tags.toLowerCase() || "";

    this._title = grayFile.data.title || "";

    this._readingTime = Math.round(readingTime(grayFile.content).minutes);
  }

  protected GrayMatterRead(filePath: string) {
    return matter.read(filePath);
  }
}
