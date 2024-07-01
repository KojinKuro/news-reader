import { createContext, useEffect, useReducer } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router";

import Missing from "../../pages/Missing/Missing";
import News from "../../pages/News/News";
import NewsDetail from "../../pages/NewsDetail/NewsDetail";
import { Action, GlobalContextValue, State } from "../../types/type";
import { getNews } from "../../util/apiCalls";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Header from "../Header/Header";
import "./App.css";

export const GlobalContext = createContext<GlobalContextValue | null>(null);

const initialState: State = {
  articles: [],
  nextPage: 1,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ARTICLES":
      if (Math.ceil(action.payload.totalResults / 100) <= state.nextPage)
        return state;
      return {
        ...state,
        nextPage: state.nextPage + 1,
        articles: [...state.articles, ...action.payload.articles],
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getNews(state.nextPage).then((data) => {
      const { articles, totalResults } = data;
      dispatch({
        type: "ADD_ARTICLES",
        payload: { articles, totalResults },
      });
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Header />
      <main>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/:id" element={<NewsDetail />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </GlobalContext.Provider>
  );
}

export default App;
