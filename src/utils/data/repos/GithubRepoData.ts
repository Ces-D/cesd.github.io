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

export default class GithubRepoData {
  protected _name: string;
  protected _full_name: string;
  protected _description: string;
  protected _updated_at: string;
  protected _created_at: string;
  protected _language: string;
  protected _html_url: string;
  protected _cover_image: string;

  constructor(data: any) {
    this._name = data.name ?? "";
    this._full_name = data.full_name ?? "";
    this._description = data.description ?? "";
    this._updated_at = data.updated_at ?? "";
    this._created_at = data.created_at ?? "";
    this._language = data.language ?? "";
    this._html_url = data.html_url ?? "";
    this._cover_image =
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  }

  addImage(imgSrc: string) {
    this._cover_image = imgSrc;
  }

  ToJson() {
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
