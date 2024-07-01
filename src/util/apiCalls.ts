// import { mockArticles } from "../data/mockArticles";
import { APIResponse } from "../types/type";

export function getNews(page: number = 1): Promise<APIResponse> {
  // return new Promise((resolve) => {
  //   resolve(mockArticles);
  // });

  const query = encodeURIComponent('videogame OR "video game"');
  const apiKey = "a2b3955d45374009bb40a55c7575efa5";
  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&page=${page}&sortBy=publishedAt&apiKey=${apiKey}`
  ).then((res) => {
    if (!res.ok) {
      throw Error("failed to get news");
    } else {
      return res.json();
    }
  });
}
