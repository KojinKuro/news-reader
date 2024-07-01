import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../components/App/App";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import "./NewsDetail.css";

export default function NewsDetail() {
  const global = useContext(GlobalContext);
  const { id } = useParams();

  if (!global)
    return <ErrorComponent error={Error("Context not loaded yet.")} />;

  const parsedId = parseInt(id ? id : "0");
  const articles = global.state.articles;
  if (articles.length < parsedId || isNaN(parsedId))
    return <ErrorComponent error={Error("Not a valid article ID.")} />;

  const article = articles[parsedId];
  return (
    <div className="news-detail">
      {article?.urlToImage && (
        <div className="image-container news-banner">
          <img src={article.urlToImage} />
        </div>
      )}

      <Link to="/">
        <button>Return home</button>
      </Link>

      <h1>{article?.title}</h1>

      <div>
        {article?.source.name && <div>{article.source.name}</div>}
        {article?.author && <div>by {article.author}</div>}
        {article?.publishedAt && <div>published at: {article.publishedAt}</div>}
      </div>

      {article?.content && <div>{article.content}</div>}

      {article?.url && (
        <Link to={article.url}>
          <button>See full article</button>
        </Link>
      )}
    </div>
  );
}
