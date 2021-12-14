import date from "date-and-time";
import UnsplashApi from "./UnsplashApi";

export type GithubRepo = {
  name: string;
  fullName: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  language: string;
  htmlUrl: string;
  coverImage: string;
};

/**
 * Class that formats the Repo data for the rest of the application.
 * This class takes in the response Json from the github repo api endpoint, selects specific data and then formats it.
 * It also utilizes the UnsplashApi class to add a coverImage as a detail
 */
export default class GithubRepoData {
  protected _name: string;
  protected _full_name: string;
  protected _description: string;
  protected _updated_at: string;
  protected _created_at: string;
  protected _language: string;
  protected _html_url: string;
  protected _cover_image: string;
  protected unsplashApi: UnsplashApi;

  constructor(data: any) {
    this.unsplashApi = new UnsplashApi();
    this._name = data.name ?? "";
    this._full_name = data.full_name ?? "";
    this._description = data.description ?? "";
    this._updated_at = date.format(new Date(data.updated_at), "MMMM D. YYYY") ?? "";
    this._created_at = date.format(new Date(data.created_at), "MMMM D. YYYY") ?? "";
    this._language = data.language ?? "";
    this._html_url = data.html_url ?? "";
    this._cover_image = "";
  }

  private async addImage(query: string) {
    const MAX_RESULTS = 20;

    const photos = await this.unsplashApi.SearchPhotos({
      query: query,
      per_page: MAX_RESULTS,
    });
    console.log("PHOTOS LENGTH: ", photos.results.length);
    const randomIndex = Math.floor(Math.random() * photos.results.length);

    if (photos.results.length === 0) {
      return "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    } else {
      const imageUrl = photos.results[randomIndex].urls.regular;
      return imageUrl;
    }
  }

  async ToJson(): Promise<GithubRepo> {
    this._cover_image = await this.addImage(`${this._language}, programming`);

    return {
      name: this._name,
      fullName: this._full_name,
      description: this._description,
      updatedAt: this._updated_at,
      createdAt: this._created_at,
      language: this._language,
      htmlUrl: this._html_url,
      coverImage: this._cover_image,
    };
  }
}
