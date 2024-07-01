import { Dispatch, SetStateAction } from "react";
import "./SearchBar.css";

export default function SearchBar({
  input,
  setInput,
}: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}) {
  return (
    <label className="search-bar">
      <div>Article Filter</div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="ex: fortnite ..."
      />
    </label>
  );
}
