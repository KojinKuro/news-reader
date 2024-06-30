import { Dispatch } from "react";

export type Article = {
  source: {
    id: number | string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export type GlobalContextValue = {
  state: State;
  dispatch: Dispatch<Action>;
};

export type State = {
  news: {
    status: string;
    totalResults: number;
    articles: Article[];
  };
  topics: string[];
  curArticle: Article | null;
};

export type Action =
  | { type: "ADD_TOPIC"; payload: string }
  | { type: "REMOVE_TOPIC"; payload: number }
  | { type: "SET_CUR_ARTICLE"; payload: number };
