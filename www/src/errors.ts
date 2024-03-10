export class ArticleNotFoundError extends Error {
  public _slug: string;
  constructor(slug: string) {
    super(`Article not found`);
    this._slug = slug;
  }
}
