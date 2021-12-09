import { BlogCard } from "./models/CardData";
import { BlogExcerpt } from "./models/ExcerptData";

type SortFormat = "newest" | "oldest";

type AcceptableContent = BlogCard[] | BlogExcerpt[];

export function sortBlogPosts(format: SortFormat, content: BlogCard[]): BlogCard[];
export function sortBlogPosts(format: SortFormat, content: BlogExcerpt[]): BlogExcerpt[];
export function sortBlogPosts(format: SortFormat, content: AcceptableContent) {
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
}
