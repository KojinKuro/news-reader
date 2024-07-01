import { Dispatch, SetStateAction } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

export default function Nav({
  input,
  setInput,
}: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}) {
  return (
    <nav>
      <SearchBar input={input} setInput={setInput} />
    </nav>
  );
}
