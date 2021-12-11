import axios from "axios";
import path from "path";
import fs from "fs";
import GithubRepoData, { GithubRepo } from "./models/GithubRepoData";

/**
 * This class handles all logic related to
 * @constructor takes a singles boolean argument that determines whether the repo json file which serves as state is refreshed and written over
 */
export default class GithubAccessor {
  private static REPO_DIR = path.join(process.cwd(), "content/repo");
  private static REPO_JSON_FILE = path.join(GithubAccessor.REPO_DIR, "repos.json");
  protected _rewrite: boolean;

  constructor(rewrite: boolean) {
    this._rewrite = rewrite;
  }

  async accessRepoData() {
    // checks whether to rewrite the json file
    if (this._rewrite) {
      await this.populateRepoData();
    } else if (!this._rewrite && !fs.existsSync(GithubAccessor.REPO_JSON_FILE)) {
      // if not rewrite but file does not exist; write regardless
      await this.populateRepoData();
    }

    const data: GithubRepo[] = JSON.parse(
      fs.readFileSync(GithubAccessor.REPO_JSON_FILE, { encoding: "utf-8" })
    );

    return data;
  }

  private async populateRepoData() {
    const response = await axios.get("https://api.github.com/users/Ces-D/repos");
    const githubResponseRepos = response.data;
    const promiseGithubRepos: Promise<GithubRepo>[] = githubResponseRepos.map(
      async (resp: any) => {
        const data = new GithubRepoData(resp);
        return await data.ToJson();
      }
    );

    await Promise.all(promiseGithubRepos).then((githubRepos) => {
      fs.writeFileSync(
        GithubAccessor.REPO_JSON_FILE,
        JSON.stringify(githubRepos, null, 2)
      );
    });
  }
}
