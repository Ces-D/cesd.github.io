import path from "path";
import process from "process";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

export const CONTENT_DIRECTORY = path.join(process.cwd(), "content");

export default class GrayMatterData {
  protected _content: string;
  protected _coverImage: any;
  protected _date: string;
  protected _description: any;
  protected _excerpt: string;
  protected _slug: string;
  protected _tags: any;
  protected _title: any;

  constructor(fileName: string) {
    const grayFile = matter.read(path.join(CONTENT_DIRECTORY, fileName));

    this._content = markdownToHtml(grayFile.content) || "";
    this._coverImage =
      grayFile.data.coverImage ||
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
    this._date = new Date(grayFile.data.date).toLocaleDateString() || "";
    this._description =
      grayFile.data.description ||
      "Software developer learning and explaining the process of developing";
    this._excerpt = grayFile.content.split("\n").slice(0, 1).join(" ");
    this._slug = fileName.split(".")[0] || "";
    this._tags = grayFile.data.tags || "";
    this._title = grayFile.data.title || "";
  }
}
