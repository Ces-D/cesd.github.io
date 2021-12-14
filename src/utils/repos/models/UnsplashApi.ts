import axios from "axios";

type SearchPhotosParams = { query: string; per_page: number };
type SearchExpectedResponse = {
  total: number;
  total_pages: number;
  results: ExpectedImageData[];
};
type ExpectedImageUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};
type ExpectedImageData = {
  urls: ExpectedImageUrls;
};

export default class UnsplashApi {
  private static BASE_UNSPLASH_ENDPOINT = "https://api.unsplash.com/";

  SearchPhotos = (params: SearchPhotosParams): Promise<SearchExpectedResponse> => {
    const actualParams = { ...params, orientation: "landscape" };
    const response = axios
      .get(`${UnsplashApi.BASE_UNSPLASH_ENDPOINT}search/photos`, {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
          "Accept-Version": "v1",
        },
        params: actualParams,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.error(err));

    return response;
  };
}
