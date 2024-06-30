import { createContext, useReducer, useState } from "react";

import { mockArticles } from "../../data/mockArticles";
import { Action, GlobalContextValue, State } from "../../types/type";
import News from "../News/News";
import NewsDetail from "../NewsDetail/NewsDetail";
import "./App.css";

export const GlobalContext = createContext<GlobalContextValue | null>(null);

const initialState: State = {
  news: mockArticles,
  topics: [],
  curArticle: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOPIC":
      return { ...state, topics: [...state.topics, action.payload] };
    case "REMOVE_TOPIC":
      return { ...state, topics: state.topics.toSpliced(action.payload, 1) };
    case "SET_CUR_ARTICLE":
      if (state.curArticle === state.news.articles[action.payload]) {
        return { ...state, curArticle: null };
      } else {
        return { ...state, curArticle: state.news.articles[action.payload] };
      }
    default:
      return state;
  }
}

function App() {
  const [topicInput, setTopicInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const topicElements = state.topics.map((topic, index) => {
    return (
      <div key={index} className="topic-card">
        <div>{topic}</div>
        <button
          onClick={() => dispatch({ type: "REMOVE_TOPIC", payload: index })}
        >
          X
        </button>
      </div>
    );
  });

  // useEffect(() => {
  //   getNews().then(setNews);
  // }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <nav className="sidebar">
        <h1>NEWS READER</h1>
        <form>
          <label htmlFor="topic-add">Add topic</label>
          <div className="input-bar">
            <input
              type="text"
              id="topic-add"
              onChange={(e) => setTopicInput(e.target.value)}
              value={topicInput}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "ADD_TOPIC", payload: topicInput });
                setTopicInput("");
              }}
            >
              Add
            </button>
          </div>
        </form>
        <div>{topicElements}</div>
      </nav>
      <main className="news-display">
        <News articles={state.news.articles} />
        {state.curArticle && <NewsDetail article={state.curArticle} />}
      </main>
    </GlobalContext.Provider>
  );
}

export default App;
