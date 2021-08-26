import PostData, { BlogPost } from "./PostData";
import CardData, { BlogCard } from "./CardData";
import PathsData, { BlogPaths } from "./PathsData";
import ArchiveData, { BlogArchive } from "./ArchiveData";

export type BlogDataLevel = "Post" | "Card" | "Paths" | "Archive";

interface OverLoads {
  ["Post"]: BlogPost;
  ["Card"]: BlogCard;
  ["Paths"]: BlogPaths;
  ["Archive"]: BlogArchive;
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

    let data: PostData | CardData | PathsData | PostData;

    switch (dataLevel) {
      case "Archive":
        data = new ArchiveData(fileName);
        break;
      case "Card":
        data = new CardData(fileName);
        break;
      case "Paths":
        data = new PathsData(fileName);
        break;
      case "Post":
        data = new PostData(fileName);
        break;
      default:
        throw new Error("You did not enter the correct Blog Data Level");
    }

    return data.toJson();
  }
}

//TODO: move the Data functions into a separate folder
// TODO: create a pagination system
// TODO: separate the sort logic
