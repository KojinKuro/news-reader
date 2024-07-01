import { Dispatch } from "react";

export type Article = {
  source: {
    id: number | string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
};

export type GlobalContextValue = {
  state: State;
  dispatch: Dispatch<Action>;
};

export type State = {
  articles: Article[];
  nextPage: number;
};

export type Action = {
  type: "ADD_ARTICLES";
  payload: { articles: Article[]; totalResults: number };
};

export type APIResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
