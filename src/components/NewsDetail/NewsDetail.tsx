import { Link } from "react-router-dom";
import { Article } from "../../types/type";
import "./NewsDetail.css";

export default function NewsDetail({ article }: { article: Article }) {
  return (
    <div className="news-detail">
      <div className="image-container news-banner">
        <img src={article.urlToImage ? article.urlToImage : ""} />
      </div>
      <h1>{article.title}</h1>

      <div>
        {article.source.name && <div>{article.source.name}</div>}
        {article.author && <div>by {article.author}</div>}
        {article.publishedAt && <div>published at: {article.publishedAt}</div>}
      </div>

      <div>{article.content}</div>

      <Link to={article.url}>
        <button>See full article</button>
      </Link>
    </div>
  );
}
