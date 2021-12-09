import { GithubRepo } from "./models/GithubRepoData";

type SortFormat = "newest" | "oldest";

export function sortRepos(format: SortFormat, content: GithubRepo[]) {
  if (format === "newest") {
    return content.sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);

      if (aDate > bDate) {
        return -1;
      } else if (aDate < bDate) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return content.sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);

      if (aDate > bDate) {
        return 1;
      } else if (aDate < bDate) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
