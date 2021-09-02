import { BlogCard } from "./data/CardData";

type SortFormat = "newest" | "oldest";

export const dateSort = (format: SortFormat, content: BlogCard[]) => {
  if (format === "newest") {
    return content.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

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
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

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
