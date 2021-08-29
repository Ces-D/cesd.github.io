import path from "path";
import { statSync } from "fs";
import { CONTENT_DIRECTORY } from "./data/GrayMatterData";

type AgoDateReferences = "Three-Months" | "Six-Months" | "Year";

export const postsAfterDate = (
  timeAgo: AgoDateReferences = "Six-Months",
  files: string[]
) => {
  let filterDate = new Date();

  switch (timeAgo) {
    case "Three-Months":
      filterDate.setMonth(filterDate.getMonth() - 3);
      break;
    case "Six-Months":
      filterDate.setMonth(filterDate.getMonth() - 6);
      break;
    case "Year":
      filterDate.setFullYear(filterDate.getFullYear() - 1);
      break;
    default:
      throw new Error("The timeAgo is not accepted");
  }

  const newPosts = files.filter((file) => {
    const stats = statSync(path.join(CONTENT_DIRECTORY, file));
    return stats.mtime >= filterDate;
  });

  return newPosts;
};
