import { useContext } from "react";
import { Article } from "../../types/type";
import { GlobalContext } from "../App/App";
import "./News.css";

export default function News({ articles }: { articles: Article[] }) {
  const global = useContext(GlobalContext);

  const articleElements = articles.map((article, index) => {
    return (
      <div
        key={article.title}
        className={`article-card ${
          article === global?.state.curArticle ? "article-selected" : ""
        }`}
        onClick={() => {
          global?.dispatch({ type: "SET_CUR_ARTICLE", payload: index });
        }}
      >
        <div className="image-container">
          <img src={article.urlToImage ? article.urlToImage : ""} />
        </div>
        <div>
          <h1>{article.title}</h1>
          <div>{article.publishedAt}</div>
          <div>{article.description}</div>
        </div>
      </div>
    );
  });

  return <div className="news">{articleElements}</div>;
}
