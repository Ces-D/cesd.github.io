import axios from "axios";
import date from "date-and-time";

export type RepoData = {
  name: string;
  full_name: string;
  description: string;
  updated_at: string;
  created_at: string;
  language: string;
  html_url: string;
};

export default class GithubData {
  private _repos: Promise<RepoData[]>;

  constructor() {
    this._repos = this.requestUserRepos();
  }

  private async requestUserRepos(): Promise<RepoData[]> {
    const resp = await axios.get("https://api.github.com/users/Ces-D/repos");

    const filteredRepos: RepoData[] = resp.data.map((repo: any): RepoData => {
      return {
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        updated_at: date.format(new Date(repo.updated_at), "MMMM D. YYYY"),
        created_at: date.format(new Date(repo.created_at), "MMMM D. YYYY"),
        language: repo.language,
        html_url: repo.html_url,
      };
    });

    return filteredRepos;
  }

  Repos() {
    return this._repos;
  }
}
