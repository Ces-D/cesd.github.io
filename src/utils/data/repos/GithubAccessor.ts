import path from "path";
import fs from "fs";
import axios from "axios";
import GithubRepoData, { GithubRepo } from "./GithubRepoData";

export default class GithubAccessor {
  private static REPO_DIR = path.join(process.cwd(), "content/repo");
  private static REPO_JSON_FILE = path.join(GithubAccessor.REPO_DIR, "repos.json");

  async accessRepoData() {
    this.populateRepoData();

    const data: GithubRepo[] = JSON.parse(
      fs.readFileSync(GithubAccessor.REPO_JSON_FILE, { encoding: "utf-8" })
    );

    return data;
  }

  private async populateRepoData() {
    const response = await axios.get("https://api.github.com/users/Ces-D/repos");
    const githubResponseRepos = response.data;
    const githubRepos: GithubRepo[] = githubResponseRepos.map((resp: any) => {
      const data = new GithubRepoData(resp);
      return data.ToJson();
    });

    fs.writeFileSync(GithubAccessor.REPO_JSON_FILE, JSON.stringify(githubRepos, null, 2));
  }
}
