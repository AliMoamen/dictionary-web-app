import "../styles/Search.scss";
import IMAGES from "./Images";

type PropsType = {
  font: string;
  word: string;
  empty: boolean;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (word: string) => Promise<void>;
};
const Search = ({ font, word, empty, setWord, handleSearch }: PropsType) => {
  return (
    <>
      <div>
        <div className="search-box">
          <input
            className="search text"
            style={
              empty
                ? { fontFamily: font, outlineColor: "#ff5252" }
                : { fontFamily: font }
            }
            autoFocus
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
              localStorage.setItem("word", e.target.value);
            }}
            onKeyDown={(e) => (e.key === "Enter" ? handleSearch(word) : null)}
            type="text"
            placeholder="Search any word"
          />

          <button onClick={() => handleSearch(word)}>
            <img src={IMAGES.icon_search} alt="" />
          </button>
        </div>
        {empty ? (
          <span style={{ marginTop: "10px" }} className="error-message">
            Whoops, can't be empty ...
          </span>
        ) : null}
      </div>
    </>
  );
};

export default Search;
