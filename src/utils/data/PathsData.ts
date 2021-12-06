import GrayMatterData from "./GrayMatterData";

export type BlogPaths = {
  slug: string;
};

export default class PathsData extends GrayMatterData {
  constructor(fileName: string) {
    super(fileName);
  }

  toJson(): BlogPaths {
    return {
      slug: this._slug,
    };
  }
}