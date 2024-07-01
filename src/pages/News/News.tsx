import { useContext } from "react";
import { GlobalContext } from "../../components/App/App";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
import { getNews } from "../../util/apiCalls";

export default function News() {
  const global = useContext(GlobalContext);

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

  return (
    <>
      <NewsGrid articles={articles} />
      <button onClick={() => addArticles()}>Load More</button>
    </>
  );
}
