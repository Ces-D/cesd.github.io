import PostData, { BlogPost } from "./data/PostData";
import CardData, { BlogCard } from "./data/CardData";
import PathsData, { BlogPaths } from "./data/PathsData";
import ExcerptData, { BlogExcerpt } from "./data/ExcerptData";

export type BlogDataLevel = "Post" | "Card" | "Paths" | "Excerpt";

interface OverLoads {
  ["Post"]: BlogPost;
  ["Card"]: BlogCard;
  ["Paths"]: BlogPaths;
  ["Excerpt"]: BlogExcerpt;
}

export default class BlogDataFactory {
  static async returnData<D extends BlogDataLevel>(
    dataLevel: D,
    fileName?: string
  ): Promise<OverLoads[D]>;
  static async returnData(dataLevel: BlogDataLevel, fileName?: string) {
    if (typeof fileName === "undefined") {
      throw new Error("The file name does not exist");
    }

    let data: PostData | CardData | PathsData;

    switch (dataLevel) {
      case "Card":
        data = new CardData(fileName);
        break;
      case "Post":
        data = new PostData(fileName);
        break;
      case "Paths":
        data = new PathsData(fileName);
        break;
      case "Excerpt":
        data = new ExcerptData(fileName);
        break;
      default:
        throw new Error("You did not enter the correct Blog Data Level");
    }

    return data.toJson();
  }
}