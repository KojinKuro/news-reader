import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header>
      <div>
        <h1>👾 VIDEO GAME NEWS</h1>
        <p>Your premiere source for video game news</p>
      </div>
      {pathname !== "/" && (
        <Link to="/">
          <button>Return home</button>
        </Link>
      )}
    </header>
  );
}
