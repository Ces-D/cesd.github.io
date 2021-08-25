import PostData from "./PostData";
import CardData from "./CardData";
import PathsData from "./PathsData";
import ArchiveData from "./ArchiveData";

export type BlogDataLevel = "Post" | "Card" | "Paths" | "Archive";

export default class BlogDataFactory {
  static async returnData(dataLevel: BlogDataLevel, fileName: string | undefined) {
    if (fileName === undefined) {
      throw new Error("That File Name does not exist");
    }
    if (dataLevel === "Paths") {
      const data = new PathsData(fileName);
      return data.toJson();
    }
    if (dataLevel === "Card") {
      const data = new CardData(fileName);
      return data.toJson();
    }
    if (dataLevel === "Post") {
      const data = new PostData(fileName);
      return data.toJson();
    }
    if (dataLevel === "Archive"){
      const data = new ArchiveData(fileName)
      return data.toJson();
    }

    throw new Error("You did not enter the correct Blog Data Level");
  }
}
