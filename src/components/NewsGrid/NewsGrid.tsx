import { useState } from "react";
import { useNavigate } from "react-router";
import { Article } from "../../types/type";
import Nav from "../Nav/Nav";
import "./NewsGrid.css";

export default function NewsGrid({ articles }: { articles: Article[] }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  console.log(articles);

  const filteredArticles = articles.filter((article) => {
    if (!article.title) return false;

    return article.title
      .toLocaleLowerCase()
      .includes(input.toLocaleLowerCase());
  });

  const articleElements = filteredArticles.map((article, index) => {
    return (
      <div
        key={index}
        className={`article-card`}
        onClick={() => {
          navigate(`/${index}`);
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

  return (
    <>
      <Nav input={input} setInput={setInput} />
      <div className="news">{articleElements}</div>
    </>
  );
}
