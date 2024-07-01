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
    <>
      <label>
        <div>Search Bar</div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </label>
    </>
  );
}
