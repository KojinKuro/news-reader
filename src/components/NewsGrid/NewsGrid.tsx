import { useNavigate } from "react-router";
import { Article } from "../../types/type";
import "./NewsGrid.css";

export default function NewsGrid({ articles }: { articles: Article[] }) {
  const navigate = useNavigate();

  const articleElements = articles.map((article, index) => {
    return (
      <section
        key={index}
        className={`article-card`}
        onClick={() => {
          navigate(`/${index}`);
        }}
      >
        <div className="image-container">
          <img
            src={
              article.urlToImage ? article.urlToImage : "./missing_image.jpg"
            }
          />
        </div>
        <div>
          <h2>{article.title}</h2>
          <p>{article.publishedAt}</p>
          <p>{article.description}</p>
        </div>
      </section>
    );
  });

  return (
    <div className="news-grid-container">
      <div className="news-grid">{articleElements}</div>
    </div>
  );
}
