import path from "path";
import fs from "fs";
import axios from "axios";
import GithubRepoData, { GithubRepo } from "./GithubRepoData";

export default class GithubAccessor {
  private static REPO_DIR = path.join(process.cwd(), "content/repo");
  private static REPO_JSON_FILE = path.join(GithubAccessor.REPO_DIR, "repos.json");

  async accessRepoData() {
    if (!fs.existsSync(GithubAccessor.REPO_JSON_FILE)) {
      await this.populateRepoData();
    }

    const data = JSON.parse(
      fs.readFileSync(GithubAccessor.REPO_JSON_FILE, { encoding: "utf-8" })
    );

    return data as GithubRepo[];
  }

  private async populateRepoData() {
    const response = await axios.get("https://api.github.com/users/Ces-D/repos");
    const githubResponseRepos = response.data;
    const githubRepos = githubResponseRepos.map((resp: any) => {
      const data = new GithubRepoData(resp);
      return data.ToJson();
    });

    fs.writeFileSync(GithubAccessor.REPO_JSON_FILE, JSON.stringify(githubRepos));
  }
}
