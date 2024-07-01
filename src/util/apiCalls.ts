// import { mockArticles } from "../data/mockArticles";
import { APIResponse } from "../types/type";

export function getNews(page: number = 1): Promise<APIResponse> {
  // return new Promise((resolve) => {
  //   resolve(mockArticles);
  // });
  const query = encodeURIComponent('videogame OR "video game"');

  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&page=${page}&sortBy=publishedAt&apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  ).then((res) => {
    if (!res.ok) {
      throw Error("failed to get news");
    } else {
      return res.json();
    }
  });
}
