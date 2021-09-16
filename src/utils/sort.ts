import { BlogCard } from "./data/CardData";
import { BlogExcerpt } from "./data/ExcerptData";

type SortFormat = "newest" | "oldest";

export const dateSort = (format: SortFormat, content: BlogCard[] | BlogExcerpt[]) => {
  if (format === "newest") {
    return content.sort((a, b) => {
      const aDate = new Date(a.publishDate);
      const bDate = new Date(b.publishDate);

      if (aDate > bDate) {
        return -1;
      } else if (aDate < bDate) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (format === "oldest") {
    return content.sort((a, b) => {
      const aDate = new Date(a.publishDate);
      const bDate = new Date(b.publishDate);

      if (aDate > bDate) {
        return 1;
      } else if (aDate < bDate) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  throw new Error("Incorrect sort format");
};
