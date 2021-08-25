import GrayMatterData from "./GrayMatterData";

export type BlogArchive = {
  title: string;
  slug: string;
  date: string;
};

export default class ArchiveData extends GrayMatterData {
  constructor(fileName: string) {
    super(fileName);
  }

  toJson(): BlogArchive {
    return {
      title: this._title,
      slug: this._slug,
      date: this._date,
    };
  }
}
