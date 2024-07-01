import { useContext, useState } from "react";
import { GlobalContext } from "../../components/App/App";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
import { getNews } from "../../util/apiCalls";

import Nav from "../../components/Nav/Nav";
import "./News.css";

export default function News() {
  const global = useContext(GlobalContext);
  const [input, setInput] = useState("");

  const articles = global?.state.articles ? global.state.articles : [];

  const addArticles = () => {
    if (!global?.state) return;

    getNews(global.state.nextPage).then((data) => {
      const { articles, totalResults } = data;
      global.dispatch({
        type: "ADD_ARTICLES",
        payload: { articles, totalResults },
      });
    });
  };

  const filteredArticles = articles.filter((article) => {
    if (!article.title) return false;

    return article.title
      .toLocaleLowerCase()
      .includes(input.toLocaleLowerCase());
  });

  return (
    <div className="news">
      <Nav input={input} setInput={setInput} />
      <NewsGrid articles={filteredArticles} />
      <button onClick={() => addArticles()}>Load More</button>
    </div>
  );
}
