export function getNews(topic) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  );
}
